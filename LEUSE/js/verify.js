

(function() {
    // 获取存储验证码元素
    var validateCode = getEl(".validate-code");
    var input = getEl("input");
    var auth  = getEl(".auth");
    validateCode.textContent = getVerificationCode(6);
    validateCode.onclick = function() {
        validateCode.textContent = getVerificationCode(6);
    }
    // 判断验证码是否输入正确
    document.querySelector(".verify").onblur = function() {
        var reg = new RegExp(`^${validateCode.textContent}$`, "i");
        if(!reg.test(this.value)) {
            auth.classList.add("error");
        }else {
            auth.classList.remove("error");
        }
    }

})();


