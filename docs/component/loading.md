<a name="loading"></a>

## loading(content, [options])
loading

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | loading的文字 |
| [options] | <code>object</code> | 配置项 |
| [options.className] | <code>string</code> | 自定义类名 |

**Example**  
```js
var loading = weui.loading('loading', {
    className: 'custom-classname'
});
setTimeout(function () {
    loading.hide(function() {
         console.log('`loading` has been hidden');
     });
}, 3000);
```
