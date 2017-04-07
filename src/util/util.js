import 'element-closest';
import objectAssign from 'object-assign';
import $ from 'balajs';

// 其实，$ 的原型就是一个数组，拥有数组的各种方法
// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

/* 判断系统 */
function _detect(ua){
    let os = this.os = {}, android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    if (android) {
        os.android = true;
        os.version = android[2];
    }
}
_detect.call($, navigator.userAgent);

objectAssign($.fn, {
    /**
     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
     * @param {Element|Element[]} $child
     * @returns {append}
     */
    append: function ($child) {
        if (!($child instanceof HTMLElement)) {
            $child = $child[0];
        }
        this.forEach(($element) => {
            $element.appendChild($child);
        });
        return this;
    },
    /**
     *
     * @returns {remove}
     */
    remove: function () {
        this.forEach(($element) => {
            $element.parentNode.removeChild($element);
        });
        return this;
    },
    /**
     *
     * @param selector
     * @returns {HTMLElement}
     */
    find: function (selector) {
        return $(selector, this);
    },
    /**
     *
     * @param {String} className
     * @returns {addClass}
     */
    addClass: function (className) {
        this.forEach(($element) => {
            // http://caniuse.com/#search=classList
            $element.classList.add(className);
        });
        return this;
    },
    /**
     *
     * @param {String} className
     * @returns {removeClass}
     */
    removeClass: function (className) {
        this.forEach(($element) => {
            // http://caniuse.com/#search=classList
            $element.classList.remove(className);
        });
        return this;
    },
    /**
     *
     * @param index
     * @returns {*|jQuery|HTMLElement}
     */
    eq: function (index) {
        return $(this[index]);
    },
    /**
     *
     * @returns {show}
     */
    show: function () {
        this.forEach(($element) => {
            $element.style.display = 'block';
        });
        return this;
    },
    /**
     *
     * @returns {hide}
     */
    hide: function () {
        this.forEach(($element) => {
            $element.style.display = 'none';
        });
        return this;
    },
    /**
     *
     * @param html 目前只能接受字符串
     * @returns {html}
     */
    html: function (html) {
        this.forEach(($element) => {
            $element.innerHTML = html;
        });
        return this;
    },
    /**
     *
     * @param {Object} obj 目前只能接受object
     * @returns {css}
     */
    css: function (obj) {
        Object.keys(obj).forEach((key) => {
            this.forEach(($element) => {
                $element.style[key] = obj[key];
            });
        });
        return this;
    },
    /**
     *
     * @param eventType
     * @param selector
     * @param handler
     */
    on: function (eventType, selector, handler) {
        const isDelegate = typeof selector === 'string' && typeof handler === 'function';
        if (!isDelegate) {
            handler = selector;
        }
        this.forEach(($element) => {
            eventType.split(' ').forEach((event) => {
                $element.addEventListener(event, function (evt) {
                    if (isDelegate) {
                        // http://caniuse.com/#search=closest
                        if (this.contains(evt.target.closest(selector))) {
                            handler.call(evt.target, evt);
                        }
                    }
                    else {
                        handler.call(this, evt);
                    }
                });
            });
        });
        return this;
    },
    /**
     *
     * @param {String} eventType
     * @param {String|Function} selector
     * @param {Function=} handler
     * @returns {off}
     */
    off: function (eventType, selector, handler) {
        if (typeof selector === 'function') {
            handler = selector;
            selector = null;
        }

        this.forEach(($element) => {
            eventType.split(' ').forEach((event) => {
                if (typeof selector === 'string') {
                    $element.querySelectorAll(selector).forEach(($element) => {
                        $element.removeEventListener(event, handler);
                    });
                }
                else {
                    $element.removeEventListener(event, handler);
                }
            });
        });
        return this;
    },
    /**
     *
     * @returns {Number}
     */
    index: function () {
        const $element = this[0];
        const $parent = $element.parentNode;
        return Array.prototype.indexOf.call($parent.children, $element);
    },
    /**
     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
     * @returns {offAll}
     */
    offAll: function () {
        this.forEach(($element, index) => {
            var clone = $element.cloneNode(true);
            $element.parentNode.replaceChild(clone, $element);

            this[index] = clone;
        });
        return this;
    },
    /**
     *
     * @returns {*}
     */
    val: function () {
        if(arguments.length){
            this.forEach(($element) => {
                $element.value = arguments[0];
            });
            return this;
        }
        return this[0].value;
    },
    /**
     *
     * @returns {*}
     */
    attr: function(){
        if(typeof arguments[0] == 'object'){
            const attrsObj = arguments[0];
            const that = this;
            Object.keys(attrsObj).forEach((attr) => {
                that.forEach(($element) => {
                    $element.setAttribute(attr, attrsObj[attr]);
                });
            });
            return this;
        }

        if(typeof arguments[0] == 'string' && arguments.length < 2){
            return this[0].getAttribute(arguments[0]);
        }

        this.forEach(($element) => {
            $element.setAttribute(arguments[0], arguments[1]);
        });
        return this;
    }
});

objectAssign($, {
    extend: objectAssign,
    /**
     * noop
     */
    noop: function () {

    },
    /**
     * render
     * 取值：<%= variable %>
     * 表达式：<% if {} %>
     * 例子：
     *  <div>
     *    <div class="weui-mask"></div>
     *    <div class="weui-dialog">
     *    <% if(typeof title === 'string'){ %>
     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
     *    <% } %>
     *    <div class="weui-dialog__bd"><%=content%></div>
     *    <div class="weui-dialog__ft">
     *    <% for(var i = 0; i < buttons.length; i++){ %>
     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
     *    <% } %>
     *    </div>
     *    </div>
     *  </div>
     * A very simple template engine
     * @param {String} tpl
     * @param {Object=} data
     * @returns {String}
     */
    render: function (tpl, data) {
        const code = 'var p=[];with(this){p.push(\'' +
            tpl
                .replace(/[\r\t\n]/g, ' ')
                .split('<%').join('\t')
                .replace(/((^|%>)[^\t]*)'/g, '$1\r')
                .replace(/\t=(.*?)%>/g, '\',$1,\'')
                .split('\t').join('\');')
                .split('%>').join('p.push(\'')
                .split('\r').join('\\\'')
            + '\');}return p.join(\'\');';
        return new Function(code).apply(data);
    },
    /**
     * getStyle 获得元素计算后的样式值
     * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
     */
    getStyle: function (el, styleProp) {
        var value, defaultView = (el.ownerDocument || document).defaultView;
        // W3C standard way:
        if (defaultView && defaultView.getComputedStyle) {
            // sanitize property name to css notation
            // (hypen separated words eg. font-Size)
            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) { // IE
            // sanitize property name to camelCase
            styleProp = styleProp.replace(/\-(\w)/g, (str, letter) => {
                return letter.toUpperCase();
            });
            value = el.currentStyle[styleProp];
            // convert other units to pixels on IE
            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                return ((value) => {
                    var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                    el.runtimeStyle.left = el.currentStyle.left;
                    el.style.left = value || 0;
                    value = el.style.pixelLeft + 'px';
                    el.style.left = oldLeft;
                    el.runtimeStyle.left = oldRsLeft;
                    return value;
                })(value);
            }
            return value;
        }
    }
});

export default $;
