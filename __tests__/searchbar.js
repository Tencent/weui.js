describe('searchBar', function(){
    let $searchBar, $label, $input, $clear;
    before(() => {
        $('#test').html(`
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
        `);

        weui.searchBar('#searchBar');

        $searchBar = $('.weui-search-bar');
        $label = $('.weui-search-bar__label');
        $input = $('.weui-search-bar__input');
        $clear = $('.weui-icon-clear');
    });

    it('test search label click', () => {
        $label.click();
        assert($searchBar.hasClass('weui-search-bar_focusing'));
    });

    it('test search input typing', () => {
        assert($clear.width() === 0);

        $input.val('123');
        assert($clear.width() !== 0);
    });

    it('test clear click', () => {
        $clear.click();

        assert($input.val() === '');
        assert($clear.width() === 0);
    });

    it('test cancel click', () => {
        $input.val('123');
        $('.weui-search-bar__cancel-btn').click();

        assert($input.val() === '');
        assert($clear.width() === 0);
        assert(!$searchBar.hasClass('weui-search-bar_focusing'));
    });

    after(() => {
        $('#test').html('');
    });
});
