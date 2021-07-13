    function move(obj, falg,callback) {
      clearInterval(obj.time)
      obj.time = setInterval(function () {
        //缓动动画公式: (目标位置-自身的位置)/10
        var step = (falg - obj.offsetLeft) / 10;
        //移动目标会发现，和目标有偏差，这是因为上面公式有除法，会有小数，所以我们需要给变成整数
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (falg == obj.offsetLeft) {
          clearInterval(obj.time);
          //回调函数的使用
          if(callback!=null){
            callback();
          }
        } else {
          obj.style.left = obj.offsetLeft + step + "px";
        }

      }, 15)
    }