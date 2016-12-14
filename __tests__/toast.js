describe('toast', function(){
    const dur = 1000;
    this.timeout(0);

    before(() => {
        weui.toast('操作成功', dur);
    });

    it('should render toast and close after 1000ms', (done) => {
        assert($('.weui-toast').length === 1);

        setTimeout(() => {
            assert($('.weui-toast').length === 0);
            done();
        }, dur + closeDur + 10);
    });

    it('test run callback', (done) => {
        let called = false;
        let toast = weui.toast('操作成功', {
            duration: dur,
            className: 'test',
            callback: () => {
                called = true;
            }
        });

        setTimeout(() => {
            assert($('.weui-toast').length === 0);
            assert(called);
            assert(toast.classList.contains('test'));
            done();
        }, dur + closeDur + 10);
    });
});
