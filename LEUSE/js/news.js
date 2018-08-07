
(function() {
    var data       = null,
        totalPage  = 0, // 记录总页数
        curIndex    = 1, // 记录当前页
        oItem     = getEl(".item"),
        oCurPage    = getEl(".curPage"),   // 当前页
        oTotalPage  = getEl(".totalPage"), // 总页数
        oUp          = getEl(".up"),
        oDown        = getEl(".down");
    console.log(oItem);
    // 2. 获取数据
    $.ajax({
        url: "./json/datas.json",
        type:"GET",
        success: function(response) {
            // 更新数据
            data = response.news;
            // 更新总页数
            totalPage = Math.ceil(data.length / 5);
            oTotalPage.textContent = totalPage;
            // 加载页面
            loadingHtml(oItem, data, curIndex);
        }
    });
    oUp.onclick = function() {
        if(curIndex == 1) {
            return;
        }else {
            curIndex--;
        }
        loadingHtml(oItem, data, curIndex);
        oCurPage.textContent = curIndex;
    };
    oDown.onclick = function() {
        if(curIndex == totalPage) {
            return;
        }else {
            ++curIndex;
        }
        loadingHtml(oItem, data, curIndex);
        oCurPage.textContent = curIndex;
    }
})();


