(function () {
    var tbody = document.getElementById("tbody"),
        affirm = document.getElementById("affirm"),
        add = document.getElementById("add"),
        mask = document.getElementById("mask"),
        close = document.getElementById("close");
    save();

    add.onclick = function () {
        mask.style.display = "block";
        var name = document.getElementById("name-ipt"),
            des = document.getElementById("des-ipt");

        name.value = "";
        des.value = "";



        affirm.onclick = function () {
            var name = document.getElementById("name-ipt").value,
                des = document.getElementById("des-ipt").value;

            var time = new Date();

            var data = [],
                stroge = localStorage.getItem("userInfo");
            if(stroge){
                data = JSON.parse(stroge)
            }
            data.push({
                name:name,
                des:des,
                time : time.toLocaleString()});

            var dataStr = JSON.stringify(data);
            localStorage.setItem("userInfo",dataStr);
            mask.style.display = "none";
            save();
        }
    }
    //关闭
    close.onclick = function () {
        mask.style.display = "none";
    }


})();