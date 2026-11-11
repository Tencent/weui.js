/*
 * datePicker 日期数据生成的回归用例，对应 issue #319。
 * 运行：打开 __tests__/test.html（mocha + 打包产物 dist/weui.min.js）
 */

describe('datePicker days', function () {
    const dayLabels = () => {
        const $groups = $('.weui-picker__group');
        const $days = $groups.eq($groups.length - 1);
        return $days.find('.weui-picker__item').map(function () {
            return $(this).text();
        }).get();
    };

    const yearLabels = () => {
        return $('.weui-picker__group').eq(0).find('.weui-picker__item').map(function () {
            return $(this).text();
        }).get();
    };

    // start 早于 1950 会跨过历史上的夏令时切换，按天递增时指针带上了时分秒，
    // end 当天因此被判成越界，最后一个月的日期少一天
    it('should keep 31 days in December 2020 when start is before 1950', (done) => {
        const picker = weui.datePicker({
            id: 'daysBefore1950',
            start: 1949,
            end: 2020,
            defaultValue: [2020, 12, 1],
            onChange: function () {},
            onConfirm: function () {}
        });

        setTimeout(() => {
            const labels = dayLabels();
            assert(labels.length === 31);
            assert(labels[labels.length - 1] === '31日');

            picker.hide();
            setTimeout(done, closeDur);
        }, 100);
    });

    it('should keep the last day of end when start is after 1950', (done) => {
        const picker = weui.datePicker({
            id: 'daysAfter1950',
            start: 2000,
            end: 2020,
            defaultValue: [2020, 12, 1],
            onChange: function () {},
            onConfirm: function () {}
        });

        setTimeout(() => {
            const labels = dayLabels();
            assert(labels.length === 31);
            assert(labels[labels.length - 1] === '31日');

            picker.hide();
            setTimeout(done, closeDur);
        }, 100);
    });

    it('should keep the year of end when start crosses a DST switch', (done) => {
        const picker = weui.datePicker({
            id: 'dstSwitch',
            start: 1986,
            end: 1987,
            defaultValue: [1987, 12, 1],
            onChange: function () {},
            onConfirm: function () {}
        });

        setTimeout(() => {
            const years = yearLabels();
            assert(years[years.length - 1] === '1987年');

            picker.hide();
            setTimeout(done, closeDur);
        }, 100);
    });
});
