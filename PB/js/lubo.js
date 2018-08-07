// window.onload = function(){
(function (){
    var list = document.getElementById('prev');
    var next = document.getElementById('next');

    list.onclick = function(){
        animate(1200);
    }
    next.onclick = function(){
        animate(-1200);
    }
})();


function animate(offset){
    var list = document.getElementById("container_list");
    var newLeft = parseInt(list.style.left) + offset;
    list.style.left = newLeft + 'px';
    if(newLeft < -3600){
        list.style.left = -1200 + 'px';
    }
    if(newLeft > -1200){
        list.style.left = -3600 + 'px';
    }
}
var timer;
function paly(){
    timer = setInterval(function(){
        next.onclick()
    },3000);
}
paly();


var cir = document.getElementById('cri').getElementsByTagName('pre');
var index = 1;
function cirShow(){
    for (var i = 0; i < cir.length; i++){
        if(cir[i].className == 'on'){
            cir[i].className = '';
        }
    }
    cir[index - 1].className = 'on';

}
list.onclick = function(){
    index -= 1;
    if(index < 1){
        index = 3;
    }
    cirShow();
    animate(1200);
}
next.onclick = function(){
    index += 1;
    if(index > 3){
        index = 1;
    }
    cirShow();
    animate(-1200);
}
for(var i = 0; i < cir.length; i++){
    cir[i].onclick = function(){
        var clickIndex = parseInte(this.getAttribute('index'));
        var offset = 1200 * (index - clickIndex);
        animate(offset);
        index = clickIndex;
        cirShow();
    }
}


for(var i = 0 ; i < cir.length; i++){
    (function(i){
        cir[i].onclick = function(){
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 1200 * (index - clickIndex);
            animate(offset);
            index = clickIndex;
            cirShow();
        }
    })(i);
}

