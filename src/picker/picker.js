import $ from '../util/util';
import './scroll';
import * as util from './util';
import pickerTpl from './picker.html';
import groupTpl from './group.html';

let _sington;

const destroy = ($picker) => {
    if ($picker) {
        $picker.remove();
        _sington = false;
    }
};

const show = ($picker) => {
    $('body').append($picker);

    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
    $.getStyle($picker[0], 'transform');

    $picker.find('.weui-mask').addClass('weui-animate-fade-in');
    $picker.find('.weui-picker').addClass('weui-animate-slide-up');
};

const hide = ($picker) => {
    $picker.find('.weui-mask').addClass('weui-animate-fade-out');
    $picker.find('.weui-picker')
        .addClass('weui-animate-slide-down')
        .on('animationend webkitAnimationEnd', function () {
            destroy($picker);
        });
};

// temp 存在上一次滑动的位置
let temp = {};

/**
 * picker 多列选择器。
 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
 * @param {Object} options 配置项
 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
 * @param {string=} [options.id=default] 作为picker的唯一标识
 * @param {string=} [options.className] 自定义类名
 * @param {array=} [options.defaultValue] 默认选项的value数组
 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
 *
 * @example
 * // 单列picker
 * weui.picker([
 * {
 *     label: '飞机票',
 *     value: 0,
 *     disabled: true // 不可用
 * },
 * {
 *     label: '火车票',
 *     value: 1
 * },
 * {
 *     label: '汽车票',
 *     value: 3
 * },
 * {
 *     label: '公车票',
 *     value: 4,
 * }
 * ], {
 *    className: 'custom-classname',
 *    defaultValue: [3],
 *    onChange: function (result) {
 *        console.log(result)
 *    },
 *    onConfirm: function (result) {
 *        console.log(result)
 *    },
 *    id: 'singleLinePicker'
 * });
 *
 * @example
 * // 多列picker
 * weui.picker([
 *     {
 *         label: '1',
 *         value: '1'
 *     }, {
 *         label: '2',
 *         value: '2'
 *     }, {
 *         label: '3',
 *         value: '3'
 *     }
 * ], [
 *     {
 *         label: 'A',
 *         value: 'A'
 *     }, {
 *         label: 'B',
 *         value: 'B'
 *     }, {
 *         label: 'C',
 *         value: 'C'
 *     }
 * ], {
 *     defaultValue: ['3', 'A'],
 *     onChange: function (result) {
 *         console.log(result);
 *     },
 *     onConfirm: function (result) {
 *         console.log(result);
 *     },
 *     id: 'multiPickerBtn'
 * });
 *
 * @example
 * // 级联picker
 * weui.picker([
 * {
 *     label: '飞机票',
 *     value: 0,
 *     children: [
 *         {
 *             label: '经济舱',
 *             value: 1
 *         },
 *         {
 *             label: '商务舱',
 *             value: 2
 *         }
 *     ]
 * },
 * {
 *     label: '火车票',
 *     value: 1,
 *     children: [
 *         {
 *             label: '卧铺',
 *             value: 1,
 *             disabled: true // 不可用
 *         },
 *         {
 *             label: '坐票',
 *             value: 2
 *         },
 *         {
 *             label: '站票',
 *             value: 3
 *         }
 *     ]
 * },
 * {
 *     label: '汽车票',
 *     value: 3,
 *     children: [
 *         {
 *             label: '快班',
 *             value: 1
 *         },
 *         {
 *             label: '普通',
 *             value: 2
 *         }
 *     ]
 * }
 * ], {
 *    className: 'custom-classname',
 *    defaultValue: [1, 3],
 *    onChange: function (result) {
 *        console.log(result)
 *    },
 *    onConfirm: function (result) {
 *        console.log(result)
 *    },
 *    id: 'doubleLinePicker'
 * });
 */
function picker() {
    if(_sington) return _sington;

    let isMulti = false; // 是否多列的类型

    // 数据
    let items;
    if(arguments.length > 2){
        let i = 0;
        items = [];
        while(i < arguments.length - 1){
            items.push(arguments[i++]);
        }
        isMulti = true;
    }else{
        items = arguments[0];
    }


    // 配置项
    const options = arguments[arguments.length - 1];
    const defaults = $.extend({
        id: 'default',
        className: '',
        onChange: $.noop,
        onConfirm: $.noop
    }, options);

    // 获取缓存
    temp[defaults.id] = temp[defaults.id] || [];
    const result  = [];
    const lineTemp = temp[defaults.id];
    const $picker = $($.render(pickerTpl, defaults));
    let depth = options.depth || (isMulti ? items.length : util.depthOf(items[0])), groups = '';

    while(depth--){
        groups += groupTpl;
    }

    $picker.find('.weui-picker__bd').html(groups);
    show($picker);

    // 初始化滚动
    function scroll(items, level) {
        if(lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined){
            // 没有缓存选项，而且存在defaultValue
            const defaultVal = defaults.defaultValue[level];
            let index = 0, len = items.length;

            for (; index < len; ++index) {
                if(defaultVal == items[index].value) break;
            }
            if(index < len){
                lineTemp[level] = index;
            }else{
                console.warn('Picker has not match defaultValue: ' + defaultVal);
            }
        }
        $picker.find('.weui-picker__group').eq(level).scroll({
            items: items,
            temp: lineTemp[level],
            onChange: function (item, index) {
                //为当前的result赋值。
                if(item){
                    result[level] = item.value;
                }else{
                    result[level] = null;
                }
                lineTemp[level] = index;

                if(isMulti){
                    defaults.onChange(result);
                }else{
                    /**
                     * @子列表处理
                     * 1. 在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
                     * 2. 滑动之后发现重新有子列表时，再次显示子列表。
                     *
                     * @回调处理
                     * 1. 因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
                     * 2. 所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
                     */
                    if (item.children && item.children.length > 0) {
                        $picker.find('.weui-picker__group').eq(level + 1).show();
                        !isMulti && scroll(item.children, level + 1); // 不是多列的情况下才继续处理children
                    } else {
                        //如果子列表test不通过，子孙列表都隐藏。
                        const $items = $picker.find('.weui-picker__group');
                        $items.forEach((ele, index) => {
                            if(index > level){
                                $(ele).hide();
                            }
                        });

                        result.splice(level + 1);

                        defaults.onChange(result);
                    }
                }
            },
            onConfirm: defaults.onConfirm
        });
    }
    if(isMulti){
        items.forEach((item, index) => {
            scroll(item, index);
        });
    }else{
        scroll(items, 0);
    }

    $picker.on('click', '.weui-mask', function () {
        hide($picker);
    }).on('click', '.weui-picker__action', function () {
        hide($picker);
    }).on('click', '#weui-picker-confirm', function () {
        defaults.onConfirm(result);
    });

    _sington = $picker[0];
    _sington.hide = () => {
        hide($picker);
    };
    return _sington;
}

/**
 * dataPicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
 * @param options 配置项
 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
 * @param {number=} [options.start=2000] 起始年份
 * @param {number=} [options.end=2030] 结束年份
 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
 *
 *@example
 * weui.datePicker({
 *     start: 2010,
 *     end: 2016,
 *     onChange: function(result){
 *         console.log(result);
 *     },
 *     onConfirm: function(result){
 *         console.log(result);
 *     },
 *     id: 'datePicker'
 * });
 */
function datePicker(options) {
    const defaults = $.extend({
        id: 'datePicker',
        onChange: $.noop,
        onConfirm: $.noop,
        start: 2000,
        end: 2030
    }, options);

    const date = [];
    const daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];           //所有月份的天数
    for (let i = defaults.start; i <= defaults.end; i++) {
        const months = [];
        if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {                     //判定为闰年
            daysTotal[1] = 29;
        } else {
            daysTotal[1] = 28;
        }
        for (let j = 0; j < 12; j++) {
            const dates = [];
            for (let k = 1; k < daysTotal[j] + 1; k++) {
                const date = {
                    label: k + '日',
                    value: k
                };
                dates.push(date);
            }
            months.push({
                label: j + 1 + '月',
                value: j + 1,
                children: dates,
            });
        }

        const year = {
            label: i + '年',
            value: i,
            children: months
        };

        date.push(year);
    }

    return picker(date, defaults);
}

export default {
    picker,
    datePicker
};
