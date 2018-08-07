
var timer = null;
function play() {
    var  next = getEl(".next");
    timer = setInterval(function () {
        next.onclick();
    },3000)
};
function stop() {
    clearInterval(timer);
    timer = null;
};

function tab(curIndex) {
    var imgBox = getEl(".img-box",true),
        idots = getEl(".idot",true);
    for(var i = 0, len = imgBox.length; i < len ; i++){
        //classList.contains() 判断是否包含某个class
        if(imgBox[i].classList.contains("show")){
            imgBox[i].classList.remove("show");
            idots[i].classList.remove("show");
            break;
        }
    };
    idots[curIndex].classList.add("show");
    imgBox[curIndex].classList.add("show");
};
