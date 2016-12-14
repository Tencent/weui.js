import $ from '../util/util';
import tpl from './topTips.html';

let _toptips = null;

/**
 * toptips 顶部报错提示
 * @param {string} content 报错的文字
 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
 * @param {number=} [options.duration=3000] 多少毫秒后消失
 * @param {function=} options.callback 消失后的回调
 *
 * @example
 * weui.topTips('请填写正确的字段');
 * weui.topTips('请填写正确的字段', 3000);
 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
 * weui.topTips('请填写正确的字段', {
 *     duration: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 */
function topTips(content, options = {}) {
    if (typeof options === 'number') {
        options = {
            duration: options
        };
    }

    if (typeof options === 'function') {
        options = {
            callback: options
        };
    }

    options = $.extend({
        content: content,
        duration: 3000,
        callback: $.noop,
        className: ''
    }, options);

    const $topTips = $($.render(tpl, options));
    function hide(){
        $topTips.remove();
        options.callback();
        _toptips = null;
    }

    $('body').append($topTips);
    if(_toptips){
        clearTimeout(_toptips.timeout);
        _toptips.hide();
    }

    _toptips = {
        hide: hide
    };
    _toptips.timeout = setTimeout(hide, options.duration);

    $topTips[0].hide = hide;
    return $topTips[0];
}
export default topTips;
