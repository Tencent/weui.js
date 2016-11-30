/**
 * 检查图片是否有被压扁，如果有，返回比率
 */
export function detectVerticalSquash(img) {
    // 拍照在IOS7或以下的机型会出现照片被压扁的bug
    var data;
    var ih = img.naturalHeight;
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    try {
        data = ctx.getImageData(0, 0, 1, ih).data;
    } catch (err) {
        console.log('Cannot check verticalSquash: CORS?');
        return 1;
    }
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
        var alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) {
            ey = py;
        } else {
            sy = py;
        }
        py = (ey + sy) >> 1; // py = parseInt((ey + sy) / 2)
    }
    var ratio = (py / ih);
    return (ratio === 0) ? 1 : ratio;
}

/**
 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 */
export function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
}

/**
 * 压缩图片
 */
export function compress(file, options, callback) {
    const reader = new FileReader();
    reader.onload = function (evt) {
        if(options.compress === false){
            // 不启用压缩 & base64上传 的分支
            file.base64 = evt.target.result;
            callback(file);
            return;
        }

        // 启用压缩的分支
        const img = new Image();
        img.onload = function () {
            const ratio = detectVerticalSquash(img);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const maxW = options.compress.width;
            const maxH = options.compress.height;
            let w = img.width;
            let h = img.height;
            let dataURL;

            if(w < h && h > maxH){
                w = parseInt(maxH * img.width / img.height);
                h = maxH;
            }else if(w >= h && w > maxW){
                h = parseInt(maxW * img.height / img.width);
                w = maxW;
            }

            canvas.width = w;
            canvas.height = h;

            ctx.drawImage(img, 0, 0, w, h / ratio);

            if(/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)){
                dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
            }else{
                dataURL =  canvas.toDataURL(file.type);
            }

            if(options.type == 'file'){
                if(/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)){
                    // 压缩出错，以文件方式上传的，采用原文件上传
                    console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
                    callback(file);
                }else{
                    let blob = dataURItoBlob(dataURL);
                    blob.id = file.id;
                    blob.name = file.name;
                    blob.lastModified = file.lastModified;
                    blob.lastModifiedDate = file.lastModifiedDate;
                    callback(blob);
                }
            }else{
                if(/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)){
                    // 压缩失败，以base64上传的，直接报错不上传
                    options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
                    callback();
                }else{
                    file.base64 = dataURL;
                    callback(file);
                }
            }
        };
        img.src = evt.target.result;
    };
    reader.readAsDataURL(file);
}
