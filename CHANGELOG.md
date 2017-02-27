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
