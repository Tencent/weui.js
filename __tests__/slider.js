describe('slider', function(){
    let ret;
    before(() => {
        $('#test').html(`
            <div class="weui-slider-box">
                <div id="slider" class="weui-slider">
                    <div class="weui-slider__inner">
                        <div class="weui-slider__track"></div>
                        <div class="weui-slider__handler"></div>
                    </div>
                </div>
            </div>
        `).show();

        weui.slider('#slider', {
            step: 10,
            defaultValue: 40,
            onChange: function(percent){
                ret = percent;
            }
        });
    });

    it('should render slider', () => {
        assert(ret == 40);
    });

    after(() => {
        $('#test').html('').hide();
    });
});
