import $ from '../util/util';
import tpl from './loading.html';

const $body = $('body');
let _sington;

/**
 * loading
 * @param {string} content loading的文字
 *
 * @example
 * var loading = weui.loading('loading');
 * setTimeout(function () {
 *     loading.hide();
 * }, 3000);
 */
function loading(content = '') {
    if(_sington) return _sington;

    const $loading = $($.render(tpl, {content}));
    function hide() {
        $loading
            .addClass('weui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $loading.remove();
                _sington = false;
            });
    }
    $body.append($loading);
    $loading.addClass('weui-animate-fade-in');

    $loading.hide = hide;
    _sington = $loading;
    return $loading;
}
export default loading;
