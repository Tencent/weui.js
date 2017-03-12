export default function upload(options) {
    const {url, file, fileVal, onBeforeSend, onProgress, onError, onSuccess, xhrFields} = options;
    const {name, type, lastModifiedDate} = file;
    const data = {
        name: name,
        type: type,
        size: options.type == 'file' ? file.size : file.base64.length,
        lastModifiedDate: lastModifiedDate
    };
    const headers = {};

    if(onBeforeSend(file, data, headers) === false) return;

    file.status = 'progress';

    onProgress(file, 0);

    const formData = new FormData();
    const xhr = new XMLHttpRequest();

    file.xhr = xhr;

    // 设置参数
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });
    if(options.type == 'file'){
        formData.append(fileVal, file, name);
    }else{
        formData.append(fileVal, file.base64);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                try {
                    // 只支持json
                    const ret = JSON.parse(xhr.responseText);
                    onSuccess(file, ret);
                } catch (err) {
                    onError(file, err);
                }
            } else {
                onError(file, new Error('XMLHttpRequest response status is ' + xhr.status));
            }
        }
    };
    xhr.upload.addEventListener('progress', function (evt) {
        if(evt.total == 0) return;

        const percent = Math.ceil(evt.loaded / evt.total) * 100;

        onProgress(file, percent);
    }, false);

    xhr.open('POST', url);

    Object.keys(xhrFields).forEach((key) => {
        xhr[key] = xhrFields[key];
    });
    // 设置头部信息
    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
    });

    xhr.send(formData);
}
