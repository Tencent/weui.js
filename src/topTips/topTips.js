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
import tpl from './topTips.html';

let _toptips = null;

/**
 * toptips 顶部报错提示
 * @param {string} content 报错的文字
 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
 * @param {number=} [options.duration=3000] 多少毫秒后消失
 * @param {string=} options.className 自定义类名
 * @param {function=} options.callback 消失后的回调
 *
 * @example
 * weui.topTips('请填写正确的字段');
 * weui.topTips('请填写正确的字段', 3000);
 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
 * weui.topTips('请填写正确的字段', {
 *     duration: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 * 
 * // 主动关闭
 * var $topTips = weui.topTips('请填写正确的字段');
 * $topTips.hide(function() {
 *      console.log('`topTips` has been hidden');
 * });
 */
function topTips(content, options = {}) {
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

    const $topTips = $($.render(tpl, options));
    function _hide(callback){
        _hide = $.noop; // 防止二次调用导致报错

        $topTips.remove();
        callback && callback();
        options.callback();
        _toptips = null;
    }
    function hide(callback){ _hide(callback); }

    $('body').append($topTips);
    if(_toptips){
        clearTimeout(_toptips.timeout);
        _toptips.hide();
    }

    _toptips = {
        hide: hide
    };
    _toptips.timeout = setTimeout(hide, options.duration);

    $topTips[0].hide = hide;
    return $topTips[0];
}
export default topTips;
