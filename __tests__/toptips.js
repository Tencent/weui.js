describe('toptips', function(){
    const dur = 1000;
    this.timeout(0);

    before(() => {
        weui.topTips('顶部报错提示', dur);
    });

    it('should render toptips and close after 1000ms', (done) => {
        assert($('.weui-toptips').length === 1);

        setTimeout(() => {
            assert($('.weui-toptips').length === 0);
            done();
        }, dur + 10);
    });

    it('test run callback', (done) => {
        let called = false;
        weui.topTips('顶部报错提示', () => {
            called = true;
        });

        setTimeout(() => {
            assert($('.weui-toptips').length === 0);
            assert(called);
            done();
        }, 3000 + 10);
    });

    it('test duration & callback', (done) => {
        let called = false;
        let topTips = weui.topTips('顶部报错提示', {
            duration: dur,
            className: 'test',
            callback: () => {
                called = true;
            }
        });

        setTimeout(() => {
            assert($('.weui-toptips').length === 0);
            assert(called);
            assert(topTips.classList.contains('test'));
            done();
        }, dur + 10);
    });

    it('test hide && callback', (done) => {
        let called = false;
        const topTips = weui.topTips("test");

        topTips.hide(function(){
            called = true;
        });

        setTimeout(() => {
            assert($('.weui-toptips').length === 0);
            assert(called);

            done();
        }, closeDur);
    });
});
