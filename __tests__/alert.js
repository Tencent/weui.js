function close(done){
    $('.weui-dialog__btn').click();
    setTimeout(done, closeDur);
}

describe('alert', function(){
    this.timeout(0);

    it('should render alert', (done) => {
        const ctn = 'test render alert';
        weui.alert(ctn);

        let $alert = $('.weui-dialog');
        assert($alert.length === 1);

        assert($('.weui-dialog__bd').html() === ctn);

        close(done);
    });

    it('should render custom title & className', (done) => {
        const title = 'custom title', className = 'test';
        const alert = weui.alert('test render custom title', {
            title: title,
            className: className
        });

        assert($('.weui-dialog__title').html() === title);
        assert(alert.classList.contains(className));

        close(done);
    });

    it('should render custom btn', (done) => {
        const ctn = 'OK';
        weui.alert('test render custom btn', {
            title: 'custom btn',
            buttons: [{
                label: ctn,
                type: 'primary'
            }]
        });

        assert($('.weui-dialog__btn').html() === ctn);
        close(done);
    });

    it('test btn click', (done) => {
        let called = false;
        weui.alert('test btn click', () => {
            called = true;
        });

        $('.weui-dialog__btn').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(called);
            done();
        }, closeDur);
    });

    it('test custom btn click', (done) => {
        let called = false;
        weui.alert('test render custom btn', {
            title: 'custom btn',
            buttons: [{
                label: 'OK',
                type: 'primary',
                onClick: () => {
                    called = true;
                }
            }]
        });

        $('.weui-dialog__btn').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(called);
            done();
        }, closeDur);
    });

    it('test hide && callback', (done) => {
        let called = false;
        const alert = weui.alert("test");

        alert.hide(function(){
            called = true;
        });

        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(called);

            done();
        }, closeDur);
    });
});
