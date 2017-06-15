/*
* Tencent is pleased to support the open source community by making WeUI.js available.
* 
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
* 
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
* 
*       http://opensource.org/licenses/MIT
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

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
 * var confirmDom = weui.confirm('手动关闭的confirm', function(){
 *     return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
 * });
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
function confirm(content = '', yes = $.noop, no = $.noop, options) {
    if(typeof yes === 'object'){
        options = yes;
        yes = $.noop;
    }else if(typeof no === 'object'){
        options = no;
        no = $.noop;
    }

    options = $.extend({
        content: content,
        buttons: [{
            label: '取消',
            type: 'default',
            onClick: no
        }, {
            label: '确定',
            type: 'primary',
            onClick: yes
        }]
    }, options);

    return dialog(options);
}
export default confirm;
