describe('tab', function(){
    let ret,
        $tab, $tabItems, $tabCtns;
    before(() => {
        $('#test').html(`
            <div class="weui-tab" id="tab">
                <div class="weui-navbar">
                    <div class="weui-navbar__item">选项一</div>
                    <div class="weui-navbar__item">选项二</div>
                    <div class="weui-navbar__item">选项三</div>
                </div>
                <div class="weui-tab__panel">
                    <div class="weui-tab__content">1</div>
                    <div class="weui-tab__content">2</div>
                    <div class="weui-tab__content">3</div>
                </div>
            </div>
        `);

        weui.tab('#tab',{
            defaultIndex: 1,
            onChange: function(index){
                ret = index;
            }
        });

        $tab = $('.weui-tab');
        $tabItems = $('.weui-navbar__item');
        $tabCtns = $('.weui-tab__content');
    });

    it('test arg defaultIndex', () => {
        assert(!$tabItems.eq(0).hasClass('weui-bar__item_on'));
        assert($tabItems.eq(1).hasClass('weui-bar__item_on'));

        assert($tabCtns.eq(0).width() === 0);
        assert($tabCtns.eq(1).width() !== 0);

        assert(ret === undefined);
    });

    it('test item click', () => {
        $tabItems.eq(2).click();

        assert(!$tabItems.eq(1).hasClass('weui-bar__item_on'));
        assert($tabItems.eq(2).hasClass('weui-bar__item_on'));

        assert($tabCtns.eq(1).width() === 0);
        assert($tabCtns.eq(2).width() !== 0);

        assert(ret === 2);
    });

    after(() => {
        $('#test').html('');
    });
});
