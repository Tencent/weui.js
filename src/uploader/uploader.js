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
import tplItem from './item.html';
import {compress} from './image';
import upload from './upload';

let _id = 0;

/**
 * uploader 上传组件
 * @param {string} selector 上传组件的selector
 * @param {object} options 配置项
 * @param {string} [options.url] 上传的url，返回值需要使用json格式
 * @param {boolean} [options.auto=true] 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example
 * @param {string} [options.type=file] 上传类型, `file`为文件上传; `base64`为以base64上传
 * @param {string=} [options.fileVal=file] 文件上传域的name
 * @param {object=} [options.compress] 压缩配置, `false`则不压缩
 * @param {number=} [options.compress.width=1600] 图片的最大宽度
 * @param {number=} [options.compress.height=1600] 图片的最大高度
 * @param {number=} [options.compress.quality=.8] 压缩质量, 取值范围 0 ~ 1
 * @param {function=} [options.onBeforeQueued] 文件添加前的回调，return false则不添加
 * @param {function=} [options.onQueued] 文件添加成功的回调
 * @param {function=} [options.onBeforeSend] 文件上传前调用，具体参数看example
 * @param {function=} [options.onSuccess] 上传成功的回调
 * @param {function=} [options.onProgress] 上传进度的回调
 * @param {function=} [options.onError] 上传失败的回调
 *
 * @example
 * #### html
 * ```html
 <div class="weui-cells weui-cells_form" id="uploader">
     <div class="weui-cell">
         <div class="weui-cell__bd">
             <div class="weui-uploader">
                 <div class="weui-uploader__hd">
                     <p class="weui-uploader__title">图片上传</p>
                     <div class="weui-uploader__info"><span id="uploadCount">0</span>/5</div>
                 </div>
                 <div class="weui-uploader__bd">
                     <ul class="weui-uploader__files" id="uploaderFiles"></ul>
                     <div class="weui-uploader__input-box">
                         <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 * ```
 *
 * #### js
 * ```javascript
 * var uploadCount = 0;
 * weui.uploader('#uploader', {
 *    url: 'http://localhost:8081',
 *    auto: true,
 *    type: 'file',
 *    fileVal: 'fileVal',
 *    compress: {
 *        width: 1600,
 *        height: 1600,
 *        quality: .8
 *    },
 *    onBeforeQueued: function(files) {
 *        // `this` 是轮询到的文件, `files` 是所有文件
 *
 *        if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
 *            weui.alert('请上传图片');
 *            return false; // 阻止文件添加
 *        }
 *        if(this.size > 10 * 1024 * 1024){
 *            weui.alert('请上传不超过10M的图片');
 *            return false;
 *        }
 *        if (files.length > 5) { // 防止一下子选择过多文件
 *            weui.alert('最多只能上传5张图片，请重新选择');
 *            return false;
 *        }
 *        if (uploadCount + 1 > 5) {
 *            weui.alert('最多只能上传5张图片');
 *            return false;
 *        }
 *
 *        ++uploadCount;
 *
 *        // return true; // 阻止默认行为，不插入预览图的框架
 *    },
 *    onQueued: function(){
 *        console.log(this);
 *
 *        // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
 *        // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64
 *
 *        // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
 *        // this.stop(); // 中断上传
 *
 *        // return true; // 阻止默认行为，不显示预览图的图像
 *    },
 *    onBeforeSend: function(data, headers){
 *        console.log(this, data, headers);
 *        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
 *        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部
 *
 *        // return false; // 阻止文件上传
 *    },
 *    onProgress: function(procent){
 *        console.log(this, procent);
 *        // return true; // 阻止默认行为，不使用默认的进度显示
 *    },
 *    onSuccess: function (ret) {
 *        console.log(this, ret);
 *        // return true; // 阻止默认行为，不使用默认的成功态
 *    },
 *    onError: function(err){
 *        console.log(this, err);
 *        // return true; // 阻止默认行为，不使用默认的失败态
 *    }
 * });
 * ```
 */
function uploader(selector, options) {
    const $uploader = $(selector);
    const URL = window.URL || window.webkitURL || window.mozURL;

    // 找到DOM里file-content，若无，则插入一个。
    function findFileCtn($uploader, id){
        const $file = $uploader.find('[data-id="' + id + '"]');
        let $fileCtn = $file.find('.weui-uploader__file-content');

        if(!$fileCtn.length){
            $fileCtn = $('<div class="weui-uploader__file-content"></div>');
            $file.append($fileCtn);
        }
        $file.addClass('weui-uploader__file_status');
        return $fileCtn;
    }

    // 清除DOM里的上传状态
    function clearFileStatus($uploader, id){
        const $file = $uploader.find('[data-id="' + id + '"]').removeClass('weui-uploader__file_status');
        $file.find('.weui-uploader__file-content').remove();
    }

    // 设置上传
    function setUploadFile(file) {
        file.url = URL.createObjectURL(file);
        file.status = 'ready';
        file.upload = function () {
            upload($.extend({
                $uploader: $uploader,
                file: file
            }, options));
        };
        file.stop = function(){
            this.xhr.abort();
        };

        options.onQueued(file);
        if(options.auto) file.upload();
    }

    options = $.extend({
        url: '',
        auto: true,
        type: 'file',
        fileVal: 'file',
        xhrFields: {},
        onBeforeQueued: $.noop,
        onQueued: $.noop,
        onBeforeSend: $.noop,
        onSuccess: $.noop,
        onProgress: $.noop,
        onError: $.noop
    }, options);

    if(options.compress !== false){
        options.compress = $.extend({
            width: 1600,
            height: 1600,
            quality: .8
        }, options.compress);
    }

    if(options.onBeforeQueued){
        const onBeforeQueued = options.onBeforeQueued;
        options.onBeforeQueued = function(file, files){
            const ret = onBeforeQueued.call(file, files);
            if(ret === false){
                return false;
            }
            if(ret === true){
                return;
            }

            const $item = $($.render(tplItem, {
                id: file.id
            }));
            $uploader.find('.weui-uploader__files').append($item);
        };
    }
    if(options.onQueued){
        const onQueued = options.onQueued;
        options.onQueued = function(file){
            if(!onQueued.call(file)){
                const $file = $uploader.find('[data-id="' + file.id + '"]');
                $file.css({
                    backgroundImage: 'url("' + (file.base64 || file.url) + '")'
                });
                if(!options.auto) {
                    clearFileStatus($uploader, file.id);
                }
            }
        };
    }
    if(options.onBeforeSend){
        const onBeforeSend = options.onBeforeSend;
        options.onBeforeSend = function(file, data, headers){
            const ret = onBeforeSend.call(file, data, headers);
            if(ret === false){
                return false;
            }
        };
    }
    if(options.onSuccess){
        const onSuccess = options.onSuccess;
        options.onSuccess = function(file, ret){
            file.status = 'success';
            if(!onSuccess.call(file, ret)){
                clearFileStatus($uploader, file.id);
            }
        };
    }
    if(options.onProgress){
        const onProgress = options.onProgress;
        options.onProgress = function(file, percent){
            if(!onProgress.call(file, percent)){
                findFileCtn($uploader, file.id).html(percent + '%');
            }
        };
    }
    if(options.onError){
        const onError = options.onError;
        options.onError = function(file, err){
            file.status = 'fail';
            if(!onError.call(file, err)){
                findFileCtn($uploader, file.id).html('<i class="weui-icon-warn"></i>');
            }
        };
    }

    $uploader.find('input[type="file"]').on('change', function (evt) {
        const files = evt.target.files;

        if (files.length === 0) {
            return;
        }

        if(options.compress === false && options.type == 'file'){
            // 以原文件方式上传
            Array.prototype.forEach.call(files, (file) => {
                file.id = ++_id;

                if(options.onBeforeQueued(file, files) === false) return;

                setUploadFile(file);
            });
        }else{
            // base64上传 和 压缩上传
            Array.prototype.forEach.call(files, (file) => {
                file.id = ++_id;

                if(options.onBeforeQueued(file, files) === false) return;

                compress(file, options, function(blob){
                    if(blob) setUploadFile(blob);
                });
            });
        }

        this.value = '';
    });
}
export default uploader;
