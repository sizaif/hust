$(function(){
	$(".mod-news-r,.post-9").find(".ynews").each(function(){
		 if($(this).find("img").attr("src") == ""){
			 $(this).find(".img-link").remove();
		 }
		 
		 if($(this).find(".hot").children().text() ==""){
			 $(this).find(".hot").remove();
		 }
		
	});
	
function  str(className,n,f,b,e){
		$(className).find(".ynews").each(function(index,val){
			var $news_wz = $(this).find(".ynews_wz");
			var num = $news_wz.html();
			if($(this).find("img").length >0 && num.length>n){
				$news_wz.html(num.substr(0,n)+"...");
			}
			if(f){
				var $n_wz = $(this).parent(".ynews_list").find(b).find(".ynews_wz");
				var nu = $n_wz.html();
             
			    if($(this).find("img").length == 0 && nu.length>e){
				  $n_wz.html(nu.substr(0,e+50)+"...");
			    }else if($(this).find("img").length > 0 && nu.length>e){
				  $n_wz.html(nu.substr(0,e)+"...");
				}
			}
		});
	}
	str(".mod-news-r","50",false,".ynews","60");
	str(".ynews2",60,false);
	str(".ynews3",115,false,".n1",102);
	str(".ynews4","170",true,".n1",110);
	str(".ynews4","170",true,".n2",80);
	str(".ynews4","170",true,".n3",117);
	str(".ynews4","170",true,".n4",110);
			
	$(window).resize(function(){
		if($(window).width()>=1000){
			str(".ynews2",60,false);
			str(".ynews3",75,true,".n1",102);
			str(".ynews4","140",false);
		}
	});

	var $menu = $(".main-menu");

	$(".menu-item", $menu).each(function(){
		$(this).mouseenter(function() {
			$(".sub-menu", this).stop(true,true).slideDown(300);
		});
		$(this).mouseleave(function(){
			$(".sub-menu", this).stop(true,true).slideUp(200);
		});
		
	});
	
	$(".ynews",".news3").each(function(){
		if($(this).find("img").length == 0){
			$(this).children(".imgr").css({"width":"100%"});
		}
	});
	
	$("body,html").click(function(){
			//$(".search-bar").animate({"width":"29px"});
			$(".searchbtn").stop(true,true).fadeIn();		
	});
	
	$(".searchbtn").click(function(){
		$(this).stop(true,true).fadeOut();
		//$(".search-bar").stop(true,true).animate({"width":"132px"});
		return false;
	});	
	
	$("#keyword").click(function(){
		return false;
	});
	
	$("#keyword").focus(function(event) {
		/* Act on the event */
		var val = $.trim($(this).val());
		if(val=="在此输入"){
			$(this).val("");
		}
	}).blur(function(event) {
		/* Act on the event */
		var val = $.trim($(this).val());
		if(val==""){
			$(this).val("在此输入");
		}
	});

	$("#search-submit").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		var val = $.trim($("#keyword").val());
		if(val!==""&& val!=="在此输入"){
			$("#searchform").submit();
		}else{
			alert("请输入关键词");
		}
		return false;
	});
	
	
	/*媒体链接*/
	$(".shares .share").each(function(){
		$(this).children("a").hover(function(){
			$(this).parent().find(".con").stop(true,true).fadeIn();			
		},function(){
			$(this).parent().find(".con").stop(true,true).fadeOut();
		});
	});
	
	//$('#wp_news_w10').FontScroll({time: 3000,num: 1});
	
        var htm1,htm2,htm3;
	
	//$(window).resize(function(){
		if($(window).width()< 1000){
			htm1 = $(".news1").find(".modl").children(".post-9").detach().prop("outerHTML");
			htm2 = $(".news1").find(".mod").children(".post-8").detach().prop("outerHTML");
			htm3 = $(".news1").find(".modl").children(".post-12").detach().prop("outerHTML");
	 		//$(".news1").find(".modr").prepend(htm1);
			//$(".news1").find(".modr").prepend(htm2);
			$(".news1").find(".modl").append(htm2);
			$(".news1").find(".modr").prepend(htm1);
			$(".news1").find(".modr").append(htm3);
		}
	//});
});