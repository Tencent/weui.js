import $ from '../util/util';
import tpl from './gallery.html';

let _sington;

/**
 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
 * @param {string} url gallery显示的图片的url
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 * @param {function=} options.onDelete 点击删除图片时的回调
 *
 * @example
 * var gallery = weui.gallery(url, {
 *     className: 'custom-classname',
 *     onDelete: function(){
 *         if(confirm('确定删除该图片？')){ console.log('删除'); }
 *         gallery.hide();
 *     }
 * });
 */
function gallery(url, options = {}) {
    if(_sington) return _sington;

    options = $.extend({
        className: '',
        onDelete: $.noop
    }, options);

    const $gallery = $($.render(tpl, $.extend({
        url: url
    }, options)));

    function hide(){
        $gallery
            .addClass('weui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $gallery.remove();
                _sington = false;
            });
    }

    $('body').append($gallery);
    $gallery.find('.weui-gallery__img').on('click', hide);
    $gallery.find('.weui-gallery__del').on('click', function () {
        options.onDelete.call(this, url);
    });

    $gallery.show().addClass('weui-animate-fade-in');

    _sington = $gallery[0];
    _sington.hide = hide;
    return _sington;
}
export default gallery;
