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

/**
 * tab tab导航栏
 * @param {string} selector tab的selector
 * @param {object=} options 配置项
 * @param {number=} [options.defaultIndex=0] 初始展示的index
 * @param {function=} options.onChange 点击tab时，返回对应的index
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-tab" id="tab">
 *     <div class="weui-navbar">
 *         <div class="weui-navbar__item">反馈</div>
 *         <div class="weui-navbar__item">表单</div>
 *         <div class="weui-navbar__item">上传</div>
 *         <div class="weui-navbar__item">其它</div>
 *     </div>
 *     <div class="weui-tab__panel">
 *         <div class="weui-tab__content">反馈页</div>
 *         <div class="weui-tab__content">表单页</div>
 *         <div class="weui-tab__content">上传页</div>
 *         <div class="weui-tab__content">其它页</div>
 *     </div>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.tab('#tab',{
 *     defaultIndex: 0,
 *     onChange: function(index){
 *         console.log(index);
 *     }
 * });
 * ```
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
