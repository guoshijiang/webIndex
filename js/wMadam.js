/**
 * Created by Administrator on 2016/1/12.
 */
$(function(){

    //品牌推荐 鼠标移入效果
    $("#favoriteBrandUl > li").mouseenter(function(){
        $(this)
            .find("a").addClass("styCol")
            .parent("li").siblings("li").find("a").removeClass("styCol");
    })
    $("#favoriteBrandUl").mouseleave(function(){
        $(this).children("li").find("a").removeClass("styCol");
    })

    //鼠标移入效果 封装
        $(".handbags_b ul li").mouseenter(function(){
            $(this)
                .addClass("add_shade")
                .siblings("li").removeClass("add_shade")
                .end()
                .find(".price_item").addClass("bg_color")
                .parent("li").siblings("li").find(".price_item").removeClass("bg_color");
        })
        $(".handbags_b ul").mouseleave(function(){
            $(this)
                .children("li").removeClass("add_shade")
                .find(".price_item").removeClass("bg_color");
        })

    //大图板块轮播
    //为无缝滚动追加一张图片
    $("#bigimg > ul").append($("#bigimg > ul > li:first").clone(true));
    //封装动画
    var sta = 0;
    var new_left = 0 ;
    var timer = null;
    var wUlLiLength = $("#bigimg ul li").length;
    var withUl = $("#bigimg").width();
     function autoplay(){
     	sta++;
         if(sta==wUlLiLength){
             sta=1;
             $("#bigimg > ul")[0].style.left = 0;
         }
         new_left = -sta * withUl;
         $("#bigimg > ul").animate({'left':new_left+'px'},400);
     }

    //自动轮播
    timer = setInterval(autoplay,2000);

    //显示箭头
    $("#bigimg").mouseenter(function(){
        clearInterval(timer);
        $(this).find("#wpoint a").show();
    })
    //隐藏箭头
    $("#bigimg").mouseleave(function(){
        timer = setInterval(autoplay,2000);
        $(this).find("#wpoint a").hide();
    })

    //鼠标放在箭头上颜色加深 效果封装
    function direction(element){
        $(element).on("mouseenter click",function(){
            $(this).css("opacity","0.7");

        })
        $(element).on("mouseleave",function(){
            $(this).css("opacity","0.3");
        })
    }
    direction("#bigimg .wpal");
    direction("#bigimg .wpar");


    // 左边鼠标点击效果
    $('#bigimg .wpal').click(function() {
        if(sta!=0){
            sta--;
        }else{
            sta = wUlLiLength-2;
        }
        auto();
    })
    // 右边鼠标点击效果
    $('#bigimg .wpar').click(function(){
        if(sta!= wUlLiLength-1){
            sta++;
        }else{
            sta=1;
        }
        auto();
    })

    function auto(){
        new_left = -sta * withUl;
        $("#bigimg > ul").animate({'left':new_left+'px'},100);
    }

})