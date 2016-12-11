$(window).load(function(){
//右侧显示模块
	$(".t-btn1").click(function(){
		if($(".t-side").width() == 0){
			$(".t-side").animate({
				width:"300px"
			})
		}else{
			$(".t-side").animate({
				width:"0px"
			})
		}
	})
	$(".t-side h2").find("span").click(function(){
		$(".t-side").animate({
			width:"0px"
		})
	})
	$(".t-btn").find("span").mouseenter(function(){
		$(this).find("i").stop().fadeIn();
	})
	$(".t-btn").find("span").mouseleave(function(){
		$(this).find("i").stop().fadeOut();
	})
//返回顶部
	var timer = null;
	$(".t-btn7").click(function(){
		var leader = scroll().top;
		clearInterval(timer);
		timer = setInterval(function(){
			var target = 0;
			var step = (target-leader)/10;
			step = step>0 ? Math.ceil(step):Math.floor(step);
			leader = leader+step;
			window.scrollTo(0,leader);
			if(target == leader){
				clearInterval(timer);
			}
		},25)
	})
	function scroll() {  // 开始封装自己的scrollTop
		if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
			// 因为 window.pageYOffset 默认的是  0  所以这里需要判断
			return {
				left: window.pageXOffset,
				top: window.pageYOffset
			}
		}
		else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
			return {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			}
		}
		return {   // 未声明 DTD
			left: document.body.scrollLeft,
			top: document.body.scrollTop
		}
	}
})