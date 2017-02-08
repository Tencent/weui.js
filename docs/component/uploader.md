<a name="uploader"></a>

## uploader(selector, options)
uploader 上传组件

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>string</code> |  | 上传组件的selector |
| options | <code>object</code> |  | 配置项 |
| [options.url] | <code>string</code> |  | 上传的url，返回值需要使用json格式 |
| [options.auto] | <code>boolean</code> | <code>true</code> | 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example |
| [options.type] | <code>string</code> | <code>&quot;file&quot;</code> | 上传类型, `file`为文件上传; `base64`为以base64上传 |
| [options.fileVal] | <code>string</code> | <code>&quot;file&quot;</code> | 文件上传域的name |
| [options.compress] | <code>object</code> |  | 压缩配置, `false`则不压缩 |
| [options.compress.width] | <code>number</code> | <code>1600</code> | 图片的最大宽度 |
| [options.compress.height] | <code>number</code> | <code>1600</code> | 图片的最大高度 |
| [options.compress.quality] | <code>number</code> | <code>.8</code> | 压缩质量, 取值范围 0 ~ 1 |
| [options.onBeforeQueued] | <code>function</code> |  | 文件添加前的回调，return false则不添加 |
| [options.onQueued] | <code>function</code> |  | 文件添加成功的回调 |
| [options.onBeforeSend] | <code>function</code> |  | 文件上传前调用，具体参数看example |
| [options.onSuccess] | <code>function</code> |  | 上传成功的回调 |
| [options.onProgress] | <code>function</code> |  | 上传进度的回调 |
| [options.onError] | <code>function</code> |  | 上传失败的回调 |

**Example**  
```js
var uploadCount = 0;
weui.uploader('#uploader', {
   url: 'http://localhost:8081',
   auto: true,
   type: 'file',
   fileVal: 'fileVal',
   compress: {
       width: 1600,
       height: 1600,
       quality: .8
   },
   onBeforeQueued: function(files) {
       // `this` 是轮询到的文件, `files` 是所有文件

       if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
           weui.alert('请上传图片');
           return false; // 阻止文件添加
       }
       if(this.size > 10 * 1024 * 1024){
           weui.alert('请上传不超过10M的图片');
           return false;
       }
       if (files.length > 5) { // 防止一下子选择过多文件
           weui.alert('最多只能上传5张图片，请重新选择');
           return false;
       }
       if (uploadCount + 1 > 5) {
           weui.alert('最多只能上传5张图片');
           return false;
       }

       ++uploadCount;

       // return true; // 阻止默认行为，不插入预览图的框架
   },
   onQueued: function(){
       console.log(this);

       // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
       // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64

       // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
       // this.stop(); // 中断上传

       // return true; // 阻止默认行为，不显示预览图的图像
   },
   onBeforeSend: function(data, headers){
       console.log(this, data, headers);
       // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
       // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

       // return false; // 阻止文件上传
   },
   onProgress: function(procent){
       console.log(this, procent);
       // return true; // 阻止默认行为，不使用默认的进度显示
   },
   onSuccess: function (ret) {
       console.log(this, ret);
       // return true; // 阻止默认行为，不使用默认的成功态
   },
   onError: function(err){
       console.log(this, err);
       // return true; // 阻止默认行为，不使用默认的失败态
   }
});
```
