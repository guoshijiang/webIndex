// 品牌旗舰里  高度的变化
$(window).load(function(){
	var width = $(".w").width();
	$(".t-shopping-brand li").mouseenter(function(){
		$(this).find(".t-shopping-rad").stop().animate({
			height:"150px"
		})
	})
	$(".t-shopping-brand li").mouseleave(function(){
		$(this).find(".t-shopping-rad").stop().animate({
			height:"55px"
		})
	})

//品牌旗舰里 t-shopping-store的效果
	$(".t-store-li ol li").mouseenter(function(){
		$(this).find(".t-store-li-name").find(".t-line1").stop().animate({width:"100%"},500);
		$(this).find(".t-store-li-name").find(".t-line2").stop().animate({height:"74px"},500);
		$(this).find(".t-store-li-name").find(".t-line3").stop().animate({width:"100%"},500);
		$(this).find(".t-store-li-name").find(".t-line4").stop().animate({height:"74px"},500);
		$(this).find(".t-store-li-name").stop().fadeIn(200);
	})
	$(".t-store-li ol li").mouseleave(function(){
		$(this).find(".t-store-li-name").find(".t-line1").stop().animate({width:"0"},500);
		$(this).find(".t-store-li-name").find(".t-line2").stop().animate({height:"0"},500);
		$(this).find(".t-store-li-name").find(".t-line3").stop().animate({width:"0"},500);
		$(this).find(".t-store-li-name").find(".t-line4").stop().animate({height:"0"},500);
		$(this).find(".t-store-li-name").stop().fadeOut(200);

	})

//品牌旗舰里 t-shopping-store切换效果
	var num = 0;
	$(".t-store-r").click(function(){
		if(num < 2){
			num++;
			$(".t-store-li").animate({
				left: -width*num+"px"
			})
		}
	})

	$(".t-store-l").click(function(){
		if(num > 0){
			num--;
			$(".t-store-li").animate({
				left: -1200*num+"px"
			})
		}

	})

	$(".t-promot-t").find("a").eq(1).css({
		"margin-left":"8px",
		"margin-right":"8px"
	})
	$(".t-promot-m").find("a").eq(1).css({
		"margin-left":"8px",
		"margin-right":"8px"
	})

	$(".t-bind").find("li").eq(1).css({
		"margin-left":"6px",
		"margin-right":"6px"
	})
	$(".t-bind").find("li").eq(4).css({
		"margin-left":"6px",
		"margin-right":"6px"
	})

//t-shopping-others
	$(".t-shopping-others").find("div").mouseenter(function(){
		$(this).find("span").stop().show(600);
	})
	$(".t-shopping-others").find("div").mouseleave(function(){
		$(this).find("span").stop().hide(600);
	})

//购物中心的button
	$(".t-shopping-buts li").mouseenter(function(){
		$(this).find("button").stop().animate({bottom:"45px"});
		$(this).find("div").stop().animate({bottom:"0"});
	})
	$(".t-shopping-buts li").mouseleave(function(){
		$(this).find("button").stop().animate({bottom:"0"});
		$(this).find("div").stop().animate({bottom:"-45px"});
	})


//商场同款的tab切换
	$(".t-hotsale-buts li").mouseenter(function(){
		var index = $(this).index();
		$(".t-hotsale-buts button").removeClass("t-hotsale-current");
		$(this).find("button").addClass("t-hotsale-current");
		$(".t-hotsale-con > ul").stop().animate({left:-index*width+"px"});

	})

//商场同款里面的鼠标放上去移动效果
	$(".t-icon").mouseenter(function(){
		$(this).find(".t-icon-p").stop().animate({left:"10px"});
		$(this).find(".t-icon-img").stop().animate({right:"10px"});
	})
	$(".t-icon").mouseleave(function(){
		$(this).find(".t-icon-p").stop().animate({left:"30px"});
		$(this).find(".t-icon-img").stop().animate({right:"30px"});
	})

//购物中心的tab切换
	$(".t-shopping-buts>ul>li").mouseenter(function(){
		var index = $(this).index();
		$(".t-shopping-con-ul").stop().animate({left:-index*width+"px"});
		$(".t-tab-con").css("left",0);
		$(this).parent().parent().parent().find(".t-tab-ol > li").eq(0).addClass("current").siblings("li").removeClass("current");
		$(this).parent().parent().parent().find(".t-tab-ol > li").eq(3).addClass("current").siblings("li").removeClass("current");
		$(this).parent().parent().parent().find(".t-tab-ol > li").eq(6).addClass("current").siblings("li").removeClass("current");
		$(this).parent().parent().parent().find(".t-tab-ol > li").eq(9).addClass("current").siblings("li").removeClass("current");
		$(this).parent().parent().parent().find(".t-tab-ol > li").eq(12).addClass("current").siblings("li").removeClass("current");
	})

//购物中心的小图片切换
	var widths = $(".t-tab").width();
	//alert(widths);
	$(".t-tab-ol").find("li").mouseenter(function(){
		var index = $(this).index();
		//alert(index);
		$(this).addClass("current").siblings("li").removeClass("current");
		$(".t-tab-con").stop().animate({
			left:-index*widths+"px"
		})
	})

//主题活动的图片效果
	$(".t-promot-t>a").mouseenter(function(){
		$(this).find("span").stop().fadeIn();
	})
	$(".t-promot-m>a").mouseenter(function(){
		$(this).find("span").stop().fadeIn();
	})
	$(".t-promot-t>a").mouseleave(function(){
		$(this).find("span").stop().fadeOut();
	})
	$(".t-promot-m>a").mouseleave(function(){
		$(this).find("span").stop().fadeOut();
	})

//闪购里面的时间效果
	setInterval(times,1000);

	function times(){
		var tNowTime = new Date().getTime();
		var tWillDate = new Date("2016/02/01 00:00:00").getTime();

		var ms = tWillDate - tNowTime;
		var ss = parseInt(ms/1000);
		var s = ss%60;
		if(s<10){
			s = "0"+s;
		}
		var m = parseInt(ss/60%60);
		if(m<10){
			m = "0"+m;
		}
		var h = parseInt(ss/60/60%12);
		if(h<10){
			h = "0"+h;
		}
		var d = parseInt(ss/60/60/24);
		if(d<10){
			d = "0"+d;
		}

		$(".t-now-time").find("p").html(d+"天"+h+"小时"+m+"分"+s+"秒");
	}



//商场同款的第三个tab
	$(".t-hotsale-con-l").mouseenter(function(){
		$(this).find("span").stop().slideDown();
	})
	$(".t-hotsale-con-r a").mouseenter(function(){
		$(this).find("span").stop().slideDown();
	})
	$(".t-hotsale-con-l").mouseleave(function(){
		$(this).find("span").stop().slideUp();
	})
	$(".t-hotsale-con-r a").mouseleave(function(){
		$(this).find("span").stop().slideUp();
	})

// //右侧显示模块
// 	$(".t-btn1").click(function(){
// 		if($(".t-side").width() == 0){
// 			$(".t-side").animate({
// 				width:"300px"
// 			})
// 		}else{
// 			$(".t-side").animate({
// 				width:"0px"
// 			})
// 		}
// 	})
// 	$(".t-side h2").find("span").click(function(){
// 		$(".t-side").animate({
// 			width:"0px"
// 		})
// 	})
// 	$(".t-btn").find("span").mouseenter(function(){
// 		$(this).find("i").stop().fadeIn();
// 	})
// 	$(".t-btn").find("span").mouseleave(function(){
// 		$(this).find("i").stop().fadeOut();
// 	})
// //返回顶部
// 	var timer = null;
// 	$(".t-btn7").click(function(){
// 		var leader = scroll().top;
// 		clearInterval(timer);
// 		timer = setInterval(function(){
// 			var target = 0;
// 			var step = (target-leader)/10;
// 			step = step>0 ? Math.ceil(step):Math.floor(step);
// 			leader = leader+step;
// 			window.scrollTo(0,leader);
// 			if(target == leader){
// 				clearInterval(timer);
// 			}
// 		},25)
// 	})
// 	function scroll() {  // 开始封装自己的scrollTop
// 		if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
// 			// 因为 window.pageYOffset 默认的是  0  所以这里需要判断
// 			return {
// 				left: window.pageXOffset,
// 				top: window.pageYOffset
// 			}
// 		}
// 		else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
// 			return {
// 				left: document.documentElement.scrollLeft,
// 				top: document.documentElement.scrollTop
// 			}
// 		}
// 		return {   // 未声明 DTD
// 			left: document.body.scrollLeft,
// 			top: document.body.scrollTop
// 		}
// 	}

	$(function () {
		var $jUl = $("#jMainSlider").find("ul");
		var $jUlLis = $jUl.children("li");
		var $jOl = $("#jMainSlider").find("ol");
		var timer = null;
		for (var i = 0; i < $jUlLis.length; i++) {
			$jOl.append("<li></li>");
		}
		$jOl.children().eq(0).addClass("current");
		var $jOlLis = $jOl.children("li");

		var liWidth = $jUlLis.eq(0).width();

		//鼠标放上去箭头显示出来

		timer = setInterval(jAutoPlay, 1500);
		$("#jMainSlider").mouseenter(function () {
			$(".j-arrow").css("display", "block");
			clearInterval(timer);
		});

		//鼠标移开箭头隐藏
		$("#jMainSlider").mouseleave(function () {
			$(".j-arrow").css("display", "none");
			timer = setInterval(jAutoPlay, 1500);

		});

		var curIndex = 0;
		//鼠标点击箭头滑动
		$("#arrowR").click(function () {
			if (curIndex >= $jUlLis.length - 1) {
				return;
			}
			curIndex++;

			$jUl.stop().animate({
				left: -liWidth * curIndex
			});

			$jOl.children().eq(curIndex).addClass("current").siblings().removeClass("current");
		});

		//鼠标点击箭头滑动
		$("#arrowL").click(function () {
			if (curIndex <= 0) {
				return;
			}
			curIndex--;
			$jUl.stop().animate({
				left: -liWidth * curIndex
			});

			$jOl.children().eq(curIndex).addClass("current").siblings().removeClass("current");
		});

		var jOlIndex = 0;
		//鼠标放在ol的li上到对应的ul的li
		$jOl.children().mouseenter(function () {
			$(this).addClass("current").siblings().removeClass("current");
			var index = $(this).index();

			$jUl.stop().animate({
				left: -liWidth * index
			});

			curIndex = index;
			jOlIndex = index;
		});


		$jUl.append($jUl.find("li").eq(0).clone());

		//轮播图函数
		function jAutoPlay() {
			if (curIndex < $jUlLis.length) {
				curIndex++;
			} else {
				curIndex = 1;
				$jUl[0].style.left = 0;
			}
			$jUl.stop().animate({
				left: -liWidth * curIndex
			});
			if (jOlIndex < $jOlLis.length-1) {
				jOlIndex++;
				console.log(jOlIndex)
			} else {
				jOlIndex = 0;
			}
			$jOl.children().eq(jOlIndex).addClass("current").siblings().removeClass("current");
		}

	});

})


