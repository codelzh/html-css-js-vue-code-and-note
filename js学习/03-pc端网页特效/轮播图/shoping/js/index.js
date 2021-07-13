window.addEventListener("load", function () {

  var pointLeft = this.document.querySelector(".point-left");
  var pointRight = this.document.querySelector(".point-right");
  var indexImage = this.document.querySelector(".index-image");

  //1：鼠标经过轮播图，显示左右箭头
  indexImage.addEventListener("mouseover", function () {
    pointLeft.style.display = "block";
    pointRight.style.display = "block";
    clearInterval(time);
  })

  indexImage.addEventListener("mouseout", function () {
    pointLeft.style.display = "none";
    pointRight.style.display = "none";
    time = setInterval(function () {
      pointRight.click();
    }, 2000)
  })

  //2：动态生成小圆点，小圆点的个数取决于图片个数
  var ul = indexImage.querySelector("ul");
  var yd = this.document.querySelector(".yd");

  for (var i = 0; i < ul.children.length; i++) {
    var li = this.document.createElement("li");
    yd.appendChild(li);

    //3:利用排他思想，给小圆点添加点击事件
    li.addEventListener("click", function () {
      //干掉所有人
      for (var i = 0; i < yd.children.length; i++) {
        yd.children[i].className = "";

        //4:添加索引号
        yd.children[i].setAttribute("index", i);
      }

      var index = this.getAttribute("index");
      num = index;
      pointnum = index;
      //4:点击小圆点，让ul 移动(动画函数)，实现滚动效果 
      //轮播图移动位置算法：小圆圈的索引号 * 图片宽
      var repeatposition = -this.getAttribute("index") * indexImage.offsetWidth;
      move(ul, repeatposition);

      this.className = "curent"
    })
  }

  yd.children[0].className = "curent";


  //克隆第一张图片，用于无缝滚动
  var frist = ul.children[0].cloneNode(true);
  ul.appendChild(frist);
  //5:右键实现无缝滚动
  var num = 0;

  //右箭头滚动
  var pointnum = 0;
  pointRight.addEventListener("click", function () {
  
    if (num == 4) {
      ul.style.left = 0;
      num = 0;
    }
    num++;
    var repeatposition = -num * indexImage.offsetWidth;
    move(ul, repeatposition);

    //6：右键实现小圆点的切换
    for (var i = 0; i < yd.children.length; i++) {
      yd.children[i].className = "";
    }
    pointnum++;

    if (pointnum == yd.children.length) {
      pointnum = 0;
    }

    yd.children[pointnum].className = "curent";

  })




  //左箭头
  pointLeft.addEventListener("click", function () {
    if (num == 0) {
      ul.style.left = 0;
      num = 4;
    }
    num--;
    var repeatposition = -num * indexImage.offsetWidth;
    move(ul, repeatposition);

    //6：右键实现小圆点的切换
    pointnum--;
    if (pointnum < 0) {
      pointnum = 3;
    }

    for (var i = 0; i < yd.children.length; i++) {
      yd.children[i].className = "";
    }

    yd.children[pointnum].className = "curent";

  })


  // 7:自动播放功能
  var time = this.setInterval(function () {
    pointRight.click();
  }, 2000)






})