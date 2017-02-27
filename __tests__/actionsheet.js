describe('actionsheet', function(){
    this.timeout(0);

    var actionsheetWrp;

    it('should render actionsheet', () => {
        actionsheetWrp = weui.actionSheet(
            [ {label: '拍照'}, {label: '从相册选择'}],
            [ {label: '确定'}, {label: '取消'}],
            {
                className: 'test'
            }
        );
        const $actionsheet = $('.weui-actionsheet');
        assert($actionsheet.length === 1);
        assert(actionsheetWrp.classList.contains('test'));
    });
    it('should render menus', () => {
        const $menu = $('.weui-actionsheet__menu');
        assert($menu.length === 1);

        const $menuItems = $menu.find('.weui-actionsheet__cell'),
            names = ['拍照', '从相册选择'];
        assert($menuItems.length === 2);
        $menuItems.each((index, item) => {
            assert(item.innerHTML === names[index]);
        });
    });

    it('should render actions', () => {
        const $action = $('.weui-actionsheet__action');
        assert($action.length === 1);

        const $actionItems = $action.find('.weui-actionsheet__cell'),
            names = ['确定', '取消'];
        assert($actionItems.length === 2);
        $actionItems.each((index, item) => {
            assert(item.innerHTML === names[index]);
        });
    });

    it('test mask click', (done) => {
        const $mask = $('.weui-mask');
        assert($mask.length === 1);

        $mask.click();

        setTimeout(() => {
            assert($('.weui-actionsheet').length === 0);

            done();
        }, closeDur);
    });

    it('test menu click', (done) => {
        let called = false;
        weui.actionSheet([{
            label: 'menu',
            onClick: () => {
                called = true;
            }
        }]);
        $('.weui-actionsheet__menu .weui-actionsheet__cell').click();
        assert(called);

        setTimeout(() => {
            assert($('.weui-actionsheet').length === 0);

            done();
        }, closeDur);
    });

    it('test action click', (done) => {
        let called = false;
        weui.actionSheet([], [{
            label: 'action',
            onClick: () => {
                called = true;
            }
        }]);

        $('.weui-actionsheet__action .weui-actionsheet__cell').click();
        assert(called);

        setTimeout(() => {
            assert($('.weui-actionsheet').length === 0);

            done();
        }, closeDur);
    });

    it('test hide && callback', (done) => {
        let called = false;
        const actionSheet = weui.actionSheet([]);

        actionSheet.hide(function(){
            called = true;
        });

        setTimeout(() => {
            assert($('.weui-actionsheet').length === 0);
            assert(called);

            done();
        }, closeDur);
    });
});
