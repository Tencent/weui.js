/*!
 * weui.js v1.0.0 (https://weui.io)
 * Copyright 2016, wechat ui team
 * MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weui"] = factory();
	else
		root["weui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _alert = __webpack_require__(7);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(8);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _toast = __webpack_require__(9);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(11);

	var _loading2 = _interopRequireDefault(_loading);

	var _actionSheet = __webpack_require__(13);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	var _topTips = __webpack_require__(15);

	var _topTips2 = _interopRequireDefault(_topTips);

	var _searchBar = __webpack_require__(17);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _tab = __webpack_require__(18);

	var _tab2 = _interopRequireDefault(_tab);

	var _form = __webpack_require__(19);

	var _form2 = _interopRequireDefault(_form);

	var _uploader = __webpack_require__(20);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _picker = __webpack_require__(24);

	var _gallery = __webpack_require__(29);

	var _gallery2 = _interopRequireDefault(_gallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    dialog: _dialog2.default,
	    alert: _alert2.default,
	    confirm: _confirm2.default,
	    toast: _toast2.default,
	    loading: _loading2.default,
	    actionSheet: _actionSheet2.default,
	    topTips: _topTips2.default,
	    searchBar: _searchBar2.default,
	    tab: _tab2.default,
	    form: _form2.default,
	    uploader: _uploader2.default,
	    picker: _picker.picker,
	    datePicker: _picker.datePicker,
	    gallery: _gallery2.default
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(6);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $body = (0, _util2.default)('body');
	var _sington = void 0;

	/**
	 * dialog，弹窗，alert和confirm的父类
	 *
	 * @param {Object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.content 弹窗的内容
	 * @param {string=} options.className 弹窗的自定义类名
	 * @param {array=} options.buttons 按钮配置项
	 *
	 * @param {string} [options.buttons[].label=确定] 按钮的文字
	 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
	 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
	 *
	 * @example
	 * weui.dialog({
	 *     title: 'dialog标题',
	 *     content: 'dialog内容',
	 *     className: 'custom-classname',
	 *     buttons: [{
	 *         label: '取消',
	 *         type: 'default',
	 *         onClick: function () { alert('取消') }
	 *     }, {
	 *         label: '确定',
	 *         type: 'primary',
	 *         onClick: function () { alert('确定') }
	 *     }]
	 * });
	 */
	function dialog() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    if (_sington) return _sington;

	    var isAndroid = _util2.default.os.android;
	    options = _util2.default.extend({
	        title: null,
	        content: '',
	        className: '',
	        buttons: [{
	            label: '确定',
	            type: 'primary',
	            onClick: _util2.default.noop
	        }],
	        isAndroid: isAndroid
	    }, options);

	    var $dialogWrap = (0, _util2.default)(_util2.default.render(_dialog2.default, options));
	    var $dialog = $dialogWrap.find('.weui-dialog');
	    var $mask = $dialogWrap.find('.weui-mask');

	    function hide() {
	        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util2.default.noop;

	        $mask.addClass('weui-animate-fade-out');
	        $dialog.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $dialogWrap.remove();
	            _sington = false;
	            callback();
	        });
	    }

	    $body.append($dialogWrap);
	    // 不能直接把.weui-animate-fade-in加到$dialog，会导致mask的z-index有问题
	    $mask.addClass('weui-animate-fade-in');
	    $dialog.addClass('weui-animate-fade-in');

	    $dialogWrap.on('click', '.weui-dialog__btn', function (evt) {
	        var _this = this;

	        var index = (0, _util2.default)(this).index();
	        hide(function () {
	            options.buttons[index].onClick && options.buttons[index].onClick.call(_this, evt);
	        });
	    });

	    $dialogWrap.hide = hide;
	    _sington = $dialogWrap;
	    return $dialogWrap;
	}
	exports.default = dialog;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	__webpack_require__(3);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(5);

	var _balajs2 = _interopRequireDefault(_balajs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 其实，$ 的原型就是一个数组，拥有数组的各种方法
	// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

	/* 判断系统 */
	function _detect(ua) {
	    var os = this.os = {},
	        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    if (android) {
	        os.android = true;
	        os.version = android[2];
	    }
	}
	_detect.call(_balajs2.default, navigator.userAgent);

	(0, _objectAssign2.default)(_balajs2.default.fn, {
	    /**
	     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
	     * @param {Element|Element[]} $child
	     * @returns {append}
	     */
	    append: function append($child) {
	        if (!($child instanceof HTMLElement)) {
	            $child = $child[0];
	        }
	        this.forEach(function ($element) {
	            $element.appendChild($child);
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {remove}
	     */
	    remove: function remove() {
	        this.forEach(function ($element) {
	            $element.parentNode.removeChild($element);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param selector
	     * @returns {HTMLElement}
	     */
	    find: function find(selector) {
	        return (0, _balajs2.default)(selector, this);
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {addClass}
	     */
	    addClass: function addClass(className) {
	        this.forEach(function ($element) {
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
	    removeClass: function removeClass(className) {
	        this.forEach(function ($element) {
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
	    eq: function eq(index) {
	        return (0, _balajs2.default)(this[index]);
	    },
	    /**
	     *
	     * @returns {show}
	     */
	    show: function show() {
	        this.forEach(function ($element) {
	            $element.style.display = 'block';
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {hide}
	     */
	    hide: function hide() {
	        this.forEach(function ($element) {
	            $element.style.display = 'none';
	        });
	        return this;
	    },
	    /**
	     *
	     * @param html 目前只能接受字符串
	     * @returns {html}
	     */
	    html: function html(_html) {
	        this.forEach(function ($element) {
	            $element.innerHTML = _html;
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {Object} obj 目前只能接受object
	     * @returns {css}
	     */
	    css: function css(obj) {
	        var _this = this;

	        Object.keys(obj).forEach(function (key) {
	            _this.forEach(function ($element) {
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
	    on: function on(eventType, selector, handler) {
	        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
	        if (!isDelegate) {
	            handler = selector;
	        }
	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                $element.addEventListener(event, function (evt) {
	                    if (isDelegate) {
	                        // http://caniuse.com/#search=closest
	                        if (this.contains(evt.target.closest(selector))) {
	                            handler.call(evt.target, evt);
	                        }
	                    } else {
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
	    off: function off(eventType, selector, handler) {
	        if (typeof selector === 'function') {
	            handler = selector;
	            selector = null;
	        }

	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                if (typeof selector === 'string') {
	                    $element.querySelectorAll(selector).forEach(function ($element) {
	                        $element.removeEventListener(event, handler);
	                    });
	                } else {
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
	    index: function index() {
	        var $element = this[0];
	        var $parent = $element.parentNode;
	        return Array.prototype.indexOf.call($parent.children, $element);
	    },
	    /**
	     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
	     * @returns {offAll}
	     */
	    offAll: function offAll() {
	        var _this2 = this;

	        this.forEach(function ($element, index) {
	            var clone = $element.cloneNode(true);
	            $element.parentNode.replaceChild(clone, $element);

	            _this2[index] = clone;
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    val: function val() {
	        var _arguments = arguments;

	        if (arguments.length) {
	            this.forEach(function ($element) {
	                $element.value = _arguments[0];
	            });
	            return this;
	        }
	        return this[0].value;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    attr: function attr() {
	        var _arguments2 = arguments,
	            _this3 = this;

	        if (_typeof(arguments[0]) == 'object') {
	            var _ret = function () {
	                var attrsObj = _arguments2[0];
	                var that = _this3;
	                Object.keys(attrsObj).forEach(function (attr) {
	                    that.forEach(function ($element) {
	                        $element.setAttribute(attr, attrsObj[attr]);
	                    });
	                });
	                return {
	                    v: _this3
	                };
	            }();

	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }

	        if (typeof arguments[0] == 'string' && arguments.length < 2) {
	            return this[0].getAttribute(arguments[0]);
	        }

	        this.forEach(function ($element) {
	            $element.setAttribute(_arguments2[0], _arguments2[1]);
	        });
	        return this;
	    }
	});

	(0, _objectAssign2.default)(_balajs2.default, {
	    extend: _objectAssign2.default,
	    /**
	     * noop
	     */
	    noop: function noop() {},
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
	    render: function render(tpl, data) {
	        var code = 'var p=[],print=function(){p.push.apply(p,arguments);};with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
	        return new Function(code).apply(data);
	    },
	    /**
	     * getStyle 获得元素计算后的样式值
	     */
	    getStyle: function getStyle(el, styleProp) {
	        var value,
	            defaultView = (el.ownerDocument || document).defaultView;
	        // W3C standard way:
	        if (defaultView && defaultView.getComputedStyle) {
	            // sanitize property name to css notation
	            // (hypen separated words eg. font-Size)
	            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
	            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	        } else if (el.currentStyle) {
	            // IE
	            // sanitize property name to camelCase
	            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
	                return letter.toUpperCase();
	            });
	            value = el.currentStyle[styleProp];
	            // convert other units to pixels on IE
	            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
	                return function (value) {
	                    var oldLeft = el.style.left,
	                        oldRsLeft = el.runtimeStyle.left;
	                    el.runtimeStyle.left = el.currentStyle.left;
	                    el.style.left = value || 0;
	                    value = el.style.pixelLeft + 'px';
	                    el.style.left = oldLeft;
	                    el.runtimeStyle.left = oldRsLeft;
	                    return value;
	                }(value);
	            }
	            return value;
	        }
	    }
	});

	exports.default = _balajs2.default;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	// element-closest | CC0-1.0 | github.com/jonathantneal/closest

	if (typeof Element.prototype.matches !== 'function') {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof Element.prototype.closest !== 'function') {
		Element.prototype.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
		$ = (function(document, s_addEventListener, s_querySelectorAll) {
			function $(s, context, bala) {
				bala = Object.create($.fn);

				s && bala.push.apply(bala, // if s is truly then push the following
					s[s_addEventListener] // if arg is node or window,
						? [s] // then pass [s]
						: "" + s === s // else if arg is a string
							? /</.test(s) // if the string contains "<" (if HTML code is passed)
								// then parse it and return node.children
								// use 'addEventListener' (HTMLUnknownElement) if content is not presented
								? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
									, context.children)
								: context // else if context is truly
									? ((context = $(context)[0]) // if context element is found
										? context[s_querySelectorAll](s) // then select element from context
										: bala) // else pass [] (context isn't found)
									: document[s_querySelectorAll](s) // else select elements globally
							: typeof s == 'function' // else if function is passed
								// if DOM is ready
								// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
								? document.readyState[7]
									? s() // then run given function
									: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
								: s); // else guessing that s variable is array-like Object

				return bala;
			}

			$.fn = [];

			$.one = function(s, context) {
				return $(s, context)[0] || null;
			};

			return $;
		})(document, 'addEventListener', 'querySelectorAll');


		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return $;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module == 'object' && module.exports) {
			module.exports = $;
		} else {
			root.$ = $;
		}
	})(this);


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div> <div class=weui-mask></div> <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a> <% } %> </div> </div> </div> ";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * alert 警告弹框，功能类似于浏览器自带的 alert 弹框，用于提醒、警告用户简单扼要的信息，只有一个“确认”按钮，点击“确认”按钮后关闭弹框。
	 * @param {string} content 弹窗内容
	 * @param {function=} yes 点击确定按钮的回调
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {array=} options.buttons 按钮配置项，详情参考dialog
	 *
	 * @example
	 * weui.alert('普通的alert');
	 * weui.alert('带回调的alert', function(){ console.log('ok') });
	 * weui.alert('自定义标题的alert', { title: '自定义标题' });
	 * weui.alert('带回调的自定义标题的alert', function(){
	 *    console.log('ok')
	 * }, {
	 *    title: '自定义标题'
	 * });
	 * weui.alert('自定义按钮的alert', {
	 *     title: '自定义按钮的alert',
	 *     buttons: [{
	 *         label: 'OK',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('ok') }
	 *     }]
	 * });
	 */
	function alert() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments[1];
	    var options = arguments[2];

	    var type = (typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object';
	    if (type) {
	        options = yes;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '确定',
	            type: 'primary',
	            onClick: type ? _util2.default.noop : yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = alert;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 确认弹窗
	 * @param {string} content 弹窗内容
	 * @param {function=} yes 点击确定按钮的回调
	 * @param {function=} no  点击取消按钮的回调
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {array=} options.buttons 按钮配置项，详情参考dialog
	 *
	 * @example
	 * weui.confirm('普通的confirm');
	 * weui.confirm('自定义标题的confirm', { title: '自定义标题' });
	 * weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
	 * weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
	 *     title: '自定义标题'
	 * });
	 * weui.confirm('自定义按钮的confirm', {
	 *     title: '自定义按钮的confirm',
	 *     buttons: [{
	 *         label: 'NO',
	 *         type: 'default',
	 *         onClick: function(){ console.log('no') }
	 *     }, {
	 *         label: 'YES',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('yes') }
	 *     }]
	 * });
	 */
	function confirm() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments[1];
	    var no = arguments[2];
	    var options = arguments[3];

	    var type = (typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object';
	    if (type) {
	        options = yes;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '取消',
	            type: 'default',
	            onClick: type ? _util2.default.noop : no
	        }, {
	            label: '确定',
	            type: 'primary',
	            onClick: type ? _util2.default.noop : yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = confirm;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _toast = __webpack_require__(10);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $body = (0, _util2.default)('body');
	var _sington = void 0;

	/**
	 * toast 一般用于操作成功时的提示场景
	 * @param {string} content toast的文字
	 * @param {Object|function=} options 配置项或回调
	 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
	 * @param {function=} options.callback 关闭后的回调
	 *
	 * @example
	 * weui.toast('操作成功', 3000);
	 * weui.toast('操作成功', {
	 *     duration: 3000,
	 *     callback: function(){ console.log('close') }
	 * });
	 */
	function toast() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }
	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        duration: 3000,
	        callback: _util2.default.noop
	    }, options);

	    var $toast = (0, _util2.default)(_util2.default.render(_toast2.default, { content: content }));
	    $body.append($toast);
	    $toast.addClass('weui-animate-fade-in');

	    setTimeout(function () {
	        $toast.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $toast.remove();
	            _sington = false;
	            options.callback();
	        });
	    }, options.duration);

	    _sington = $toast;
	    return $toast;
	}
	exports.default = toast;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i> <p class=weui-toast__content><%=content%></p> </div> </div>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _loading = __webpack_require__(12);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $body = (0, _util2.default)('body');
	var _sington = void 0;

	/**
	 * loading
	 * @param {string} content loading的文字
	 *
	 * @example
	 * var loading = weui.loading('loading');
	 * setTimeout(function () {
	 *     loading.hide();
	 * }, 3000);
	 */
	function loading() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    if (_sington) return _sington;

	    var $loading = (0, _util2.default)(_util2.default.render(_loading2.default, { content: content }));
	    function hide() {
	        $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $loading.remove();
	            _sington = false;
	        });
	    }
	    $body.append($loading);
	    $loading.addClass('weui-animate-fade-in');

	    $loading.hide = hide;
	    _sington = $loading;
	    return $loading;
	}
	exports.default = loading;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-loading_toast> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _actionSheet = __webpack_require__(14);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $body = (0, _util2.default)('body');
	var _sington = void 0;

	/**
	 * actionsheet
	 * @param {array} menus 上层的选项
	 * @param {string} menus[].label 选项的文字
	 * @param {function} menus[].onClick 选项点击时的回调
	 *
	 * @param {array} actions 下层的选项
	 * @param {string} actions[].label 选项的文字
	 * @param {function} actions[].onClick 选项点击时的回调
	 *
	 * @example
	 * weui.actionSheet([
	 *     {
	 *         label: '拍照',
	 *         onClick: function () {
	 *             console.log('拍照');
	 *         }
	 *     }, {
	 *         label: '从相册选择',
	 *         onClick: function () {
	 *             console.log('从相册选择');
	 *         }
	 *     }, {
	 *         label: '其他',
	 *         onClick: function () {
	 *             console.log('其他');
	 *         }
	 *     }
	 * ], [
	 *     {
	 *         label: '取消',
	 *         onClick: function () {
	 *             console.log('取消');
	 *         }
	 *     }
	 * ]);
	 */
	function actionSheet() {
	    var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	    if (_sington) return _sington;

	    var isAndroid = _util2.default.os.android;
	    var $actionSheetWrap = (0, _util2.default)(_util2.default.render(_actionSheet2.default, {
	        menus: menus,
	        actions: actions,
	        isAndroid: isAndroid
	    }));
	    var $actionSheet = $actionSheetWrap.find('.weui-actionsheet');
	    var $actionSheetMask = $actionSheetWrap.find('.weui-mask');

	    function hide() {
	        $actionSheet.addClass(isAndroid ? 'weui-animate-fade-out' : 'weui-animate-slide-down');
	        $actionSheetMask.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $actionSheetWrap.remove();
	            _sington = false;
	        });
	    }
	    $body.append($actionSheetWrap);

	    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	    _util2.default.getStyle($actionSheet[0], 'transform');

	    $actionSheet.addClass(isAndroid ? 'weui-animate-fade-in' : 'weui-animate-slide-up');
	    $actionSheetMask.addClass('weui-animate-fade-in').on('click', hide);
	    $actionSheetWrap.find('.weui-actionsheet__menu').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        menus[index].onClick.call(this, evt);
	        hide();
	    });
	    $actionSheetWrap.find('.weui-actionsheet__action').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        actions[index].onClick.call(this, evt);
	        hide();
	    });

	    $actionSheetWrap.hide = hide;
	    _sington = $actionSheetWrap;
	    return $actionSheetWrap;
	}
	exports.default = actionSheet;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<% if(isAndroid){ %> weui-skin_android <% } %>\"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> ";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(16);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $body = (0, _util2.default)('body');
	var _toptips = null;

	/**
	 * toptips 顶部报错提示
	 * @param {string} content 报错的文字
	 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
	 * @param {number=} [options.duration=3000] 多少毫秒后消失
	 * @param {function=} options.callback 消失后的回调
	 *
	 * @example
	 * weui.topTips('请填写正确的字段');
	 * weui.topTips('请填写正确的字段', 3000);
	 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
	 * weui.topTips('请填写正确的字段', {
	 *     duration: 3000,
	 *     callback: function(){ console.log('close') }
	 * });
	 */
	function topTips(content) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }

	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        duration: 3000,
	        callback: _util2.default.noop
	    }, options);

	    var $topTips = (0, _util2.default)(_util2.default.render(_topTips2.default, { content: content }));
	    function hide() {
	        $topTips.remove();
	        options.callback();
	        _toptips = null;
	    }

	    $body.append($topTips);
	    if (_toptips) {
	        clearTimeout(_toptips.timeout);
	        _toptips.hide();
	    }

	    _toptips = {
	        hide: hide
	    };
	    _toptips.timeout = setTimeout(hide, options.duration);

	    $topTips.hide = hide;
	    return $topTips;
	}
	exports.default = topTips;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-toptips weui-toptips_warn\" style=display:block><%= content %></div>";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
	 * @param {string} selector searchbar的selector
	 *
	 * @example
	 * weui.searchBar('#searchBar');
	 */
	function searchBar(selector) {
	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $searchBar = (0, _util2.default)(ele);
	        var $searchLabel = $searchBar.find('.weui-search-bar__label');
	        var $searchInput = $searchBar.find('.weui-search-bar__input');
	        var $searchClear = $searchBar.find('.weui-icon-clear');
	        var $searchCancel = $searchBar.find('.weui-search-bar__cancel-btn');

	        function cancelSearch() {
	            $searchInput.val('');
	            $searchBar.removeClass('weui-search-bar_focusing');
	        }

	        $searchLabel.on('click', function () {
	            $searchBar.addClass('weui-search-bar_focusing');
	            $searchInput[0].focus();
	        });
	        $searchInput.on('blur', function () {
	            if (!this.value.length) cancelSearch();
	        });
	        $searchClear.on('click', function () {
	            $searchInput.val('');
	            $searchInput[0].focus();
	        });
	        $searchCancel.on('click', function () {
	            cancelSearch();
	            $searchInput[0].blur();
	        });
	    });

	    return $eles;
	}
	exports.default = searchBar;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * tab tab导航栏
	 * @param {string} selector tab的selector
	 * @param {object=} options 配置项
	 * @param {number=} [options.defaultIndex=0] 初始展示的index
	 * @param {function=} options.onChange 点击tab时，返回对应的index
	 *
	 * @example
	 * weui.tab('#tab',{
	 *     defaultIndex: 0,
	 *     onChange: function(index){
	 *         console.log(index);
	 *     }
	 * });
	 */
	function tab(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        defaultIndex: 0,
	        onChange: _util2.default.noop
	    }, options);

	    $eles.forEach(function (ele) {
	        var $tab = (0, _util2.default)(ele);
	        var $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
	        var $tabContents = $tab.find('.weui-tab__content');

	        $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
	        $tabContents.eq(options.defaultIndex).show();

	        $tabItems.on('click', function () {
	            var $this = (0, _util2.default)(this),
	                index = $this.index();

	            $tabItems.removeClass('weui-bar__item_on');
	            $this.addClass('weui-bar__item_on');

	            $tabContents.hide();
	            $tabContents.eq(index).show();

	            options.onChange.call(this, index);
	        });
	    });

	    return this;
	}
	exports.default = tab;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(15);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _findCellParent(ele) {
	    if (!ele || !ele.classList) return null;
	    if (ele.classList.contains('weui-cell')) return ele;
	    return _findCellParent(ele.parentNode);
	}
	function _validate($input, $form, regexp) {
	    var input = $input[0],
	        val = $input.val();

	    if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
	        var reg = input.getAttribute('required') || input.getAttribute('pattern') || '';

	        if (input.type == 'radio') {
	            var radioInputs = $form.find('input[type="radio"][name="' + input.name + '"]');
	            for (var i = 0, len = radioInputs.length; i < len; ++i) {
	                if (radioInputs[i].checked) return null;
	            }
	            return 'empty';
	        } else if (input.type == 'checkbox') {
	            if (reg) {
	                var _ret = function () {
	                    var checkboxInputs = $form.find('input[type="checkbox"][name="' + input.name + '"]');
	                    var regs = reg.replace(/[{\s}]/g, '').split(',');
	                    var count = 0;

	                    if (regs.length != 2) {
	                        throw input.outerHTML + ' regexp is wrong.';
	                    }

	                    checkboxInputs.forEach(function (checkboxInput) {
	                        if (checkboxInput.checked) ++count;
	                    });

	                    if (!count) return {
	                            v: 'empty'
	                        };

	                    if (regs[1] === '') {
	                        // {0,}
	                        if (count >= parseInt(regs[0])) {
	                            return {
	                                v: null
	                            };
	                        } else {
	                            return {
	                                v: 'notMatch'
	                            };
	                        }
	                    } else {
	                        // {0,2}
	                        if (parseInt(regs[0]) <= count && count <= parseInt(regs[1])) {
	                            return {
	                                v: null
	                            };
	                        } else {
	                            return {
	                                v: 'notMatch'
	                            };
	                        }
	                    }
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            } else {
	                return input.checked ? null : 'empty';
	            }
	        } else if (!$input.val().length) {
	            return 'empty';
	        } else if (reg) {
	            if (/^REG_/.test(reg)) {
	                if (!regexp) throw 'RegExp ' + reg + ' is empty.';

	                reg = reg.replace(/^REG_/, '');
	                if (!regexp[reg]) throw 'RegExp ' + reg + ' has not found.';

	                reg = regexp[reg];
	            }
	            return new RegExp(reg).test(val) ? null : 'notMatch';
	        } else {
	            return null;
	        }
	    } else if (val.length) {
	        // 有输入值
	        return null;
	    }

	    return 'empty';
	}
	function _showErrorMsg(error) {
	    if (error) {
	        var $ele = (0, _util2.default)(error.ele),
	            msg = error.msg,
	            tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder');
	        if (tips) (0, _topTips2.default)(tips);

	        if (error.ele.type == 'checkbox' || error.ele.type == 'radio') return;

	        var cellParent = _findCellParent(error.ele);
	        if (cellParent) cellParent.classList.add('weui-cell_warn');
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
	function validate(selector) {
	    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        var $requireds = $form.find('[required]');
	        if (typeof callback != 'function') callback = _showErrorMsg;

	        for (var i = 0, len = $requireds.length; i < len; ++i) {
	            var $required = $requireds.eq(i),
	                errorMsg = _validate($required, $form, options.regexp),
	                error = { ele: $required[0], msg: errorMsg };
	            if (errorMsg) {
	                if (!callback(error)) _showErrorMsg(error);
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
	function checkIfBlur(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        $form.find('[required]').on('blur', function () {
	            // checkbox 和 radio 不做blur检测，以免误触发
	            if (this.type == 'checkbox' || this.type == 'radio') return;

	            var $this = (0, _util2.default)(this);
	            if ($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

	            var errorMsg = _validate($this, $form, options.regexp);
	            if (errorMsg) {
	                _showErrorMsg({
	                    ele: $this[0],
	                    msg: errorMsg
	                });
	            }
	        }).on('focus', function () {
	            var cellParent = _findCellParent(this);
	            if (cellParent) cellParent.classList.remove('weui-cell_warn');
	        });
	    });

	    return this;
	}

	exports.default = {
	    validate: validate,
	    checkIfBlur: checkIfBlur
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _item = __webpack_require__(21);

	var _item2 = _interopRequireDefault(_item);

	var _image = __webpack_require__(22);

	var _upload = __webpack_require__(23);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _id = 0;

	/**
	 * uploader 上传组件
	 * @param {string} selector 上传组件的selector
	 * @param {object} options 配置项
	 * @param {string} [options.url] 上传的url，返回值需要使用json格式
	 * @param {boolean} [options.auto=true] 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example
	 * @param {string} [options.type='file'] 上传类型, `file`为文件上传; `base64`为以base64上传
	 * @param {string=} [options.fileVal=file] 文件上传域的name
	 * @param {object=} [options.compress] 压缩配置, `false`则不压缩
	 * @param {number=} [options.compress.width=1600] 图片的最大宽度
	 * @param {number=} [options.compress.height=1600] 图片的最大高度
	 * @param {number=} [options.compress.quality=.8] 压缩质量, 取值范围 0 ~ 1
	 * @param {function=} [options.onBeforeQueued] 文件添加前的回调，return false则不添加
	 * @param {function=} [options.onQueued] 文件添加成功的回调
	 * @param {function=} [options.onBeforeSend] 文件上传前调用，具体参数看example
	 * @param {function=} [options.onSuccess] 上传成功的回调
	 * @param {function=} [options.onProgress] 上传进度的回调
	 * @param {function=} [options.onError] 上传失败的回调
	 *
	 * @example
	 * var uploadCount = 0;
	 * weui.uploader('#uploader', {
	 *    url: 'http://localhost:8081',
	 *    auto: true,
	 *    type: 'file',
	 *    fileVal: 'fileVal',
	 *    compress: {
	 *        width: 1600,
	 *        height: 1600,
	 *        quality: .8
	 *    },
	 *    onBeforeQueued: function(files) {
	 *        // `this` 是轮询到的文件, `files` 是所有文件
	 *
	 *        if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
	 *            weui.alert('请上传图片');
	 *            return false; // 阻止文件添加
	 *        }
	 *        if(this.size > 10 * 1024 * 1024){
	 *            weui.alert('请上传不超过10M的图片');
	 *            return false;
	 *        }
	 *        if (files.length > 5) { // 防止一下子选择过多文件
	 *            weui.alert('最多只能上传5张图片，请重新选择');
	 *            return false;
	 *        }
	 *        if (uploadCount + 1 > 5) {
	 *            weui.alert('最多只能上传5张图片');
	 *            return false;
	 *        }
	 *
	 *        ++uploadCount;
	 *
	 *        // return true; // 阻止默认行为，不插入预览图的框架
	 *    },
	 *    onQueued: function(){
	 *        console.log(this);
	 *        // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64
	 *
	 *        // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现
	 *
	 *        // return true; // 阻止默认行为，不显示预览图的图像
	 *    },
	 *    onBeforeSend: function(data, headers){
	 *        console.log(this, data, headers);
	 *        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
	 *        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部
	 *
	 *        // return false; // 阻止文件上传
	 *    },
	 *    onProgress: function(procent){
	 *        console.log(this, procent);
	 *        // return true; // 阻止默认行为，不使用默认的进度显示
	 *    },
	 *    onSuccess: function (ret) {
	 *        console.log(this, ret);
	 *        // return true; // 阻止默认行为，不使用默认的成功态
	 *    },
	 *    onError: function(err){
	 *        console.log(this, err);
	 *        // return true; // 阻止默认行为，不使用默认的失败态
	 *    }
	 * });
	 */
	function uploader(selector, options) {
	    var $uploader = (0, _util2.default)(selector);
	    var URL = window.URL || window.webkitURL || window.mozURL;

	    // 找到DOM里file-content，若无，则插入一个。
	    function findFileCtn($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]');
	        var $fileCtn = $file.find('.weui-uploader__file-content');

	        if (!$fileCtn.length) {
	            $fileCtn = (0, _util2.default)('<div class="weui-uploader__file-content"></div>');
	            $file.append($fileCtn);
	        }
	        $file.addClass('weui-uploader__file_status');
	        return $fileCtn;
	    }

	    // 清除DOM里的上传状态
	    function clearFileStatus($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]').removeClass('weui-uploader__file_status');
	        $file.find('.weui-uploader__file-content').remove();
	    }

	    // 设置上传
	    function setUploadFile(file) {
	        file.url = URL.createObjectURL(file);
	        file.upload = function () {
	            (0, _upload2.default)(_util2.default.extend({
	                $uploader: $uploader,
	                file: file
	            }, options));
	        };

	        options.onQueued(file);
	        if (options.auto) file.upload();
	    }

	    options = _util2.default.extend({
	        url: '',
	        auto: true,
	        type: 'file',
	        fileVal: 'file',
	        onBeforeQueued: _util2.default.noop,
	        onQueued: _util2.default.noop,
	        onBeforeSend: _util2.default.noop,
	        onSuccess: _util2.default.noop,
	        onProgress: _util2.default.noop,
	        onError: _util2.default.noop
	    }, options);

	    if (options.compress !== false) {
	        options.compress = _util2.default.extend({
	            width: 1600,
	            height: 1600,
	            quality: .8
	        }, options.compress);
	    }

	    if (options.onBeforeQueued) {
	        (function () {
	            var onBeforeQueued = options.onBeforeQueued;
	            options.onBeforeQueued = function (file, files) {
	                var ret = onBeforeQueued.call(file, files);
	                if (ret === false) {
	                    return false;
	                }
	                if (ret === true) {
	                    return;
	                }

	                var $item = (0, _util2.default)(_util2.default.render(_item2.default, {
	                    id: file.id
	                }));
	                $uploader.find('.weui-uploader__files').append($item);
	            };
	        })();
	    }
	    if (options.onQueued) {
	        (function () {
	            var onQueued = options.onQueued;
	            options.onQueued = function (file) {
	                if (!onQueued.call(file)) {
	                    var $file = $uploader.find('[data-id="' + file.id + '"]');
	                    $file.css({
	                        backgroundImage: 'url("' + (file.base64 || file.url) + '")'
	                    });
	                    if (!options.auto) {
	                        clearFileStatus($uploader, file.id);
	                    }
	                }
	            };
	        })();
	    }
	    if (options.onBeforeSend) {
	        (function () {
	            var onBeforeSend = options.onBeforeSend;
	            options.onBeforeSend = function (file, data, headers) {
	                var ret = onBeforeSend.call(file, data, headers);
	                if (ret === false) {
	                    return false;
	                }
	            };
	        })();
	    }
	    if (options.onSuccess) {
	        (function () {
	            var onSuccess = options.onSuccess;
	            options.onSuccess = function (file, ret) {
	                if (!onSuccess.call(file, ret)) {
	                    clearFileStatus($uploader, file.id);
	                }
	            };
	        })();
	    }
	    if (options.onProgress) {
	        (function () {
	            var onProgress = options.onProgress;
	            options.onProgress = function (file, percent) {
	                if (!onProgress.call(file, percent)) {
	                    findFileCtn($uploader, file.id).html(percent + '%');
	                }
	            };
	        })();
	    }
	    if (options.onError) {
	        (function () {
	            var onError = options.onError;
	            options.onError = function (file, err) {
	                if (!onError.call(file, err)) {
	                    findFileCtn($uploader, file.id).html('<i class="weui-icon-warn"></i>');
	                }
	            };
	        })();
	    }

	    $uploader.find('input[type="file"]').on('change', function (evt) {
	        var files = evt.target.files;

	        if (files.length === 0) {
	            return;
	        }

	        if (options.compress === false && options.type == 'file') {
	            // 以原文件方式上传
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                setUploadFile(file);
	            });
	        } else {
	            // base64上传 和 压缩上传
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                (0, _image.compress)(file, options, function (blob) {
	                    if (blob) setUploadFile(blob);
	                });
	            });
	        }

	        this.value = '';
	    });
	}
	exports.default = uploader;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> ";

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.detectVerticalSquash = detectVerticalSquash;
	exports.dataURItoBlob = dataURItoBlob;
	exports.compress = compress;
	/**
	 * 检查图片是否有被压扁，如果有，返回比率
	 */
	function detectVerticalSquash(img) {
	    // 拍照在IOS7或以下的机型会出现照片被压扁的bug
	    var data;
	    var ih = img.naturalHeight;
	    var canvas = document.createElement('canvas');
	    canvas.width = 1;
	    canvas.height = ih;
	    var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0, 0);
	    try {
	        data = ctx.getImageData(0, 0, 1, ih).data;
	    } catch (err) {
	        console.log('Cannot check verticalSquash: CORS?');
	        return 1;
	    }
	    var sy = 0;
	    var ey = ih;
	    var py = ih;
	    while (py > sy) {
	        var alpha = data[(py - 1) * 4 + 3];
	        if (alpha === 0) {
	            ey = py;
	        } else {
	            sy = py;
	        }
	        py = ey + sy >> 1; // py = parseInt((ey + sy) / 2)
	    }
	    var ratio = py / ih;
	    return ratio === 0 ? 1 : ratio;
	}

	/**
	 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
	 * @param dataURI
	 */
	function dataURItoBlob(dataURI) {
	    var byteString = atob(dataURI.split(',')[1]);
	    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	    var ab = new ArrayBuffer(byteString.length);
	    var ia = new Uint8Array(ab);
	    for (var i = 0; i < byteString.length; i++) {
	        ia[i] = byteString.charCodeAt(i);
	    }
	    return new Blob([ab], { type: mimeString });
	}

	/**
	 * 压缩图片
	 */
	function compress(file, options, callback) {
	    var reader = new FileReader();
	    reader.onload = function (evt) {
	        if (options.compress === false) {
	            // 不启用压缩 & base64上传 的分支
	            file.base64 = evt.target.result;
	            callback(file);
	            return;
	        }

	        // 启用压缩的分支
	        var img = new Image();
	        img.onload = function () {
	            var ratio = detectVerticalSquash(img);
	            var canvas = document.createElement('canvas');
	            var ctx = canvas.getContext('2d');

	            var maxW = options.compress.width;
	            var maxH = options.compress.height;
	            var w = img.width;
	            var h = img.height;
	            var dataURL = void 0;

	            if (w < h && h > maxH) {
	                w = parseInt(maxH * img.width / img.height);
	                h = maxH;
	            } else if (w >= h && w > maxW) {
	                h = parseInt(maxW * img.height / img.width);
	                w = maxW;
	            }

	            canvas.width = w;
	            canvas.height = h;

	            ctx.drawImage(img, 0, 0, w, h / ratio);

	            if (/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)) {
	                dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
	            } else {
	                dataURL = canvas.toDataURL(file.type);
	            }

	            if (options.type == 'file') {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 压缩出错，以文件方式上传的，采用原文件上传
	                    console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
	                    callback(file);
	                } else {
	                    var blob = dataURItoBlob(dataURL);
	                    blob.id = file.id;
	                    blob.name = file.name;
	                    blob.lastModified = file.lastModified;
	                    blob.lastModifiedDate = file.lastModifiedDate;
	                    callback(blob);
	                }
	            } else {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 压缩失败，以base64上传的，直接报错不上传
	                    options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
	                    callback();
	                } else {
	                    file.base64 = dataURL;
	                    callback(file);
	                }
	            }
	        };
	        img.src = evt.target.result;
	    };
	    reader.readAsDataURL(file);
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = upload;
	function upload(options) {
	    var url = options.url;
	    var file = options.file;
	    var fileVal = options.fileVal;
	    var onBeforeSend = options.onBeforeSend;
	    var onProgress = options.onProgress;
	    var onError = options.onError;
	    var onSuccess = options.onSuccess;
	    var name = file.name;
	    var type = file.type;
	    var lastModifiedDate = file.lastModifiedDate;

	    var data = {
	        name: name,
	        type: type,
	        size: options.type == 'file' ? file.size : file.base64.length,
	        lastModifiedDate: lastModifiedDate
	    };
	    var headers = {};

	    if (onBeforeSend(file, data, headers) === false) return;

	    onProgress(file, 0);

	    var formData = new FormData();
	    var xhr = new XMLHttpRequest();

	    file.xhr = xhr;

	    // 设置参数
	    Object.keys(data).forEach(function (key) {
	        formData.append(key, data[key]);
	    });
	    if (options.type == 'file') {
	        formData.append(fileVal, file, name);
	    } else {
	        formData.append(fileVal, file.base64);
	    }

	    xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4) {
	            if (xhr.status == 200) {
	                try {
	                    // 只支持json
	                    var ret = JSON.parse(xhr.responseText);
	                    onSuccess(file, ret);
	                } catch (err) {
	                    onError(file, err);
	                }
	            } else {
	                onError(file, new Error('XMLHttpRequest response status is ' + xhr.status));
	            }
	        }
	    };
	    xhr.upload.addEventListener('progress', function (evt) {
	        if (evt.total == 0) return;

	        var percent = Math.ceil(evt.loaded / evt.total) * 100;

	        onProgress(file, percent);
	    }, false);

	    xhr.open('POST', url);

	    // 设置头部信息
	    Object.keys(headers).forEach(function (key) {
	        xhr.setRequestHeader(key, headers[key]);
	    });

	    xhr.send(formData);
	}
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	__webpack_require__(25);

	var _util3 = __webpack_require__(26);

	var util = _interopRequireWildcard(_util3);

	var _picker = __webpack_require__(27);

	var _picker2 = _interopRequireDefault(_picker);

	var _group = __webpack_require__(28);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $body = (0, _util2.default)('body');
	var _sington = void 0;

	var destroy = function destroy($picker) {
	    if ($picker) {
	        $picker.remove();
	        _sington = false;
	    }
	};

	var show = function show($picker) {
	    $body.append($picker);

	    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	    _util2.default.getStyle($picker[0], 'transform');

	    $picker.find('.weui-mask').addClass('weui-animate-fade-in');
	    $picker.find('.weui-picker').addClass('weui-animate-slide-up');
	};

	var hide = function hide($picker) {
	    $picker.find('.weui-mask').addClass('weui-animate-fade-out');
	    $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
	        destroy($picker);
	    });
	};

	// temp 存在上一次滑动的位置
	var temp = {};

	/**
	 * picker 多列选择器。
	 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
	 * @param {Object} options 配置项
	 * @param {string=} [options.id=default] 作为picker的唯一标识
	 * @param {function=} options.onChange 在picker选中的值发生变化的时候回调
	 * @param {function=} options.onConfirm 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 * @example
	 * // 单列picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     disabled: true // 不可用
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3
	 * },
	 * {
	 *     label: '公车票',
	 *     value: 4,
	 * }
	 * ], {
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'singleLinePicker'
	 * });
	 *
	 * @example
	 * // 多列picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     children: [
	 *         {
	 *             label: '经济舱',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '商务舱',
	 *             value: 2
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1,
	 *     children: [
	 *         {
	 *             label: '卧铺',
	 *             value: 1,
	 *             disabled: true // 不可用
	 *         },
	 *         {
	 *             label: '坐票',
	 *             value: 2
	 *         },
	 *         {
	 *             label: '站票',
	 *             value: 3
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3,
	 *     children: [
	 *         {
	 *             label: '快班',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '普通',
	 *             value: 2
	 *         }
	 *     ]
	 * }
	 * ], {
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'doubleLinePicker'
	 * });
	 */
	function picker() {
	    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var options = arguments[1];

	    if (_sington) return _sington;

	    var defaults = _util2.default.extend({
	        id: 'default',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop
	    }, options);

	    //获取缓存
	    temp[defaults.id] = temp[defaults.id] || [];
	    var result = [];
	    var lineTemp = temp[defaults.id];
	    var $picker = (0, _util2.default)(_picker2.default);
	    var depth = util.depthOf(items[0]),
	        groups = '';

	    while (depth--) {
	        groups += _group2.default;
	    }

	    $picker.find('.weui-picker__bd').html(groups);
	    show($picker);

	    // 初始化滚动
	    function scroll(items, level) {
	        $picker.find('.weui-picker__group').eq(level).scroll({
	            items: items,
	            temp: lineTemp[level],
	            onChange: function onChange(item, index) {
	                //为当前的result赋值。
	                if (item) {
	                    result[level] = item.value;
	                } else {
	                    result[level] = null;
	                }
	                lineTemp[level] = index;

	                /**
	                 * @子列表处理 1.在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
	                 *            2.滑动之后发现重新有子列表时，再次显示子列表。
	                 *
	                 * @回调处理 1.因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
	                 *            2.所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
	                 */
	                if (item.children && item.children.length > 0) {
	                    $picker.find('.weui-picker__group').eq(level + 1).show();
	                    scroll(item.children, level + 1);
	                } else {
	                    //如果子列表test不通过，子列表的长度减1。
	                    result[level + 1] = null;
	                    result.length = level + 1;
	                    $picker.find('.weui-picker__group').eq(level + 1).hide();

	                    //仅在没有值列表的时候调用onChange回调函数。
	                    defaults.onChange(result);
	                }
	            },
	            onConfirm: defaults.onConfirm
	        });
	    }
	    scroll(items, 0);

	    $picker.on('click', '.weui-mask', function () {
	        hide($picker);
	    }).on('click', '.weui-picker__action', function () {
	        hide($picker);
	    }).on('click', '#weui-picker-confirm', function () {
	        defaults.onConfirm(result);
	    });

	    $picker.hide = function () {
	        hide($picker);
	    };
	    _sington = $picker;
	    return $picker;
	}

	/**
	 * dataPicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
	 * @param options 配置项
	 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
	 * @param {number=} [options.start=2000] 起始年份
	 * @param {number=} [options.end=2030] 结束年份
	 * @param {function=} options.onChange 在picker选中的值发生变化的时候回调
	 * @param {function=} options.onConfirm 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 *@example
	 * weui.datePicker({
	 *     start: 2010,
	 *     end: 2016,
	 *     onChange: function(result){
	 *         console.log(result);
	 *     },
	 *     onConfirm: function(result){
	 *         console.log(result);
	 *     },
	 *     id: 'datePicker'
	 * });
	 */
	function datePicker(options) {
	    var defaults = _util2.default.extend({
	        id: 'datePicker',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        start: 2000,
	        end: 2030
	    }, options);

	    //年份最小为1900，最大为2050
	    /*
	    defaults.start = defaults.start < 1900 ? 1900 : defaults.start;
	    defaults.end = defaults.end > 2050 ? 2050 : defaults.end;
	    */

	    var date = [];
	    var daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //所有月份的天数
	    for (var i = defaults.start; i <= defaults.end; i++) {
	        var months = [];
	        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
	            //判定为闰年
	            daysTotal[1] = 29;
	        } else {
	            daysTotal[1] = 28;
	        }
	        for (var j = 0; j < 12; j++) {
	            var dates = [];
	            for (var k = 1; k < daysTotal[j] + 1; k++) {
	                var _date = {
	                    label: k + '日',
	                    value: k
	                };
	                dates.push(_date);
	            }
	            months.push({
	                label: j + 1 + '月',
	                value: j,
	                children: dates
	            });
	        }

	        var year = {
	            label: i + '年',
	            value: i,
	            children: months
	        };

	        date.push(year);
	    }

	    return picker(date, defaults);
	}

	exports.default = {
	    picker: picker,
	    datePicker: datePicker
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * set transition
	 * @param $target
	 * @param time
	 */
	var setTransition = function setTransition($target, time) {
	    return $target.css({
	        '-webkit-transition': 'all ' + time + 's',
	        'transition': 'all ' + time + 's'
	    });
	};

	/**
	 * set translate
	 */
	var setTranslate = function setTranslate($target, diff) {
	    return $target.css({
	        '-webkit-transform': 'translate3d(0, ' + diff + 'px, 0)',
	        'transform': 'translate3d(0, ' + diff + 'px, 0)'
	    });
	};

	/**
	 * @desc get index of middle item
	 * @param items
	 * @returns {number}
	 */
	var getDefaultIndex = function getDefaultIndex(items) {
	    var current = Math.floor(items.length / 2);
	    var count = 0;
	    while (!!items[current] && items[current].disabled) {
	        current = ++current % items.length;
	        count++;

	        if (count > items.length) {
	            throw new Error('No selectable item.');
	        }
	    }

	    return current;
	};

	var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
	    var currentIndex = getDefaultIndex(items);

	    return (offset - currentIndex) * rowHeight;
	};

	/**
	 * get max translate
	 * @param offset
	 * @param rowHeight
	 * @returns {number}
	 */
	var getMax = function getMax(offset, rowHeight) {
	    return offset * rowHeight;
	};

	/**
	 * get min translate
	 * @param offset
	 * @param rowHeight
	 * @param length
	 * @returns {number}
	 */
	var getMin = function getMin(offset, rowHeight, length) {
	    return -(rowHeight * (length - offset - 1));
	};

	_util2.default.fn.scroll = function (options) {
	    var _this = this;

	    var defaults = _util2.default.extend({
	        items: [], // 数据
	        scrollable: '.weui-picker__content', // 滚动的元素
	        offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
	        rowHeight: 34, // 列表每一行的高度
	        onChange: _util2.default.noop, // onChange回调
	        temp: null, // translate的缓存
	        bodyHeight: 7 * 34 // picker的高度，用于辅助点击滚动的计算
	    }, options);
	    var items = defaults.items.map(function (item) {
	        return '<div class="weui-picker__item' + (item.disabled ? ' weui-picker__item_disabled' : '') + '">' + item.label + '</div>';
	    }).join('');
	    (0, _util2.default)(this).find('.weui-picker__content').html(items);

	    var $scrollable = (0, _util2.default)(this).find(defaults.scrollable); // 可滚动的元素
	    var start = void 0; // 保存开始按下的位置
	    var end = void 0; // 保存结束时的位置
	    var startTime = void 0; // 开始触摸的时间
	    var translate = void 0; // 缓存 translate
	    var points = []; // 记录移动点
	    var windowHeight = window.innerHeight; // 屏幕的高度

	    // 首次触发选中事件
	    // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
	    if (defaults.temp !== null && defaults.temp < defaults.items.length) {
	        var index = defaults.temp;
	        defaults.onChange.call(this, defaults.items[index], index);
	        translate = (defaults.offset - index) * defaults.rowHeight;
	    } else {
	        var _index = getDefaultIndex(defaults.items);
	        defaults.onChange.call(this, defaults.items[_index], _index);
	        translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
	    }
	    setTranslate($scrollable, translate);

	    var stop = function stop(diff) {
	        translate += diff;

	        // 移动到最接近的那一行
	        translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
	        var max = getMax(defaults.offset, defaults.rowHeight);
	        var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length);
	        // 不要超过最大值或者最小值
	        if (translate > max) {
	            translate = max;
	        }
	        if (translate < min) {
	            translate = min;
	        }

	        // 如果是 disabled 的就跳过
	        var index = defaults.offset - translate / defaults.rowHeight;
	        while (!!defaults.items[index] && defaults.items[index].disabled) {
	            diff > 0 ? ++index : --index;
	        }
	        translate = (defaults.offset - index) * defaults.rowHeight;
	        setTransition($scrollable, .3);
	        setTranslate($scrollable, translate);

	        // 触发选择事件
	        defaults.onChange.call(_this, defaults.items[index], index);
	    };

	    /**
	     * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
	     */
	    $scrollable = (0, _util2.default)(this).offAll().on('touchstart', function (evt) {
	        start = evt.changedTouches[0].pageY;
	        startTime = +new Date();
	    }).on('touchmove', function (evt) {
	        end = evt.changedTouches[0].pageY;
	        var diff = end - start;

	        setTransition($scrollable, 0);
	        setTranslate($scrollable, translate + diff);
	        startTime = +new Date();
	        points.push({ time: startTime, y: end });
	        if (points.length > 40) {
	            points.shift();
	        }

	        evt.preventDefault();
	    }).on('touchend', function (evt) {
	        /**
	         * 思路:
	         * 0. touchstart 记录按下的点和时间
	         * 1. touchmove 移动时记录前 40个经过的点和时间
	         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
	         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
	         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
	         */
	        var endTime = new Date().getTime();
	        end = evt.changedTouches[0].pageY;
	        var relativeY = windowHeight - defaults.bodyHeight / 2;

	        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
	        if (endTime - startTime > 100) {
	            //如果end和start相差小于10，则视为
	            if (Math.abs(end - start) > 10) {
	                stop(end - start);
	            } else {
	                stop(relativeY - end);
	            }
	        } else {
	            if (Math.abs(end - start) > 10) {
	                var endPos = points.length - 1;
	                var startPos = endPos;
	                for (var i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
	                    startPos = i;
	                }

	                if (startPos !== endPos) {
	                    var ep = points[endPos];
	                    var sp = points[startPos];
	                    var t = ep.time - sp.time;
	                    var s = ep.y - sp.y;
	                    var v = s / t; // 出手时的速度
	                    var diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”
	                    stop(diff);
	                } else {
	                    stop(0);
	                }
	            } else {
	                stop(relativeY - end);
	            }
	        }
	    }).find(defaults.scrollable);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var depthOf = exports.depthOf = function depthOf(object) {
	    var depth = 1;
	    if (object.children && object.children[0]) {
	        depth = depthOf(object.children[0]) + 1;
	    }
	    return depth;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd> </div> </div> </div>";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(2);

	var _util2 = _interopRequireDefault(_util);

	var _gallery = __webpack_require__(30);

	var _gallery2 = _interopRequireDefault(_gallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $body = (0, _util2.default)('body');
	var _sington = void 0;

	/**
	 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
	 * @param {string} url gallery显示的图片的url
	 * @param {object=} options 配置项
	 * @param {function=} options.onDelete 点击删除图片时的回调
	 *
	 * @example
	 * var gallery = weui.gallery(url, {
	 *     onDelete: function(){
	 *         if(confirm('确定删除该图片？')){ console.log('删除'); }
	 *         gallery.hide();
	 *     }
	 * });
	 */
	function gallery(url) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    var $gallery = (0, _util2.default)(_util2.default.render(_gallery2.default, { url: url }));

	    options = _util2.default.extend({
	        onDelete: _util2.default.noop
	    }, options);

	    function hide() {
	        $gallery.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $gallery.remove();
	            _sington = false;
	        });
	    }

	    $body.append($gallery);
	    $gallery.find('.weui-gallery__img').on('click', hide);
	    $gallery.find('.weui-gallery__del').on('click', function () {
	        options.onDelete.call(this, url);
	    });

	    $gallery.show().addClass('weui-animate-fade-in');

	    $gallery.hide = hide;
	    _sington = $gallery;
	    return $gallery;
	}
	exports.default = gallery;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-gallery> <span class=weui-gallery__img style=background-image:url(<%=url%>)></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i> </a> </div> </div> ";

/***/ }
/******/ ])
});
;