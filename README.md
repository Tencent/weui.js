weui.js
=====

[![npm version](https://img.shields.io/npm/v/weui.js.svg)](https://www.npmjs.org/package/weui.js/)
[![QQ](http://pub.idqqimg.com/wpa/images/group.png)](http://jq.qq.com/?_wv=1027&k=413HLfV)


### 概述

[WeUI](https://github.com/weui/weui.git) 的轻量级 js 封装。

注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程序开发了另外的版本，详情请看：https://github.com/weui/weui-wxss/

### 手机预览

![https://weui.io](https://cloud.githubusercontent.com/assets/2395166/20742697/96705822-b70c-11e6-9486-c03a5939a1d6.png)

[https://weui.io/weui.js/](https://weui.io/weui.js/)


### 开发

安装

```shell
git clone https://github.com/weui/weui.js.git
cd weui.js
npm install
npm start
```

编译

```shell
npm run build
```


### 使用

#### global 

```html
<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.0/weui.min.css">
<script type="text/javascript" src="dist/weui.min.js"></script>
<script type="text/javascript">
    weui.alert('alert');
</script>
```

#### import as module

```javascript
import 'weui';
import weui from 'weui.js';

weui.alert('alert');
```

### 文档

[Documents](https://github.com/weui/weui.js/tree/master/docs/README.md)

### 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request。

### License
The MIT License(http://opensource.org/licenses/MIT)

请自由地享受和参与开源
