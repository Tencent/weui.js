<a name="dialog"></a>

## dialog([options])
dialog，弹窗，alert和confirm的父类

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | 配置项 |
| [options.title] | <code>string</code> |  | 弹窗的标题 |
| [options.content] | <code>string</code> |  | 弹窗的内容 |
| [options.className] | <code>string</code> |  | 弹窗的自定义类名 |
| [options.buttons] | <code>array</code> |  | 按钮配置项 |
| [options.buttons[].label] | <code>string</code> | <code>&quot;确定&quot;</code> | 按钮的文字 |
| [options.buttons[].type] | <code>string</code> | <code>&quot;primary&quot;</code> | 按钮的类型 [primary, default] |
| [options.buttons[].onClick] | <code>function</code> | <code>$.noop</code> | 按钮的回调 |

**Example**  
```js
weui.dialog({
    title: 'dialog标题',
    content: 'dialog内容',
    className: 'custom-classname',
    buttons: [{
        label: '取消',
        type: 'default',
        onClick: function () { alert('取消') }
    }, {
        label: '确定',
        type: 'primary',
        onClick: function () { alert('确定') }
    }]
});

// 主动关闭
var $dialog = weui.dialog({...});
$dialog.hide(function(){
     console.log('`dialog` has been hidden');
});
```
