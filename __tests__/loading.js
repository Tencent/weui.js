describe('loading', function(){
    let loading;
    before(() => {
        loading = weui.loading('loading', {
            className: 'test'
        });
    });

    it('should render loading', () => {
        assert($('.weui-loading_toast').length === 1);
        assert(loading.classList.contains('test'));
    });

    it('should close after run hide()', () => {
        assert(typeof loading.hide === 'function');

        loading.hide();
        setTimeout(() => {
            assert($('.weui-loading_toast').length === 0);
        }, closeDur);
    });
});
