import $ from '../util/util';

/**
 * tab tab导航栏
 * @param {string} selector tab的selector
 * @param {object=} options 配置项
 * @param {number=} [options.defaultIndex=0] 初始展示的index
 * @param {function=} options.onChange 点击tab时，返回对应的index
 *
 * @example
 * weui.tab('#tab',{
 *     defaultIndex: 0,
 *     onChange: function(index){
 *         console.log(index);
 *     }
 * });
 */
function tab(selector, options = {}) {
    const $eles = $(selector);
    options = $.extend({
        defaultIndex: 0,
        onChange: $.noop
    }, options);

    $eles.forEach((ele) => {
        const $tab = $(ele);
        const $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
        const $tabContents = $tab.find('.weui-tab__content');

        $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
        $tabContents.eq(options.defaultIndex).show();

        $tabItems.on('click', function () {
            const $this = $(this), index = $this.index();

            $tabItems.removeClass('weui-bar__item_on');
            $this.addClass('weui-bar__item_on');

            $tabContents.hide();
            $tabContents.eq(index).show();

            options.onChange.call(this, index);
        });
    });

    return this;
}
export default tab;
