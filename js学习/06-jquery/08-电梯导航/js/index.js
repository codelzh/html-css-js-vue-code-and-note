$(function () {
  //1:显示和隐藏
  var boxTop = $(".recommend").offset().top;
  $(window).scroll(function () {
    if ($(document).scrollTop() >= boxTop) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }

    //4：滑动页面到相应的盒子，给相应的导航li 添加current类
    //遍历所有商品，如果document 卷去的部分 大于 商品的offsetTop 则就是滚动到了这里，给这个商品添加current类
    var documentTop = $(document).scrollTop();
    $(".floor .w").each(function(i,dom){
      if(documentTop >= dom.offsetTop){
        $(".fixedtool li").removeClass("current");
        $(".fixedtool li").eq(i).addClass("current");
      }
    })
  })

  //2：点击标签，去对应的位置
  $(".fixedtool li").click(function () {
    var top = $(".floor .w").eq($(this).index()).offset().top;
    $(".body,html").animate({
      scrollTop: top
    })

    //3:添加curent类
    $(this).siblings().removeClass("current");
    $(this).addClass("current");
  })



})