
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
};

function scrollBackTop(ele,duration,interval,isShow) {
    var offset = 0;
    window.onscroll = function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        if(isShow){
            if(offset > window.screen.availHeight * 0.4){
                ele.classList.remove('scroll_btn_hide');
            }else {
                ele.classList.add('scroll_btn_hide');
            }
        };

        ele.onclick = function () {
            var frames = duration / interval,
                speed = Math.ceil(offset / frames);
            var t = setInterval(function () {
                if(offset > 0){
                    document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
                }else {
                    clearInterval(t);
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
            },interval)
        };
    }
};

