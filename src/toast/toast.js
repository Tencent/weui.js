import $ from '../util/util';
import tpl from './toast.html';

let _sington;

/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 *
 * @example
 * weui.toast('操作成功', 3000);
 * weui.toast('操作成功', {
 *     duration: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 */
function toast(content = '', options = {}) {
    if(_sington) return _sington;

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

    let $toast = $($.render(tpl, options));
    $('body').append($toast);
    $toast.addClass('weui-animate-fade-in');

    setTimeout(() => {
        $toast
            .addClass('weui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $toast.remove();
                _sington = false;
                options.callback();
            });
    }, options.duration);

    _sington = $toast[0];
    return $toast[0];
}
export default toast;
