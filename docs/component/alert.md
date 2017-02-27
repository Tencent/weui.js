<a name="alert"></a>

## alert(content, [yes], [options])
alert 警告弹框，功能类似于浏览器自带的 alert 弹框，用于提醒、警告用户简单扼要的信息，只有一个“确认”按钮，点击“确认”按钮后关闭弹框。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | 弹窗内容 |
| [yes] | <code>function</code> | 点击确定按钮的回调 |
| [options] | <code>object</code> | 配置项 |
| [options.title] | <code>string</code> | 弹窗的标题 |
| [options.className] | <code>string</code> | 自定义类名 |
| [options.buttons] | <code>array</code> | 按钮配置项，详情参考dialog |

**Example**  
```js
weui.alert('普通的alert');
weui.alert('带回调的alert', function(){ console.log('ok') });
var alertDom = weui.alert('手动关闭的alert', function(){
    return false; // 不关闭弹窗，可用alertDom.hide()来手动关闭
});
weui.alert('自定义标题的alert', { title: '自定义标题' });
weui.alert('带回调的自定义标题的alert', function(){
   console.log('ok')
}, {
   title: '自定义标题'
});
weui.alert('自定义按钮的alert', {
    title: '自定义按钮的alert',
    buttons: [{
        label: 'OK',
        type: 'primary',
        onClick: function(){ console.log('ok') }
    }]
});
```
