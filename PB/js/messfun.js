function save() {
    var dataObj;
    if(!localStorage.userInfo){
        dataObj = [];
    }else {
    dataObj = JSON.parse(localStorage.getItem('userInfo'));}
    var textHtml = '';
    for(var i = 0 ; i < dataObj.length; i++ ){
        textHtml +=
            '<tr><td>' + (i+1) +
            '</td><td>' + dataObj[i].name +
            '</td><td>' + dataObj[i].des +
            '</td><td>' + dataObj[i].time +
            '</td><td><p class="compile">编辑</p>' +
            '<p class="del">删除</p></td></tr>'

    }
    tbody.innerHTML = textHtml;
    var deldel = document.getElementsByClassName("del"),
        compile = document.getElementsByClassName("compile");
    dataDel(deldel);
    updata(compile);
}


//删除
function dataDel(deldel) {
    for(var i = 0 ; i < deldel.length; i++){
        (function(index){
            deldel[index].onclick = function () {
                var dObj = JSON.parse(localStorage.getItem("userInfo"));
                dObj.splice(index,1);
                var dataStr = JSON.stringify(dObj);
                localStorage.setItem("userInfo",dataStr);
                deldel[index].parentElement.parentElement.remove(deldel[index].parentElement.parentElement);
            }
        })(i)
    }

}
//更新
function updata(compile) {

    for(var i = 0 ; i < compile.length; i++){
        (function(index){
            compile[index].onclick = function () {
                mask.style.display = "block";

                var dObj = JSON.parse(localStorage.getItem("userInfo"));

                var name = document.getElementById("name-ipt"),
                    des = document.getElementById("des-ipt");

                name.value = dObj[index].name;
                des.value = dObj[index].des;

                var affirm = document.getElementById("affirm");
                affirm.onclick = function(){
                    var name = document.getElementById("name-ipt").value,

                        des = document.getElementById("des-ipt").value;
                    var time = new Date();
                    // this.parentElement.parentElement.remove();

                    dObj[index] = {
                        name:name,
                        des:des,
                        time : time.toLocaleString()};

                    var dataStr = JSON.stringify(dObj);
                    localStorage.setItem("userInfo",dataStr);
                    mask.style.display = "none";
                    save();

                }










            }
        })(i)
    }

}

