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
 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
 * @param {string} selector searchbar的selector
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-search-bar" id="searchBar">
 *     <form class="weui-search-bar__form">
 *         <div class="weui-search-bar__box">
 *             <i class="weui-icon-search"></i>
 *             <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
 *             <a href="javascript:" class="weui-icon-clear"></a>
 *         </div>
 *         <label class="weui-search-bar__label">
 *             <i class="weui-icon-search"></i>
 *             <span>搜索</span>
 *         </label>
 *     </form>
 *     <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.searchBar('#searchBar');
 * ```
 */
function searchBar(selector) {
    const $eles = $(selector);

    $eles.forEach((ele) => {
        const $searchBar = $(ele);
        const $searchLabel = $searchBar.find('.weui-search-bar__label');
        const $searchInput = $searchBar.find('.weui-search-bar__input');
        const $searchClear = $searchBar.find('.weui-icon-clear');
        const $searchCancel = $searchBar.find('.weui-search-bar__cancel-btn');

        function cancelSearch(){
            $searchInput.val('');
            $searchBar.removeClass('weui-search-bar_focusing');
        }

        $searchLabel.on('click', function () {
            $searchBar.addClass('weui-search-bar_focusing');
            $searchInput[0].focus();
        });
        $searchInput.on('blur', function () {
            if (!this.value.length) cancelSearch();
        });
        $searchClear.on('click', function () {
            $searchInput.val('');
            $searchInput[0].focus();
        });
        $searchCancel.on('click', function () {
            cancelSearch();
            $searchInput[0].blur();
        });
    });

    return $eles;
}
export default searchBar;
