// import 'weui';
import FastClick from 'fastclick';
import weui from '../src/weui';
import city from './city';

FastClick.attach(document.body);

/* dialog */
document.querySelector('#alertBtn').addEventListener('click', function () {
    weui.alert('自定义标题的alert', function () {
        console.log('ok')
    }, {
        title: '自定义标题'
    });
});


/* confirm */
document.querySelector('#confirmBtn').addEventListener('click', function () {
    weui.confirm('自定义标题的confirm', function () {
        console.log('yes')
    }, function () {
        console.log('no')
    }, {
        title: '自定义标题'
    });
});


/* toast */
document.querySelector('#toastBtn').addEventListener('click', function () {
    weui.toast('操作成功', {
        duration: 3000,
        className: "bears"
    });
});


/* loading */
document.querySelector('#loadingBtn').addEventListener('click', function () {
    var loading = weui.loading('loading');
    setTimeout(function () {
        loading.hide();
    }, 3000);
});


/* actionSheet */
document.querySelector('#actionSheetBtn').addEventListener('click', function () {
    weui.actionSheet([
        {
            label: '拍照',
            onClick: function () {
                console.log('拍照');
            }
        }, {
            label: '从相册选择',
            onClick: function () {
                console.log('从相册选择');
            }
        }, {
            label: '其他',
            onClick: function () {
                console.log('其他');
            }
        }
    ], [
        {
            label: '取消',
            onClick: function () {
                console.log('取消');
            }
        }
    ], {
        className: "custom-classname"
    });
});


/* topTips */
document.querySelector('#topTipsBtn').addEventListener('click', function () {
    weui.topTips('请填写正确的字段', {
        duration: 3000,
        className: "custom-classname",
        callback: function () {
            console.log('close');
        }
    });
});


/* picker */
// 时间选择器
document.querySelector('#datePickerBtn').addEventListener('click', function () {
    weui.datePicker({
        start: 1990,
        end: 2000,
        onChange: function (result) {
            console.log(result);
        },
        onConfirm: function (result) {
            console.log(result);
        },
        id: 'DatePicker'
    });
});

// 城市选择器
document.querySelector('#cityPickerBtn').addEventListener('click', function () {
    weui.picker(city, {
        onChange: function (result) {
            console.log(result);
        },
        onConfirm: function (result) {
            console.log(result);
        },
        id: 'districtPicker'
    });
});

// 普通选择器
document.querySelector('#pickerBtn').addEventListener('click', function () {
    weui.picker([{
            label: '飞机票',
            value: 0
        }, {
            label: '火车票',
            disabled: true,
            value: 1
        }, {
            label: '的士票',
            disabled: true,
            value: 2
        }, {
            label: '住宿费',
            value: 3
        }, {
            label: '礼品费',
            value: 4
        }, {
            label: '活动费',
            value: 5
        }, {
            label: '通讯费',
            value: 6
        }, {
            label: '补助',
            value: 7
        }, {
            label: '通讯费',
            value: 8
        }, {
            label: '其他',
            value: 9
    }], {
        className: 'custom-classname',
        onChange: function (result) {
            //console.log(item, index);
            console.log(result);
        },
        onConfirm: function (result) {
            console.log(result);
        },
        id: 'singleLinePicker'
    });
});


/* searchbar */
weui.searchBar('#searchBar');


/* tab */
weui.tab('#tab',{
    defaultIndex: 0,
    onChange: function(index){
        console.log(index);
    }
});


/* form */
// 约定正则
var regexp = {
    regexp: {
        IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
        VCODE: /^.{4}$/
    }
};

// 失去焦点时检测
weui.form.checkIfBlur('#form', regexp);

// 表单提交
document.querySelector('#formSubmitBtn').addEventListener('click', function () {
    weui.form.validate('#form', function (error) {
        console.log(error);
        if (!error) {
            var loading = weui.loading('提交中...');
            setTimeout(function () {
                loading.hide();
                weui.toast('提交成功', 3000);
            }, 1500);
        }
    }, regexp);
});


/* 图片自动上传 */
var uploadCount = 0;
var uploadCountDom = document.getElementById("uploadCount");
weui.uploader('#uploader', {
    url: 'http://localhost:8002/upload',
    auto: true,
    type: 'file',
    fileVal: 'fileVal',
    compress: {
        width: 1600,
        height: 1600,
        quality: .8
    },
    onBeforeQueued: function(files) {
        if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
            weui.alert('请上传图片');
            return false;
        }
        if(this.size > 10 * 1024 * 1024){
            weui.alert('请上传不超过10M的图片');
            return false;
        }
        if (files.length > 5) { // 防止一下子选中过多文件
            weui.alert('最多只能上传5张图片，请重新选择');
            return false;
        }
        if (uploadCount + 1 > 5) {
            weui.alert('最多只能上传5张图片');
            return false;
        }

        ++uploadCount;
        uploadCountDom.innerHTML = uploadCount;
    },
    onQueued: function(){
        console.log(this);
    },
    onBeforeSend: function(data, headers){
        console.log(this, data, headers);
        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

        // return false; // 阻止文件上传
    },
    onProgress: function(procent){
        console.log(this, procent);
    },
    onSuccess: function (ret) {
        console.log(this, ret);
    },
    onError: function(err){
        console.log(this, err);
    }
});

// 缩略图预览
document.querySelector('#uploaderFiles').addEventListener('click', function(e){
    var target = e.target;

    while(!target.classList.contains('weui-uploader__file') && target){
        target = target.parentNode;
    }
    if(!target) return;

    var url = target.getAttribute('style') || '';
    if(url){
        url = url.match(/url\((.*?)\)/)[1];
    }
    var gallery = weui.gallery(url, {
        className: 'custom-name',
        onDelete: function(){
            weui.confirm('确定删除该图片？', function(){
                --uploadCount;
                uploadCountDom.innerHTML = uploadCount;
                target.remove();
                gallery.hide();
            });
        }
    });
});


/* 图片手动上传 */
var uploadCustomFileList = [];

// 这里是简单的调用，其余api请参考文档
weui.uploader('#uploaderCustom', {
    url: 'http://localhost:8002/upload',
    auto: false,
    onQueued: function() {
        uploadCustomFileList.push(this);
    }
});

// 手动上传按钮
document.getElementById("uploaderCustomBtn").addEventListener('click', function(){
    uploadCustomFileList.forEach(function(file){
        file.upload();
    });
});

// 缩略图预览
document.querySelector('#uploaderCustomFiles').addEventListener('click', function(e){
    var target = e.target;

    while(!target.classList.contains('weui-uploader__file') && target){
        target = target.parentNode;
    }
    if(!target) return;

    var url = target.getAttribute('style') || '';
    var id = target.getAttribute('data-id');

    if(url){
        url = url.match(/url\((.*?)\)/)[1];
    }
    var gallery = weui.gallery(url, {
        onDelete: function(){
            weui.confirm('确定删除该图片？', function(){
                var index;
                for (var i = 0, len = uploadCustomFileList.length; i < len; ++i) {
                    var file = uploadCustomFileList[i];
                    if(file.id == id){
                        index = i;
                        break;
                    }
                }
                if(index) uploadCustomFileList.splice(index, 1);

                target.remove();
                gallery.hide();
            });
        }
    });
});
