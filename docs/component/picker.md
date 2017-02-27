## Functions

<dl>
<dt><a href="#picker">picker(items, options)</a></dt>
<dd><p>picker 多列选择器。</p>
</dd>
<dt><a href="#datePicker">datePicker(options)</a></dt>
<dd><p>dataPicker 时间选择器，由picker拓展而来，提供年、月、日的选择。</p>
</dd>
</dl>

<a name="picker"></a>

## picker(items, options)
picker 多列选择器。

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| items | <code>array</code> |  | picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。 |
| options | <code>Object</code> |  | 配置项 |
| [options.depth] | <code>number</code> |  | picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。 |
| [options.id] | <code>string</code> | <code>&quot;default&quot;</code> | 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分） |
| [options.className] | <code>string</code> |  | 自定义类名 |
| [options.defaultValue] | <code>array</code> |  | 默认选项的value数组 |
| [options.onChange] | <code>function</code> |  | 在picker选中的值发生变化的时候回调 |
| [options.onConfirm] | <code>function</code> |  | 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。 |

**Example**  
```js
// 单列picker
weui.picker([
{
    label: '飞机票',
    value: 0,
    disabled: true // 不可用
},
{
    label: '火车票',
    value: 1
},
{
    label: '汽车票',
    value: 3
},
{
    label: '公车票',
    value: 4,
}
], {
   className: 'custom-classname',
   defaultValue: [3],
   onChange: function (result) {
       console.log(result)
   },
   onConfirm: function (result) {
       console.log(result)
   },
   id: 'singleLinePicker'
});
```
**Example**  
```js
// 多列picker
weui.picker([
    {
        label: '1',
        value: '1'
    }, {
        label: '2',
        value: '2'
    }, {
        label: '3',
        value: '3'
    }
], [
    {
        label: 'A',
        value: 'A'
    }, {
        label: 'B',
        value: 'B'
    }, {
        label: 'C',
        value: 'C'
    }
], {
    defaultValue: ['3', 'A'],
    onChange: function (result) {
        console.log(result);
    },
    onConfirm: function (result) {
        console.log(result);
    },
    id: 'multiPickerBtn'
});
```
**Example**  
```js
// 级联picker
weui.picker([
{
    label: '飞机票',
    value: 0,
    children: [
        {
            label: '经济舱',
            value: 1
        },
        {
            label: '商务舱',
            value: 2
        }
    ]
},
{
    label: '火车票',
    value: 1,
    children: [
        {
            label: '卧铺',
            value: 1,
            disabled: true // 不可用
        },
        {
            label: '坐票',
            value: 2
        },
        {
            label: '站票',
            value: 3
        }
    ]
},
{
    label: '汽车票',
    value: 3,
    children: [
        {
            label: '快班',
            value: 1
        },
        {
            label: '普通',
            value: 2
        }
    ]
}
], {
   className: 'custom-classname',
   defaultValue: [1, 3],
   onChange: function (result) {
       console.log(result)
   },
   onConfirm: function (result) {
       console.log(result)
   },
   id: 'doubleLinePicker'
});
```
<a name="datePicker"></a>

## datePicker(options)
dataPicker 时间选择器，由picker拓展而来，提供年、月、日的选择。

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options |  |  | 配置项 |
| [options.id] | <code>string</code> | <code>&quot;datePicker&quot;</code> | 作为picker的唯一标识 |
| [options.start] | <code>number</code> &#124; <code>string</code> &#124; <code>Date</code> | <code>2000</code> | 起始年份，如果是 `Number` 类型，表示起始年份；如果是 `String` 类型，格式为 'YYYY-MM-DD'；如果是 `Date` 类型，就传一个 Date |
| [options.end] | <code>number</code> &#124; <code>string</code> &#124; <code>Date</code> | <code>2030</code> | 结束年份，同上 |
| [options.cron] | <code>string</code> | <code>&quot;* * *&quot;</code> | cron 表达式，三位，分别是 dayOfMonth[1-31]，month[1-12] 和 dayOfWeek[0-6]（周日-周六） |
| [options.className] | <code>string</code> |  | 自定义类名 |
| [options.defaultValue] | <code>array</code> |  | 默认选项的value数组, 如 [1991, 6, 9] |
| [options.onChange] | <code>function</code> |  | 在picker选中的值发生变化的时候回调 |
| [options.onConfirm] | <code>function</code> |  | 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。 |

**Example**  
```js
// 示例1：
weui.datePicker({
    start: 1990,
    end: 2000,
    defaultValue: [1991, 6, 9],
    onChange: function(result){
        console.log(result);
    },
    onConfirm: function(result){
        console.log(result);
    },
    id: 'datePicker'
});

// 示例2：
weui.datePicker({
     start: new Date(), // 从今天开始
     end: 2030,
     defaultValue: [2020, 6, 9],
     onChange: function(result){
         console.log(result);
     },
     onConfirm: function(result){
         console.log(result);
     },
     id: 'datePicker'
 });

 // 示例3：
weui.datePicker({
     start: new Date(), // 从今天开始
     end: 2030,
     cron: '* * 0,6',  // 每逢周日、周六
     onChange: function(result){
         console.log(result);
     },
     onConfirm: function(result){
         console.log(result);
     },
     id: 'datePicker'
 });

 // 示例4：
weui.datePicker({
     start: new Date(), // 从今天开始
     end: 2030,
     cron: '1-10 * *',  // 每月1日-10日
     onChange: function(result){
         console.log(result);
     },
     onConfirm: function(result){
         console.log(result);
     },
     id: 'datePicker'
 });
```
