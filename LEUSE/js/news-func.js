

function loadingHtml(parent, data, curIndex) {
    // 获取总页码
    var totalPage = Math.ceil(data.length / 5);
    var starIndex = (curIndex - 1) * 5;
    var endIndex  = curIndex == totalPage ? starIndex + totalPage % 5 - 2 : starIndex + 4;
    var htmlStr = "";
    for(var i = starIndex; i <= endIndex; i++) {
        htmlStr += `
    <div class="item item-box clearFix">
                <div class="fl img">
                    <img src="${data[i].url}" alt="">
                </div>
                <div class="des fr">
                    <h1 class="title">${data[i].title}</h1>
                    <p class="text">${data[i].text}</p>
                    <i class="iconfont">&#xe617;</i><p class="time">${data[i].time}</p>
                </div>
          </div>
        `;
    }
    console.log(parent);
    parent.innerHTML = htmlStr;
    
    
}