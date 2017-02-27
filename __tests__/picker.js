describe('picker', function () {
    let changeRet = null, confirmRet = null;
    before(() => {
        weui.picker([{
                label: '飞机票',
                value: 0,
                children: [
                    {
                        label: '广州',
                        value: 0
                    },
                    {
                        label: '深圳',
                        value: 1
                    }
                ]
            }, {
                label: '火车票',
                disabled: true,
                value: 1
            }, {
                label: '的士票',
                value: 2,
                children: [
                    {
                        label: '东',
                        disabled: true,
                        value: 'E'
                    },
                    {
                        label: '南',
                        value: 'S'
                    },
                    {
                        label: '西',
                        value: 'W'
                    },
                    {
                        label: '北',
                        value: 'N'
                    }
                ]
        }], {
            onChange: function (result) {
                changeRet = result;
            },
            onConfirm: function (result) {
                confirmRet = result;
            },
            id: 'test'
        });
    });

    it('should render picker', () => {
        const $groups = $('.weui-picker__group');
        assert($('.weui-picker').length === 1);
        assert($groups.length === 2);

        const $group1Items = $groups.eq(0).find('.weui-picker__item'),
            group1 = ['飞机票', '火车票', '的士票'];
        $group1Items.each((index, item) => {
            if(index == 1){
                assert(item.classList.contains('weui-picker__item_disabled'));
            }
            assert(item.innerHTML === group1[index]);
        });

        const $group2Items = $groups.eq(1).find('.weui-picker__item'),
            group2 = ['东', '南', '西', '北'];
        $group2Items.each((index, item) => {
            if(index == 0){
                assert(item.classList.contains('weui-picker__item_disabled'));
            }
            assert(item.innerHTML === group2[index]);
        });
    });

    it('test change callback', () => {
        assert(changeRet.length === 2);
        assert(changeRet[0].label === '的士票');
        assert(changeRet[0].value === 2);
        console.log(changeRet);
        assert(changeRet[1].label === '西');
        assert(changeRet[1].value === 'W');
        assert(confirmRet === null);
    });

    it('test confirmBtn click', (done) => {
        $('#weui-picker-confirm').click();
        assert(changeRet.length === 2);
        assert(changeRet[0].label === '的士票');
        assert(changeRet[0].value === 2);
        assert(changeRet[1].label === '西');
        assert(changeRet[1].value === 'W');

        assert(confirmRet.length === 2);
        assert(confirmRet[0].label === '的士票');
        assert(confirmRet[0].value === 2);
        assert(confirmRet[1].label === '西');
        assert(confirmRet[1].value === 'W');

        setTimeout(() => {
            assert($('.weui-picker').length === 0);

            done();
        }, closeDur);
    });

    it('test mutli picker', (done) => {
        changeRet = confirmRet = null;
        const picker = weui.picker([
            {
                label: '1',
                value: '1'
            }, {
                label: '2',
                value: '2'
            }, {
                label: '3',
                value: '3'
            }
        ], [
            {
                label: 'A',
                value: 'A'
            }, {
                label: 'B',
                value: 'B'
            }, {
                label: 'C',
                value: 'C'
            }
        ], {
            className: 'test',
            defaultValue: ['3', 'A'],
            onChange: function (result) {
                changeRet = result;
            },
            onConfirm: function (result) {
                confirmRet = result;
            },
            id: 'multiPickerBtn'
        });
        $('#weui-picker-confirm').click();
        assert(picker.classList.contains('test'));

        assert(changeRet.length === 2);
        assert(changeRet[0].label === '3');
        assert(changeRet[0].value === '3');
        assert(changeRet[1].label === 'A');
        assert(changeRet[1].value === 'A');

        assert(confirmRet.length === 2);
        assert(confirmRet[0].label === '3');
        assert(confirmRet[0].value === '3');
        assert(confirmRet[1].label === 'A');
        assert(confirmRet[1].value === 'A');

        setTimeout(() => {
            assert($('.weui-picker').length === 0);

            done();
        }, closeDur);
    });

    it('test mask click', (done) => {
        changeRet = confirmRet = null;
        weui.datePicker({
            start: 1990,
            end: 2000,
            onChange: function (result) {
                changeRet = result;
            },
            onConfirm: function (result) {
                confirmRet = result;
            },
            id: 'DatePicker'
        });
        $('.weui-mask').click();
        assert(JSON.stringify(changeRet) !== null);
        assert(confirmRet === null);

        setTimeout(() => {
            assert($('.weui-picker').length === 0);

            done();
        }, closeDur);
    });

    it('test cancelBtn click', (done) => {
        changeRet = confirmRet = null;
        weui.datePicker({
            start: 1990,
            end: 2000,
            onChange: function (result) {
                changeRet = result;
            },
            onConfirm: function (result) {
                confirmRet = result;
            },
            id: 'DatePicker'
        });
        $('.weui-picker__action[data-action="cancel"]').click();
        assert(JSON.stringify(changeRet) !== null);
        assert(confirmRet === null);

        setTimeout(() => {
            assert($('.weui-picker').length === 0);

            done();
        }, closeDur);
    });

    it('test hide && callback', (done) => {
        let called = false;
        const picker = weui.datePicker({
            start: 1990,
            end: 2000
        });

        picker.hide(function(){
            called = true;
        });

        setTimeout(() => {
            assert($('.weui-picker').length === 0);
            assert(called);

            done();
        }, closeDur);
    });
});
