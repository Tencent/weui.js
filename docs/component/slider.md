<a name="slider"></a>

## slider(selector, [options])
slider slider滑块，单位是百分比。注意，因为需要获取slider的长度，所以必须要在slider可见的情况下来调用。

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>string</code> |  | slider的selector |
| [options] | <code>object</code> |  | 配置项 |
| [options.step] | <code>number</code> |  | slider的step，每次移动的百分比，取值范围 [0-100] |
| [options.defaultValue] | <code>number</code> | <code>0</code> | slider的默认百分比值，取值范围 [0-100] |
| [options.onChange] | <code>function</code> |  | slider发生改变时返回对应的百分比，取值范围 [0-100] |

**Example**  
```js
weui.slider('#sliderStep', {
    step: 10,
    defaultValue: 40,
    onChange: function(percent){
        console.log(percent);
    }
});
```
