<a name="actionSheet"></a>

## actionSheet(menus, actions)
actionsheet

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| menus | <code>array</code> | 上层的选项 |
| menus[].label | <code>string</code> | 选项的文字 |
| menus[].onClick | <code>function</code> | 选项点击时的回调 |
| actions | <code>array</code> | 下层的选项 |
| actions[].label | <code>string</code> | 选项的文字 |
| actions[].onClick | <code>function</code> | 选项点击时的回调 |

**Example**  
```js
weui.actionSheet([
    {
        label: '拍照',
        onClick: function () {
            console.log('拍照');
        }
    }, {
        label: '从相册选择',
        onClick: function () {
            console.log('从相册选择');
        }
    }, {
        label: '其他',
        onClick: function () {
            console.log('其他');
        }
    }
], [
    {
        label: '取消',
        onClick: function () {
            console.log('取消');
        }
    }
]);
```
