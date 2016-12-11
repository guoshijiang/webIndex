$(function(){
	//定义页面中数据
	var lData = {
		picSrc : ["#","#","#","#","#","#","#","#","#","#","#","#"],
		htPic: ["images/lht-brand1.jpg","images/lht-brand2.jpg","images/lht-brand3.jpg","images/lht-brand4.jpg","images/lht-brand5.jpg","images/lht-brand6.jpg","images/lht-brand7.jpg","images/lht-brand8.jpg","images/lht-brand9.jpg","images/lht-brand10.jpg","images/lht-brand11.jpg","images/lht-brand12.jpg"],
		flagNav : ['箱包','美妆','服装','腕表','鞋靴','配饰','家居','办公','礼品','母婴','电子'],
		flagAz : ['A','B','C','D','E','F','G','H','J','K','L','M','O','P','R','S','T','V','W','Z']
	}; 
	//动态生成热门品牌li
	var lhtStr = '';
	for (var i = 0; i < lData.picSrc.length; i++) {
		lhtStr += '<li><a herf="'+ lData.picSrc[i] +'"><img src="'+lData.htPic[i]+'"/></a></li>'
	};
	$('.lhb-pics')[0].innerHTML = lhtStr;
	var lflagN = '<li><a herf="javascript:;" class="current">全部</a></li>';
	for (var i = 0; i < lData.flagNav.length; i++) {
		lflagN += '<li><a herf="javascript:;">'+lData.flagNav[i]+'</a></li>'
	};
	$('.lsearchNav ul')[0].innerHTML = lflagN;
	var lflagA = '<li><a herf="javascript:;" class="current">全部</a></li>';
	for (var i = 0; i < lData.flagAz.length; i++) {
		lflagA += '<li><a herf="javascript:;">'+lData.flagAz[i]+'</a></li>'
	};
	$('.lsearchNav ul')[1].innerHTML = lflagA;
	//动态生成品牌展示
	var fljPics = '';
	var lkey = 0;
	picShow();
	function picShow(){
		if(lkey < Math.ceil(lJson.length/12)){
			var _num = (lkey+1)*12 > lJson.length ? lJson.length : (lkey+1)*12;
			console.log(_num)
			for (var i = lkey*12; i < _num ; i++) {
				fljPics += '<li>\
								<a href="#">\
									<img src="'+lJson[i].src+'" alt="" width=287>\
									<p>'+lJson[i].detail+'</p>\
								</a>\
							</li>'
			};
			$('.lflag-group')[0].innerHTML = fljPics;
		}	
		lkey++;
	}
	$('.lflag-more').get(0).onclick = picShow;	
	//上方图片效果
	$('#lmove li').hover(function(e) {
		// var ldir = Math.round(((Math.atan2(y, x)* (180 / Math.PI)+180)/90) + 3) % 4; //得到上下方位所对应的数值
		//console.log( $(this).offset().left)
		var w = $(this).width(); 
		var h = $(this).height(); 
		var x = (e.pageX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1); 
		var y = (e.pageY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1); 
		var ldir = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		console.log(ldir)
		if(ldir == 3){
			$(this).find('.lbank').css({'left':-402,'top':0}).stop(true,true).animate({'left':0}, 500)
		}else if(ldir == 0){
			$(this).find('.lbank').css({'left':0,'top':-200}).stop(true,true).animate({'top':0}, 500)
		}else if(ldir == 1){
			$(this).find('.lbank').css({'left':402,'top':0}).stop(true,true).animate({'left':0}, 500)
		}else if(ldir == 2){
			$(this).find('.lbank').css({'left':0,'top':200}).stop(true,true).animate({'top':0}, 500)
		};
	}, function(e) {
		var w = $(this).width(); 
		var h = $(this).height(); 
		var x = (e.pageX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1); 
		var y = (e.pageY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1); 
		var ldir = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		if(ldir == 3){
			$(this).find('.lbank').stop(true,true).animate({'left': -402}, 500)
		}else if(ldir == 0){
			$(this).find('.lbank').stop(true,true).animate({'top': -200}, 500)
		}else if(ldir == 1){
			$(this).find('.lbank').stop(true,true).animate({'left': 402}, 500)
		}else if(ldir == 2){
			$(this).find('.lbank').stop(true,true).animate({'top': 200}, 500)
		};
	});

	//中间字母 类型导航点击切换当前显示状态
	$('.lsearchNav li').click(function(event) {
		$(this).children('a').addClass('current').end().siblings().children('a').removeClass('current')
	});
})

