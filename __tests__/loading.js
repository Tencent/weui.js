describe('loading', function(){
    let loading;
    before(() => {
        loading = weui.loading('loading');
    });

    it('should render loading', () => {
        assert($('.weui-loading_toast').length === 1);
    });

    it('should close after run hide()', () => {
        assert(typeof loading.hide === 'function');

        loading.hide();
        setTimeout(() => {
            assert($('.weui-loading_toast').length === 0);
        }, closeDur);
    });
});
