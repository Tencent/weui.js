import $ from '../util/util';
import topTips from '../topTips/topTips';

function _findCellParent(ele){
    if(!ele || !ele.classList) return null;
    if(ele.classList.contains('weui-cell')) return ele;
    return _findCellParent(ele.parentNode);
}
function _validate($input, $form, regexp){
    const input = $input[0], val = $input.val();

    if(input.tagName == 'INPUT' || input.tagName == 'TEXTAREA'){
        let reg = input.getAttribute('pattern') || '';

        if(input.type == 'radio') {
            const radioInputs = $form.find('input[type="radio"][name="' + input.name + '"]');
            for (let i = 0, len = radioInputs.length; i < len; ++i) {
                if(radioInputs[i].checked) return null;
            }
            return 'empty';
        }else if(input.type == 'checkbox'){
            if(reg){
                const checkboxInputs = $form.find('input[type="checkbox"][name="' + input.name + '"]');
                const regs = reg.replace(/[{\s}]/g, '').split(',');
                let count = 0;

                if(regs.length != 2){
                    throw input.outerHTML + ' regexp is wrong.';
                }

                checkboxInputs.forEach((checkboxInput) => {
                    if(checkboxInput.checked) ++count;
                });

                if(!count) return 'empty';

                if(regs[1] === ''){ // {0,}
                    if(count >= parseInt(regs[0])){
                        return null;
                    }else{
                        return 'notMatch';
                    }
                }else{ // {0,2}
                    if(parseInt(regs[0]) <= count && count <= parseInt(regs[1])){
                        return null;
                    }else{
                        return 'notMatch';
                    }
                }
            }else{
                return input.checked ? null : 'empty';
            }
        }else if(!$input.val().length){
            return 'empty';
        }else if(reg){
            if(/^REG_/.test(reg)){
                if(!regexp) throw 'RegExp ' + reg + ' is empty.';

                reg = reg.replace(/^REG_/, '');
                if(!regexp[reg]) throw 'RegExp ' + reg + ' has not found.';

                reg = regexp[reg];
            }
            return new RegExp(reg).test(val) ? null : 'notMatch';
        }else{
            return null;
        }
    }
    else if(val.length){
        // 有输入值
        return null;
    }

    return 'empty';
}
function _showErrorMsg(error){
    if(error){
        const $ele = $(error.ele), msg = error.msg,
            tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder');
        if(tips) topTips(tips);

        if(error.ele.type == 'checkbox' || error.ele.type == 'radio') return;

        const cellParent = _findCellParent(error.ele);
        if(cellParent) cellParent.classList.add('weui-cell_warn');
    }
}

/**
 * 表单校验
 * @param {string} selector 表单的selector
 * @param {function} callback 校验后的回调
 * @param {Object=} options 配置项
 * @param {object=} options.regexp 表单所需的正则表达式
 *
 * @example
 * ##### 普通input的HTML
 * ```html
 * <input type="tel" required pattern="[0-9]{11}" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
 * <input type="text" required pattern="REG_IDNUM" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
 * ```
 * - required 表示需要校验
 * - pattern 表示校验的正则，不填则进行为空校验。当以REG_开头时，则获取校验时传入的正则。如`pattern="REG_IDNUM"`，则需要在调用相应方法时传入`{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`，详情请看下面`checkIfBlur`和`validate`
 * - 报错的wording会从 emptyTips | notMatchTips | tips | placeholder 里获得
 * <br>
 *
 * ##### radio
 * radio需要检验，只需把参数写在同一表单下，同name的第一个元素即可。
 * ```html
 * <input type="radio" value="male" name="sex" required tips="请选择性别" />
 * <input type="radio" value="female" name="sex" />
 * ```
 * <br>
 *
 * ##### checkbox
 * checkbox需要校验，只需把参数写在同一表单下，同name的第一个元素即可。
 * pattern 规定选择个数，用法与正则一致，例如：
 * ```html
 * <input type="checkbox" name="assistance" value="黄药师" required pattern="{1,2}" tips="请勾选1-2个敲码助手" />
 * <input type="checkbox" name="assistance" value="欧阳锋" />
 * <input type="checkbox" name="assistance" value="段智兴" />
 * <input type="checkbox" name="assistance" value="洪七公" />
 * ```
 * - {1,}   至少选择1个
 * - {1,2}  选择1-2个
 * - 这里不会出现{0,}这种情况，因为有required就表示必选。否则直接去掉required即可。
 * <br>
 *
 * ``` js
 * // weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
 * weui.form.validate('#form', function (error) {
 *     if (!error) {
 *         var loading = weui.loading('提交中...');
 *         setTimeout(function () {
 *             loading.hide();
 *             weui.toast('提交成功', 3000);
 *         }, 1500);
 *     }
 *     // return true; // 当return true时，不会显示错误
 * }, {
 *     regexp: {
 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
 *         VCODE: /^.{4}$/
 *     }
 * });
 * ```
 */
function validate(selector, callback = $.noop, options = {}){
    const $eles = $(selector);

    $eles.forEach((ele) => {
        const $form = $(ele);
        const $requireds = $form.find('[required]');
        if(typeof callback != 'function') callback = _showErrorMsg;

        for(let i = 0, len = $requireds.length; i < len; ++i){
            const $required = $requireds.eq(i), errorMsg = _validate($required, $form, options.regexp), error = {ele: $required[0], msg: errorMsg};
            if(errorMsg){
                if(!callback(error)) _showErrorMsg(error);
                return;
            }
        }
        callback(null);
    });

    return this;
}

/**
 * checkIfBlur 当表单的input失去焦点时校验
 * @param {string} selector 表单的selector
 * @param {Object=} options 配置项
 * @param {object=} options.regexp 表单所需的正则表达式
 *
 * @example
 * weui.form.checkIfBlur('#form', {
 *     regexp: {
 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
 *         VCODE: /^.{4}$/
 *     }
 * });
 */
function checkIfBlur(selector, options = {}){
    const $eles = $(selector);

    $eles.forEach((ele) => {
        const $form = $(ele);
        $form.find('[required]')
            .on('blur', function () {
                // checkbox 和 radio 不做blur检测，以免误触发
                if(this.type == 'checkbox' || this.type == 'radio') return;

                const $this = $(this);
                if($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

                let errorMsg = _validate($this, $form, options.regexp);
                if(errorMsg){
                    _showErrorMsg({
                        ele: $this[0],
                        msg: errorMsg
                    });
                }
            })
            .on('focus', function () {
                const cellParent = _findCellParent(this);
                if(cellParent) cellParent.classList.remove('weui-cell_warn');
            });
    });

    return this;
}

export default {
    validate,
    checkIfBlur
};
