
function showMap() {

    //    1.创建地图
    var map = new BMap.Map("container");
    //    2.创建坐标
    var point = new BMap.Point(104.0607569093,30.5622079951)
    //    3.设置地图中心点坐标和级别
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.addControl(new BMap.OverviewMapControl());
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);

}
//回到顶部
function goTop() {


    //    位移点距离
    var offset = document.body.scrollTop || document.documentElement.scrollTop;

    //监听页面当前显示德位置
    window.onscroll = function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
    };

    //动画持续时间
    var duration = 1000;
    //    每一祯持续德会见
    //    影响动画流畅性
    var interval = 15;
    //    动画执行德祯数
    var frames = duration / interval;
    //    计算每一帧位移的距离
    //    Math.ceil()->向上取整
    var speed = Math.ceil(offset/frames);
    //    定时器，每隔一定时间调用一次函数
    var t= setInterval(function () {
        if (offset > o){
            document.body.scrollTop =document.documentElement.scrollTop=  offset - speed;
        }else {
            clearInterval(t);
            //    矫正位置
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

    }. interval);

}