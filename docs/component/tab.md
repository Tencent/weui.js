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
#### html
```html
<div class="weui-tab" id="tab">
    <div class="weui-navbar">
        <div class="weui-navbar__item">反馈</div>
        <div class="weui-navbar__item">表单</div>
        <div class="weui-navbar__item">上传</div>
        <div class="weui-navbar__item">其它</div>
    </div>
    <div class="weui-tab__panel">
        <div class="weui-tab__content">反馈页</div>
        <div class="weui-tab__content">表单页</div>
        <div class="weui-tab__content">上传页</div>
        <div class="weui-tab__content">其它页</div>
    </div>
</div>
```

#### js
```javascript
weui.tab('#tab',{
    defaultIndex: 0,
    onChange: function(index){
        console.log(index);
    }
});
```
