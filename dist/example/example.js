/******/ (function(modules) { // webpackBootstrap
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

	var _fastclick = __webpack_require__(1);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _weui = __webpack_require__(2);

	var _weui2 = _interopRequireDefault(_weui);

	var _city = __webpack_require__(33);

	var _city2 = _interopRequireDefault(_city);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_fastclick2.default.attach(document.body);

	/* dialog */
	// import 'weui';
	document.querySelector('#alertBtn').addEventListener('click', function () {
	    _weui2.default.alert('自定义标题的alert', function () {
	        console.log('ok');
	    }, {
	        title: '自定义标题'
	    });
	});

	/* confirm */
	document.querySelector('#confirmBtn').addEventListener('click', function () {
	    _weui2.default.confirm('自定义标题的confirm', function () {
	        console.log('yes');
	    }, function () {
	        console.log('no');
	    }, {
	        title: '自定义标题'
	    });
	});

	/* toast */
	document.querySelector('#toastBtn').addEventListener('click', function () {
	    _weui2.default.toast('操作成功', 3000);
	});

	/* loading */
	document.querySelector('#loadingBtn').addEventListener('click', function () {
	    var loading = _weui2.default.loading('loading');
	    setTimeout(function () {
	        loading.hide();
	    }, 3000);
	});

	/* actionSheet */
	document.querySelector('#actionSheetBtn').addEventListener('click', function () {
	    _weui2.default.actionSheet([{
	        label: '拍照',
	        onClick: function onClick() {
	            console.log('拍照');
	        }
	    }, {
	        label: '从相册选择',
	        onClick: function onClick() {
	            console.log('从相册选择');
	        }
	    }, {
	        label: '其他',
	        onClick: function onClick() {
	            console.log('其他');
	        }
	    }], [{
	        label: '取消',
	        onClick: function onClick() {
	            console.log('取消');
	        }
	    }]);
	});

	/* tipTips */
	document.querySelector('#topTipsBtn').addEventListener('click', function () {
	    _weui2.default.topTips('请填写正确的字段', {
	        duration: 3000,
	        callback: function callback() {
	            console.log('close');
	        }
	    });
	});

	/* picker */
	// 时间选择器
	document.querySelector('#datePickerBtn').addEventListener('click', function () {
	    _weui2.default.datePicker({
	        start: 1990,
	        end: 2000,
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'DatePicker'
	    });
	});

	// 城市选择器
	document.querySelector('#cityPickerBtn').addEventListener('click', function () {
	    _weui2.default.picker(_city2.default, {
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'districtPicker'
	    });
	});

	// 普通选择器
	document.querySelector('#pickerBtn').addEventListener('click', function () {
	    _weui2.default.picker([{
	        label: '飞机票',
	        value: 0
	    }, {
	        label: '火车票',
	        disabled: true,
	        value: 1
	    }, {
	        label: '的士票',
	        disabled: true,
	        value: 2
	    }, {
	        label: '住宿费',
	        value: 3
	    }, {
	        label: '礼品费',
	        value: 4
	    }, {
	        label: '活动费',
	        value: 5
	    }, {
	        label: '通讯费',
	        value: 6
	    }, {
	        label: '补助',
	        value: 7
	    }, {
	        label: '通讯费',
	        value: 8
	    }, {
	        label: '其他',
	        value: 9
	    }], {
	        onChange: function onChange(result) {
	            //console.log(item, index);
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'singleLinePicker'
	    });
	});

	/* searchbar */
	_weui2.default.searchBar('#searchBar');

	/* tab */
	_weui2.default.tab('#tab', {
	    defaultIndex: 0,
	    onChange: function onChange(index) {
	        console.log(index);
	    }
	});

	/* form */
	// 约定正则
	var regexp = {
	    regexp: {
	        IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	        VCODE: /^.{4}$/
	    }
	};

	// 失去焦点时检测
	_weui2.default.form.checkIfBlur('#form', regexp);

	// 表单提交
	document.querySelector('#formSubmitBtn').addEventListener('click', function () {
	    _weui2.default.form.validate('#form', function (error) {
	        console.log(error);
	        if (!error) {
	            var loading = _weui2.default.loading('提交中...');
	            setTimeout(function () {
	                loading.hide();
	                _weui2.default.toast('提交成功', 3000);
	            }, 1500);
	        }
	    }, regexp);
	});

	/* 图片自动上传 */
	var uploadCount = 0;
	var uploadCountDom = document.getElementById("uploadCount");
	_weui2.default.uploader('#uploader', {
	    url: 'http://localhost:8002/upload',
	    auto: true,
	    type: 'file',
	    fileVal: 'fileVal',
	    compress: {
	        width: 1600,
	        height: 1600,
	        quality: .8
	    },
	    onBeforeQueued: function onBeforeQueued(files) {
	        if (["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0) {
	            _weui2.default.alert('请上传图片');
	            return false;
	        }
	        if (this.size > 10 * 1024 * 1024) {
	            _weui2.default.alert('请上传不超过10M的图片');
	            return false;
	        }
	        if (files.length > 5) {
	            // 防止一下子选中过多文件
	            _weui2.default.alert('最多只能上传5张图片，请重新选择');
	            return false;
	        }
	        if (uploadCount + 1 > 5) {
	            _weui2.default.alert('最多只能上传5张图片');
	            return false;
	        }

	        ++uploadCount;
	        uploadCountDom.innerHTML = uploadCount;
	    },
	    onQueued: function onQueued() {
	        console.log(this);
	    },
	    onBeforeSend: function onBeforeSend(data, headers) {
	        console.log(this, data, headers);
	        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
	        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

	        // return false; // 阻止文件上传
	    },
	    onProgress: function onProgress(procent) {
	        console.log(this, procent);
	    },
	    onSuccess: function onSuccess(ret) {
	        console.log(this, ret);
	    },
	    onError: function onError(err) {
	        console.log(this, err);
	    }
	});

	// 缩略图预览
	document.querySelector('#uploaderFiles').addEventListener('click', function (e) {
	    var target = e.target;

	    while (!target.classList.contains('weui-uploader__file') && target) {
	        target = target.parentNode;
	    }
	    if (!target) return;

	    var url = target.getAttribute('style') || '';
	    if (url) {
	        url = url.match(/url\((.*?)\)/)[1];
	    }
	    var gallery = _weui2.default.gallery(url, {
	        onDelete: function onDelete() {
	            _weui2.default.confirm('确定删除该图片？', function () {
	                --uploadCount;
	                uploadCountDom.innerHTML = uploadCount;
	                target.remove();
	                gallery.hide();
	            });
	        }
	    });
	});

	/* 图片手动上传 */
	var uploadCustomFileList = [];

	// 这里是简单的调用，其余api请参考文档
	_weui2.default.uploader('#uploaderCustom', {
	    url: 'http://localhost:8002/upload',
	    auto: false,
	    onQueued: function onQueued() {
	        uploadCustomFileList.push(this);
	    }
	});

	// 手动上传按钮
	document.getElementById("uploaderCustomBtn").addEventListener('click', function () {
	    uploadCustomFileList.forEach(function (file) {
	        file.upload();
	    });
	});

	// 缩略图预览
	document.querySelector('#uploaderCustomFiles').addEventListener('click', function (e) {
	    var target = e.target;

	    while (!target.classList.contains('weui-uploader__file') && target) {
	        target = target.parentNode;
	    }
	    if (!target) return;

	    var url = target.getAttribute('style') || '';
	    var id = target.getAttribute('data-id');

	    if (url) {
	        url = url.match(/url\((.*?)\)/)[1];
	    }
	    var gallery = _weui2.default.gallery(url, {
	        onDelete: function onDelete() {
	            _weui2.default.confirm('确定删除该图片？', function () {
	                var index;
	                for (var i = 0, len = uploadCustomFileList.length; i < len; ++i) {
	                    var file = uploadCustomFileList[i];
	                    if (file.id == id) {
	                        index = i;
	                        break;
	                    }
	                }
	                if (index) uploadCustomFileList.splice(index, 1);

	                target.remove();
	                gallery.hide();
	            });
	        }
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(3);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _alert = __webpack_require__(9);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(10);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _toast = __webpack_require__(11);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(13);

	var _loading2 = _interopRequireDefault(_loading);

	var _actionSheet = __webpack_require__(15);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	var _topTips = __webpack_require__(17);

	var _topTips2 = _interopRequireDefault(_topTips);

	var _searchBar = __webpack_require__(19);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _tab = __webpack_require__(20);

	var _tab2 = _interopRequireDefault(_tab);

	var _form = __webpack_require__(21);

	var _form2 = _interopRequireDefault(_form);

	var _uploader = __webpack_require__(22);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _picker = __webpack_require__(26);

	var _gallery = __webpack_require__(31);

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(8);

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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	__webpack_require__(5);

	var _objectAssign = __webpack_require__(6);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(7);

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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div> <div class=weui-mask></div> <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a> <% } %> </div> </div> </div> ";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(3);

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(3);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _toast = __webpack_require__(12);

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
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i> <p class=weui-toast__content><%=content%></p> </div> </div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _loading = __webpack_require__(14);

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
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-loading_toast> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _actionSheet = __webpack_require__(16);

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
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"<% if(isAndroid){ %> weui-skin_android <% } %>\"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> ";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(18);

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
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui-toptips weui-toptips_warn\" style=display:block><%= content %></div>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(17);

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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _item = __webpack_require__(23);

	var _item2 = _interopRequireDefault(_item);

	var _image = __webpack_require__(24);

	var _upload = __webpack_require__(25);

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
/* 23 */
/***/ function(module, exports) {

	module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> ";

/***/ },
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	__webpack_require__(27);

	var _util3 = __webpack_require__(28);

	var util = _interopRequireWildcard(_util3);

	var _picker = __webpack_require__(29);

	var _picker2 = _interopRequireDefault(_picker);

	var _group = __webpack_require__(30);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(4);

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
/* 28 */
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
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd> </div> </div> </div>";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _gallery = __webpack_require__(32);

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
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=weui-gallery> <span class=weui-gallery__img style=background-image:url(<%=url%>)></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i> </a> </div> </div> ";

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=[{"label":"北京市","value":"11","children":[{"label":"北京","value":"01","children":[{"label":"东城区","value":"01"},{"label":"西城区","value":"02"},{"label":"崇文区","value":"03"},{"label":"宣武区","value":"04"},{"label":"朝阳区","value":"05"},{"label":"丰台区","value":"06"},{"label":"石景山区","value":"07"},{"label":"海淀区","value":"08"},{"label":"门头沟区","value":"09"},{"label":"房山区","value":"11"},{"label":"通州区","value":"12"},{"label":"顺义区","value":"13"},{"label":"昌平区","value":"14"},{"label":"大兴区","value":"15"},{"label":"怀柔区","value":"16"},{"label":"平谷区","value":"17"},{"label":"密云县","value":"28"},{"label":"延庆县","value":"29"}]}]},{"label":"天津市","value":"12","children":[{"label":"天津","value":"01","children":[{"label":"和平区","value":"01"},{"label":"河东区","value":"02"},{"label":"河西区","value":"03"},{"label":"南开区","value":"04"},{"label":"河北区","value":"05"},{"label":"红桥区","value":"06"},{"label":"塘沽区","value":"07"},{"label":"汉沽区","value":"08"},{"label":"大港区","value":"09"},{"label":"东丽区","value":"10"},{"label":"西青区","value":"11"},{"label":"津南区","value":"12"},{"label":"北辰区","value":"13"},{"label":"武清区","value":"14"},{"label":"宝坻区","value":"15"},{"label":"宁河县","value":"21"},{"label":"静海县","value":"23"},{"label":"蓟县","value":"25"}]}]},{"label":"河北省","value":"13","children":[{"label":"石家庄市","value":"01","children":[{"label":"长安区","value":"02"},{"label":"桥东区","value":"03"},{"label":"桥西区","value":"04"},{"label":"新华区","value":"05"},{"label":"井陉矿区","value":"07"},{"label":"裕华区","value":"08"},{"label":"井陉县","value":"21"},{"label":"正定县","value":"23"},{"label":"栾城县","value":"24"},{"label":"行唐县","value":"25"},{"label":"灵寿县","value":"26"},{"label":"高邑县","value":"27"},{"label":"深泽县","value":"28"},{"label":"赞皇县","value":"29"},{"label":"无极县","value":"30"},{"label":"平山县","value":"31"},{"label":"元氏县","value":"32"},{"label":"赵县","value":"33"},{"label":"辛集市","value":"81"},{"label":"藁城市","value":"82"},{"label":"晋州市","value":"83"},{"label":"新乐市","value":"84"},{"label":"鹿泉市","value":"85"}]},{"label":"唐山市","value":"02","children":[{"label":"路南区","value":"02"},{"label":"路北区","value":"03"},{"label":"古冶区","value":"04"},{"label":"开平区","value":"05"},{"label":"丰南区","value":"07"},{"label":"丰润区","value":"08"},{"label":"滦县","value":"23"},{"label":"滦南县","value":"24"},{"label":"乐亭县","value":"25"},{"label":"迁西县","value":"27"},{"label":"玉田县","value":"29"},{"label":"唐海县","value":"30"},{"label":"遵化市","value":"81"},{"label":"迁安市","value":"83"}]},{"label":"秦皇岛市","value":"03","children":[{"label":"海港区","value":"02"},{"label":"山海关区","value":"03"},{"label":"北戴河区","value":"04"},{"label":"青龙满族自治县","value":"21"},{"label":"昌黎县","value":"22"},{"label":"抚宁县","value":"23"},{"label":"卢龙县","value":"24"}]},{"label":"邯郸市","value":"04","children":[{"label":"邯山区","value":"02"},{"label":"丛台区","value":"03"},{"label":"复兴区","value":"04"},{"label":"峰峰矿区","value":"06"},{"label":"邯郸县","value":"21"},{"label":"临漳县","value":"23"},{"label":"成安县","value":"24"},{"label":"大名县","value":"25"},{"label":"涉县","value":"26"},{"label":"磁县","value":"27"},{"label":"肥乡县","value":"28"},{"label":"永年县","value":"29"},{"label":"邱县","value":"30"},{"label":"鸡泽县","value":"31"},{"label":"广平县","value":"32"},{"label":"馆陶县","value":"33"},{"label":"魏县","value":"34"},{"label":"曲周县","value":"35"},{"label":"武安市","value":"81"}]},{"label":"邢台市","value":"05","children":[{"label":"桥东区","value":"02"},{"label":"桥西区","value":"03"},{"label":"邢台县","value":"21"},{"label":"临城县","value":"22"},{"label":"内丘县","value":"23"},{"label":"柏乡县","value":"24"},{"label":"隆尧县","value":"25"},{"label":"任县","value":"26"},{"label":"南和县","value":"27"},{"label":"宁晋县","value":"28"},{"label":"巨鹿县","value":"29"},{"label":"新河县","value":"30"},{"label":"广宗县","value":"31"},{"label":"平乡县","value":"32"},{"label":"威县","value":"33"},{"label":"清河县","value":"34"},{"label":"临西县","value":"35"},{"label":"南宫市","value":"81"},{"label":"沙河市","value":"82"}]},{"label":"保定市","value":"06","children":[{"label":"新市区","value":"02"},{"label":"北市区","value":"03"},{"label":"南市区","value":"04"},{"label":"满城县","value":"21"},{"label":"清苑县","value":"22"},{"label":"涞水县","value":"23"},{"label":"阜平县","value":"24"},{"label":"徐水县","value":"25"},{"label":"定兴县","value":"26"},{"label":"唐县","value":"27"},{"label":"高阳县","value":"28"},{"label":"容城县","value":"29"},{"label":"涞源县","value":"30"},{"label":"望都县","value":"31"},{"label":"安新县","value":"32"},{"label":"易县","value":"33"},{"label":"曲阳县","value":"34"},{"label":"蠡县","value":"35"},{"label":"顺平县","value":"36"},{"label":"博野县","value":"37"},{"label":"雄县","value":"38"},{"label":"涿州市","value":"81"},{"label":"定州市","value":"82"},{"label":"安国市","value":"83"},{"label":"高碑店市","value":"84"}]},{"label":"张家口市","value":"07","children":[{"label":"桥东区","value":"02"},{"label":"桥西区","value":"03"},{"label":"宣化区","value":"05"},{"label":"下花园区","value":"06"},{"label":"宣化县","value":"21"},{"label":"张北县","value":"22"},{"label":"康保县","value":"23"},{"label":"沽源县","value":"24"},{"label":"尚义县","value":"25"},{"label":"蔚县","value":"26"},{"label":"阳原县","value":"27"},{"label":"怀安县","value":"28"},{"label":"万全县","value":"29"},{"label":"怀来县","value":"30"},{"label":"涿鹿县","value":"31"},{"label":"赤城县","value":"32"},{"label":"崇礼县","value":"33"}]},{"label":"承德市","value":"08","children":[{"label":"双桥区","value":"02"},{"label":"双滦区","value":"03"},{"label":"鹰手营子矿区","value":"04"},{"label":"承德县","value":"21"},{"label":"兴隆县","value":"22"},{"label":"平泉县","value":"23"},{"label":"滦平县","value":"24"},{"label":"隆化县","value":"25"},{"label":"丰宁满族自治县","value":"26"},{"label":"宽城满族自治县","value":"27"},{"label":"围场满族蒙古族自治县","value":"28"}]},{"label":"沧州市","value":"09","children":[{"label":"新华区","value":"02"},{"label":"运河区","value":"03"},{"label":"沧县","value":"21"},{"label":"青县","value":"22"},{"label":"东光县","value":"23"},{"label":"海兴县","value":"24"},{"label":"盐山县","value":"25"},{"label":"肃宁县","value":"26"},{"label":"南皮县","value":"27"},{"label":"吴桥县","value":"28"},{"label":"献县","value":"29"},{"label":"孟村回族自治县","value":"30"},{"label":"泊头市","value":"81"},{"label":"任丘市","value":"82"},{"label":"黄骅市","value":"83"},{"label":"河间市","value":"84"}]},{"label":"廊坊市","value":"10","children":[{"label":"安次区","value":"02"},{"label":"广阳区","value":"03"},{"label":"固安县","value":"22"},{"label":"永清县","value":"23"},{"label":"香河县","value":"24"},{"label":"大城县","value":"25"},{"label":"文安县","value":"26"},{"label":"大厂回族自治县","value":"28"},{"label":"霸州市","value":"81"},{"label":"三河市","value":"82"}]},{"label":"衡水市","value":"11","children":[{"label":"桃城区","value":"02"},{"label":"枣强县","value":"21"},{"label":"武邑县","value":"22"},{"label":"武强县","value":"23"},{"label":"饶阳县","value":"24"},{"label":"安平县","value":"25"},{"label":"故城县","value":"26"},{"label":"景县","value":"27"},{"label":"阜城县","value":"28"},{"label":"冀州市","value":"81"},{"label":"深州市","value":"82"}]}]},{"label":"山西省","value":"14","children":[{"label":"太原市","value":"01","children":[{"label":"小店区","value":"05"},{"label":"迎泽区","value":"06"},{"label":"杏花岭区","value":"07"},{"label":"尖草坪区","value":"08"},{"label":"万柏林区","value":"09"},{"label":"晋源区","value":"10"},{"label":"清徐县","value":"21"},{"label":"阳曲县","value":"22"},{"label":"娄烦县","value":"23"},{"label":"古交市","value":"81"}]},{"label":"大同市","value":"02","children":[{"label":"城区","value":"02"},{"label":"矿区","value":"03"},{"label":"南郊区","value":"11"},{"label":"新荣区","value":"12"},{"label":"阳高县","value":"21"},{"label":"天镇县","value":"22"},{"label":"广灵县","value":"23"},{"label":"灵丘县","value":"24"},{"label":"浑源县","value":"25"},{"label":"左云县","value":"26"},{"label":"大同县","value":"27"}]},{"label":"阳泉市","value":"03","children":[{"label":"城区","value":"02"},{"label":"矿区","value":"03"},{"label":"郊区","value":"11"},{"label":"平定县","value":"21"},{"label":"盂县","value":"22"}]},{"label":"长治市","value":"04","children":[{"label":"城区","value":"02"},{"label":"郊区","value":"11"},{"label":"长治县","value":"21"},{"label":"襄垣县","value":"23"},{"label":"屯留县","value":"24"},{"label":"平顺县","value":"25"},{"label":"黎城县","value":"26"},{"label":"壶关县","value":"27"},{"label":"长子县","value":"28"},{"label":"武乡县","value":"29"},{"label":"沁县","value":"30"},{"label":"沁源县","value":"31"},{"label":"潞城市","value":"81"}]},{"label":"晋城市","value":"05","children":[{"label":"城区","value":"02"},{"label":"沁水县","value":"21"},{"label":"阳城县","value":"22"},{"label":"陵川县","value":"24"},{"label":"泽州县","value":"25"},{"label":"高平市","value":"81"}]},{"label":"朔州市","value":"06","children":[{"label":"朔城区","value":"02"},{"label":"平鲁区","value":"03"},{"label":"山阴县","value":"21"},{"label":"应县","value":"22"},{"label":"右玉县","value":"23"},{"label":"怀仁县","value":"24"}]},{"label":"晋中市","value":"07","children":[{"label":"榆次区","value":"02"},{"label":"榆社县","value":"21"},{"label":"左权县","value":"22"},{"label":"和顺县","value":"23"},{"label":"昔阳县","value":"24"},{"label":"寿阳县","value":"25"},{"label":"太谷县","value":"26"},{"label":"祁县","value":"27"},{"label":"平遥县","value":"28"},{"label":"灵石县","value":"29"},{"label":"介休市","value":"81"}]},{"label":"运城市","value":"08","children":[{"label":"盐湖区","value":"02"},{"label":"临猗县","value":"21"},{"label":"万荣县","value":"22"},{"label":"闻喜县","value":"23"},{"label":"稷山县","value":"24"},{"label":"新绛县","value":"25"},{"label":"绛县","value":"26"},{"label":"垣曲县","value":"27"},{"label":"夏县","value":"28"},{"label":"平陆县","value":"29"},{"label":"芮城县","value":"30"},{"label":"永济市","value":"81"},{"label":"河津市","value":"82"}]},{"label":"忻州市","value":"09","children":[{"label":"忻府区","value":"02"},{"label":"定襄县","value":"21"},{"label":"五台县","value":"22"},{"label":"代县","value":"23"},{"label":"繁峙县","value":"24"},{"label":"宁武县","value":"25"},{"label":"静乐县","value":"26"},{"label":"神池县","value":"27"},{"label":"五寨县","value":"28"},{"label":"岢岚县","value":"29"},{"label":"河曲县","value":"30"},{"label":"保德县","value":"31"},{"label":"偏关县","value":"32"},{"label":"原平市","value":"81"}]},{"label":"临汾市","value":"10","children":[{"label":"尧都区","value":"02"},{"label":"曲沃县","value":"21"},{"label":"翼城县","value":"22"},{"label":"襄汾县","value":"23"},{"label":"洪洞县","value":"24"},{"label":"古县","value":"25"},{"label":"安泽县","value":"26"},{"label":"浮山县","value":"27"},{"label":"吉县","value":"28"},{"label":"乡宁县","value":"29"},{"label":"大宁县","value":"30"},{"label":"隰县","value":"31"},{"label":"永和县","value":"32"},{"label":"蒲县","value":"33"},{"label":"汾西县","value":"34"},{"label":"侯马市","value":"81"},{"label":"霍州市","value":"82"}]},{"label":"吕梁市","value":"11","children":[{"label":"离石区","value":"02"},{"label":"文水县","value":"21"},{"label":"交城县","value":"22"},{"label":"兴县","value":"23"},{"label":"临县","value":"24"},{"label":"柳林县","value":"25"},{"label":"石楼县","value":"26"},{"label":"岚县","value":"27"},{"label":"方山县","value":"28"},{"label":"中阳县","value":"29"},{"label":"交口县","value":"30"},{"label":"孝义市","value":"81"},{"label":"汾阳市","value":"82"}]}]},{"label":"内蒙古","value":"15","children":[{"label":"呼和浩特市","value":"01","children":[{"label":"新城区","value":"02"},{"label":"回民区","value":"03"},{"label":"玉泉区","value":"04"},{"label":"赛罕区","value":"05"},{"label":"土默特左旗","value":"21"},{"label":"托克托县","value":"22"},{"label":"和林格尔县","value":"23"},{"label":"清水河县","value":"24"},{"label":"武川县","value":"25"}]},{"label":"包头市","value":"02","children":[{"label":"东河区","value":"02"},{"label":"昆都仑区","value":"03"},{"label":"青山区","value":"04"},{"label":"石拐区","value":"05"},{"label":"白云矿区","value":"06"},{"label":"九原区","value":"07"},{"label":"土默特右旗","value":"21"},{"label":"固阳县","value":"22"},{"label":"达尔罕茂明安联合旗","value":"23"}]},{"label":"乌海市","value":"03","children":[{"label":"海勃湾区","value":"02"},{"label":"海南区","value":"03"},{"label":"乌达区","value":"04"}]},{"label":"赤峰市","value":"04","children":[{"label":"红山区","value":"02"},{"label":"元宝山区","value":"03"},{"label":"松山区","value":"04"},{"label":"阿鲁科尔沁旗","value":"21"},{"label":"巴林左旗","value":"22"},{"label":"巴林右旗","value":"23"},{"label":"林西县","value":"24"},{"label":"克什克腾旗","value":"25"},{"label":"翁牛特旗","value":"26"},{"label":"喀喇沁旗","value":"28"},{"label":"宁城县","value":"29"},{"label":"敖汉旗","value":"30"}]},{"label":"通辽市","value":"05","children":[{"label":"科尔沁区","value":"02"},{"label":"科尔沁左翼中旗","value":"21"},{"label":"科尔沁左翼后旗","value":"22"},{"label":"开鲁县","value":"23"},{"label":"库伦旗","value":"24"},{"label":"奈曼旗","value":"25"},{"label":"扎鲁特旗","value":"26"},{"label":"霍林郭勒市","value":"81"}]},{"label":"鄂尔多斯市","value":"06","children":[{"label":"东胜区","value":"02"},{"label":"达拉特旗","value":"21"},{"label":"准格尔旗","value":"22"},{"label":"鄂托克前旗","value":"23"},{"label":"鄂托克旗","value":"24"},{"label":"杭锦旗","value":"25"},{"label":"乌审旗","value":"26"},{"label":"伊金霍洛旗","value":"27"}]},{"label":"呼伦贝尔市","value":"07","children":[{"label":"海拉尔区","value":"02"},{"label":"阿荣旗","value":"21"},{"label":"莫力达瓦达斡尔族自治旗","value":"22"},{"label":"鄂伦春自治旗","value":"23"},{"label":"鄂温克族自治旗","value":"24"},{"label":"陈巴尔虎旗","value":"25"},{"label":"新巴尔虎左旗","value":"26"},{"label":"新巴尔虎右旗","value":"27"},{"label":"满洲里市","value":"81"},{"label":"牙克石市","value":"82"},{"label":"扎兰屯市","value":"83"},{"label":"额尔古纳市","value":"84"},{"label":"根河市","value":"85"}]},{"label":"巴彦淖尔市","value":"08","children":[{"label":"临河区","value":"02"},{"label":"五原县","value":"21"},{"label":"磴口县","value":"22"},{"label":"乌拉特前旗","value":"23"},{"label":"乌拉特中旗","value":"24"},{"label":"乌拉特后旗","value":"25"},{"label":"杭锦后旗","value":"26"}]},{"label":"乌兰察布市","value":"09","children":[{"label":"集宁区","value":"02"},{"label":"卓资县","value":"21"},{"label":"化德县","value":"22"},{"label":"商都县","value":"23"},{"label":"兴和县","value":"24"},{"label":"凉城县","value":"25"},{"label":"察哈尔右翼前旗","value":"26"},{"label":"察哈尔右翼中旗","value":"27"},{"label":"察哈尔右翼后旗","value":"28"},{"label":"四子王旗","value":"29"},{"label":"丰镇市","value":"81"}]},{"label":"兴安盟","value":"22","children":[{"label":"乌兰浩特市","value":"01"},{"label":"阿尔山市","value":"02"},{"label":"科尔沁右翼前旗","value":"21"},{"label":"科尔沁右翼中旗","value":"22"},{"label":"扎赉特旗","value":"23"},{"label":"突泉县","value":"24"}]},{"label":"锡林郭勒盟","value":"25","children":[{"label":"二连浩特市","value":"01"},{"label":"锡林浩特市","value":"02"},{"label":"阿巴嘎旗","value":"22"},{"label":"苏尼特左旗","value":"23"},{"label":"苏尼特右旗","value":"24"},{"label":"东乌珠穆沁旗","value":"25"},{"label":"西乌珠穆沁旗","value":"26"},{"label":"太仆寺旗","value":"27"},{"label":"镶黄旗","value":"28"},{"label":"正镶白旗","value":"29"},{"label":"正蓝旗","value":"30"},{"label":"多伦县","value":"31"}]},{"label":"阿拉善盟","value":"29","children":[{"label":"阿拉善左旗","value":"21"},{"label":"阿拉善右旗","value":"22"},{"label":"额济纳旗","value":"23"}]}]},{"label":"辽宁省","value":"21","children":[{"label":"沈阳市","value":"01","children":[{"label":"和平区","value":"02"},{"label":"沈河区","value":"03"},{"label":"大东区","value":"04"},{"label":"皇姑区","value":"05"},{"label":"铁西区","value":"06"},{"label":"苏家屯区","value":"11"},{"label":"东陵区","value":"12"},{"label":"沈北新区","value":"13"},{"label":"于洪区","value":"14"},{"label":"辽中县","value":"22"},{"label":"康平县","value":"23"},{"label":"法库县","value":"24"},{"label":"新民市","value":"81"}]},{"label":"大连市","value":"02","children":[{"label":"中山区","value":"02"},{"label":"西岗区","value":"03"},{"label":"沙河口区","value":"04"},{"label":"甘井子区","value":"11"},{"label":"旅顺口区","value":"12"},{"label":"金州区","value":"13"},{"label":"长海县","value":"24"},{"label":"瓦房店市","value":"81"},{"label":"普兰店市","value":"82"},{"label":"庄河市","value":"83"}]},{"label":"鞍山市","value":"03","children":[{"label":"铁东区","value":"02"},{"label":"铁西区","value":"03"},{"label":"立山区","value":"04"},{"label":"千山区","value":"11"},{"label":"台安县","value":"21"},{"label":"岫岩满族自治县","value":"23"},{"label":"海城市","value":"81"}]},{"label":"抚顺市","value":"04","children":[{"label":"新抚区","value":"02"},{"label":"东洲区","value":"03"},{"label":"望花区","value":"04"},{"label":"顺城区","value":"11"},{"label":"抚顺县","value":"21"},{"label":"新宾满族自治县","value":"23"},{"label":"清原满族自治县","value":"23"}]},{"label":"本溪市","value":"05","children":[{"label":"平山区","value":"02"},{"label":"溪湖区","value":"03"},{"label":"明山区","value":"04"},{"label":"南芬区","value":"05"},{"label":"本溪满族自治县","value":"21"},{"label":"桓仁满族自治县","value":"22"}]},{"label":"丹东市","value":"06","children":[{"label":"元宝区","value":"02"},{"label":"振兴区","value":"03"},{"label":"振安区","value":"04"},{"label":"宽甸满族自治县","value":"24"},{"label":"东港市","value":"81"},{"label":"凤城市","value":"82"}]},{"label":"锦州市","value":"07","children":[{"label":"古塔区","value":"02"},{"label":"凌河区","value":"03"},{"label":"太和区","value":"11"},{"label":"黑山县","value":"26"},{"label":"义县","value":"27"},{"label":"凌海市","value":"81"},{"label":"北镇市","value":"82"}]},{"label":"营口市","value":"08","children":[{"label":"站前区","value":"02"},{"label":"西市区","value":"03"},{"label":"鲅鱼圈区","value":"04"},{"label":"老边区","value":"11"},{"label":"盖州市","value":"81"},{"label":"大石桥市","value":"82"}]},{"label":"阜新市","value":"09","children":[{"label":"海州区","value":"02"},{"label":"新邱区","value":"03"},{"label":"太平区","value":"04"},{"label":"清河门区","value":"05"},{"label":"细河区","value":"11"},{"label":"阜新蒙古族自治县","value":"21"},{"label":"彰武县","value":"22"}]},{"label":"辽阳市","value":"10","children":[{"label":"白塔区","value":"02"},{"label":"文圣区","value":"03"},{"label":"宏伟区","value":"04"},{"label":"弓长岭区","value":"05"},{"label":"太子河区","value":"11"},{"label":"辽阳县","value":"21"},{"label":"灯塔市","value":"81"}]},{"label":"盘锦市","value":"11","children":[{"label":"双台子区","value":"02"},{"label":"兴隆台区","value":"03"},{"label":"大洼县","value":"21"},{"label":"盘山县","value":"22"}]},{"label":"铁岭市","value":"12","children":[{"label":"银州区","value":"02"},{"label":"清河区","value":"04"},{"label":"铁岭县","value":"21"},{"label":"西丰县","value":"23"},{"label":"昌图县","value":"24"},{"label":"调兵山市","value":"81"},{"label":"开原市","value":"82"}]},{"label":"朝阳市","value":"13","children":[{"label":"双塔区","value":"02"},{"label":"龙城区","value":"03"},{"label":"朝阳县","value":"21"},{"label":"建平县","value":"22"},{"label":"喀喇沁左翼蒙古族自治县","value":"24"},{"label":"北票市","value":"81"},{"label":"凌源市","value":"82"}]},{"label":"葫芦岛市","value":"14","children":[{"label":"连山区","value":"02"},{"label":"龙港区","value":"03"},{"label":"南票区","value":"04"},{"label":"绥中县","value":"21"},{"label":"建昌县","value":"22"},{"label":"兴城市","value":"81"}]}]},{"label":"吉林省","value":"22","children":[{"label":"长春市","value":"01","children":[{"label":"南关区","value":"02"},{"label":"宽城区","value":"03"},{"label":"朝阳区","value":"04"},{"label":"二道区","value":"05"},{"label":"绿园区","value":"06"},{"label":"双阳区","value":"12"},{"label":"农安县","value":"22"},{"label":"九台市","value":"81"},{"label":"榆树市","value":"82"},{"label":"德惠市","value":"83"}]},{"label":"吉林市","value":"02","children":[{"label":"昌邑区","value":"02"},{"label":"龙潭区","value":"03"},{"label":"船营区","value":"04"},{"label":"丰满区","value":"11"},{"label":"永吉县","value":"21"},{"label":"蛟河市","value":"81"},{"label":"桦甸市","value":"82"},{"label":"舒兰市","value":"83"},{"label":"磐石市","value":"84"}]},{"label":"四平市","value":"03","children":[{"label":"铁西区","value":"02"},{"label":"铁东区","value":"03"},{"label":"梨树县","value":"22"},{"label":"伊通满族自治县","value":"23"},{"label":"公主岭市","value":"81"},{"label":"双辽市","value":"82"}]},{"label":"辽源市","value":"04","children":[{"label":"龙山区","value":"02"},{"label":"西安区","value":"03"},{"label":"东丰县","value":"21"},{"label":"东辽县","value":"22"}]},{"label":"通化市","value":"05","children":[{"label":"东昌区","value":"02"},{"label":"二道江区","value":"03"},{"label":"通化县","value":"21"},{"label":"辉南县","value":"23"},{"label":"柳河县","value":"24"},{"label":"梅河口市","value":"81"},{"label":"集安市","value":"82"}]},{"label":"白山市","value":"06","children":[{"label":"八道江区","value":"02"},{"label":"江源区","value":"04"},{"label":"抚松县","value":"21"},{"label":"靖宇县","value":"22"},{"label":"长白朝鲜族自治县","value":"23"},{"label":"临江市","value":"81"}]},{"label":"松原市","value":"07","children":[{"label":"宁江区","value":"02"},{"label":"前郭尔罗斯蒙古族自治县","value":"21"},{"label":"长岭县","value":"22"},{"label":"乾安县","value":"23"},{"label":"扶余县","value":"24"}]},{"label":"白城市","value":"08","children":[{"label":"洮北区","value":"02"},{"label":"镇赉县","value":"21"},{"label":"通榆县","value":"22"},{"label":"洮南市","value":"81"},{"label":"大安市","value":"82"}]},{"label":"延边朝鲜族自治州","value":"24","children":[{"label":"延吉市","value":"01"},{"label":"图们市","value":"02"},{"label":"敦化市","value":"03"},{"label":"珲春市","value":"04"},{"label":"龙井市","value":"05"},{"label":"和龙市","value":"06"},{"label":"汪清县","value":"24"},{"label":"安图县","value":"26"}]}]},{"label":"黑龙江省","value":"23","children":[{"label":"哈尔滨市","value":"01","children":[{"label":"道里区","value":"02"},{"label":"南岗区","value":"03"},{"label":"道外区","value":"04"},{"label":"平房区","value":"08"},{"label":"松北区","value":"09"},{"label":"香坊区","value":"10"},{"label":"呼兰区","value":"11"},{"label":"阿城区","value":"12"},{"label":"依兰县","value":"23"},{"label":"方正县","value":"24"},{"label":"宾县","value":"25"},{"label":"巴彦县","value":"26"},{"label":"木兰县","value":"27"},{"label":"通河县","value":"28"},{"label":"延寿县","value":"29"},{"label":"双城市","value":"82"},{"label":"尚志市","value":"83"},{"label":"五常市","value":"84"}]},{"label":"哈尔滨市","value":"02","children":[{"label":"龙沙区","value":"02"},{"label":"建华区","value":"03"},{"label":"铁锋区","value":"04"},{"label":"昂昂溪区","value":"05"},{"label":"富拉尔基区","value":"06"},{"label":"碾子山区","value":"07"},{"label":"梅里斯达斡尔族区","value":"08"},{"label":"龙江县","value":"21"},{"label":"依安县","value":"23"},{"label":"泰来县","value":"24"},{"label":"甘南县","value":"25"},{"label":"富裕县","value":"27"},{"label":"克山县","value":"29"},{"label":"克东县","value":"30"},{"label":"拜泉县","value":"31"},{"label":"讷河市","value":"81"}]},{"label":"鸡西市","value":"03","children":[{"label":"鸡冠区","value":"02"},{"label":"恒山区","value":"03"},{"label":"滴道区","value":"04"},{"label":"梨树区","value":"05"},{"label":"城子河区","value":"06"},{"label":"麻山区","value":"07"},{"label":"鸡东县","value":"21"},{"label":"虎林市","value":"81"},{"label":"密山市","value":"82"}]},{"label":"鹤岗市","value":"04","children":[{"label":"向阳区","value":"02"},{"label":"工农区","value":"03"},{"label":"南山区","value":"04"},{"label":"兴安区","value":"05"},{"label":"东山区","value":"06"},{"label":"兴山区","value":"07"},{"label":"萝北县","value":"21"},{"label":"绥滨县","value":"22"}]},{"label":"双鸭山市","value":"05","children":[{"label":"尖山区","value":"02"},{"label":"岭东区","value":"03"},{"label":"四方台区","value":"05"},{"label":"宝山区","value":"06"},{"label":"集贤县","value":"21"},{"label":"友谊县","value":"22"},{"label":"宝清县","value":"23"},{"label":"饶河县","value":"24"}]},{"label":"大庆市","value":"06","children":[{"label":"萨尔图区","value":"02"},{"label":"龙凤区","value":"03"},{"label":"让胡路区","value":"04"},{"label":"红岗区","value":"05"},{"label":"大同区","value":"06"},{"label":"肇州县","value":"21"},{"label":"肇源县","value":"22"},{"label":"林甸县","value":"23"},{"label":"杜尔伯特蒙古族自治县","value":"24"}]},{"label":"伊春市","value":"07","children":[{"label":"伊春区","value":"02"},{"label":"南岔区","value":"03"},{"label":"友好区","value":"04"},{"label":"西林区","value":"05"},{"label":"翠峦区","value":"06"},{"label":"新青区","value":"07"},{"label":"美溪区","value":"08"},{"label":"金山屯区","value":"09"},{"label":"五营区","value":"10"},{"label":"乌马河区","value":"11"},{"label":"汤旺河区","value":"12"},{"label":"带岭区","value":"13"},{"label":"乌伊岭区","value":"14"},{"label":"红星区","value":"15"},{"label":"上甘岭区","value":"16"},{"label":"嘉荫县","value":"22"},{"label":"铁力市","value":"81"}]},{"label":"佳木斯市","value":"08","children":[{"label":"向阳区","value":"03"},{"label":"前进区","value":"04"},{"label":"东风区","value":"05"},{"label":"郊区","value":"11"},{"label":"桦南县","value":"22"},{"label":"桦川县","value":"26"},{"label":"汤原县","value":"28"},{"label":"抚远县","value":"33"},{"label":"同江市","value":"81"},{"label":"富锦市","value":"82"}]},{"label":"七台河市","value":"09","children":[{"label":"新兴区","value":"02"},{"label":"桃山区","value":"03"},{"label":"茄子河区","value":"04"},{"label":"勃利县","value":"21"}]},{"label":"牡丹江市","value":"10","children":[{"label":"东安区","value":"02"},{"label":"阳明区","value":"03"},{"label":"爱民区","value":"04"},{"label":"西安区","value":"05"},{"label":"东宁县","value":"24"},{"label":"林口县","value":"25"},{"label":"绥芬河市","value":"81"},{"label":"海林市","value":"83"},{"label":"宁安市","value":"84"},{"label":"穆棱市","value":"85"}]},{"label":"黑河市","value":"11","children":[{"label":"爱辉区","value":"02"},{"label":"嫩江县","value":"21"},{"label":"逊克县","value":"23"},{"label":"孙吴县","value":"24"},{"label":"北安市","value":"81"},{"label":"五大连池市","value":"82"}]},{"label":"绥化市","value":"12","children":[{"label":"北林区","value":"02"},{"label":"望奎县","value":"21"},{"label":"兰西县","value":"22"},{"label":"青冈县","value":"23"},{"label":"庆安县","value":"24"},{"label":"明水县","value":"25"},{"label":"绥棱县","value":"26"},{"label":"安达市","value":"81"},{"label":"肇东市","value":"82"},{"label":"海伦市","value":"83"}]},{"label":"大兴安岭地区","value":"27","children":[{"label":"加格达奇区","value":"01"},{"label":"松岭区","value":"02"},{"label":"新林区","value":"03"},{"label":"呼中区","value":"04"},{"label":"呼玛县","value":"21"},{"label":"塔河县","value":"22"},{"label":"漠河县","value":"23"}]}]},{"label":"上海市","value":"31","children":[{"label":"上海","value":"01","children":[{"label":"黄浦区","value":"01"},{"label":"卢湾区","value":"03"},{"label":"徐汇区","value":"04"},{"label":"长宁区","value":"05"},{"label":"静安区","value":"06"},{"label":"普陀区","value":"07"},{"label":"闸北区","value":"08"},{"label":"虹口区","value":"09"},{"label":"杨浦区","value":"10"},{"label":"闵行区","value":"12"},{"label":"宝山区","value":"13"},{"label":"嘉定区","value":"14"},{"label":"浦东新区","value":"15"},{"label":"金山区","value":"16"},{"label":"松江区","value":"17"},{"label":"青浦区","value":"18"},{"label":"南汇区","value":"19"},{"label":"奉贤区","value":"20"},{"label":"崇明县","value":"30"}]}]},{"label":"江苏省","value":"32","children":[{"label":"南京市","value":"01","children":[{"label":"玄武区","value":"02"},{"label":"白下区","value":"03"},{"label":"秦淮区","value":"04"},{"label":"建邺区","value":"05"},{"label":"鼓楼区","value":"06"},{"label":"下关区","value":"07"},{"label":"浦口区","value":"11"},{"label":"栖霞区","value":"13"},{"label":"雨花台区","value":"14"},{"label":"江宁区","value":"15"},{"label":"六合区","value":"16"},{"label":"溧水县","value":"24"},{"label":"高淳县","value":"25"}]},{"label":"无锡市","value":"02","children":[{"label":"崇安区","value":"02"},{"label":"南长区","value":"03"},{"label":"北塘区","value":"04"},{"label":"锡山区","value":"05"},{"label":"惠山区","value":"06"},{"label":"滨湖区","value":"11"},{"label":"江阴市","value":"81"},{"label":"宜兴市","value":"82"}]},{"label":"徐州市","value":"03","children":[{"label":"鼓楼区","value":"02"},{"label":"云龙区","value":"03"},{"label":"九里区","value":"04"},{"label":"贾汪区","value":"05"},{"label":"泉山区","value":"11"},{"label":"丰县","value":"21"},{"label":"沛县","value":"22"},{"label":"铜山县","value":"23"},{"label":"睢宁县","value":"24"},{"label":"新沂市","value":"81"},{"label":"邳州市","value":"82"}]},{"label":"常州市","value":"04","children":[{"label":"天宁区","value":"02"},{"label":"钟楼区","value":"04"},{"label":"戚墅堰区","value":"05"},{"label":"新北区","value":"11"},{"label":"武进区","value":"12"},{"label":"溧阳市","value":"81"},{"label":"金坛市","value":"82"}]},{"label":"苏州市","value":"05","children":[{"label":"沧浪区","value":"02"},{"label":"平江区","value":"03"},{"label":"金阊区","value":"04"},{"label":"虎丘区","value":"05"},{"label":"吴中区","value":"06"},{"label":"相城区","value":"07"},{"label":"常熟市","value":"81"},{"label":"张家港市","value":"82"},{"label":"昆山市","value":"83"},{"label":"吴江市","value":"84"},{"label":"太仓市","value":"85"}]},{"label":"南通市","value":"06","children":[{"label":"崇川区","value":"02"},{"label":"港闸区","value":"11"},{"label":"海安县","value":"21"},{"label":"如东县","value":"23"},{"label":"启东市","value":"81"},{"label":"如皋市","value":"82"},{"label":"通州市","value":"83"},{"label":"海门市","value":"84"}]},{"label":"连云港市","value":"07","children":[{"label":"连云区","value":"03"},{"label":"新浦区","value":"05"},{"label":"海州区","value":"06"},{"label":"赣榆县","value":"21"},{"label":"东海县","value":"22"},{"label":"灌云县","value":"23"},{"label":"灌南县","value":"24"}]},{"label":"淮安市","value":"08","children":[{"label":"清河区","value":"02"},{"label":"楚州区","value":"03"},{"label":"淮阴区","value":"04"},{"label":"清浦区","value":"11"},{"label":"涟水县","value":"26"},{"label":"洪泽县","value":"29"},{"label":"盱眙县","value":"30"},{"label":"金湖县","value":"31"}]},{"label":"盐城市","value":"09","children":[{"label":"亭湖区","value":"02"},{"label":"盐都区","value":"03"},{"label":"响水县","value":"21"},{"label":"滨海县","value":"22"},{"label":"阜宁县","value":"23"},{"label":"射阳县","value":"24"},{"label":"建湖县","value":"25"},{"label":"东台市","value":"81"},{"label":"大丰市","value":"82"}]},{"label":"扬州市","value":"10","children":[{"label":"广陵区","value":"02"},{"label":"邗江区","value":"03"},{"label":"维扬区","value":"11"},{"label":"宝应县","value":"23"},{"label":"仪征市","value":"81"},{"label":"高邮市","value":"84"},{"label":"江都市","value":"88"}]},{"label":"镇江市","value":"11","children":[{"label":"京口区","value":"02"},{"label":"润州区","value":"11"},{"label":"丹徒区","value":"12"},{"label":"丹阳市","value":"81"},{"label":"扬中市","value":"82"},{"label":"句容市","value":"83"}]},{"label":"泰州市","value":"12","children":[{"label":"海陵区","value":"02"},{"label":"高港区","value":"03"},{"label":"兴化市","value":"81"},{"label":"靖江市","value":"82"},{"label":"泰兴市","value":"83"},{"label":"姜堰市","value":"84"}]},{"label":"宿迁市","value":"13","children":[{"label":"宿城区","value":"02"},{"label":"宿豫区","value":"11"},{"label":"沭阳县","value":"22"},{"label":"泗阳县","value":"23"},{"label":"泗洪县","value":"24"}]}]},{"label":"浙江省","value":"33","children":[{"label":"杭州市","value":"01","children":[{"label":"上城区","value":"02"},{"label":"下城区","value":"03"},{"label":"江干区","value":"04"},{"label":"拱墅区","value":"05"},{"label":"西湖区","value":"06"},{"label":"滨江区","value":"08"},{"label":"萧山区","value":"09"},{"label":"余杭区","value":"10"},{"label":"桐庐县","value":"22"},{"label":"淳安县","value":"27"},{"label":"建德市","value":"82"},{"label":"富阳市","value":"83"},{"label":"临安市","value":"85"}]},{"label":"宁波市","value":"02","children":[{"label":"海曙区","value":"03"},{"label":"江东区","value":"04"},{"label":"江北区","value":"05"},{"label":"北仑区","value":"06"},{"label":"镇海区","value":"11"},{"label":"鄞州区","value":"12"},{"label":"象山县","value":"25"},{"label":"宁海县","value":"26"},{"label":"余姚市","value":"81"},{"label":"慈溪市","value":"82"},{"label":"奉化市","value":"83"}]},{"label":"温州市","value":"03","children":[{"label":"鹿城区","value":"02"},{"label":"龙湾区","value":"03"},{"label":"瓯海区","value":"04"},{"label":"洞头县","value":"22"},{"label":"永嘉县","value":"24"},{"label":"平阳县","value":"26"},{"label":"苍南县","value":"27"},{"label":"文成县","value":"28"},{"label":"泰顺县","value":"29"},{"label":"瑞安市","value":"81"},{"label":"乐清市","value":"82"}]},{"label":"嘉兴市","value":"04","children":[{"label":"秀城区","value":"02"},{"label":"秀洲区","value":"11"},{"label":"嘉善县","value":"21"},{"label":"海盐县","value":"24"},{"label":"海宁市","value":"81"},{"label":"平湖市","value":"82"},{"label":"桐乡市","value":"83"}]},{"label":"湖州市","value":"05","children":[{"label":"吴兴区","value":"02"},{"label":"南浔区","value":"03"},{"label":"德清县","value":"21"},{"label":"长兴县","value":"22"},{"label":"安吉县","value":"23"}]},{"label":"绍兴市","value":"06","children":[{"label":"越城区","value":"02"},{"label":"绍兴县","value":"21"},{"label":"新昌县","value":"24"},{"label":"诸暨市","value":"81"},{"label":"上虞市","value":"82"},{"label":"嵊州市","value":"83"}]},{"label":"金华市","value":"07","children":[{"label":"婺城区","value":"02"},{"label":"金东区","value":"03"},{"label":"武义县","value":"23"},{"label":"浦江县","value":"26"},{"label":"磐安县","value":"27"},{"label":"兰溪市","value":"81"},{"label":"义乌市","value":"82"},{"label":"东阳市","value":"83"},{"label":"永康市","value":"84"}]},{"label":"衢州市","value":"08","children":[{"label":"柯城区","value":"02"},{"label":"衢江区","value":"03"},{"label":"常山县","value":"22"},{"label":"开化县","value":"24"},{"label":"龙游县","value":"25"},{"label":"江山市","value":"81"}]},{"label":"舟山市","value":"09","children":[{"label":"定海区","value":"02"},{"label":"普陀区","value":"03"},{"label":"岱山县","value":"21"},{"label":"嵊泗县","value":"22"}]},{"label":"台州市","value":"10","children":[{"label":"椒江区","value":"02"},{"label":"黄岩区","value":"03"},{"label":"路桥区","value":"04"},{"label":"玉环县","value":"21"},{"label":"三门县","value":"22"},{"label":"天台县","value":"23"},{"label":"仙居县","value":"24"},{"label":"温岭市","value":"81"},{"label":"临海市","value":"82"}]},{"label":"丽水市","value":"11","children":[{"label":"莲都区","value":"02"},{"label":"青田县","value":"21"},{"label":"缙云县","value":"22"},{"label":"遂昌县","value":"23"},{"label":"松阳县","value":"24"},{"label":"云和县","value":"25"},{"label":"庆元县","value":"26"},{"label":"景宁畲族自治县","value":"27"},{"label":"龙泉市","value":"81"}]}]},{"label":"安徽省","value":"34","children":[{"label":"合肥市","value":"01","children":[{"label":"瑶海区","value":"02"},{"label":"庐阳区","value":"03"},{"label":"蜀山区","value":"04"},{"label":"包河区","value":"11"},{"label":"长丰县","value":"21"},{"label":"肥东县","value":"22"},{"label":"肥西县","value":"23"}]},{"label":"芜湖市","value":"02","children":[{"label":"镜湖区","value":"02"},{"label":"弋江区","value":"03"},{"label":"鸠江区","value":"07"},{"label":"三山区","value":"08"},{"label":"芜湖县","value":"21"},{"label":"繁昌县","value":"22"},{"label":"南陵县","value":"23"}]},{"label":"蚌埠市","value":"03","children":[{"label":"龙子湖区","value":"02"},{"label":"蚌山区","value":"03"},{"label":"禹会区","value":"04"},{"label":"淮上区","value":"11"},{"label":"怀远县","value":"21"},{"label":"五河县","value":"22"},{"label":"固镇县","value":"23"}]},{"label":"淮南市","value":"04","children":[{"label":"大通区","value":"02"},{"label":"田家庵区","value":"03"},{"label":"谢家集区","value":"04"},{"label":"八公山区","value":"05"},{"label":"潘集区","value":"06"},{"label":"凤台县","value":"21"}]},{"label":"马鞍山市","value":"05","children":[{"label":"金家庄区","value":"02"},{"label":"花山区","value":"03"},{"label":"雨山区","value":"04"},{"label":"当涂县","value":"21"}]},{"label":"淮北市","value":"06","children":[{"label":"杜集区","value":"02"},{"label":"相山区","value":"03"},{"label":"烈山区","value":"04"},{"label":"濉溪县","value":"21"}]},{"label":"铜陵市","value":"07","children":[{"label":"铜官山区","value":"02"},{"label":"狮子山区","value":"03"},{"label":"郊区","value":"11"},{"label":"铜陵县","value":"21"}]},{"label":"安庆市","value":"08","children":[{"label":"迎江区","value":"02"},{"label":"大观区","value":"03"},{"label":"宜秀区","value":"11"},{"label":"怀宁县","value":"22"},{"label":"枞阳县","value":"23"},{"label":"潜山县","value":"24"},{"label":"太湖县","value":"25"},{"label":"宿松县","value":"26"},{"label":"望江县","value":"27"},{"label":"岳西县","value":"28"},{"label":"桐城市","value":"81"}]},{"label":"黄山市","value":"10","children":[{"label":"屯溪区","value":"02"},{"label":"黄山区","value":"03"},{"label":"徽州区","value":"04"},{"label":"歙县","value":"21"},{"label":"休宁县","value":"22"},{"label":"黟县","value":"23"},{"label":"祁门县","value":"24"}]},{"label":"滁州市","value":"11","children":[{"label":"琅琊区","value":"02"},{"label":"南谯区","value":"03"},{"label":"来安县","value":"22"},{"label":"全椒县","value":"24"},{"label":"定远县","value":"25"},{"label":"凤阳县","value":"26"},{"label":"天长市","value":"81"},{"label":"明光市","value":"82"}]},{"label":"阜阳市","value":"12","children":[{"label":"颍州区","value":"02"},{"label":"颍东区","value":"03"},{"label":"颍泉区","value":"04"},{"label":"临泉县","value":"21"},{"label":"太和县","value":"22"},{"label":"阜南县","value":"25"},{"label":"颍上县","value":"26"},{"label":"颍上县","value":"82"}]},{"label":"宿州市","value":"13","children":[{"label":"埇桥区","value":"02"},{"label":"砀山县","value":"21"},{"label":"萧县","value":"22"},{"label":"灵璧县","value":"23"},{"label":"泗县","value":"24"}]},{"label":"巢湖市","value":"14","children":[{"label":"居巢区","value":"02"},{"label":"庐江县","value":"21"},{"label":"无为县","value":"22"},{"label":"含山县","value":"23"},{"label":"和县","value":"24"}]},{"label":"六安市","value":"15","children":[{"label":"金安区","value":"02"},{"label":"裕安区","value":"03"},{"label":"寿县","value":"21"},{"label":"霍邱县","value":"22"},{"label":"舒城县","value":"23"},{"label":"金寨县","value":"24"},{"label":"霍山县","value":"25"}]},{"label":"亳州市","value":"16","children":[{"label":"谯城区","value":"02"},{"label":"涡阳县","value":"21"},{"label":"蒙城县","value":"22"},{"label":"利辛县","value":"23"}]},{"label":"池州市","value":"17","children":[{"label":"贵池区","value":"02"},{"label":"东至县","value":"21"},{"label":"石台县","value":"22"},{"label":"青阳县","value":"23"}]},{"label":"宣城市","value":"18","children":[{"label":"宣州区","value":"02"},{"label":"郎溪县","value":"21"},{"label":"广德县","value":"22"},{"label":"泾县","value":"23"},{"label":"绩溪县","value":"24"},{"label":"旌德县","value":"25"},{"label":"宁国市","value":"81"}]}]},{"label":"福建省","value":"35","children":[{"label":"福州市","value":"01","children":[{"label":"鼓楼区","value":"02"},{"label":"台江区","value":"03"},{"label":"仓山区","value":"04"},{"label":"马尾区","value":"05"},{"label":"晋安区","value":"11"},{"label":"闽侯县","value":"21"},{"label":"连江县","value":"22"},{"label":"罗源县","value":"23"},{"label":"闽清县","value":"24"},{"label":"永泰县","value":"25"},{"label":"平潭县","value":"28"},{"label":"福清市","value":"81"},{"label":"长乐市","value":"82"}]},{"label":"厦门市","value":"02","children":[{"label":"思明区","value":"03"},{"label":"海沧区","value":"05"},{"label":"湖里区","value":"06"},{"label":"集美区","value":"11"},{"label":"同安区","value":"12"},{"label":"翔安区","value":"13"}]},{"label":"莆田市","value":"03","children":[{"label":"城厢区","value":"02"},{"label":"涵江区","value":"03"},{"label":"荔城区","value":"04"},{"label":"秀屿区","value":"05"},{"label":"仙游县","value":"22"}]},{"label":"三明市","value":"04","children":[{"label":"梅列区","value":"02"},{"label":"三元区","value":"03"},{"label":"明溪县","value":"21"},{"label":"清流县","value":"23"},{"label":"宁化县","value":"24"},{"label":"大田县","value":"25"},{"label":"尤溪县","value":"26"},{"label":"沙县","value":"27"},{"label":"将乐县","value":"28"},{"label":"泰宁县","value":"29"},{"label":"建宁县","value":"30"},{"label":"永安市","value":"81"}]},{"label":"泉州市","value":"05","children":[{"label":"鲤城区","value":"02"},{"label":"丰泽区","value":"03"},{"label":"洛江区","value":"04"},{"label":"泉港区","value":"05"},{"label":"惠安县","value":"21"},{"label":"安溪县","value":"24"},{"label":"永春县","value":"25"},{"label":"德化县","value":"26"},{"label":"金门县","value":"27"},{"label":"石狮市","value":"81"},{"label":"晋江市","value":"82"},{"label":"南安市","value":"83"}]},{"label":"漳州市","value":"06","children":[{"label":"芗城区","value":"02"},{"label":"龙文区","value":"03"},{"label":"云霄县","value":"22"},{"label":"漳浦县","value":"23"},{"label":"诏安县","value":"24"},{"label":"长泰县","value":"25"},{"label":"东山县","value":"26"},{"label":"南靖县","value":"27"},{"label":"平和县","value":"28"},{"label":"华安县","value":"29"},{"label":"龙海市","value":"81"}]},{"label":"南平市","value":"07","children":[{"label":"延平区","value":"02"},{"label":"顺昌县","value":"21"},{"label":"浦城县","value":"22"},{"label":"光泽县","value":"23"},{"label":"松溪县","value":"24"},{"label":"政和县","value":"25"},{"label":"邵武市","value":"81"},{"label":"武夷山市","value":"82"},{"label":"建瓯市","value":"83"},{"label":"建阳市","value":"84"}]},{"label":"龙岩市","value":"08","children":[{"label":"新罗区","value":"02"},{"label":"长汀县","value":"21"},{"label":"永定县","value":"22"},{"label":"上杭县","value":"23"},{"label":"武平县","value":"24"},{"label":"连城县","value":"25"},{"label":"漳平市","value":"81"}]},{"label":"宁德市","value":"09","children":[{"label":"蕉城区","value":"02"},{"label":"霞浦县","value":"21"},{"label":"古田县","value":"22"},{"label":"屏南县","value":"23"},{"label":"寿宁县","value":"24"},{"label":"周宁县","value":"25"},{"label":"柘荣县","value":"26"},{"label":"福安市","value":"81"},{"label":"福鼎市","value":"82"}]}]},{"label":"江西省","value":"36","children":[{"label":"南昌市","value":"01","children":[{"label":"东湖区","value":"02"},{"label":"西湖区","value":"03"},{"label":"青云谱区","value":"04"},{"label":"湾里区","value":"05"},{"label":"青山湖区","value":"11"},{"label":"南昌县","value":"21"},{"label":"新建县","value":"22"},{"label":"安义县","value":"23"},{"label":"进贤县","value":"24"}]},{"label":"景德镇市","value":"02","children":[{"label":"昌江区","value":"02"},{"label":"珠山区","value":"03"},{"label":"浮梁县","value":"22"},{"label":"乐平市","value":"81"}]},{"label":"萍乡市","value":"03","children":[{"label":"安源区","value":"02"},{"label":"湘东区","value":"13"},{"label":"莲花县","value":"21"},{"label":"上栗县","value":"22"},{"label":"芦溪县","value":"23"}]},{"label":"九江市","value":"04","children":[{"label":"庐山区","value":"02"},{"label":"浔阳区","value":"03"},{"label":"九江县","value":"21"},{"label":"武宁县","value":"23"},{"label":"修水县","value":"24"},{"label":"永修县","value":"25"},{"label":"德安县","value":"26"},{"label":"星子县","value":"27"},{"label":"都昌县","value":"28"},{"label":"湖口县","value":"29"},{"label":"彭泽县","value":"30"},{"label":"瑞昌市","value":"81"}]},{"label":"新余市","value":"05","children":[{"label":"渝水区","value":"02"},{"label":"分宜县","value":"21"}]},{"label":"鹰潭市","value":"06","children":[{"label":"月湖区","value":"02"},{"label":"余江县","value":"22"},{"label":"贵溪市","value":"81"}]},{"label":"赣州市","value":"07","children":[{"label":"章贡区","value":"02"},{"label":"赣县","value":"21"},{"label":"信丰县","value":"22"},{"label":"大余县","value":"23"},{"label":"上犹县","value":"24"},{"label":"崇义县","value":"25"},{"label":"安远县","value":"26"},{"label":"龙南县","value":"27"},{"label":"定南县","value":"28"},{"label":"全南县","value":"29"},{"label":"宁都县","value":"30"},{"label":"于都县","value":"31"},{"label":"兴国县","value":"32"},{"label":"会昌县","value":"33"},{"label":"寻乌县","value":"34"},{"label":"石城县","value":"35"},{"label":"瑞金市","value":"81"},{"label":"南康市","value":"82"}]},{"label":"吉安市","value":"08","children":[{"label":"吉州区","value":"02"},{"label":"青原区","value":"03"},{"label":"吉安县","value":"21"},{"label":"吉水县","value":"22"},{"label":"峡江县","value":"23"},{"label":"新干县","value":"24"},{"label":"永丰县","value":"25"},{"label":"泰和县","value":"26"},{"label":"遂川县","value":"27"},{"label":"万安县","value":"28"},{"label":"安福县","value":"29"},{"label":"永新县","value":"30"},{"label":"井冈山市","value":"81"}]},{"label":"宜春市","value":"09","children":[{"label":"袁州区","value":"02"},{"label":"奉新县","value":"21"},{"label":"万载县","value":"22"},{"label":"上高县","value":"23"},{"label":"宜丰县","value":"24"},{"label":"靖安县","value":"25"},{"label":"铜鼓县","value":"26"},{"label":"丰城市","value":"81"},{"label":"樟树市","value":"82"},{"label":"高安市","value":"83"}]},{"label":"抚州市","value":"10","children":[{"label":"临川区","value":"02"},{"label":"南城县","value":"21"},{"label":"黎川县","value":"22"},{"label":"南丰县","value":"23"},{"label":"崇仁县","value":"24"},{"label":"乐安县","value":"25"},{"label":"宜黄县","value":"26"},{"label":"金溪县","value":"27"},{"label":"资溪县","value":"28"},{"label":"东乡县","value":"29"},{"label":"广昌县","value":"30"}]},{"label":"上饶市","value":"11","children":[{"label":"信州区","value":"02"},{"label":"上饶县","value":"21"},{"label":"广丰县","value":"22"},{"label":"玉山县","value":"23"},{"label":"铅山县","value":"24"},{"label":"横峰县","value":"25"},{"label":"弋阳县","value":"26"},{"label":"余干县","value":"27"},{"label":"鄱阳县","value":"28"},{"label":"万年县","value":"29"},{"label":"婺源县","value":"30"},{"label":"德兴市","value":"31"}]}]},{"label":"山东省","value":"37","children":[{"label":"济南市","value":"01","children":[{"label":"历下区","value":"02"},{"label":"市中区","value":"03"},{"label":"槐荫区","value":"04"},{"label":"天桥区","value":"05"},{"label":"历城区","value":"12"},{"label":"长清区","value":"13"},{"label":"平阴县","value":"24"},{"label":"济阳县","value":"25"},{"label":"商河县","value":"26"},{"label":"章丘市","value":"81"}]},{"label":"青岛市","value":"02","children":[{"label":"市南区","value":"02"},{"label":"市北区","value":"03"},{"label":"四方区","value":"05"},{"label":"黄岛区","value":"11"},{"label":"崂山区","value":"12"},{"label":"李沧区","value":"13"},{"label":"城阳区","value":"14"},{"label":"胶州市","value":"81"},{"label":"即墨市","value":"82"},{"label":"平度市","value":"83"},{"label":"胶南市","value":"84"},{"label":"莱西市","value":"85"}]},{"label":"淄博市","value":"03","children":[{"label":"淄川区","value":"02"},{"label":"张店区","value":"03"},{"label":"博山区","value":"04"},{"label":"临淄区","value":"05"},{"label":"周村区","value":"06"},{"label":"桓台县","value":"21"},{"label":"高青县","value":"22"},{"label":"沂源县","value":"23"}]},{"label":"枣庄市","value":"04","children":[{"label":"市中区","value":"02"},{"label":"薛城区","value":"03"},{"label":"峄城区","value":"04"},{"label":"台儿庄区","value":"05"},{"label":"山亭区","value":"06"},{"label":"滕州市","value":"81"}]},{"label":"东营市","value":"05","children":[{"label":"东营区","value":"02"},{"label":"河口区","value":"03"},{"label":"垦利县","value":"21"},{"label":"利津县","value":"22"},{"label":"广饶县","value":"23"}]},{"label":"烟台市","value":"06","children":[{"label":"芝罘区","value":"02"},{"label":"福山区","value":"11"},{"label":"牟平区","value":"12"},{"label":"莱山区","value":"13"},{"label":"长岛县","value":"34"},{"label":"龙口市","value":"81"},{"label":"莱阳市","value":"82"},{"label":"莱州市","value":"83"},{"label":"蓬莱市","value":"84"},{"label":"招远市","value":"85"},{"label":"栖霞市","value":"86"},{"label":"海阳市","value":"87"}]},{"label":"潍坊市","value":"07","children":[{"label":"潍城区","value":"02"},{"label":"寒亭区","value":"03"},{"label":"坊子区","value":"04"},{"label":"奎文区","value":"05"},{"label":"临朐县","value":"24"},{"label":"昌乐县","value":"25"},{"label":"青州市","value":"81"},{"label":"诸城市","value":"82"},{"label":"寿光市","value":"83"},{"label":"安丘市","value":"84"},{"label":"高密市","value":"85"},{"label":"昌邑市","value":"86"}]},{"label":"济宁市","value":"08","children":[{"label":"市中区","value":"02"},{"label":"任城区","value":"11"},{"label":"微山县","value":"26"},{"label":"鱼台县","value":"27"},{"label":"金乡县","value":"28"},{"label":"嘉祥县","value":"29"},{"label":"汶上县","value":"30"},{"label":"泗水县","value":"31"},{"label":"梁山县","value":"32"},{"label":"曲阜市","value":"81"},{"label":"兖州市","value":"82"},{"label":"邹城市","value":"83"}]},{"label":"泰安市","value":"09","children":[{"label":"泰山区","value":"02"},{"label":"岱岳区","value":"03"},{"label":"宁阳县","value":"21"},{"label":"东平县","value":"23"},{"label":"新泰市","value":"82"},{"label":"肥城市","value":"83"}]},{"label":"威海市","value":"10","children":[{"label":"环翠区","value":"02"},{"label":"文登市","value":"81"},{"label":"荣成市","value":"82"},{"label":"乳山市","value":"83"}]},{"label":"日照市","value":"11","children":[{"label":"东港区","value":"02"},{"label":"岚山区","value":"03"},{"label":"五莲县","value":"21"},{"label":"莒县","value":"22"}]},{"label":"莱芜市","value":"12","children":[{"label":"莱城区","value":"02"},{"label":"钢城区","value":"03"}]},{"label":"临沂市","value":"13","children":[{"label":"兰山区","value":"02"},{"label":"罗庄区","value":"11"},{"label":"河东区","value":"12"},{"label":"沂南县","value":"21"},{"label":"郯城县","value":"22"},{"label":"沂水县","value":"23"},{"label":"苍山县","value":"24"},{"label":"费县","value":"25"},{"label":"平邑县","value":"26"},{"label":"莒南县","value":"27"},{"label":"蒙阴县","value":"28"},{"label":"临沭县","value":"29"}]},{"label":"德州市","value":"14","children":[{"label":"德城区","value":"02"},{"label":"陵县","value":"21"},{"label":"宁津县","value":"22"},{"label":"庆云县","value":"23"},{"label":"临邑县","value":"24"},{"label":"齐河县","value":"25"},{"label":"平原县","value":"26"},{"label":"夏津县","value":"27"},{"label":"武城县","value":"28"},{"label":"乐陵市","value":"81"},{"label":"禹城市","value":"82"}]},{"label":"聊城市","value":"15","children":[{"label":"东昌府区","value":"02"},{"label":"阳谷县","value":"21"},{"label":"莘县","value":"22"},{"label":"茌平县","value":"23"},{"label":"东阿县","value":"24"},{"label":"冠县","value":"25"},{"label":"高唐县","value":"26"},{"label":"临清市","value":"27"}]},{"label":"滨州市","value":"16","children":[{"label":"滨城区","value":"02"},{"label":"惠民县","value":"21"},{"label":"阳信县","value":"22"},{"label":"无棣县","value":"23"},{"label":"沾化县","value":"24"},{"label":"博兴县","value":"25"},{"label":"邹平县","value":"26"}]},{"label":"菏泽市","value":"17","children":[{"label":"牡丹区","value":"02"},{"label":"曹县","value":"21"},{"label":"单县","value":"22"},{"label":"成武县","value":"23"},{"label":"巨野县","value":"24"},{"label":"郓城县","value":"25"},{"label":"鄄城县","value":"26"},{"label":"定陶县","value":"27"},{"label":"东明县","value":"28"}]}]},{"label":"河南省","value":"41","children":[{"label":"郑州市","value":"01","children":[{"label":"中原区","value":"02"},{"label":"二七区","value":"03"},{"label":"管城回族区","value":"04"},{"label":"金水区","value":"05"},{"label":"上街区","value":"06"},{"label":"惠济区","value":"08"},{"label":"中牟县","value":"22"},{"label":"巩义市","value":"81"},{"label":"荥阳市","value":"82"},{"label":"新密市","value":"83"},{"label":"新郑市","value":"84"},{"label":"登封市","value":"85"}]},{"label":"开封市","value":"02","children":[{"label":"龙亭区","value":"02"},{"label":"顺河回族区","value":"03"},{"label":"鼓楼区","value":"04"},{"label":"禹王台区","value":"05"},{"label":"金明区","value":"11"},{"label":"杞县","value":"21"},{"label":"通许县","value":"22"},{"label":"尉氏县","value":"23"},{"label":"开封县","value":"24"},{"label":"兰考县","value":"25"}]},{"label":"洛阳市","value":"03","children":[{"label":"老城区","value":"02"},{"label":"西工区","value":"03"},{"label":"廛河回族区","value":"04"},{"label":"涧西区","value":"05"},{"label":"吉利区","value":"06"},{"label":"洛龙区","value":"07"},{"label":"孟津县","value":"22"},{"label":"新安县","value":"23"},{"label":"栾川县","value":"24"},{"label":"嵩县","value":"25"},{"label":"汝阳县","value":"26"},{"label":"宜阳县","value":"27"},{"label":"洛宁县","value":"28"},{"label":"伊川县","value":"29"},{"label":"偃师市","value":"81"}]},{"label":"平顶山市","value":"04","children":[{"label":"新华区","value":"02"},{"label":"卫东区","value":"03"},{"label":"石龙区","value":"04"},{"label":"湛河区","value":"11"},{"label":"宝丰县","value":"21"},{"label":"叶县","value":"22"},{"label":"鲁山县","value":"23"},{"label":"郏县","value":"25"},{"label":"舞钢市","value":"81"},{"label":"汝州市","value":"82"}]},{"label":"安阳市","value":"05","children":[{"label":"文峰区","value":"02"},{"label":"北关区","value":"03"},{"label":"殷都区","value":"05"},{"label":"龙安区","value":"06"},{"label":"安阳县","value":"22"},{"label":"汤阴县","value":"23"},{"label":"滑县","value":"26"},{"label":"内黄县","value":"27"},{"label":"林州市","value":"81"}]},{"label":"鹤壁市","value":"06","children":[{"label":"鹤山区","value":"02"},{"label":"山城区","value":"03"},{"label":"淇滨区","value":"11"},{"label":"浚县","value":"21"},{"label":"淇县","value":"22"}]},{"label":"新乡市","value":"07","children":[{"label":"红旗区","value":"02"},{"label":"卫滨区","value":"03"},{"label":"凤泉区","value":"04"},{"label":"牧野区","value":"11"},{"label":"新乡县","value":"21"},{"label":"获嘉县","value":"24"},{"label":"原阳县","value":"25"},{"label":"延津县","value":"26"},{"label":"封丘县","value":"27"},{"label":"长垣县","value":"28"},{"label":"卫辉市","value":"81"},{"label":"辉县市","value":"82"}]},{"label":"焦作市","value":"08","children":[{"label":"解放区","value":"02"},{"label":"中站区","value":"03"},{"label":"马村区","value":"04"},{"label":"山阳区","value":"11"},{"label":"修武县","value":"21"},{"label":"博爱县","value":"22"},{"label":"武陟县","value":"23"},{"label":"温县","value":"25"},{"label":"济源市","value":"81"},{"label":"沁阳市","value":"82"},{"label":"孟州市","value":"83"}]},{"label":"濮阳市","value":"09","children":[{"label":"华龙区","value":"02"},{"label":"清丰县","value":"22"},{"label":"南乐县","value":"23"},{"label":"范县","value":"26"},{"label":"台前县","value":"27"},{"label":"濮阳县","value":"28"}]},{"label":"许昌市","value":"10","children":[{"label":"魏都区","value":"02"},{"label":"许昌县","value":"23"},{"label":"鄢陵县","value":"24"},{"label":"襄城县","value":"25"},{"label":"禹州市","value":"81"},{"label":"长葛市","value":"82"}]},{"label":"漯河市","value":"11","children":[{"label":"源汇区","value":"02"},{"label":"郾城区","value":"03"},{"label":"召陵区","value":"04"},{"label":"舞阳县","value":"21"},{"label":"临颍县","value":"22"}]},{"label":"三门峡市","value":"12","children":[{"label":"湖滨区","value":"02"},{"label":"渑池县","value":"21"},{"label":"陕县","value":"22"},{"label":"卢氏县","value":"24"},{"label":"义马市","value":"81"},{"label":"灵宝市","value":"82"}]},{"label":"南阳市","value":"13","children":[{"label":"宛城区","value":"02"},{"label":"卧龙区","value":"03"},{"label":"南召县","value":"21"},{"label":"方城县","value":"22"},{"label":"西峡县","value":"23"},{"label":"镇平县","value":"24"},{"label":"内乡县","value":"25"},{"label":"淅川县","value":"26"},{"label":"社旗县","value":"27"},{"label":"唐河县","value":"28"},{"label":"新野县","value":"29"},{"label":"桐柏县","value":"30"},{"label":"邓州市","value":"81"}]},{"label":"商丘市","value":"14","children":[{"label":"梁园区","value":"02"},{"label":"睢阳区","value":"03"},{"label":"民权县","value":"21"},{"label":"睢县","value":"22"},{"label":"宁陵县","value":"23"},{"label":"柘城县","value":"24"},{"label":"虞城县","value":"25"},{"label":"夏邑县","value":"26"},{"label":"永城市","value":"81"}]},{"label":"信阳市","value":"15","children":[{"label":"浉河区","value":"02"},{"label":"平桥区","value":"03"},{"label":"罗山县","value":"21"},{"label":"光山县","value":"22"},{"label":"新县","value":"23"},{"label":"商城县","value":"24"},{"label":"固始县","value":"25"},{"label":"潢川县","value":"26"},{"label":"淮滨县","value":"27"},{"label":"息县","value":"28"}]},{"label":"周口市","value":"16","children":[{"label":"川汇区","value":"02"},{"label":"扶沟县","value":"21"},{"label":"西华县","value":"22"},{"label":"商水县","value":"23"},{"label":"沈丘县","value":"24"},{"label":"郸城县","value":"25"},{"label":"淮阳县","value":"26"},{"label":"太康县","value":"27"},{"label":"鹿邑县","value":"28"},{"label":"项城市","value":"81"}]},{"label":"驻马店市","value":"17","children":[{"label":"驿城区","value":"02"},{"label":"西平县","value":"21"},{"label":"上蔡县","value":"22"},{"label":"平舆县","value":"23"},{"label":"正阳县","value":"24"},{"label":"确山县","value":"25"},{"label":"泌阳县","value":"26"},{"label":"汝南县","value":"27"},{"label":"遂平县","value":"28"},{"label":"新蔡县","value":"29"}]}]},{"label":"湖北省","value":"42","children":[{"label":"武汉市","value":"01","children":[{"label":"江岸区","value":"02"},{"label":"江汉区","value":"03"},{"label":"硚口区","value":"04"},{"label":"汉阳区","value":"05"},{"label":"武昌区","value":"06"},{"label":"青山区","value":"07"},{"label":"洪山区","value":"11"},{"label":"东西湖区","value":"12"},{"label":"汉南区","value":"13"},{"label":"蔡甸区","value":"14"},{"label":"江夏区","value":"15"},{"label":"黄陂区","value":"16"},{"label":"新洲区","value":"17"}]},{"label":"黄石市","value":"02","children":[{"label":"黄石港区","value":"02"},{"label":"西塞山区","value":"03"},{"label":"下陆区","value":"04"},{"label":"铁山区","value":"05"},{"label":"阳新县","value":"22"},{"label":"大冶市","value":"81"}]},{"label":"十堰市","value":"03","children":[{"label":"茅箭区","value":"02"},{"label":"张湾区","value":"03"},{"label":"郧县","value":"21"},{"label":"郧西县","value":"22"},{"label":"竹山县","value":"23"},{"label":"竹溪县","value":"24"},{"label":"房县","value":"25"},{"label":"丹江口市","value":"81"}]},{"label":"宜昌市","value":"05","children":[{"label":"西陵区","value":"02"},{"label":"伍家岗区","value":"03"},{"label":"点军区","value":"04"},{"label":"猇亭区","value":"05"},{"label":"夷陵区","value":"06"},{"label":"远安县","value":"25"},{"label":"兴山县","value":"26"},{"label":"秭归县","value":"27"},{"label":"长阳土家族自治县","value":"28"},{"label":"五峰土家族自治县","value":"29"},{"label":"宜都市","value":"81"},{"label":"当阳市","value":"82"},{"label":"枝江市","value":"83"}]},{"label":"襄樊市","value":"06","children":[{"label":"襄城区","value":"02"},{"label":"樊城区","value":"06"},{"label":"襄阳区","value":"07"},{"label":"南漳县","value":"24"},{"label":"谷城县","value":"25"},{"label":"保康县","value":"26"},{"label":"老河口市","value":"82"},{"label":"枣阳市","value":"83"},{"label":"宜城市","value":"84"}]},{"label":"鄂州市","value":"07","children":[{"label":"梁子湖区","value":"02"},{"label":"华容区","value":"03"},{"label":"鄂城区","value":"04"}]},{"label":"荆门市","value":"08","children":[{"label":"东宝区","value":"02"},{"label":"掇刀区","value":"04"},{"label":"京山县","value":"21"},{"label":"沙洋县","value":"22"},{"label":"钟祥市","value":"81"}]},{"label":"孝感市","value":"09","children":[{"label":"孝南区","value":"02"},{"label":"孝昌县","value":"21"},{"label":"大悟县","value":"22"},{"label":"云梦县","value":"23"},{"label":"应城市","value":"81"},{"label":"安陆市","value":"82"},{"label":"汉川市","value":"84"}]},{"label":"荆州市","value":"10","children":[{"label":"沙市区","value":"02"},{"label":"荆州区","value":"03"},{"label":"公安县","value":"22"},{"label":"监利县","value":"23"},{"label":"江陵县","value":"24"},{"label":"石首市","value":"25"},{"label":"洪湖市","value":"83"},{"label":"松滋市","value":"87"}]},{"label":"黄冈市","value":"11","children":[{"label":"黄州区","value":"02"},{"label":"团风县","value":"21"},{"label":"红安县","value":"22"},{"label":"罗田县","value":"23"},{"label":"英山县","value":"24"},{"label":"浠水县","value":"25"},{"label":"蕲春县","value":"26"},{"label":"黄梅县","value":"27"},{"label":"麻城市","value":"81"},{"label":"武穴市","value":"82"}]},{"label":"咸宁市","value":"12","children":[{"label":"咸安区","value":"02"},{"label":"嘉鱼县","value":"21"},{"label":"通城县","value":"22"},{"label":"崇阳县","value":"23"},{"label":"通山县","value":"24"},{"label":"赤壁市","value":"81"}]},{"label":"随州市","value":"13","children":[{"label":"曾都区","value":"02"},{"label":"广水市","value":"81"}]},{"label":"恩施土家族苗族自治州","value":"28","children":[{"label":"恩施市","value":"01"},{"label":"利川市","value":"02"},{"label":"建始县","value":"22"},{"label":"巴东县","value":"23"},{"label":"宣恩县","value":"25"},{"label":"咸丰县","value":"26"},{"label":"来凤县","value":"27"},{"label":"鹤峰县","value":"28"}]},{"label":"直辖行政单位","value":"90","children":[{"label":"仙桃市","value":"04"},{"label":"潜江市","value":"05"},{"label":"天门市","value":"06"},{"label":"神农架林区","value":"21"}]}]},{"label":"湖南省","value":"43","children":[{"label":"长沙市","value":"01","children":[{"label":"芙蓉区","value":"02"},{"label":"天心区","value":"03"},{"label":"岳麓区","value":"04"},{"label":"开福区","value":"05"},{"label":"雨花区","value":"11"},{"label":"长沙县","value":"21"},{"label":"望城县","value":"22"},{"label":"宁乡县","value":"24"},{"label":"浏阳市","value":"81"}]},{"label":"株洲市","value":"02","children":[{"label":"荷塘区","value":"02"},{"label":"芦淞区","value":"03"},{"label":"石峰区","value":"04"},{"label":"天元区","value":"11"},{"label":"株洲县","value":"21"},{"label":"攸县","value":"23"},{"label":"茶陵县","value":"24"},{"label":"炎陵县","value":"25"},{"label":"醴陵市","value":"81"}]},{"label":"湘潭市","value":"03","children":[{"label":"雨湖区","value":"02"},{"label":"岳塘区","value":"04"},{"label":"湘潭县","value":"21"},{"label":"湘乡市","value":"81"},{"label":"韶山市","value":"82"}]},{"label":"衡阳市","value":"04","children":[{"label":"珠晖区","value":"05"},{"label":"雁峰区","value":"06"},{"label":"石鼓区","value":"07"},{"label":"蒸湘区","value":"08"},{"label":"南岳区","value":"12"},{"label":"衡阳县","value":"21"},{"label":"衡南县","value":"22"},{"label":"衡山县","value":"23"},{"label":"衡东县","value":"24"},{"label":"祁东县","value":"26"},{"label":"耒阳市","value":"81"},{"label":"常宁市","value":"82"}]},{"label":"邵阳市","value":"05","children":[{"label":"双清区","value":"02"},{"label":"大祥区","value":"03"},{"label":"北塔区","value":"11"},{"label":"邵东县","value":"21"},{"label":"新邵县","value":"22"},{"label":"邵阳县","value":"23"},{"label":"隆回县","value":"24"},{"label":"洞口县","value":"25"},{"label":"绥宁县","value":"27"},{"label":"新宁县","value":"28"},{"label":"城步苗族自治县","value":"29"},{"label":"武冈市","value":"81"}]},{"label":"岳阳市","value":"06","children":[{"label":"岳阳楼区","value":"02"},{"label":"云溪区","value":"03"},{"label":"君山区","value":"11"},{"label":"岳阳县","value":"21"},{"label":"华容县","value":"23"},{"label":"湘阴县","value":"24"},{"label":"平江县","value":"26"},{"label":"汨罗市","value":"81"},{"label":"临湘市","value":"82"}]},{"label":"常德市","value":"07","children":[{"label":"武陵区","value":"02"},{"label":"鼎城区","value":"03"},{"label":"安乡县","value":"21"},{"label":"汉寿县","value":"22"},{"label":"澧县","value":"23"},{"label":"临澧县","value":"24"},{"label":"桃源县","value":"25"},{"label":"石门县","value":"26"},{"label":"津市市","value":"81"}]},{"label":"张家界市","value":"08","children":[{"label":"永定区","value":"02"},{"label":"武陵源区","value":"11"},{"label":"慈利县","value":"21"},{"label":"桑植县","value":"22"}]},{"label":"益阳市","value":"09","children":[{"label":"资阳区","value":"02"},{"label":"赫山区","value":"03"},{"label":"南县","value":"21"},{"label":"桃江县","value":"22"},{"label":"安化县","value":"23"},{"label":"沅江市","value":"81"}]},{"label":"郴州市","value":"10","children":[{"label":"北湖区","value":"02"},{"label":"苏仙区","value":"03"},{"label":"桂阳县","value":"21"},{"label":"宜章县","value":"22"},{"label":"永兴县","value":"23"},{"label":"嘉禾县","value":"24"},{"label":"临武县","value":"25"},{"label":"汝城县","value":"26"},{"label":"桂东县","value":"27"},{"label":"安仁县","value":"28"},{"label":"资兴市","value":"81"}]},{"label":"永州市","value":"11","children":[{"label":"零陵区","value":"02"},{"label":"冷水滩区","value":"01"},{"label":"祁阳县","value":"21"},{"label":"东安县","value":"22"},{"label":"双牌县","value":"23"},{"label":"道县","value":"24"},{"label":"江永县","value":"25"},{"label":"宁远县","value":"26"},{"label":"蓝山县","value":"27"},{"label":"新田县","value":"28"},{"label":"江华瑶族自治县","value":"29"}]},{"label":"怀化市","value":"12","children":[{"label":"鹤城区","value":"02"},{"label":"中方县","value":"21"},{"label":"沅陵县","value":"22"},{"label":"辰溪县","value":"23"},{"label":"溆浦县","value":"24"},{"label":"会同县","value":"25"},{"label":"麻阳苗族自治县","value":"26"},{"label":"新晃侗族自治县","value":"27"},{"label":"芷江侗族自治县","value":"28"},{"label":"靖州苗族侗族自治县","value":"29"},{"label":"通道侗族自治县","value":"30"},{"label":"洪江市","value":"81"}]},{"label":"娄底市","value":"13","children":[{"label":"娄星区","value":"02"},{"label":"双峰县","value":"21"},{"label":"新化县","value":"22"},{"label":"冷水江市","value":"81"},{"label":"涟源市","value":"82"}]},{"label":"湘西土家族苗族自治州","value":"31","children":[{"label":"吉首市","value":"01"},{"label":"泸溪县","value":"22"},{"label":"凤凰县","value":"23"},{"label":"花垣县","value":"24"},{"label":"保靖县","value":"25"},{"label":"古丈县","value":"26"},{"label":"永顺县","value":"27"},{"label":"龙山县","value":"30"}]}]},{"label":"广东省","value":"44","children":[{"label":"广州市","value":"01","children":[{"label":"荔湾区","value":"03"},{"label":"越秀区","value":"04"},{"label":"海珠区","value":"05"},{"label":"天河区","value":"06"},{"label":"白云区","value":"11"},{"label":"黄埔区","value":"12"},{"label":"番禺区","value":"13"},{"label":"花都区","value":"14"},{"label":"南沙区","value":"15"},{"label":"萝岗区","value":"16"},{"label":"增城市","value":"83"},{"label":"从化市","value":"84"}]},{"label":"韶关市","value":"02","children":[{"label":"武江区","value":"03"},{"label":"浈江区","value":"04"},{"label":"曲江区","value":"05"},{"label":"始兴县","value":"22"},{"label":"仁化县","value":"24"},{"label":"翁源县","value":"29"},{"label":"乳源瑶族自治县","value":"32"},{"label":"新丰县","value":"33"},{"label":"乐昌市","value":"81"},{"label":"南雄市","value":"82"}]},{"label":"深圳市","value":"03","children":[{"label":"罗湖区","value":"03"},{"label":"福田区","value":"04"},{"label":"南山区","value":"05"},{"label":"宝安区","value":"06"},{"label":"龙岗区","value":"07"},{"label":"盐田区","value":"08"}]},{"label":"珠海市","value":"04","children":[{"label":"香洲区","value":"02"},{"label":"斗门区","value":"03"},{"label":"金湾区","value":"04"}]},{"label":"汕头市","value":"05","children":[{"label":"龙湖区","value":"07"},{"label":"金平区","value":"11"},{"label":"濠江区","value":"12"},{"label":"潮阳区","value":"13"},{"label":"潮南区","value":"14"},{"label":"澄海区","value":"15"},{"label":"南澳县","value":"23"}]},{"label":"佛山市","value":"06","children":[{"label":"禅城区","value":"04"},{"label":"南海区","value":"05"},{"label":"顺德区","value":"06"},{"label":"三水区","value":"07"},{"label":"高明区","value":"08"}]},{"label":"江门市","value":"07","children":[{"label":"蓬江区","value":"03"},{"label":"江海区","value":"04"},{"label":"新会区","value":"05"},{"label":"台山市","value":"81"},{"label":"开平市","value":"83"},{"label":"鹤山市","value":"84"},{"label":"恩平市","value":"85"}]},{"label":"湛江市","value":"08","children":[{"label":"赤坎区","value":"02"},{"label":"霞山区","value":"03"},{"label":"坡头区","value":"04"},{"label":"麻章区","value":"11"},{"label":"遂溪县","value":"23"},{"label":"徐闻县","value":"25"},{"label":"廉江市","value":"81"},{"label":"雷州市","value":"82"},{"label":"吴川市","value":"83"}]},{"label":"茂名市","value":"09","children":[{"label":"茂南区","value":"02"},{"label":"茂港区","value":"03"},{"label":"电白县","value":"23"},{"label":"高州市","value":"81"},{"label":"化州市","value":"82"},{"label":"信宜市","value":"83"}]},{"label":"肇庆市","value":"12","children":[{"label":"端州区","value":"02"},{"label":"鼎湖区","value":"03"},{"label":"广宁县","value":"23"},{"label":"怀集县","value":"24"},{"label":"封开县","value":"25"},{"label":"德庆县","value":"26"},{"label":"高要市","value":"83"},{"label":"四会市","value":"84"}]},{"label":"惠州市","value":"13","children":[{"label":"惠城区","value":"02"},{"label":"惠阳区","value":"03"},{"label":"博罗县","value":"22"},{"label":"惠东县","value":"23"},{"label":"龙门县","value":"24"}]},{"label":"梅州市","value":"14","children":[{"label":"梅江区","value":"02"},{"label":"梅县","value":"21"},{"label":"大埔县","value":"22"},{"label":"丰顺县","value":"23"},{"label":"五华县","value":"24"},{"label":"平远县","value":"26"},{"label":"蕉岭县","value":"27"},{"label":"兴宁市","value":"81"}]},{"label":"汕尾市","value":"15","children":[{"label":"城区","value":"02"},{"label":"海丰县","value":"21"},{"label":"陆河县","value":"22"},{"label":"陆丰市","value":"81"}]},{"label":"河源市","value":"16","children":[{"label":"源城区","value":"02"},{"label":"紫金县","value":"21"},{"label":"龙川县","value":"22"},{"label":"连平县","value":"23"},{"label":"和平县","value":"24"},{"label":"东源县","value":"25"}]},{"label":"阳江市","value":"17","children":[{"label":"江城区","value":"02"},{"label":"阳西县","value":"21"},{"label":"阳东县","value":"23"},{"label":"阳春市","value":"81"}]},{"label":"清远市","value":"18","children":[{"label":"清城区","value":"02"},{"label":"佛冈县","value":"21"},{"label":"阳山县","value":"23"},{"label":"连山壮族瑶族自治县","value":"25"},{"label":"连南瑶族自治县","value":"26"},{"label":"清新县","value":"27"},{"label":"英德市","value":"81"},{"label":"连州市","value":"82"}]},{"label":"东莞市","value":"19","children":[{"label":"市辖区","value":"01"}]},{"label":"中山市","value":"20","children":[{"label":"市辖区","value":"01"}]},{"label":"潮州市","value":"51","children":[{"label":"湘桥区","value":"02"},{"label":"潮安县","value":"21"},{"label":"饶平县","value":"22"}]},{"label":"揭阳市","value":"52","children":[{"label":"榕城区","value":"02"},{"label":"揭东县","value":"21"},{"label":"揭西县","value":"22"},{"label":"惠来县","value":"24"},{"label":"普宁市","value":"81"}]},{"label":"云浮市","value":"53","children":[{"label":"云城区","value":"02"},{"label":"新兴县","value":"21"},{"label":"郁南县","value":"22"},{"label":"云安县","value":"23"},{"label":"罗定市","value":"81"}]}]},{"label":"广西","value":"45","children":[{"label":"南宁市","value":"01","children":[{"label":"兴宁区","value":"02"},{"label":"青秀区","value":"03"},{"label":"江南区","value":"05"},{"label":"西乡塘区","value":"07"},{"label":"良庆区","value":"08"},{"label":"邕宁区","value":"09"},{"label":"武鸣县","value":"22"},{"label":"隆安县","value":"23"},{"label":"马山县","value":"24"},{"label":"上林县","value":"25"},{"label":"宾阳县","value":"26"},{"label":"横县","value":"27"}]},{"label":"柳州市","value":"02","children":[{"label":"城中区","value":"02"},{"label":"鱼峰区","value":"03"},{"label":"柳南区","value":"04"},{"label":"柳北区","value":"05"},{"label":"柳江县","value":"21"},{"label":"柳城县","value":"22"},{"label":"鹿寨县","value":"23"},{"label":"融安县","value":"24"},{"label":"融水苗族自治县","value":"25"},{"label":"三江侗族自治县","value":"26"}]},{"label":"桂林市","value":"03","children":[{"label":"秀峰区","value":"02"},{"label":"叠彩区","value":"03"},{"label":"象山区","value":"04"},{"label":"七星区","value":"05"},{"label":"雁山区","value":"11"},{"label":"阳朔县","value":"21"},{"label":"临桂县","value":"22"},{"label":"灵川县","value":"23"},{"label":"全州县","value":"24"},{"label":"兴安县","value":"25"},{"label":"永福县","value":"26"},{"label":"灌阳县","value":"27"},{"label":"龙胜各族自治县","value":"28"},{"label":"资源县","value":"29"},{"label":"平乐县","value":"30"},{"label":"荔蒲县","value":"31"},{"label":"恭城瑶族自治县","value":"32"}]},{"label":"梧州市","value":"04","children":[{"label":"万秀区","value":"03"},{"label":"蝶山区","value":"04"},{"label":"长洲区","value":"05"},{"label":"苍梧县","value":"21"},{"label":"藤县","value":"22"},{"label":"蒙山县","value":"23"},{"label":"岑溪市","value":"81"}]},{"label":"北海市","value":"05","children":[{"label":"海城区","value":"02"},{"label":"银海区","value":"03"},{"label":"铁山港区","value":"12"},{"label":"合浦县","value":"21"}]},{"label":"防城港市","value":"06","children":[{"label":"港口区","value":"02"},{"label":"防城区","value":"03"},{"label":"上思县","value":"21"},{"label":"东兴市","value":"81"}]},{"label":"钦州市","value":"07","children":[{"label":"钦南区","value":"02"},{"label":"钦北区","value":"03"},{"label":"灵山县","value":"21"},{"label":"浦北县","value":"22"}]},{"label":"贵港市","value":"08","children":[{"label":"港北区","value":"02"},{"label":"港南区","value":"03"},{"label":"覃塘区","value":"04"},{"label":"平南县","value":"21"},{"label":"桂平市","value":"81"}]},{"label":"玉林市","value":"09","children":[{"label":"玉州区","value":"02"},{"label":"容县","value":"21"},{"label":"陆川县","value":"22"},{"label":"博白县","value":"23"},{"label":"兴业县","value":"24"},{"label":"北流市","value":"81"}]},{"label":"百色市","value":"10","children":[{"label":"右江区","value":"02"},{"label":"田阳县","value":"21"},{"label":"田东县","value":"22"},{"label":"平果县","value":"23"},{"label":"德保县","value":"24"},{"label":"靖西县","value":"25"},{"label":"那坡县","value":"26"},{"label":"凌云县","value":"27"},{"label":"乐业县","value":"28"},{"label":"田林县","value":"29"},{"label":"西林县","value":"30"},{"label":"隆林各族自治县","value":"31"}]},{"label":"贺州市","value":"11","children":[{"label":"八步区","value":"02"},{"label":"昭平县","value":"21"},{"label":"钟山县","value":"22"},{"label":"富川瑶族自治县","value":"23"}]},{"label":"河池市","value":"12","children":[{"label":"金城江区","value":"02"},{"label":"南丹县","value":"21"},{"label":"天峨县","value":"22"},{"label":"凤山县","value":"23"},{"label":"东兰县","value":"24"},{"label":"罗城仫佬族自治县","value":"25"},{"label":"环江毛南族自治县","value":"26"},{"label":"巴马瑶族自治县","value":"27"},{"label":"都安瑶族自治县","value":"28"},{"label":"大化瑶族自治县","value":"29"},{"label":"宜州市","value":"81"}]},{"label":"来宾市","value":"13","children":[{"label":"兴宾区","value":"02"},{"label":"忻城县","value":"21"},{"label":"象州县","value":"22"},{"label":"武宣县","value":"23"},{"label":"金秀瑶族自治县","value":"24"},{"label":"合山市","value":"81"}]},{"label":"崇左市","value":"14","children":[{"label":"江洲区","value":"02"},{"label":"扶绥县","value":"21"},{"label":"宁明县","value":"22"},{"label":"龙州县","value":"23"},{"label":"大新县","value":"24"},{"label":"天等县","value":"25"},{"label":"凭祥市","value":"81"}]}]},{"label":"海南省","value":"46","children":[{"label":"海口市","value":"01","children":[{"label":"秀英区","value":"05"},{"label":"龙华区","value":"06"},{"label":"琼山区","value":"07"},{"label":"美兰区","value":"08"}]},{"label":"三亚市","value":"02","children":[{"label":"直辖县级行政单位","value":"90"},{"label":"五指山市","value":"01"},{"label":"琼海市","value":"02"},{"label":"儋州市","value":"03"},{"label":"文昌市","value":"05"},{"label":"万宁市","value":"06"},{"label":"东方市","value":"07"},{"label":"定安县","value":"25"},{"label":"屯昌县","value":"26"},{"label":"澄迈县","value":"27"},{"label":"临高县","value":"28"},{"label":"白沙黎族自治县","value":"30"},{"label":"昌江黎族自治县","value":"31"},{"label":"乐东黎族自治县","value":"33"},{"label":"陵水黎族自治县","value":"34"},{"label":"保亭黎族苗族自治县","value":"35"},{"label":"琼中黎族苗族自治县","value":"36"},{"label":"西沙群岛","value":"37"},{"label":"南沙群岛","value":"38"},{"label":"中沙群岛的岛礁及其海域","value":"39"}]}]},{"label":"重庆市","value":"50","children":[{"label":"市辖区","value":"01","children":[{"label":"万州区","value":"01"},{"label":"涪陵区","value":"02"},{"label":"渝中区","value":"03"},{"label":"大渡口区","value":"04"},{"label":"江北区","value":"05"},{"label":"沙坪坝区","value":"06"},{"label":"九龙坡区","value":"07"},{"label":"南岸区","value":"08"},{"label":"北碚区","value":"09"},{"label":"万盛区","value":"10"},{"label":"双桥区","value":"11"},{"label":"渝北区","value":"12"},{"label":"巴南区","value":"13"},{"label":"黔江区","value":"14"},{"label":"长寿区","value":"15"},{"label":"江津区","value":"16"},{"label":"合川区","value":"17"},{"label":"永川区","value":"18"},{"label":"永川区","value":"19"}]},{"label":"县","value":"02","children":[{"label":"綦江县","value":"22"},{"label":"潼南县","value":"23"},{"label":"铜梁县","value":"24"},{"label":"大足县","value":"25"},{"label":"荣昌县","value":"26"},{"label":"璧山县","value":"27"},{"label":"梁平县","value":"28"},{"label":"城口县","value":"29"},{"label":"丰都县","value":"30"},{"label":"垫江县","value":"31"},{"label":"武隆县","value":"32"},{"label":"忠县","value":"33"},{"label":"开县","value":"34"},{"label":"云阳县","value":"35"},{"label":"奉节县","value":"36"},{"label":"巫山县","value":"37"},{"label":"巫溪县","value":"38"},{"label":"石柱土家族自治县","value":"40"},{"label":"秀山土家族苗族自治县","value":"41"},{"label":"酉阳土家族苗族自治县","value":"42"},{"label":"彭水苗族土家族自治县","value":"43"}]}]},{"label":"四川省","value":"51","children":[{"label":"成都市","value":"01","children":[{"label":"锦江区","value":"04"},{"label":"青羊区","value":"05"},{"label":"金牛区","value":"06"},{"label":"武侯区","value":"07"},{"label":"成华区","value":"08"},{"label":"龙泉驿区","value":"12"},{"label":"青白江区","value":"13"},{"label":"新都区","value":"14"},{"label":"温江区","value":"15"},{"label":"金堂县","value":"21"},{"label":"双流县","value":"22"},{"label":"郫县","value":"24"},{"label":"大邑县","value":"29"},{"label":"蒲江县","value":"31"},{"label":"新津县","value":"32"},{"label":"都江堰市","value":"81"},{"label":"彭州市","value":"82"},{"label":"邛崃市","value":"83"},{"label":"崇州市","value":"84"}]},{"label":"自贡市","value":"03","children":[{"label":"自流井区","value":"02"},{"label":"贡井区","value":"03"},{"label":"大安区","value":"04"},{"label":"沿滩区","value":"11"},{"label":"荣县","value":"21"},{"label":"富顺县","value":"22"}]},{"label":"攀枝花市","value":"04","children":[{"label":"东区","value":"02"},{"label":"西区","value":"03"},{"label":"仁和区","value":"11"},{"label":"米易县","value":"21"},{"label":"盐边县","value":"22"}]},{"label":"泸州市","value":"05","children":[{"label":"江阳区","value":"02"},{"label":"纳溪区","value":"03"},{"label":"龙马潭区","value":"04"},{"label":"泸县","value":"21"},{"label":"合江县","value":"22"},{"label":"叙永县","value":"24"},{"label":"古蔺县","value":"25"}]},{"label":"德阳市","value":"06","children":[{"label":"旌阳区","value":"02"},{"label":"中江县","value":"23"},{"label":"罗江县","value":"26"},{"label":"广汉市","value":"81"},{"label":"什邡市","value":"82"},{"label":"绵竹市","value":"83"}]},{"label":"绵阳市","value":"07","children":[{"label":"涪城区","value":"03"},{"label":"游仙区","value":"04"},{"label":"三台县","value":"22"},{"label":"盐亭县","value":"23"},{"label":"安县","value":"24"},{"label":"梓潼县","value":"25"},{"label":"北川羌族自治县","value":"26"},{"label":"平武县","value":"27"},{"label":"江油市","value":"28"}]},{"label":"广元市","value":"08","children":[{"label":"市中区","value":"02"},{"label":"元坝区","value":"11"},{"label":"朝天区","value":"12"},{"label":"旺苍县","value":"21"},{"label":"青川县","value":"22"},{"label":"剑阁县","value":"23"},{"label":"苍溪县","value":"24"}]},{"label":"遂宁市","value":"09","children":[{"label":"船山区","value":"03"},{"label":"安居区","value":"04"},{"label":"蓬溪县","value":"21"},{"label":"射洪县","value":"22"},{"label":"大英县","value":"23"}]},{"label":"内江市","value":"10","children":[{"label":"市中区","value":"02"},{"label":"东兴区","value":"11"},{"label":"威远县","value":"24"},{"label":"资中县","value":"25"},{"label":"隆昌县","value":"28"}]},{"label":"乐山市","value":"11","children":[{"label":"市中区","value":"02"},{"label":"沙湾区","value":"11"},{"label":"五通桥区","value":"12"},{"label":"金口河区","value":"13"},{"label":"犍为县","value":"23"},{"label":"井研县","value":"24"},{"label":"夹江县","value":"26"},{"label":"沐川县","value":"29"},{"label":"峨边彝族自治县","value":"32"},{"label":"马边彝族自治县","value":"33"},{"label":"峨眉山市","value":"81"}]},{"label":"南充市","value":"13","children":[{"label":"顺庆区","value":"02"},{"label":"高坪区","value":"03"},{"label":"嘉陵区","value":"04"},{"label":"南部县","value":"21"},{"label":"营山县","value":"22"},{"label":"蓬安县","value":"23"},{"label":"仪陇县","value":"24"},{"label":"西充县","value":"25"},{"label":"阆中市","value":"81"}]},{"label":"眉山市","value":"14","children":[{"label":"东坡区","value":"02"},{"label":"仁寿县","value":"21"},{"label":"彭山县","value":"22"},{"label":"洪雅县","value":"23"},{"label":"丹棱县","value":"24"},{"label":"青神县","value":"25"}]},{"label":"宜宾市","value":"15","children":[{"label":"翠屏区","value":"02"},{"label":"宜宾县","value":"21"},{"label":"南溪县","value":"22"},{"label":"江安县","value":"23"},{"label":"长宁县","value":"24"},{"label":"高县","value":"25"},{"label":"珙县","value":"26"},{"label":"筠连县","value":"27"},{"label":"兴文县","value":"28"},{"label":"屏山县","value":"29"}]},{"label":"广安市","value":"16","children":[{"label":"广安区","value":"02"},{"label":"岳池县","value":"21"},{"label":"武胜县","value":"22"},{"label":"邻水县","value":"23"},{"label":"华蓥市","value":"81"}]},{"label":"达州市","value":"17","children":[{"label":"通川区","value":"02"},{"label":"达县","value":"21"},{"label":"宣汉县","value":"22"},{"label":"开江县","value":"23"},{"label":"大竹县","value":"24"},{"label":"渠县","value":"25"},{"label":"万源市","value":"81"}]},{"label":"雅安市","value":"18","children":[{"label":"雨城区","value":"02"},{"label":"名山县","value":"21"},{"label":"荥经县","value":"22"},{"label":"汉源县","value":"23"},{"label":"石棉县","value":"24"},{"label":"天全县","value":"25"},{"label":"芦山县","value":"26"},{"label":"宝兴县","value":"27"}]},{"label":"巴中市","value":"19","children":[{"label":"巴州区","value":"02"},{"label":"通江县","value":"21"},{"label":"南江县","value":"22"},{"label":"平昌县","value":"23"}]},{"label":"资阳市","value":"20","children":[{"label":"雁江区","value":"02"},{"label":"安岳县","value":"21"},{"label":"乐至县","value":"22"},{"label":"简阳市","value":"23"}]},{"label":"阿坝藏族羌族自治州","value":"32","children":[{"label":"汶川县","value":"21"},{"label":"理县","value":"22"},{"label":"茂县","value":"23"},{"label":"松潘县","value":"24"},{"label":"九寨沟县","value":"25"},{"label":"金川县","value":"26"},{"label":"小金县","value":"27"},{"label":"黑水县","value":"28"},{"label":"马尔康县","value":"29"},{"label":"壤塘县","value":"30"},{"label":"阿坝县","value":"31"},{"label":"若尔盖县","value":"32"},{"label":"红原县","value":"33"}]},{"label":"甘孜藏族自治州","value":"33","children":[{"label":"康定县","value":"21"},{"label":"泸定县","value":"22"},{"label":"丹巴县","value":"23"},{"label":"九龙县","value":"24"},{"label":"雅江县","value":"25"},{"label":"道孚县","value":"26"},{"label":"炉霍县","value":"27"},{"label":"甘孜县","value":"28"},{"label":"新龙县","value":"29"},{"label":"德格县","value":"30"},{"label":"白玉县","value":"31"},{"label":"石渠县","value":"32"},{"label":"色达县","value":"33"},{"label":"理塘县","value":"34"},{"label":"巴塘县","value":"35"},{"label":"乡城县","value":"36"},{"label":"稻城县","value":"37"},{"label":"得荣县","value":"38"}]},{"label":"凉山彝族自治州","value":"34","children":[{"label":"西昌市","value":"01"},{"label":"木里藏族自治县","value":"22"},{"label":"盐源县","value":"23"},{"label":"德昌县","value":"24"},{"label":"会理县","value":"25"},{"label":"会东县","value":"26"},{"label":"宁南县","value":"27"},{"label":"普格县","value":"28"},{"label":"布拖县","value":"29"},{"label":"金阳县","value":"30"},{"label":"昭觉县","value":"31"},{"label":"喜德县","value":"32"},{"label":"冕宁县","value":"33"},{"label":"越西县","value":"34"},{"label":"甘洛县","value":"35"},{"label":"美姑县","value":"36"},{"label":"雷波县","value":"37"}]}]},{"label":"贵州省","value":"52","children":[{"label":"贵阳市","value":"01","children":[{"label":"南明区","value":"02"},{"label":"云岩区","value":"03"},{"label":"花溪区","value":"11"},{"label":"乌当区","value":"12"},{"label":"白云区","value":"13"},{"label":"小河区","value":"14"},{"label":"开阳县","value":"21"},{"label":"息烽县","value":"22"},{"label":"修文县","value":"23"},{"label":"清镇市","value":"81"}]},{"label":"六盘水市","value":"02","children":[{"label":"钟山区","value":"01"},{"label":"六枝特区","value":"03"},{"label":"水城县","value":"21"},{"label":"盘县","value":"22"}]},{"label":"遵义市","value":"03","children":[{"label":"红花岗区","value":"02"},{"label":"汇川区","value":"03"},{"label":"遵义县","value":"21"},{"label":"桐梓县","value":"22"},{"label":"绥阳县","value":"23"},{"label":"正安县","value":"24"},{"label":"道真仡佬族苗族自治县","value":"25"},{"label":"务川仡佬族苗族自治县","value":"26"},{"label":"凤冈县","value":"27"},{"label":"湄潭县","value":"28"},{"label":"余庆县","value":"29"},{"label":"习水县","value":"30"},{"label":"赤水市","value":"81"},{"label":"仁怀市","value":"82"}]},{"label":"安顺市","value":"04","children":[{"label":"西秀区","value":"02"},{"label":"平坝县","value":"21"},{"label":"普定县","value":"22"},{"label":"镇宁布依族苗族自治县","value":"23"},{"label":"关岭布依族苗族自治县","value":"24"},{"label":"紫云苗族布依族自治县","value":"25"}]},{"label":"铜仁地区","value":"22","children":[{"label":"铜仁市","value":"01"},{"label":"江口县","value":"22"},{"label":"玉屏侗族自治县","value":"23"},{"label":"石阡县","value":"24"},{"label":"思南县","value":"25"},{"label":"印江土家族苗族自治县","value":"26"},{"label":"德江县","value":"27"},{"label":"沿河土家族自治县","value":"28"},{"label":"松桃苗族自治县","value":"29"},{"label":"万山特区","value":"30"}]},{"label":"黔西南布依族苗族自治州","value":"23","children":[{"label":"兴义市","value":"01"},{"label":"兴仁县","value":"22"},{"label":"普安县","value":"23"},{"label":"晴隆县","value":"24"},{"label":"贞丰县","value":"25"},{"label":"望谟县","value":"26"},{"label":"册亨县","value":"27"},{"label":"安龙县","value":"28"}]},{"label":"毕节地区","value":"24","children":[{"label":"毕节市","value":"01"},{"label":"大方县","value":"22"},{"label":"黔西县","value":"23"},{"label":"金沙县","value":"24"},{"label":"织金县","value":"25"},{"label":"纳雍县","value":"26"},{"label":"威宁彝族回族苗族自治县","value":"27"},{"label":"赫章县","value":"28"}]},{"label":"黔东南苗族侗族自治州","value":"26","children":[{"label":"凯里市","value":"01"},{"label":"黄平县","value":"22"},{"label":"施秉县","value":"23"},{"label":"三穗县","value":"24"},{"label":"镇远县","value":"25"},{"label":"岑巩县","value":"26"},{"label":"天柱县","value":"27"},{"label":"锦屏县","value":"28"},{"label":"剑河县","value":"29"},{"label":"台江县","value":"30"},{"label":"黎平县","value":"31"},{"label":"榕江县","value":"32"},{"label":"从江县","value":"33"},{"label":"雷山县","value":"34"},{"label":"麻江县","value":"35"},{"label":"丹寨县","value":"36"}]},{"label":"黔南布依族苗族自治州","value":"27","children":[{"label":"都匀市","value":"01"},{"label":"福泉市","value":"02"},{"label":"荔波县","value":"22"},{"label":"贵定县","value":"23"},{"label":"瓮安县","value":"25"},{"label":"独山县","value":"26"},{"label":"平塘县","value":"27"},{"label":"罗甸县","value":"28"},{"label":"长顺县","value":"29"},{"label":"龙里县","value":"30"},{"label":"惠水县","value":"31"},{"label":"三都水族自治县","value":"32"}]}]},{"label":"云南省","value":"53","children":[{"label":"昆明市","value":"01","children":[{"label":"五华区","value":"02"},{"label":"盘龙区","value":"03"},{"label":"官渡区","value":"11"},{"label":"西山区","value":"12"},{"label":"东川区","value":"13"},{"label":"呈贡县","value":"21"},{"label":"晋宁县","value":"22"},{"label":"富民县","value":"24"},{"label":"宜良县","value":"25"},{"label":"石林彝族自治县","value":"26"},{"label":"嵩明县","value":"27"},{"label":"禄劝彝族苗族自治县","value":"28"},{"label":"寻甸回族彝族自治县","value":"29"},{"label":"安宁市","value":"81"}]},{"label":"曲靖市","value":"03","children":[{"label":"麒麟区","value":"02"},{"label":"马龙县","value":"21"},{"label":"陆良县","value":"22"},{"label":"师宗县","value":"23"},{"label":"罗平县","value":"24"},{"label":"富源县","value":"25"},{"label":"会泽县","value":"26"},{"label":"沾益县","value":"28"},{"label":"宣威市","value":"81"}]},{"label":"玉溪市","value":"04","children":[{"label":"红塔区","value":"02"},{"label":"江川县","value":"21"},{"label":"澄江县","value":"22"},{"label":"通海县","value":"23"},{"label":"华宁县","value":"24"},{"label":"易门县","value":"25"},{"label":"峨山彝族自治县","value":"26"},{"label":"新平彝族傣族自治县","value":"27"},{"label":"元江哈尼族彝族傣族自治县","value":"28"}]},{"label":"保山市","value":"05","children":[{"label":"隆阳区","value":"02"},{"label":"施甸县","value":"21"},{"label":"腾冲县","value":"22"},{"label":"龙陵县","value":"23"},{"label":"昌宁县","value":"24"}]},{"label":"昭通市","value":"06","children":[{"label":"昭阳区","value":"02"},{"label":"鲁甸县","value":"21"},{"label":"巧家县","value":"22"},{"label":"盐津县","value":"23"},{"label":"大关县","value":"25"},{"label":"永善县","value":"25"},{"label":"绥江县","value":"26"},{"label":"镇雄县","value":"27"},{"label":"彝良县","value":"28"},{"label":"威信县","value":"29"},{"label":"水富县","value":"30"}]},{"label":"丽江市","value":"07","children":[{"label":"古城区","value":"02"},{"label":"玉龙纳西族自治县","value":"21"},{"label":"永胜县","value":"22"},{"label":"华坪县","value":"23"},{"label":"宁蒗彝族自治县","value":"24"}]},{"label":"思茅市","value":"08","children":[{"label":"翠云区","value":"02"},{"label":"普洱哈尼族彝族自治县","value":"21"},{"label":"墨江哈尼族自治县","value":"22"},{"label":"景东彝族自治县","value":"23"},{"label":"景谷傣族彝族自治县","value":"24"},{"label":"镇沅彝族哈尼族拉祜族自治县","value":"25"},{"label":"江城哈尼族彝族自治县","value":"26"},{"label":"孟连傣族拉祜族佤族自治县","value":"27"},{"label":"澜沧拉祜族自治县","value":"28"},{"label":"西盟佤族自治县","value":"29"}]},{"label":"临沧市","value":"09","children":[{"label":"临翔区","value":"02"},{"label":"凤庆县","value":"21"},{"label":"云县","value":"22"},{"label":"永德县","value":"23"},{"label":"镇康县","value":"24"},{"label":"双江拉祜族佤族布朗族傣族自治县","value":"25"},{"label":"耿马傣族佤族自治县","value":"26"},{"label":"沧源佤族自治县","value":"27"}]},{"label":"楚雄彝族自治州","value":"23","children":[{"label":"楚雄市","value":"01"},{"label":"双柏县","value":"22"},{"label":"牟定县","value":"23"},{"label":"南华县","value":"24"},{"label":"姚安县","value":"25"},{"label":"大姚县","value":"26"},{"label":"永仁县","value":"27"},{"label":"元谋县","value":"28"},{"label":"武定县","value":"29"},{"label":"禄丰县","value":"31"}]},{"label":"红河哈尼族彝族自治州","value":"25","children":[{"label":"个旧市","value":"01"},{"label":"开远市","value":"02"},{"label":"蒙自县","value":"22"},{"label":"屏边苗族自治县","value":"23"},{"label":"建水县","value":"24"},{"label":"石屏县","value":"25"},{"label":"弥勒县","value":"26"},{"label":"泸西县","value":"27"},{"label":"元阳县","value":"28"},{"label":"红河县","value":"29"},{"label":"金平苗族瑶族傣族自治县","value":"30"},{"label":"绿春县","value":"31"},{"label":"河口瑶族自治县","value":"32"}]},{"label":"文山壮族苗族自治州","value":"26","children":[{"label":"文山县","value":"21"},{"label":"砚山县","value":"22"},{"label":"西畴县","value":"23"},{"label":"麻栗坡县","value":"24"},{"label":"马关县","value":"25"},{"label":"丘北县","value":"26"},{"label":"广南县","value":"27"},{"label":"富宁县","value":"28"}]},{"label":"西双版纳傣族自治州","value":"28","children":[{"label":"景洪市","value":"01"},{"label":"勐海县","value":"22"},{"label":"勐腊县","value":"23"}]},{"label":"大理白族自治州","value":"29","children":[{"label":"大理市","value":"01"},{"label":"漾濞彝族自治县","value":"22"},{"label":"祥云县","value":"23"},{"label":"宾川县","value":"24"},{"label":"弥渡县","value":"25"},{"label":"南涧彝族自治县","value":"26"},{"label":"巍山彝族回族自治县","value":"27"},{"label":"永平县","value":"28"},{"label":"云龙县","value":"29"},{"label":"洱源县","value":"30"},{"label":"剑川县","value":"31"},{"label":"鹤庆县","value":"32"}]},{"label":"德宏傣族景颇族自治州","value":"31","children":[{"label":"瑞丽市","value":"02"},{"label":"潞西市","value":"03"},{"label":"梁河县","value":"22"},{"label":"盈江县","value":"23"},{"label":"陇川县","value":"24"}]},{"label":"怒江傈僳族自治州","value":"33","children":[{"label":"泸水县","value":"21"},{"label":"福贡县","value":"23"},{"label":"贡山独龙族怒族自治县","value":"24"},{"label":"兰坪白族普米族自治县","value":"25"}]},{"label":"迪庆藏族自治州","value":"34","children":[{"label":"香格里拉县","value":"21"},{"label":"德钦县","value":"22"},{"label":"维西傈僳族自治县","value":"23"}]}]},{"label":"西藏","value":"54","children":[{"label":"拉萨市","value":"01","children":[{"label":"城关区","value":"02"},{"label":"林周县","value":"21"},{"label":"当雄县","value":"22"},{"label":"尼木县","value":"23"},{"label":"曲水县","value":"24"},{"label":"堆龙德庆县","value":"25"},{"label":"达孜县","value":"26"},{"label":"墨竹工卡县","value":"27"}]},{"label":"昌都地区","value":"21","children":[{"label":"昌都县","value":"21"},{"label":"江达县","value":"22"},{"label":"贡觉县","value":"23"},{"label":"类乌齐县","value":"24"},{"label":"丁青县","value":"25"},{"label":"察雅县","value":"26"},{"label":"八宿县","value":"27"},{"label":"左贡县","value":"28"},{"label":"芒康县","value":"29"},{"label":"洛隆县","value":"32"},{"label":"边坝县","value":"33"}]},{"label":"山南地区","value":"22","children":[{"label":"乃东县","value":"21"},{"label":"扎囊县","value":"22"},{"label":"贡嘎县","value":"23"},{"label":"桑日县","value":"24"},{"label":"琼结县","value":"25"},{"label":"曲松县","value":"26"},{"label":"措美县","value":"27"},{"label":"洛扎县","value":"28"},{"label":"加查县","value":"29"},{"label":"隆子县","value":"31"},{"label":"错那县","value":"32"},{"label":"浪卡子县","value":"33"}]},{"label":"日喀则地区","value":"23","children":[{"label":"日喀则市","value":"01"},{"label":"南木林县","value":"22"},{"label":"江孜县","value":"23"},{"label":"定日县","value":"24"},{"label":"萨迦县","value":"25"},{"label":"拉孜县","value":"26"},{"label":"昂仁县","value":"27"},{"label":"谢通门县","value":"28"},{"label":"白朗县","value":"29"},{"label":"仁布县","value":"30"},{"label":"康马县","value":"31"},{"label":"定结县","value":"32"},{"label":"仲巴县","value":"33"},{"label":"亚东县","value":"34"},{"label":"吉隆县","value":"35"},{"label":"聂拉木县","value":"36"},{"label":"萨嘎县","value":"37"},{"label":"岗巴县","value":"38"}]},{"label":"那曲地区","value":"24","children":[{"label":"那曲县","value":"21"},{"label":"嘉黎县","value":"22"},{"label":"比如县","value":"23"},{"label":"聂荣县","value":"24"},{"label":"安多县","value":"25"},{"label":"申扎县","value":"26"},{"label":"索县","value":"27"},{"label":"班戈县","value":"28"},{"label":"巴青县","value":"29"},{"label":"尼玛县","value":"30"}]},{"label":"阿里地区","value":"25","children":[{"label":"普兰县","value":"21"},{"label":"札达县","value":"22"},{"label":"噶尔县","value":"23"},{"label":"日土县","value":"24"},{"label":"革吉县","value":"25"},{"label":"改则县","value":"26"},{"label":"措勤县","value":"27"}]},{"label":"林芝地区","value":"26","children":[{"label":"林芝县","value":"21"},{"label":"工布江达县","value":"22"},{"label":"米林县","value":"23"},{"label":"墨脱县","value":"24"},{"label":"波密县","value":"25"},{"label":"察隅县","value":"26"},{"label":"朗县","value":"27"}]}]},{"label":"陕西省","value":"61","children":[{"label":"西安市","value":"01","children":[{"label":"新城区","value":"02"},{"label":"碑林区","value":"03"},{"label":"莲湖区","value":"04"},{"label":"灞桥区","value":"11"},{"label":"未央区","value":"12"},{"label":"雁塔区","value":"13"},{"label":"阎良区","value":"14"},{"label":"临潼区","value":"15"},{"label":"长安区","value":"16"},{"label":"蓝田县","value":"22"},{"label":"周至县","value":"24"},{"label":"户县","value":"25"},{"label":"高陵县","value":"26"}]},{"label":"铜川市","value":"02","children":[{"label":"王益区","value":"02"},{"label":"印台区","value":"03"},{"label":"耀州区","value":"04"},{"label":"宜君县","value":"22"}]},{"label":"宝鸡市","value":"03","children":[{"label":"渭滨区","value":"02"},{"label":"金台区","value":"03"},{"label":"陈仓区","value":"04"},{"label":"凤翔县","value":"22"},{"label":"岐山县","value":"23"},{"label":"扶风县","value":"24"},{"label":"眉县","value":"26"},{"label":"陇县","value":"27"},{"label":"千阳县","value":"28"},{"label":"麟游县","value":"29"},{"label":"凤县","value":"30"},{"label":"太白县","value":"31"}]},{"label":"咸阳市","value":"04","children":[{"label":"秦都区","value":"02"},{"label":"杨凌区","value":"03"},{"label":"渭城区","value":"04"},{"label":"三原县","value":"22"},{"label":"泾阳县","value":"23"},{"label":"乾县","value":"24"},{"label":"礼泉县","value":"25"},{"label":"永寿县","value":"26"},{"label":"彬县","value":"27"},{"label":"长武县","value":"28"},{"label":"旬邑县","value":"29"},{"label":"淳化县","value":"30"},{"label":"武功县","value":"31"},{"label":"兴平市","value":"81"}]},{"label":"渭南市","value":"05","children":[{"label":"临渭区","value":"02"},{"label":"华县","value":"21"},{"label":"潼关县","value":"22"},{"label":"大荔县","value":"23"},{"label":"合阳县","value":"24"},{"label":"澄城县","value":"25"},{"label":"蒲城县","value":"26"},{"label":"白水县","value":"27"},{"label":"富平县","value":"28"},{"label":"韩城市","value":"81"},{"label":"华阴市","value":"82"}]},{"label":"延安市","value":"06","children":[{"label":"宝塔区","value":"02"},{"label":"延长县","value":"21"},{"label":"延川县","value":"22"},{"label":"子长县","value":"23"},{"label":"安塞县","value":"24"},{"label":"志丹县","value":"25"},{"label":"吴起县","value":"26"},{"label":"甘泉县","value":"27"},{"label":"富县","value":"28"},{"label":"洛川县","value":"29"},{"label":"宜川县","value":"30"},{"label":"黄龙县","value":"31"},{"label":"黄陵县","value":"32"}]},{"label":"汉中市","value":"07","children":[{"label":"汉台区","value":"02"},{"label":"南郑县","value":"21"},{"label":"城固县","value":"22"},{"label":"洋县","value":"23"},{"label":"西乡县","value":"24"},{"label":"勉县","value":"25"},{"label":"宁强县","value":"26"},{"label":"略阳县","value":"27"},{"label":"镇巴县","value":"28"},{"label":"留坝县","value":"29"},{"label":"佛坪县","value":"30"}]},{"label":"榆林市","value":"08","children":[{"label":"榆阳区","value":"02"},{"label":"神木县","value":"21"},{"label":"府谷县","value":"22"},{"label":"横山县","value":"23"},{"label":"靖边县","value":"24"},{"label":"定边县","value":"25"},{"label":"绥德县","value":"26"},{"label":"米脂县","value":"27"},{"label":"佳县","value":"28"},{"label":"吴堡县","value":"29"},{"label":"清涧县","value":"30"},{"label":"子洲县","value":"31"}]},{"label":"安康市","value":"09","children":[{"label":"汉滨区","value":"02"},{"label":"汉阴县","value":"21"},{"label":"石泉县","value":"22"},{"label":"宁陕县","value":"23"},{"label":"紫阳县","value":"24"},{"label":"岚皋县","value":"25"},{"label":"平利县","value":"26"},{"label":"镇坪县","value":"27"},{"label":"旬阳县","value":"28"},{"label":"白河县","value":"29"}]},{"label":"商洛市","value":"10","children":[{"label":"商州区","value":"02"},{"label":"洛南县","value":"21"},{"label":"丹凤县","value":"22"},{"label":"商南县","value":"23"},{"label":"山阳县","value":"24"},{"label":"镇安县","value":"25"},{"label":"柞水县","value":"26"}]}]},{"label":"甘肃省","value":"62","children":[{"label":"兰州市","value":"01","children":[{"label":"城关区","value":"02"},{"label":"七里河区","value":"03"},{"label":"西固区","value":"04"},{"label":"安宁区","value":"05"},{"label":"红古区","value":"11"},{"label":"永登县","value":"21"},{"label":"皋兰县","value":"22"},{"label":"榆中县","value":"23"}]},{"label":"嘉峪关市","value":"02","children":[]},{"label":"金昌市","value":"03","children":[{"label":"金川区","value":"02"},{"label":"永昌县","value":"21"}]},{"label":"白银市","value":"04","children":[{"label":"白银区","value":"02"},{"label":"平川区","value":"03"},{"label":"靖远县","value":"21"},{"label":"会宁县","value":"22"},{"label":"景泰县","value":"23"}]},{"label":"天水市","value":"05","children":[{"label":"秦城区","value":"02"},{"label":"北道区","value":"03"},{"label":"清水县","value":"21"},{"label":"秦安县","value":"22"},{"label":"甘谷县","value":"23"},{"label":"武山县","value":"24"},{"label":"张家川回族自治县","value":"25"}]},{"label":"武威市","value":"06","children":[{"label":"凉州区","value":"02"},{"label":"民勤县","value":"21"},{"label":"古浪县","value":"22"},{"label":"天祝藏族自治县","value":"23"}]},{"label":"张掖市","value":"07","children":[{"label":"甘州区","value":"02"},{"label":"肃南裕固族自治县","value":"21"},{"label":"民乐县","value":"22"},{"label":"临泽县","value":"23"},{"label":"高台县","value":"24"},{"label":"山丹县","value":"25"}]},{"label":"平凉市","value":"08","children":[{"label":"崆峒区","value":"02"},{"label":"泾川县","value":"21"},{"label":"灵台县","value":"22"},{"label":"崇信县","value":"23"},{"label":"华亭县","value":"24"},{"label":"庄浪县","value":"25"},{"label":"静宁县","value":"26"}]},{"label":"酒泉市","value":"09","children":[{"label":"肃州区","value":"02"},{"label":"金塔县","value":"21"},{"label":"瓜州县","value":"22"},{"label":"肃北蒙古族自治县","value":"23"},{"label":"阿克塞哈萨克族自治县","value":"24"},{"label":"玉门市","value":"81"},{"label":"敦煌市","value":"82"}]},{"label":"庆阳市","value":"10","children":[{"label":"西峰区","value":"02"},{"label":"庆城县","value":"21"},{"label":"环县","value":"22"},{"label":"华池县","value":"23"},{"label":"合水县","value":"24"},{"label":"正宁县","value":"25"},{"label":"宁县","value":"26"},{"label":"镇原县","value":"27"}]},{"label":"定西市","value":"11","children":[{"label":"安定区","value":"02"},{"label":"通渭县","value":"21"},{"label":"陇西县","value":"22"},{"label":"渭源县","value":"23"},{"label":"临洮县","value":"24"},{"label":"漳县","value":"25"},{"label":"岷县","value":"26"}]},{"label":"陇南市","value":"12","children":[{"label":"武都区","value":"02"},{"label":"成县","value":"21"},{"label":"文县","value":"22"},{"label":"宕昌县","value":"23"},{"label":"康县","value":"24"},{"label":"西和县","value":"25"},{"label":"礼县","value":"26"},{"label":"徽县","value":"27"},{"label":"两当县","value":"28"}]},{"label":"临夏回族自治州","value":"29","children":[{"label":"临夏市","value":"01"},{"label":"临夏县","value":"21"},{"label":"康乐县","value":"22"},{"label":"永靖县","value":"23"},{"label":"广河县","value":"24"},{"label":"和政县","value":"25"},{"label":"东乡族自治县","value":"26"},{"label":"积石山保安族东乡族撒拉族自治县","value":"27"}]},{"label":"甘南藏族自治州","value":"30","children":[{"label":"合作市","value":"01"},{"label":"临潭县","value":"21"},{"label":"卓尼县","value":"22"},{"label":"舟曲县","value":"23"},{"label":"迭部县","value":"24"},{"label":"玛曲县","value":"25"},{"label":"碌曲县","value":"26"},{"label":"夏河县","value":"27"}]}]},{"label":"青海","value":"63","children":[{"label":"西宁市","value":"01","children":[{"label":"城东区","value":"02"},{"label":"城中区","value":"03"},{"label":"城西区","value":"04"},{"label":"城北区","value":"05"},{"label":"大通回族土族自治县","value":"21"},{"label":"湟中县","value":"22"},{"label":"湟源县","value":"23"}]},{"label":"海东地区","value":"21","children":[{"label":"平安县","value":"21"},{"label":"民和回族土族自治县","value":"22"},{"label":"乐都县","value":"23"},{"label":"互助土族自治县","value":"26"},{"label":"化隆回族自治县","value":"27"},{"label":"循化撒拉族自治县","value":"28"}]},{"label":"海北藏族自治州","value":"22","children":[{"label":"门源回族自治县","value":"21"},{"label":"祁连县","value":"22"},{"label":"海晏县","value":"23"},{"label":"刚察县","value":"24"}]},{"label":"黄南藏族自治州","value":"23","children":[{"label":"同仁县","value":"21"},{"label":"尖扎县","value":"22"},{"label":"泽库县","value":"23"},{"label":"河南蒙古族自治县","value":"24"}]},{"label":"海南藏族自治州","value":"25","children":[{"label":"共和县","value":"21"},{"label":"同德县","value":"22"},{"label":"贵德县","value":"23"},{"label":"兴海县","value":"24"},{"label":"贵南县","value":"25"}]},{"label":"果洛藏族自治州","value":"26","children":[{"label":"玛沁县","value":"21"},{"label":"班玛县","value":"22"},{"label":"甘德县","value":"23"},{"label":"达日县","value":"24"},{"label":"久治县","value":"25"},{"label":"玛多县","value":"26"}]},{"label":"玉树藏族自治州","value":"27","children":[{"label":"玉树县","value":"21"},{"label":"杂多县","value":"22"},{"label":"称多县","value":"23"},{"label":"治多县","value":"24"},{"label":"囊谦县","value":"25"},{"label":"曲麻莱县","value":"26"}]},{"label":"海西蒙古族藏族自治州","value":"28","children":[{"label":"格尔木市","value":"01"},{"label":"德令哈市","value":"02"},{"label":"乌兰县","value":"21"},{"label":"都兰县","value":"22"},{"label":"天峻县","value":"23"}]}]},{"label":"宁夏","value":"64","children":[{"label":"银川市","value":"01","children":[{"label":"兴庆区","value":"04"},{"label":"西夏区","value":"05"},{"label":"金凤区","value":"06"},{"label":"永宁县","value":"21"},{"label":"贺兰县","value":"22"},{"label":"灵武市","value":"81"}]},{"label":"石嘴山市","value":"02","children":[{"label":"大武口区","value":"02"},{"label":"惠农区","value":"05"},{"label":"平罗县","value":"21"}]},{"label":"吴忠市","value":"03","children":[{"label":"利通区","value":"02"},{"label":"盐池县","value":"23"},{"label":"同心县","value":"24"},{"label":"青铜峡市","value":"81"}]},{"label":"固原市","value":"04","children":[{"label":"原州区","value":"02"},{"label":"西吉县","value":"22"},{"label":"隆德县","value":"23"},{"label":"泾源县","value":"24"},{"label":"彭阳县","value":"25"}]},{"label":"中卫市","value":"05","children":[{"label":"沙坡头区","value":"02"},{"label":"中宁县","value":"21"},{"label":"海原县","value":"22"}]}]},{"label":"新疆","value":"65","children":[{"label":"乌鲁木齐市","value":"01","children":[{"label":"天山区","value":"02"},{"label":"沙依巴克区","value":"03"},{"label":"新市区","value":"04"},{"label":"水磨沟区","value":"05"},{"label":"头屯河区","value":"06"},{"label":"达坂城区","value":"07"},{"label":"东山区","value":"08"},{"label":"乌鲁木齐县","value":"21"}]},{"label":"克拉玛依市","value":"02","children":[{"label":"独山子区","value":"02"},{"label":"克拉玛依区","value":"03"},{"label":"白碱滩区","value":"04"},{"label":"乌尔禾区","value":"05"}]},{"label":"吐鲁番地区","value":"21","children":[{"label":"吐鲁番市","value":"01"},{"label":"鄯善县","value":"22"},{"label":"托克逊县","value":"23"}]},{"label":"哈密地区","value":"22","children":[{"label":"哈密市","value":"01"},{"label":"巴里坤哈萨克自治县","value":"22"},{"label":"伊吾县","value":"23"}]},{"label":"昌吉回族自治州","value":"23","children":[{"label":"昌吉市","value":"01"},{"label":"阜康市","value":"02"},{"label":"米泉市","value":"03"},{"label":"呼图壁县","value":"23"},{"label":"玛纳斯县","value":"24"},{"label":"奇台县","value":"25"},{"label":"吉木萨尔县","value":"27"},{"label":"木垒哈萨克自治县","value":"28"}]},{"label":"博尔塔拉蒙古自治州","value":"27","children":[{"label":"博乐市","value":"01"},{"label":"精河县","value":"22"},{"label":"温泉县","value":"23"}]},{"label":"巴音郭楞蒙古自治州","value":"28","children":[{"label":"库尔勒市","value":"01"},{"label":"轮台县","value":"22"},{"label":"尉犁县","value":"23"},{"label":"若羌县","value":"24"},{"label":"且末县","value":"25"},{"label":"焉耆回族自治县","value":"26"},{"label":"和静县","value":"27"},{"label":"和硕县","value":"28"},{"label":"博湖县","value":"29"}]},{"label":"阿克苏地区","value":"29","children":[{"label":"阿克苏市","value":"01"},{"label":"温宿县","value":"22"},{"label":"库车县","value":"23"},{"label":"沙雅县","value":"24"},{"label":"新和县","value":"25"},{"label":"拜城县","value":"26"},{"label":"乌什县","value":"27"},{"label":"阿瓦提县","value":"28"},{"label":"柯坪县","value":"29"}]},{"label":"克孜勒苏柯尔克孜自治州","value":"30","children":[{"label":"阿图什市","value":"01"},{"label":"阿克陶县","value":"22"},{"label":"阿合奇县","value":"23"},{"label":"乌恰县","value":"24"}]},{"label":"喀什地区","value":"31","children":[{"label":"喀什市","value":"01"},{"label":"疏附县","value":"21"},{"label":"疏勒县","value":"22"},{"label":"英吉沙县","value":"23"},{"label":"泽普县","value":"24"},{"label":"莎车县","value":"25"},{"label":"叶城县","value":"26"},{"label":"麦盖提县","value":"27"},{"label":"岳普湖县","value":"28"},{"label":"伽师县","value":"29"},{"label":"巴楚县","value":"30"},{"label":"塔什库尔干塔吉克自治县","value":"31"}]},{"label":"和田地区","value":"32","children":[{"label":"和田市","value":"01"},{"label":"和田县","value":"21"},{"label":"墨玉县","value":"22"},{"label":"皮山县","value":"23"},{"label":"洛浦县","value":"24"},{"label":"策勒县","value":"25"},{"label":"于田县","value":"26"},{"label":"民丰县","value":"27"}]},{"label":"伊犁哈萨克","value":"40","children":[{"label":"伊宁市","value":"02"},{"label":"奎屯市","value":"03"},{"label":"伊宁县","value":"21"},{"label":"察布查尔锡伯自治县","value":"22"},{"label":"霍城县","value":"23"},{"label":"巩留县","value":"24"},{"label":"新源县","value":"25"},{"label":"昭苏县","value":"26"},{"label":"特克斯县","value":"27"},{"label":"尼勒克县","value":"28"}]},{"label":"塔城地区","value":"42","children":[{"label":"塔城市","value":"01"},{"label":"乌苏市","value":"02"},{"label":"额敏县","value":"21"},{"label":"沙湾县","value":"23"},{"label":"托里县","value":"24"},{"label":"裕民县","value":"25"},{"label":"和布克赛尔蒙古自治县","value":"26"}]},{"label":"阿勒泰地区","value":"43","children":[{"label":"阿勒泰市","value":"01"},{"label":"布尔津县","value":"21"},{"label":"富蕴县","value":"22"},{"label":"福海县","value":"23"},{"label":"哈巴河县","value":"24"},{"label":"青河县","value":"25"},{"label":"吉木乃县","value":"26"}]},{"label":"石河子市","value":"91","children":[]},{"label":"阿拉尔市","value":"92","children":[]},{"label":"图木舒克市","value":"93","children":[]},{"label":"五家渠市","value":"94","children":[]}]},{"label":"台湾","value":"71","children":[{"label":"台北","value":"01","children":[]},{"label":"高雄","value":"02","children":[]},{"label":"基隆","value":"03","children":[]},{"label":"台中","value":"04","children":[]},{"label":"台南","value":"05","children":[]},{"label":"新竹","value":"06","children":[]},{"label":"嘉义","value":"07","children":[]},{"label":"宜兰","value":"08","children":[]},{"label":"桃园","value":"09","children":[]},{"label":"苗栗","value":"10","children":[]},{"label":"彰化","value":"11","children":[]},{"label":"南投","value":"12","children":[]},{"label":"云林","value":"13","children":[]},{"label":"屏东","value":"14","children":[]},{"label":"台东","value":"15","children":[]},{"label":"花莲","value":"16","children":[]},{"label":"澎湖","value":"17","children":[]}]},{"label":"香港","value":"81","children":[{"label":"香港岛","value":"01","children":[]},{"label":"九龙","value":"02","children":[]},{"label":"新界","value":"03","children":[]}]},{"label":"澳门","value":"82","children":[{"label":"澳门半岛","value":"01","children":[]},{"label":"氹仔岛","value":"02"},{"label":"路环岛","value":"03","children":[]},{"label":"路氹城","value":"04","children":[]}]}];module.exports=exports["default"];

/***/ }
/******/ ]);