/*
 * picker 层级推断的回归用例，对应 issue #386。
 * 运行：打开 __tests__/test.html（mocha + 打包产物 dist/weui.min.js）
 */

describe('picker depth', function () {
    it('should not throw when the first item has no children but a later one does', (done) => {
        let error = null, picker;
        try {
            picker = weui.picker([
                {label: '不限', value: 'all'},
                {
                    label: '北京',
                    value: 'bj',
                    children: [
                        {label: '东城', value: 'dc'},
                        {label: '西城', value: 'xc'}
                    ]
                }
            ], {
                id: 'depthMixed',
                onChange: function () {},
                onConfirm: function () {}
            });
        } catch (err) {
            error = err;
        }

        assert(!error);
        assert($('.weui-picker__group').length === 2);

        picker.hide();
        setTimeout(done, closeDur);
    });

    it('should use the depth of the deepest item', (done) => {
        let error = null, picker;
        try {
            picker = weui.picker([
                {label: '不限', value: 'all'},
                {
                    label: '2020',
                    value: 2020,
                    children: [
                        {
                            label: '1月',
                            value: 1,
                            children: [{label: '1日', value: 1}]
                        }
                    ]
                }
            ], {
                id: 'depthNested',
                onChange: function () {},
                onConfirm: function () {}
            });
        } catch (err) {
            error = err;
        }

        assert(!error);
        assert($('.weui-picker__group').length === 3);

        picker.hide();
        setTimeout(done, closeDur);
    });

    it('should not throw when depth is smaller than the depth of the items', (done) => {
        let error = null, picker;
        try {
            picker = weui.picker([
                {
                    label: '2020',
                    value: 2020,
                    children: [
                        {
                            label: '1月',
                            value: 1,
                            children: [{label: '1日', value: 1}]
                        }
                    ]
                }
            ], {
                id: 'depthLimited',
                depth: 2,
                onChange: function () {},
                onConfirm: function () {}
            });
        } catch (err) {
            error = err;
        }

        assert(!error);
        assert($('.weui-picker__group').length === 2);

        picker.hide();
        setTimeout(done, closeDur);
    });
});
