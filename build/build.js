const webpack = require("webpack");
const config = require('./webpack.mod.config');


Promise.all([
        {weui: './weui.js'}
    ].map((entry) => {
        return new Promise((resolve, reject) => {
            webpack(config(entry), function (error) {
                if (error) {
                    reject(error);
                    return;
                }

                webpack(config(entry, true), (err, stats) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(stats);
                    }
                });
            });
        });
    })
).then(() => {
    console.info('build finished');
}).catch((err) => {
    console.error('build error', err);
});
