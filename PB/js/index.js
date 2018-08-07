window.onload = function() {
  var container = document.getElementById('h-top');
  var list = document.getElementById('container_list');
  var cir = document.getElementById('cri').getElementsByTagName('pre');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var index = 1;
  var timer;
    function animate(offset){
        // var list = document.getElementById("container_list");
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if(newLeft < -6000){
            list.style.left = -1200 + 'px';
        }
        if(newLeft > -1200){
            list.style.left = -6000 + 'px';
        }
    }
    function paly(){
        timer = setInterval(function(){
            next.onclick();
        },2000);
    }
    function stop(){
        clearInterval(timer);
    }

    function cirShow(){
        for (var i = 0; i < cir.length; i++){
            if(cir[i].className == 'on'){
                cir[i].className = '';
            }
        }
        cir[index - 1].className = 'on';

    }
    prev.onclick = function(){
        index -= 1;
        if(index < 1){
            index = 5;
        }
        cirShow();
        animate(1200);
    }
    next.onclick = function(){
        index += 1;
        if(index > 5){
            index = 1;
        }
        cirShow();
        animate(-1200);
    };
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
    container.onmouseover = stop;
    container.onmouseout = paly;
    paly();



}


