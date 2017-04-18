<a name="searchBar"></a>

## searchBar(selector)
searchbar 搜索框，主要实现搜索框组件一些显隐逻辑

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | searchbar的selector |

**Example**  
#### html
```html
<div class="weui-search-bar" id="searchBar">
    <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
            <a href="javascript:" class="weui-icon-clear"></a>
        </div>
        <label class="weui-search-bar__label">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
    </form>
    <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
</div>
```

#### js
```javascript
weui.searchBar('#searchBar');
```
