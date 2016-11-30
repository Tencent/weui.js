var formidable = require('formidable');
var uuid = require('node-uuid');
var fs = require('fs');
var express = require('express');
var http = require('http');

var app = express();
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};
app.use(allowCrossDomain);

function node_upload(req, callback, next) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = __dirname + '/uploads/';
    form.maxFieldsSize = 10 * 1024 * 1024;
    //解析
    form.parse(req, function (err, fields, files) {
        if(err) return callback(err);

        for (var file in files) {
            //后缀名
            var extName = /\.[^\.]+/.exec(files[file].name);
            var ext = Array.isArray(extName)
                ? extName[0]
                : '';
            //重命名，以防文件重复
            var avatarName = uuid() + ext;
            //移动的文件目录
            var newPath = form.uploadDir + avatarName;
            fs.renameSync(files[file].path, newPath);
            fields[file] = {
                size: files[file].size,
                path: newPath,
                name: files[file].name,
                type: files[file].type,
                extName: ext
            };
        }
        callback(null, fields);
    });
}
app.post('/upload', function(req, res, next) {
    node_upload(req, function (err, fields) {
        // setTimeout(function(){
            res.json(fields);
        // }, 1000);
    }, next);
});

http.createServer(app).listen(8002, function(){
    console.log('Express server listening on port 8002');
});
