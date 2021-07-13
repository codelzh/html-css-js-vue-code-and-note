$(function () {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    $(".checkall").change(function () {
        $(".j-checkbox .checkall").prop("checked", $(this).prop("checked"));
    })


    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    //j-checkbox控制全选
    $(".j-checkbox").change(function () {
        //可以获取有几个checked的状态
        var flag = $(".j-checkbox:checked").length;
        if (flag === 3) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }
    })

    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    $(".increment").click(function () {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
    })

    $(".decrement").click(function () {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        } else {
            n--;
            $(this).siblings(".itxt").val(n);
        }
    })


    //  4. 用户修改文本框的值 计算 小计模块  
    $(".increment").click(function () {
        var price = $(this).parent().parent().siblings(".p-price").html();
        var total = price.substr(1) * $(this).siblings(".itxt").val();

        $(this).parents(".p-num").siblings(".p-sum").html("￥" + total);
        getSum();
    })

    $(".decrement").click(function () {
        var price = $(this).parent().parent().siblings(".p-price").html();
        var total = price.substr(1) * $(this).siblings(".itxt").val();

        $(this).parents(".p-num").siblings(".p-sum").html("￥" + total);
        getSum();
    })

    $(".itxt").change(function () {
        var price = $(this).parent().parent().siblings(".p-price").html();
        var total = price.substr(1) * $(this).val();

        $(this).parents(".p-num").siblings(".p-sum").html("￥" + total);
        getSum();
    })

    // 5. 计算总计和总额模块
    //修改文本框，和加减商品数量，都要改变，所以封装函数，调用
    function getSum() {
        var count = 0;
        var money = 0;
        $(".itxt").each(function (i, dom) {
            count = count + parseInt(dom.value);
        })

        $(".p-sum").each(function (i, dom) {
            money = money + parseInt(dom.innerText.substr(1));
        })

        $(".amount-sum em").text(count);
        $(".price-sum em").text(money.toFixed(2))
    }
    getSum();


    // 6. 删除商品模块
    //点击删除，删除商品的
    $(".p-action a").click(function () {
        $(this).parent().parents(".cart-item").remove();
        getSum();

    })

    //删除选中商品的
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parent().parent().remove();
        getSum();

    })

    //清空购物车
    $(".clear-all").click(function () {
        $(".cart-item-list").empty();
        getSum();

    })


    //7。选定商品，添加背景颜色
    $(".j-checkbox").click(function () {
        if ($(this).prop("checked") == true) {
            $(this).parent().parent().css("background", "#fff4e8")

        } else {
            $(this).parent().parent().css("background", "white")

        }
    })
})