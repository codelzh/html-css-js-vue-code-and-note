window.addEventListener("load", function () {
  //1：获取元素
  var banner = this.document.querySelector(".banner");
  var ul = this.document.querySelector(".banner").children[0]
  var w = banner.offsetWidth
  var ol = this.document.querySelector(".banner").children[1]


  //利用定时器实现自动播放
  //下标值
  var index = 0;
  var time = setInterval(() => {

    index++;
    var move = -(index * w);
    ul.style.transform = "translateX(" + move + "px)";

    //加过渡，让动画更优雅
    ul.style.transition = "all .5s"
  }, 2000);

  //当过渡完成时候，触发事件
  ul.addEventListener("transitionend", function () {  
    //无缝滚动
    if (index >= 3) {
      index = 0;

      //去掉过渡效果 让ul快速到目标位置
      ul.style.transition = "none";
      //利用最新的索引值*宽度 让图片滚动
      move = -(index * w);
      ul.style.transform = "translateX(" + move + "px)";
    } else if (index <= 0) {
      index = 2;

      //去掉过渡效果 让ul快速到目标位置
      ul.style.transition = "none";
      //利用最新的索引值*宽度 让图片滚动
      move = -(index * w);
      ul.style.transform = "translateX(" + move + "px)";
    }


    //过渡完成的时候，让小圆点变化
    //清除active
    ol.querySelector("li.active").classList.remove("active");
    ol.children[index].classList.add("active")
  })

  //当鼠标触摸并滑动，移动图片
  var touchclickmove = 0;
  var touchmove = 0;
  ul.addEventListener("touchstart", function (e) {
    touchclickmove = e.targetTouches[0].pageX;
    clearInterval(time);
  })

  ul.addEventListener("touchmove", function (e) {
    touchmove = e.targetTouches[0].pageX - touchclickmove;
    let move = -(index * w) + touchmove;
    ul.style.transform = "translateX(" + move + "px)";
  })

  //当触摸事件结束，让图片播放下一张或上一张
  ul.addEventListener("touchend", function () {
    //如果触摸移动大于50，那么播放下一张或上一张
    if (Math.abs(touchmove) > 50) {
      //touchmove < 0  播放下一张
      if (touchmove < 0) {
        index++
        console.log("-");
      } else {
        //touchmove > 0  播放上一张
        index--
        console.log("+");
      }

      let move = -(index * w);
      ul.style.transition = "all .5s"
      ul.style.transform = "translateX(" + move + "px)";
    } else {
      //如果触摸移动小于50，那就把移动过的ul恢复
      let move = -(index * w);
      ul.style.transition = "all .5s"
      ul.style.transform = "translateX(" + move + "px)";
    }

    clearInterval(time)
    time = setInterval(() => {

      index++;
      var move = -(index * w);
      ul.style.transform = "translateX(" + move + "px)";

      //加过渡，让动画更优雅
      ul.style.transition = "all .5s"
    }, 2000);
  })



})