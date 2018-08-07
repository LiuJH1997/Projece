
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
};

function getVerificationCode(length) {
    // 定义随机源
    var str = "";
    str += "QWERTYUIOPASDFGHJKLZXCVBNM";
    str += "1234567890";
    str += "qwertyuiopasdfghjklzxcvbnm";
    // 根据长度截取字符
    var resStr = "";
    for(var i = 0; i < length; i++) {
        // 获取随机下标
        var index = Math.floor(Math.random() * str.length);
        resStr += str.slice(index, index + 1);
    }
    return resStr;
};

class Validate {
    constructor() {}
    static test(type, str) {
        let res = null;
        switch (type) {
            case "username": {
                // 用户
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
            case "password": {
                //密码
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
            case "email": {
                //邮箱
                res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
            } break;
        }
        return res;
    }
};
