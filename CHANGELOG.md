#### v1.1.2 (2017-06-28)

- 【修复】 hide的回调在事件响应中报错的问题
- 【修复】 修复结束日期为个位数时不能到选择结束日期当天的bug。#73
- 【修复】 example.js index为0的时候，浏览图片不能删除的问题
- 【修复】 多列时多次触发onChange的bug #104
- 【修复】 example手动上传图片不显示的问题 #116
- 【修复】 参数`isAndroid`不生效的问题 #111
- 【优化】 文档不完善，没有列出html #70
- 【优化】 `picker` 增加参数，指定容器
- 【优化】 `uploader` 增加 xhrFields 参数，设置 withCredentials:true 支持 cookies
- 【优化】 表单验证逻辑，如果有表达式，先进行表达式校验，再进行为空校验。目的是符合input选填，但要是填了的话一定要符合正则的需求。#66 #102
- 【优化】 `picker` 允许传入基本类型，那么label和value都是它
- 【优化】 `form` 增加API `showErrorTips`和`hideErrorTips`



#### v1.1.1 (2017-02-27)

- 【优化】 `actionSheet`/`alert`/`confirm`/`dialog`/`gallery`/`loading`/`picker`/`topTips`的`hide`增加回调入参
- 【修复】 `preview`展示图片时url会出现的问题
- 【修复】 `uploader`在拍照时图片方向错误的问题
- 【修复】 `picker`点击时偶尔会移动2倍距离的问题


#### v1.1.0 (2017-02-09)

- 【增强】 日期选择器`datePicker`增加`corn`的用法，详情请看[文档](https://github.com/weui/weui.js/blob/master/docs/component/picker.md#datepickeroptions)
- 【增强】 `uploader`里的`file`增加stop API，以中断当前文件的上传
- 【增强】 `uploader`里的`file`增加status，以表示当前文件的状态：`ready`, `progress`, `success`, `fail`
- 【优化】 `picker`在回调中同时返回label和value
- 【优化】 `picker`支持PC的滑动，以适应PC微信
- 【优化】 `alert`/`confirm`/`dialog`支持return false后不关闭，以支持开发者后续更多的操作
- 【修复】 `hide`调用之后二次调用会报错的问题
- 【修复】 `form`在使用Vue.js后无法正常工作的问题
- 【修复】 example在上传之后预览不出现图片的问题


#### v1.0.0 (2016-12-26)

初始发布

- Initial release
