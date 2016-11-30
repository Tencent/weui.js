weui.js
=====

[WeUI](https://github.com/weui/weui.git) 的轻量级 js 封装

### 注意

**weui.js目前正在处于测试阶段，不建议在正式环境上使用。**

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
