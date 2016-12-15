import $ from '../util/util';

/**
 * slider slider滑块，单位是百分比。注意，因为需要获取slider的长度，所以必须要在slider可见的情况下来调用。
 * @param {string} selector slider的selector
 * @param {object=} options 配置项
 * @param {number=} options.step slider的step，每次移动的百分比，取值范围 [0-100]
 * @param {number=} [options.defaultValue=0] slider的默认百分比值，取值范围 [0-100]
 * @param {function=} options.onChange slider发生改变时返回对应的百分比，取值范围 [0-100]
 *
 * @example
 * weui.slider('#sliderStep', {
 *     step: 10,
 *     defaultValue: 40,
 *     onChange: function(percent){
 *         console.log(percent);
 *     }
 * });
 */
function slider(selector, options = {}) {
    const $eles = $(selector);
    options = $.extend({
        step: undefined,
        defaultValue: 0,
        onChange: $.noop
    }, options);

    if(options.step !== undefined){
        options.step = parseFloat(options.step);
        if(!options.step || options.step < 0){
            throw new Error('Slider step must be a positive number.');
        }
    }
    if(options.defaultValue !== undefined && options.defaultValue < 0 || options.defaultValue > 100 ){
        throw new Error('Slider defaultValue must be >= 0 and <= 100.');
    }

    $eles.forEach((ele) => {
        const $slider = $(ele);
        const $sliderInner = $slider.find('.weui-slider__inner');
        const $sliderTrack = $slider.find('.weui-slider__track');
        const $sliderHandler = $slider.find('.weui-slider__handler');

        const sliderLength = parseInt($.getStyle($sliderInner[0], 'width')); // slider的长度
        const sliderLeft = $sliderInner[0].offsetLeft; // slider相对于页面的offset
        let handlerStartPos = 0; // handler起始位置
        let handlerStartX = 0; // handler touchstart的X
        let stepWidth; // 每个step的宽度

        function getHandlerPos(){
            let pos = $.getStyle($sliderHandler[0], 'left');

            if(/%/.test(pos)){
                pos = sliderLength * parseFloat(pos) / 100;
            }else{
                pos = parseFloat(pos);
            }
            return pos;
        }
        function setHandler(distance){
            let dist, // handler的目标位置
                percent; // 所在位置的百分比

            if(options.step){
                distance = Math.round(distance / stepWidth) * stepWidth;
            }

            dist = handlerStartPos + distance;
            dist = dist < 0 ? 0 : dist > sliderLength ? sliderLength : dist;

            percent =  100 * dist / sliderLength;

            $sliderTrack.css({ width: percent + '%'});
            $sliderHandler.css({ left: percent + '%'});
            options.onChange.call(ele, percent);
        }


        if(options.step){
            stepWidth = sliderLength * options.step / 100;
        }
        if(options.defaultValue){
            setHandler(sliderLength * options.defaultValue / 100);
        }

        $slider
            .on('click', function(evt){
                evt.preventDefault();

                handlerStartPos = getHandlerPos();
                setHandler(evt.pageX - sliderLeft - handlerStartPos);
            });
        $sliderHandler
            .on('touchstart', function(evt){
                handlerStartPos = getHandlerPos();
                handlerStartX = evt.changedTouches[0].clientX;
            })
            .on('touchmove', function(evt){
                evt.preventDefault();

                setHandler(evt.changedTouches[0].clientX - handlerStartX);
            });
    });

    return this;
}
export default slider;
