<a name="gallery"></a>

## gallery(url, [options])
gallery 带删除按钮的图片预览，主要是配合图片上传使用

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | gallery显示的图片的url |
| [options] | <code>object</code> | 配置项 |
| [options.className] | <code>string</code> | 自定义类名 |
| [options.onDelete] | <code>function</code> | 点击删除图片时的回调 |

**Example**  
```js
var gallery = weui.gallery(url, {
    className: 'custom-classname',
    onDelete: function(){
        if(confirm('确定删除该图片？')){ console.log('删除'); }
        gallery.hide(function() {
             console.log('`gallery` has been hidden');
         });
    }
});
```
