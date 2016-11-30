<a name="tab"></a>

## tab(selector, [options])
tab tab导航栏

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>string</code> |  | tab的selector |
| [options] | <code>object</code> |  | 配置项 |
| [options.defaultIndex] | <code>number</code> | <code>0</code> | 初始展示的index |
| [options.onChange] | <code>function</code> |  | 点击tab时，返回对应的index |

**Example**  
```js
weui.tab('#tab',{
    defaultIndex: 0,
    onChange: function(index){
        console.log(index);
    }
});
```
