## Functions

<dl>
<dt><a href="#validate">validate(selector, callback, [options])</a></dt>
<dd><p>表单校验</p>
</dd>
<dt><a href="#checkIfBlur">checkIfBlur(selector, [options])</a></dt>
<dd><p>checkIfBlur 当表单的input失去焦点时校验</p>
</dd>
</dl>

<a name="validate"></a>

## validate(selector, callback, [options])
表单校验

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | 表单的selector |
| callback | <code>function</code> | 校验后的回调 |
| [options] | <code>Object</code> | 配置项 |
| [options.regexp] | <code>object</code> | 表单所需的正则表达式 |

**Example**  
##### 普通input的HTML
```html
<input type="tel" required pattern="[0-9]{11}" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
<input type="text" required pattern="REG_IDNUM" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
```
- required 表示需要校验
- pattern 表示校验的正则，不填则进行为空校验。当以REG_开头时，则获取校验时传入的正则。如`pattern="REG_IDNUM"`，则需要在调用相应方法时传入`{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`，详情请看下面`checkIfBlur`和`validate`
- 报错的wording会从 emptyTips | notMatchTips | tips | placeholder 里获得
<br>

##### radio
radio需要检验，只需把参数写在同一表单下，同name的第一个元素即可。
```html
<input type="radio" value="male" name="sex" required tips="请选择性别" />
<input type="radio" value="female" name="sex" />
```
<br>

##### checkbox
checkbox需要校验，只需把参数写在同一表单下，同name的第一个元素即可。
pattern 规定选择个数，用法与正则一致，例如：
```html
<input type="checkbox" name="assistance" value="黄药师" required pattern="{1,2}" tips="请勾选1-2个敲码助手" />
<input type="checkbox" name="assistance" value="欧阳锋" />
<input type="checkbox" name="assistance" value="段智兴" />
<input type="checkbox" name="assistance" value="洪七公" />
```
- {1,}   至少选择1个
- {1,2}  选择1-2个
- 这里不会出现{0,}这种情况，因为有required就表示必选。否则直接去掉required即可。
<br>

``` js
// weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
weui.form.validate('#form', function (error) {
    if (!error) {
        var loading = weui.loading('提交中...');
        setTimeout(function () {
            loading.hide();
            weui.toast('提交成功', 3000);
        }, 1500);
    }
    // return true; // 当return true时，不会显示错误
}, {
    regexp: {
        IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
        VCODE: /^.{4}$/
    }
});
```
<a name="checkIfBlur"></a>

## checkIfBlur(selector, [options])
checkIfBlur 当表单的input失去焦点时校验

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | 表单的selector |
| [options] | <code>Object</code> | 配置项 |
| [options.regexp] | <code>object</code> | 表单所需的正则表达式 |

**Example**  
```js
weui.form.checkIfBlur('#form', {
    regexp: {
        IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
        VCODE: /^.{4}$/
    }
});
```
