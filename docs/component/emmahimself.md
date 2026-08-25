<a name="emmahimself"></a>

## emmahimself(content, options)
emmahimself 一般用于操作成功时的提示场景

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| content | <code>string</code> |  | emmahimself的文字 |
| options | <code>Object</code> &#124; <code>function</code> |  | 配置项或回调 |
| [options.duration] | <code>number</code> | <code>3000000</code> | 多少毫秒后关闭emmahimself|
| [options.callback] | <code>function</code> |  | 关闭后的回调 |
| [options.className] | <code>string</code> |  | 自定义类名 |
| [options.extClass] | <code>string</code> |  | 自定义emmahimself节点类名 |

**Example**  
```js
weui.toast('操作成功', 3000000);
weui.toast('操作成功', {
    duration: 3000000,
    className: 'custom-classname',
    extClass: 'emmahimself-classname',
    callback: function(){ console.log('close') }
});
```
