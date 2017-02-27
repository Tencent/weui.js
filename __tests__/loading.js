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

    it('should close after run hide()', (done) => {
        assert(typeof loading.hide === 'function');

        loading.hide(function(){
            assert($('.weui-loading_toast').length === 0);
            done();
        });
    });

    it('test hide && callback', (done) => {
        let called = false;
        const loading = weui.loading("test");

        loading.hide(function(){
            called = true;
        });

        setTimeout(() => {
            assert($('.weui-loading_toast').length === 0);
            assert(called);

            done();
        }, closeDur);
    });
});
