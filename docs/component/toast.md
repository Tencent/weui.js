<a name="toast"></a>

## toast(content, options)
toast 一般用于操作成功时的提示场景

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| content | <code>string</code> |  | toast的文字 |
| options | <code>Object</code> &#124; <code>function</code> |  | 配置项或回调 |
| [options.duration] | <code>number</code> | <code>3000</code> | 多少毫秒后关闭toast |
| [options.callback] | <code>function</code> |  | 关闭后的回调 |
| [options.className] | <code>string</code> |  | 自定义类名 |

**Example**  
```js
weui.toast('操作成功', 3000);
weui.toast('操作成功', {
    duration: 3000,
    className: 'custom-classname',
    callback: function(){ console.log('close') }
});
```
