const regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
const constraints = [[1, 31], [1, 12], [0, 6]];

/**
 * Schedule
 */
class Schedule {
    constructor(fields, start, end) {
        /**
         * dayOfMonth
         * @type {Array}
         */
        this._dates = fields[0];

        /**
         * month
         * @type {Array}
         */
        this._months = fields[1];

        /**
         * dayOfWeek
         * @type {Array}
         */
        this._days = fields[2];

        /**
         * start
         * @type {Date}
         */
        this._start = start;

        /**
         * end
         * @type {Date}
         */
        this._end = end;

        /**
         * cursor
         * @type {Date}
         * @private
         */
        this._pointer = start;
    }

    _findNext() {
        let next;
        while (true) {
            if (this._end.getTime() - this._pointer.getTime() <= 0) {
                throw new Error(`out of range, end is ${this._end}, current is ${this._pointer}`);
            }

            const month = this._pointer.getMonth();
            const date = this._pointer.getDate();
            const day = this._pointer.getDay();

            if (this._months.indexOf(month + 1) === -1) {
                this._pointer.setMonth(month + 1);
                this._pointer.setDate(1);
                continue;
            }

            if (this._dates.indexOf(date) === -1) {
                this._pointer.setDate(date + 1);
                continue;
            }

            if (this._days.indexOf(day) === -1) {
                this._pointer.setDate(date + 1);
                continue;
            }

            next = new Date(this._pointer);

            break;
        }
        return next;
    }

    /**
     * fetch next data
     */
    next() {
        const value = this._findNext();
        // move next date
        this._pointer.setDate(this._pointer.getDate() + 1);
        return {
            value: value,
            done: !this.hasNext()
        };
    }

    /**
     * has next
     * @returns {boolean}
     */
    hasNext() {
        try {
            this._findNext();
            return true;
        }
        catch (e) {
            return false;
        }
    }
}

function parseField(field, constraints) {
    const low = constraints[0];
    const high = constraints[1];
    let result = [];
    let pointer;

    // * 号等于最低到最高
    field = field.replace(/\*/g, low + '-' + high);

    // 处理 1,2,5-9 这种情况
    const fields = field.split(',');
    for (let i = 0, len = fields.length; i < len; i++){
        const f = fields[i];
        if (f.match(regex)) {
            f.replace(regex, function ($0, lower, upper, step) {
                // ref to `cron-parser`
                step = parseInt(step) || 1;
                // Positive integer higher than constraints[0]
                lower = Math.min(Math.max(low, ~~Math.abs(lower)), high);

                // Positive integer lower than constraints[1]
                upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower;

                // Count from the lower barrier to the upper
                pointer = lower;

                do {
                    result.push(pointer);
                    pointer += step;
                } while (pointer <= upper);
            });
        }
    }
    return result;
}

/**
 *
 * @param expr
 * @param start
 * @param end
 * @returns {*}
 */
function parse(expr, start, end) {
    const atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
    const fields = [];
    atoms.forEach((atom, index) => {
        const constraint = constraints[index];
        fields.push(parseField(atom, constraint));
    });
    return new Schedule(fields, start, end);
}

export default  {
    parse
};
