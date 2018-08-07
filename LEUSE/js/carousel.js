(function () {
    var idots = getEl(".idot",true);
    var prev = getEl(".prev"),
        next = getEl(".next"),
        content = getEl(".content");

    var curIndex = 0,
        timer = null;
    //3.事件添加
    prev.onclick = function () {
        curIndex = curIndex == 0 ? 3 : --curIndex;
        tab(curIndex);
    };
    next.onclick = function () {
        curIndex = curIndex == 3 ? 0 : ++curIndex;
        tab(curIndex);
    };
    //为小圆点添加事件
    for(var i = 0,len = idots.length; i < len; i++){
        //为小圆点设置下标
        idots[i].dataset.index = i;
        idots[i].onclick = function () {
            var index = this.dataset.index;
            if(index == curIndex){
                return;
            }
            //更新当前显示下标
            curIndex = index;
            tab(curIndex);
        }
    };
    content.onmouseenter = stop;
    content.onmouseleave = play;
    play();
})();