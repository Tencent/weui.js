describe('uploader', function(){
    let beforeQueuedCallback = $.noop,
        queuedCallback = $.noop,
        progressCallback = $.noop,
        successCallback = $.noop,
        errorCallback = $.noop;

    this.timeout(0);

    before(() => {
        $('#test').html(`
            <div class="weui-uploader" id="uploader">
                <div class="weui-uploader__hd">
                    <p class="weui-uploader__title">图片上传</p>
                    <div class="weui-uploader__info">0/2</div>
                </div>
                <div class="weui-uploader__bd">
                    <ul class="weui-uploader__files" id="uploaderFiles"></ul>
                    <div class="weui-uploader__input-box">
                        <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple>
                    </div>
                </div>
            </div>
        `);

        weui.uploader('#uploader', {
            url: 'http://localhost:8081',
            type: 'file',
            fileVal: 'file',
            compress: {
                width: 1600,
                height: 1600,
                quality: .8
            },
            onBeforeQueued: function () {
                return beforeQueuedCallback.call(this);
            },
            onQueued: function () {
                queuedCallback.call(this);
            },
            onProgress: function (procent) {
                progressCallback.call(this, procent);
            },
            onSuccess: function (ret) {
                successCallback.call(this, ret);
            },
            onError: function (err) {
                errorCallback.call(this, err);
            }
        });
    });

    it('test onBeforeQueued', (done) => {
        beforeQueuedCallback = function(){
            assert(this instanceof File);
            done();
        };
    });

    it('test onQueued', (done) => {
        queuedCallback = function(){
            assert(this instanceof Blob);
            done();
        };
    });

/*    it('test onProgress', (done) => {
        progressCallback = function(procent){
            assert(this instanceof Blob);
            assert(procent !== undefined);
            done();
        };
    });*/

/*    it('test onSuccess', (done) => {
        successCallback = function(ret){
            assert(this instanceof Blob);
            assert(ret !== undefined);
            done();
        };
    });*/

    it('test onError', (done) => {
        errorCallback = function(err){
            assert(this instanceof Blob);
            assert(err !== undefined);
            done();
        };
    });

    after(() => {
        // $('#test').html('');
    });
});
