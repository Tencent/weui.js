import $ from '../util/util';
import dialog from '../dialog/dialog';

/**
 * 确认弹窗
 * @param {string} content 弹窗内容
 * @param {function=} yes 点击确定按钮的回调
 * @param {function=} no  点击取消按钮的回调
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.className 自定义类名
 * @param {array=} options.buttons 按钮配置项，详情参考dialog
 *
 * @example
 * weui.confirm('普通的confirm');
 * weui.confirm('自定义标题的confirm', { title: '自定义标题' });
 * weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
 * weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
 *     title: '自定义标题'
 * });
 * weui.confirm('自定义按钮的confirm', {
 *     title: '自定义按钮的confirm',
 *     buttons: [{
 *         label: 'NO',
 *         type: 'default',
 *         onClick: function(){ console.log('no') }
 *     }, {
 *         label: 'YES',
 *         type: 'primary',
 *         onClick: function(){ console.log('yes') }
 *     }]
 * });
 */
function confirm(content = '', yes, no, options) {
    const type = typeof yes === 'object';
    if (type) {
        options = yes;
    }

    options = $.extend({
        content: content,
        buttons: [{
            label: '取消',
            type: 'default',
            onClick: type ? $.noop : no
        }, {
            label: '确定',
            type: 'primary',
            onClick: type ? $.noop : yes
        }]
    }, options);

    return dialog(options);
}
export default confirm;
