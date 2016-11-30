import $ from '../util/util';
import tpl from './toast.html';

const $body = $('body');
let _sington;

/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 *
 * @example
 * weui.toast('操作成功', 3000);
 * weui.toast('操作成功', {
 *     duration: 3000,
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
        duration: 3000,
        callback: $.noop
    }, options);


    let $toast = $($.render(tpl, {content}));
    $body.append($toast);
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

    _sington = $toast;
    return $toast;
}
export default toast;
