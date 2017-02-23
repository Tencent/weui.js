import $ from '../util/util';

/**
 * set transition
 * @param $target
 * @param time
 */
const setTransition = ($target, time) => {
    return $target.css({
        '-webkit-transition': `all ${time}s`,
        'transition': `all ${time}s`
    });
};


/**
 * set translate
 */
const setTranslate = ($target, diff) => {
    return $target.css({
        '-webkit-transform': `translate3d(0, ${diff}px, 0)`,
        'transform': `translate3d(0, ${diff}px, 0)`
    });
};

/**
 * @desc get index of middle item
 * @param items
 * @returns {number}
 */
const getDefaultIndex = (items) => {
    let current = Math.floor(items.length / 2);
    let count = 0;
    while (!!items[current] && items[current].disabled) {
        current = ++current % items.length;
        count++;

        if (count > items.length) {
            throw new Error('No selectable item.');
        }
    }

    return current;
};

const getDefaultTranslate = (offset, rowHeight, items) => {
    const currentIndex = getDefaultIndex(items);

    return (offset - currentIndex) * rowHeight;
};

/**
 * get max translate
 * @param offset
 * @param rowHeight
 * @returns {number}
 */
const getMax = (offset, rowHeight) => {
    return offset * rowHeight;
};

/**
 * get min translate
 * @param offset
 * @param rowHeight
 * @param length
 * @returns {number}
 */
const getMin = (offset, rowHeight, length) => {
    return -(rowHeight * (length - offset - 1));
};

$.fn.scroll = function (options) {
    const defaults = $.extend({
        items: [],                                  // 数据
        scrollable: '.weui-picker__content',        // 滚动的元素
        offset: 3,                                  // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
        rowHeight: 34,                              // 列表每一行的高度
        onChange: $.noop,                           // onChange回调
        temp: null,                                 // translate的缓存
        bodyHeight: 7 * 34                          // picker的高度，用于辅助点击滚动的计算
    }, options);
    const items = defaults.items.map((item) => {
        return `<div class="weui-picker__item${item.disabled ? ' weui-picker__item_disabled' : ''}">${item.label}</div>`;
    }).join('');
    const $this = $(this);

    $this.find('.weui-picker__content').html(items);

    let $scrollable = $this.find(defaults.scrollable);        // 可滚动的元素
    let start;                                                  // 保存开始按下的位置
    let end;                                                    // 保存结束时的位置
    let startTime;                                              // 开始触摸的时间
    let translate;                                              // 缓存 translate
    const points = [];                                          // 记录移动点
    const windowHeight = window.innerHeight;                    // 屏幕的高度

    // 首次触发选中事件
    // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
    if(defaults.temp !== null && defaults.temp < defaults.items.length) {
        const index = defaults.temp;
        defaults.onChange.call(this, defaults.items[index], index);
        translate = (defaults.offset - index) * defaults.rowHeight;
    }else{
        const index = getDefaultIndex(defaults.items);
        defaults.onChange.call(this, defaults.items[index], index);
        translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
    }
    setTranslate($scrollable, translate);

    const stop = (diff) => {
        translate += diff;

        // 移动到最接近的那一行
        translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
        const max = getMax(defaults.offset, defaults.rowHeight);
        const min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length);
        // 不要超过最大值或者最小值
        if (translate > max) {
            translate = max;
        }
        if (translate < min) {
            translate = min;
        }

        // 如果是 disabled 的就跳过
        let index = defaults.offset - translate / defaults.rowHeight;
        while (!!defaults.items[index] && defaults.items[index].disabled) {
            diff > 0 ? ++index : --index;
        }
        translate = (defaults.offset - index) * defaults.rowHeight;
        setTransition($scrollable, .3);
        setTranslate($scrollable, translate);

        // 触发选择事件
        defaults.onChange.call(this, defaults.items[index], index);
    };

    function _start(pageY){
        start = pageY;
        startTime = +new Date();
    }
    function _move(pageY){
        end = pageY;
        const diff = end - start;

        setTransition($scrollable, 0);
        setTranslate($scrollable, (translate + diff));
        startTime = +new Date();
        points.push({time: startTime, y: end});
        if (points.length > 40) {
            points.shift();
        }
    }
    function _end(pageY){
        if(!start) return;

        /**
         * 思路:
         * 0. touchstart 记录按下的点和时间
         * 1. touchmove 移动时记录前 40个经过的点和时间
         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
         */
        const endTime = new Date().getTime();
        const relativeY = windowHeight - (defaults.bodyHeight / 2);
        end = pageY;

        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
        if (endTime - startTime > 100) {
            //如果end和start相差小于10，则视为
            if (Math.abs(end - start) > 10) {
                stop(end - start);
            } else {
                stop(relativeY - end);
            }
        } else {
            if (Math.abs(end - start) > 10) {
                const endPos = points.length - 1;
                let startPos = endPos;
                for (let i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
                    startPos = i;
                }

                if (startPos !== endPos) {
                    const ep = points[endPos];
                    const sp = points[startPos];
                    const t = ep.time - sp.time;
                    const s = ep.y - sp.y;
                    const v = s / t; // 出手时的速度
                    const diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”
                    stop(diff);
                }
                else {
                    stop(0);
                }
            } else {
                stop(relativeY - end);
            }
        }

        start = null;
    }

    /**
     * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
     */
    $scrollable = $this
        .offAll()
        .on('touchstart', function (evt) {
            _start(evt.changedTouches[0].pageY);
        })
        .on('touchmove', function (evt) {
            _move(evt.changedTouches[0].pageY);
            evt.preventDefault();
        })
        .on('touchend', function (evt) {
            _end(evt.changedTouches[0].pageY);
        })
        .find(defaults.scrollable);

    // 判断是否支持touch事件 https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
    const isSupportTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch;
    if(!isSupportTouch){
        $this
            .on('mousedown', function(evt){
                _start(evt.pageY);
                evt.stopPropagation();
                evt.preventDefault();
            })
            .on('mousemove', function(evt){
                if(!start) return;

                _move(evt.pageY);
                evt.stopPropagation();
                evt.preventDefault();
            })
            .on('mouseup mouseleave', function(evt){
                _end(evt.pageY);
                evt.stopPropagation();
                evt.preventDefault();
            });

    }
};
