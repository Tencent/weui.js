import $ from '../util/util';
import tpl from './loading.html';

let _sington;

/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 *
 * @example
 * var loading = weui.loading('loading', {
 *     className: 'custom-classname'
 * });
 * setTimeout(function () {
 *     loading.hide();
 * }, 3000);
 */
function loading(content = '', options = {}) {
    if(_sington) return _sington;

    options = $.extend({
        content: content,
        className: ''
    }, options);

    const $loading = $($.render(tpl, options));
    function hide() {
        $loading
            .addClass('weui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $loading.remove();
                _sington = false;
            });
    }
    $('body').append($loading);
    $loading.addClass('weui-animate-fade-in');

    _sington = $loading[0];
    _sington.hide = hide;
    return _sington;
}
export default loading;
