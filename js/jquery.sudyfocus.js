/*
** sudyTpl for javascript template
 */
!function(a){a.fn.sudyTpl=function(b){var c={p:null,json:null,callback:function(){}},d=a.extend(!0,{},c,b);return this.each(function(){var b=a(this),c=a('[type="text/template"]',b),e=[];if(null!==d.json?e=d.json:null!==d.p&&(e=getImgJson(d.p)),e.length>0){var f=c.get(0).text,g=f.match(/<!--LoopBegin-->[\s\S]*?<!--LoopEnd-->/gi),h=[];return a.each(g,function(b,c){c=c.replace(/<!--[\s\S]*?-->/g,""),h[b]="",a.each(e,function(a,d){h[b]+=c.replace(/\[%index%\]/g,a+1).replace(/\[%title%\]/g,d.title).replace(/(\/page\/main\d+\/|\/_upload[\s\S]*?\/template\d+\/)?\[%url%\]/g,d.url).replace(/(\/page\/main\d+\/|\/_upload[\s\S]*?\/template\d+\/)?\[%src%\]/g,d.src).replace(/\[%text%\]/g,d.text)}),f=f.replace(/<!--LoopBegin-->[\s\S]*?<!--LoopEnd-->/i,h[b])}),f=a.trim(f.replace(/(\n[\s|\t]*\r*\n)/g,"\n")),b.html(f),d.callback(b)}})}}(jQuery);

/*
sudyTouch for support touch
 */
!function(a){a.fn.sudyTouch=function(b){return this.each(function(){a(this).width(),a(this).height(),a(this).on("touchstart",function(c){var d=c.originalEvent.touches[0],e=Number(new Date),f=a(this).position();return a.data(this,"touchstart",{posX:d.pageX,posY:d.pageY,timer:e,startX:f.left,startY:f.top}),b.swipeStart&&b.swipeStart.call(this,f.left,f.top),c.stopPropagation()}).on("touchmove",function(c){var d=c.originalEvent.touches[0],e=Number(new Date),f=d.pageX-a.data(this,"touchstart").posX,g=d.pageY-a.data(this,"touchstart").posY;return deltaT=e-a.data(this,"touchstart").timer,a.data(this,"touchmove",{posX:d.pageX,posY:d.pageY,timer:e}),b.swipeMove&&(c.preventDefault(),b.swipeMove.call(this,f,g,deltaT)),(b.swipeRight||b.swipeLeft)&&Math.abs(f)>Math.abs(g)&&c.preventDefault(),(b.swipeTop||b.swipeBottom)&&Math.abs(g)>Math.abs(f)&&c.preventDefault(),c.stopPropagation()}).on("touchend",function(){var c=Number(new Date),d=a.data(this,"touchmove").posX-a.data(this,"touchstart").posX,f=a.data(this,"touchmove").posY-a.data(this,"touchstart").posY,g=c-a.data(this,"touchstart").timer;a.data(this,"touchend",{posX:a.data(this,"touchmove").posX,posY:a.data(this,"touchmove").posY,timer:c});var h=Math.atan2(-f,d);return(Math.abs(d)>30||Math.abs(f)>30)&&200>g&&(Math.abs(h)<Math.PI/4&&b.swipeRight&&b.swipeRight.call(this,d,f,g),Math.abs(h)>3*Math.PI/4&&b.swipeLeft&&b.swipeLeft.call(this,d,f,g),Math.PI/4<h&&h<3*Math.PI/4&&b.swipeTop&&b.swipeTop.call(this,d,f,g),3*-Math.PI/4<h&&h<-Math.PI/4&&b.swipeBottom&&b.swipeBottom.call(this,d,f,g)),b.swipeEnd&&b.swipeEnd.call(this,d,f,g),e.stopPropagation()})})}}(jQuery);

/*
** sudyfocus
 */
!
function($) {
    $.fn.sudyfocus = function(opts) {
        function setfoucs(a) {
            $.each(a,
            function(a, b) {
                if ("img_meta" in o.json[a] && !$.isEmptyObject(o.json[a].img_meta)) {
                    var c = $(b).find("img").eq(0),
                    d = o.json[a].img_meta.focusWidth,
                    e = o.json[a].img_meta.focusHeight,
                    f = d / e,
                    g = o.json[a].img_meta.realWidth,
                    h = o.json[a].img_meta.realHeight,
                    i = g / h,
                    j = {
                        X: o.json[a].img_meta.left,
                        Y: o.json[a].img_meta.top
                    },
                    k = j.X,
                    l = j.Y;
                    j.X = g > 2 * k + d ? 0 : 2 * k + d - g,
                    j.Y = h > 2 * l + e ? 0 : 2 * l + e - h,
                    d = 0 == j.X ? d + 2 * k: g - j.X,
                    e = 0 == j.Y ? e + 2 * l: h - j.Y,
                    f = d / e;
                    var m, n = {};
                    r > f ? (m = zW / d, g = m * g, h = g / i, d = zW, e = d / f, n.X = m * j.X + d / 2, n.Y = m * j.Y + e / 2) : (m = zH / e, h = m * h, g = h * i, e = zH, d = e * f, n.X = m * j.X + d / 2, n.Y = m * j.Y + e / 2),
                    c.css({
                        display: "block",
                        width: g + "px",
                        height: h + "px",
                        position: "absolute",
                        left: zW / 2 - n.X + "px",
                        top: zH / 2 - n.Y + "px"
                    })
                }
            })
        }
        var defaults = {
            p: null,
            json: [],
            title: {
                active: !0,
                isAutoWidth: !1,
                href: !1,
                prefix: "",
                suffix: ""
            },
            text: {
                active: !1,
                isAutoHeight: !1,
                href: !1
            },
            href: !0,
            zWidth: 420,
            zHeight: 270,
            response: !0,
            navigation: !0,
            isNavHover: !0,
            pagination: !1,
            effect: "slide",
            speed: 500,
            crossfade: !0,
            start: 1,
            autoPlay: !0,
            interval: 5e3,
            trigger: "mouseenter"
        },
        o = $.extend(!0, {},
        defaults, opts),
        zW = o.zWidth,
        zH = o.zHeight,
        r = zW / zH;
        return null !== o.p && "function" == eval("typeof getImgJson") && (o.json = getImgJson(o.p).concat(o.json)),
        this.each(function() {
            function n() {
                a.css({
                    width: zW + "px",
                    height: zH + "px"
                }).addClass("focus-box"),
                d.css({
                    width: zW + "px",
                    height: zH + "px",
                    visibility: "visible"
                })
            }
            function u() {
                g.hide(),
                h.hide(),
                "slide" == o.effect ? t.slide() : "fade" == o.effect ? t.fade() : t.show(),
                k.removeClass("focus-page-active").eq(q).addClass("focus-page-active");
                km.removeClass("focus-page-active").eq(q).addClass("focus-page-active");
                var a = o.title.prefix + $.trim(o.json[q].title || "") + o.title.suffix,
                b = $.trim(o.json[q].text || "");
                if ($url = $.trim(o.json[q].url || ""), "" !== $url && "#" !== $url) {
                    var c = $('<a href="' + $url + '" target="_blank"></a>');
                    o.href && e.eq(q).find("a").length < 1 && e.eq(q).wrapInner(c),
                    o.title.href && "" !== a && (a = c.clone().html(a)),
                    o.text.href && "" !== b && (b = c.clone().html(b))
                }
                "" !== a && (g.show(), l.html(a)),
                "" !== b && (h.show(), m.html(b)),
                o.title.isAutoWidth && l.parent().css("width", l.outerWidth()),
                o.text.isAutoHeight && m.parent().parent().css("height", m.outerHeight()),
                s = q
            }
            function v() {
                q++,
                q > f - 1 && (q = 0),
                u()
            }
            function w() {
                q--,
                0 > q && (q = f - 1),
                u()
            }
            function x() {
                var b;
                a.hover(function() {
                    clearInterval(b)
                },
                function() {
                    b = setInterval(function() {
                        v()
                    },
                    o.interval)
                }).trigger("mouseleave")
            }
            var a = $(this),
			
            b = a.children(),
            c = [];
			
            if ($.each(b,
            function(a, b) {
                var d = {};
                d.title = $(b).attr("data-focus-title") || "",
                d.url = $(b).attr("data-focus-url") || "",
                d.text = $(b).attr("data-focus-text") || "",
                c.push(d)
            }), a.html(function(a, b) {
                return $.each(o.json,
                function() {
                    b += '<img src="' + this.src + '">'
                }),
                b
            }), o.json = c.concat(o.json), o.json.length < 1) return a.html("\u7a97\u53e3\u672a\u7ed1\u5b9a\u6216\u65e0\u6587\u7ae0");
            a.children().wrap('<div class="focus-item">').end().wrapInner('<div class="focus-container">');
			
			var fimg = $(".focus-item", a),
            d = $(".focus-container", a),
            e = $(".focus-item", d).hide(),
            f = e.length;
			
			
            o.title.active && $('<div class="focus-title-bar"><div class="focus-title-bg"></div><h2 class="focus-title"></h2></div>').appendTo(a),
            o.text.active && $('<div class="focus-text-box"><div class="focus-text-bg"></div><div class="focus-text-inner"><p class="focus-text"></p></div></div>').appendTo(a),
            o.navigation && f > 1 && $('<a class="focus-navigation focus-prev">&lt;</a><a class="focus-navigation focus-next">&gt;</a>').appendTo(a),
			
            o.pagination && f > 1 && a.append(function() {
                var a, b, c = $('<div class="focus-pagination"></div>');
				
                for (a = 0; f > a; a++) b = a + 1,
				c.append('<a class="focus-page focus-page-' + a + '"></a>'); 
				/* <img height="55" width="180" src=' + o.json[a].src + '> */
                return c
				//$(".focus-pagination").children("a").wrapAll('<div class="btns">&gt;</div>');
            });
			
			$(".focus-title-bar,.focus-pagination,.focus-pagination1,.focus-bg").wrapAll('<div class="fouce-box-m"></div>');
			$(".focus-page").wrapAll('<div class="btn-m"></div>').wrapAll('<div class="btn-ms"></div>');
			
			
			
			var linum= $('.btn-ms').children("a").length;
			var width= $('.btn-ms').children("a").width();
			
			cc = function(h) {
            var g = parseInt(h);
            if (g < 10) {
                g = "0" + g
            }
            return g
			}
			
			o.pagination && f > 1 && a.append(function() {
                var a, b, c = $('<div class="focus-pagination1"></div>');
                for (a = 0; f > a; a++) b = a + 1,
				
                c.append('<div class="focus-time"><span class="yue">'+ cc(b) +'</span><span class="linum">/ '+ linum +'</span></div>');
				/* + o.json[a].time + */
                return c
            });
			a.append("<div class='focus-bg'></div>");
			
/* 			$(".focus-pagination1").find(".focus-time").each(function(){
			  var fyue = $(this).find(".yue").text();
			  var date = fyue.split("-"),
			  m = date[0],
			  d = date[1];
			  
			  
			  $(this).find(".yue").before('<div class="date">' + m +' '+ d + '</div>');
			}); */
			
			
			
			
			/*$(".focus-pagination").append('<div class="btns">&gt;&gt;</div>');
			
			var linum= $('.btn-ms').children("a").length;
			var width= $('.btn-ms').children("a").width();
			 var btns = true;
            $(".focus-pagination").children(".btns").on("click",function(){
			    if(btns){
					$(this).text("<<");
					$(this).parent().find(".btn-ms").stop(true,true).animate({left:-(width+10)*linum/2},1000);
					btns = false;
				}else{
					$(this).text(">>");
					$(this).parent().find(".btn-ms").stop(true,true).animate({left:0},1000);
					btns = true;
				}
			}); */
			
            var g = $(".focus-title-bar", a),
            h = $(".focus-text-box", a),
            i = $(".focus-navigation", a),
            j = $(".focus-pagination", a),
            jm = $(".focus-pagination1", a),
            k = $(".focus-page", j),
            km = $(".focus-time", jm),
            l = $(".focus-title", g),
            m = $(".focus-text", h);
            if (o.isNavHover && (i.hide(), a.hover(function() {
                i.show()
            },
            function() {
                i.hide()
            })), o.response) {
                var p = a.parent().width();
                zW = p,
                zH = zW / r,
                $(window).resize(function() {
                    p = a.parent().width(),
                    zW = p,
                    zH = zW / r,
                    n(),
                    setfoucs(e)
					//$(".m-body").css({"height":zH});
                })
            }
            n(),
            setfoucs(e);
            var q = o.start > f ? f - 1 : o.start - 1,
            s = q,
            t = {
                show: function() {
                    e.eq(s).hide().end().eq(q).show()
                },
                slide: function() {
                    function a() {
                        e.eq(q).css({
                            left: "100%"
                        }),
                        e.eq(s).stop(!0, !0).animate({
                            left: "-100%"
                        },
                        o.speed),
                        e.eq(q).stop(!0, !1).animate({
                            left: "0%"
                        },
                        o.speed)
                    }
                    function b() {
                        e.eq(q).css({
                            left: "-100%"
                        }),
                        e.eq(s).stop(!0, !0).animate({
                            left: "100%"
                        },
                        o.speed),
                        e.eq(q).stop(!0, !1).animate({
                            left: "0%"
                        },
                        o.speed)
                    }
                    e.eq(s).show().end().eq(q).show(),
                    f > 1 && (0 == s && q == f - 1 || s == f - 1 && 0 == q ? (0 == s && q == f - 1 && b(), s == f - 1 && 0 == q && a()) : (q > s && a(), s > q && b()))
                },
                fade: function() {
                    o.crossfade ? e.eq(s).stop().fadeOut(o.speed).end().eq(q).fadeIn(o.speed) : e.eq(s).stop().hide().end().eq(q).fadeIn(o.speed)
                }
            };
            o.autoPlay && x();
            var y = $(".focus-prev", a),
            z = $(".focus-next", a);
            y.click(function() {
                w()
            }),
            z.click(function() {
                v()
            }),
            k.on(o.trigger,
            function() {
                q = $(this).index(),
                u()
            }),
            $.fn.sudyTouch && d.sudyTouch({
                swipeStart: function() {
                    a.trigger("mouseenter")
                },
                swipeLeft: function() {
                    v()
                },
                swipeRight: function() {
                    w()
                },
                swipeEnd: function() {
                    a.trigger("mouseleave")
                }
            }),
            u()
			
			
			
			$(".fouce-box-m,.focus-navigation,.focus-pagination1,.focus-bg").wrapAll('<div class="rb"></div>');////////////////////////////////////////////
			
			//$(".m-body").css({"height":zH});
        })
    }
} (jQuery);

/*
** other extends
 */
!function(a){a.fn.sudySelect=function(b){var c={handle:".select-name",selects:".select-list",trigger:"click",effect:"slide",speed:100,dir:"down",autoWidth:!0},d=a.extend(!0,{},c,b);return this.each(function(){function g(){"slide"==d.effect?e.stop(!0,!0).slideDown(d.speed):"fade"==d.effect?e.stop(!0,!0).fadeIn(d.speed):$vp.show()}function h(){"slide"==d.effect?e.stop(!0,!1).slideUp(d.speed):"fade"==d.effect?e.stop(!0,!1).fadeOut(d.speed):e.hide()}var b=a(this),c=a(this).find(d.handle),e=a(this).find(d.selects),f=c.outerHeight();d.autoWidth&&e.children().css({"padding-left":c.css("padding-left"),"padding-right":c.css("padding-right")}),"down"==d.dir?(b.addClass("select-down"),e.css({top:f+"px",bottom:"auto"})):"up"==d.dir&&(b.addClass("select-up"),e.css({bottom:f+"px",top:"auto"})),c.on(d.trigger,function(){"click"==d.trigger?(c.toggleClass("select-open"),c.hasClass("select-open")?g():h()):(c.addClass("select-open"),g()),e.children().removeClass("hover")}),b.on("mouseleave",function(){c.removeClass("select-open"),h()}),e.children().mouseenter(function(){a(this).addClass("hover").siblings().removeClass("hover")}),e.children().on("click",function(){c.text(a(this).text()),a(this).addClass("selected").siblings().removeClass("selected"),c.removeClass("select-open"),h()}).eq(0).trigger("click")})},a.fn.sudyPubdate=function(b){function e(a){var b=a;switch(a){case 1:b="\u4e00\u6708";break;case 2:b="\u4e8c\u6708";break;case 3:b="\u4e09\u6708";break;case 4:b="\u56db\u6708";break;case 5:b="\u4e94\u6708";break;case 6:b="\u516d\u6708";break;case 7:b="\u4e03\u6708";break;case 8:b="\u516b\u6708";break;case 9:b="\u4e5d\u6708";break;case 10:b="\u5341\u6708";break;case 11:b="\u5341\u4e00\u6708";break;case 12:b="\u5341\u4e8c\u6708"}return b}function f(a){var b=a;switch(a){case 1:b="Jan";break;case 2:b="Feb";break;case 3:b="Mar";break;case 4:b="Apr";break;case 5:b="May";break;case 6:b="Jun";break;case 7:b="Jul";break;case 8:b="Aug";break;case 9:b="Sep";break;case 10:b="Oct";break;case 11:b="Nov";break;case 12:b="Dec"}return b}var c={target:".pubdate",lang:"num",separator:"-",format:"\u5e74\u6708\u65e5",prefix_0:!0,tpl:'<div class="sudy-pubdate"><span class="pubdate-month">%m%\u6708</span><span class="pubdate-day">%d%</span></div>'},d=a.extend(!0,{},c,b);return this.each(function(){var c=(a(this),a(this).find(d.target)),g=a.trim(c.text()).split(d.separator),h=parseInt(g[d.format.indexOf("\u5e74")],10),i=parseInt(g[d.format.indexOf("\u6708")],10),j=parseInt(g[d.format.indexOf("\u65e5")],10);"en"==d.lang&&(i=f(i)),"cn"==d.lang&&(i=e(i)),"num"==d.lang&&d.prefix_0&&(i=10>i?"0"+i:i,j=10>j?"0"+j:j);var k=d.tpl.replace("%Y%",h).replace("%m%",i).replace("%d%",j);c.html(k)})},a.fn.sudyTab=function(b){var c={handle:".tab-menu > li",content:".tab-list > li,.tab-more > li",trigger:"mouseenter",start:1,autoPlay:{active:!1,interval:4e3,pauseHover:!0}},d=a.extend(!0,{},c,b);return this.each(function(){var b=a(this),c=b.find(d.handle),e=d.content.split(","),f=d.start-1,g=c.length,h=f;if(a.each(c,function(f,g){a(g).on(d.trigger,function(d){return d.preventDefault(),h=f,c.removeClass("selected"),a(this).addClass("selected"),a.each(e,function(a,c){b.find(c).removeClass("active").hide(),b.find(c).eq(f).addClass("active").show()}),!1})}),d.autoPlay.active){var i,h,j=function(a){c.eq(a).trigger(d.trigger),i=setTimeout(function(){a++,a>g-1&&(a=0),j(a)},d.autoPlay.interval)};j(f),b.hover(function(){clearTimeout(i)},function(){j(h)})}else c.eq(f).trigger(d.trigger)})},a.fn.sudyInput=function(b){var c={tip:".tip"},d=a.extend(!0,{},c,b);return this.each(function(){function f(){var a=e.val();a!==c.text()&&""!==a?c.hide():(c.show(),e.val(""))}var b=a(this),c=a(this).find(d.tip),e=a(this).find("input,textarea");b.click(function(){e.trigger("focus")}),e.focus(function(){c.hide()}),e.blur(function(){f()})})},a.fn.sudyClock=function(b){var c={format:"%Y%\u5e74%M%\u6708%D%\u65e5 %N% %H%:%m%:%s% %W% \u8ddd\u79bb100\u5468\u5e74\u56fd\u5e86\u8fd8\u6709 %CD% \u5929",hour12:!1,noon:"cn",week:"cn",countDown:"2049/10/1"},d=a.extend(!0,{},c,b),e=function(a){var b=parseInt(a);return 10>b&&(b="0"+b),b},f=function(){var a=new Date,b=a.getFullYear(),c=a.getMonth()+1,f=a.getDate(),g=a.getHours(),h=a.getMinutes(),i=a.getSeconds(),j="cn"==d.week?["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"][a.getDay()]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],k="cn"==d.noon?["\u4e0a\u5348","\u4e0b\u5348"][12>g?0:1]:["AM","PM"][12>g?0:1],l=0;return g=d.hour12&&g>12?g-12:g,l=Math.ceil((Date.parse(d.countDown)-a.getTime())/864e5),{Y:b,M:e(c),D:e(f),H:e(g),m:e(h),s:e(i),W:j,N:k,C:l}};return this.each(function(){function e(){c=d.format.replace("%Y%",f().Y).replace("%M%",f().M).replace("%D%",f().D).replace("%H%",f().H).replace("%m%",f().m).replace("%s%",f().s).replace("%W%",f().W).replace("%N%",f().N).replace("%CD%",f().C),b.html(c),setTimeout(function(){e()},500)}var c,b=a(this);e()})},a.fn.sudyLinks=function(b){var c={handle:".links-name",wrap:".links-wrap",trigger:"mouseenter",effect:"show",speed:300,hidePause:0,type:"elink",width:"block",position:!0},d=a.extend(!0,{},c,b);return this.each(function(){var h,b=a(this),c=a(this).find(d.handle),e=a(this).find(d.wrap),f=c.outerHeight(),i=e.outerHeight(),f=e.css("bottom");"block"==d.width&&(b.css("display","block"),c.css("display","block")),/\d+/.test(d.width)&&(b.css("width",d.width),c.css("display","block")),"elink"==d.type&&e.css("width",b.width()-2),b.on(d.trigger,function(g){g.preventDefault(),clearTimeout(h);var j=b.offset().top,k=a(window).scrollTop(),l=j-k;return d.position&&(b.css("position","relative"),i>l?e.css({bottom:"auto",top:f}):e.css({top:"auto",bottom:f})),c.addClass("wrap-open"),"slide"==d.effect?e.stop(!0,!0).hide().slideDown(d.speed):"fade"==d.effect?e.stop(!0,!0).hide().fadeIn(d.speed):e.show(),!1}),b.mouseleave(function(a){return a.preventDefault(),h=setTimeout(function(){d.position&&b.css("position","static"),c.removeClass("wrap-open"),"slide"==d.effect?e.stop(!0,!0).slideUp(d.speed):"fade"==d.effect?e.stop(!0,!0).fadeOut(d.speed):e.hide()},d.hidePause),!1})})},a.fn.sudyScroll=function(b){var c={width:200,height:100,display:2,step:2,dir:"y",auto:!0,speed:500,hoverPause:5e3,navigation:!0,navTrigger:"click",pagination:!0,pagTrigger:"mouseenter"},d=a.extend(!0,{},c,b);return this.each(function(){function n(){a(".page-index",l).eq(i).addClass("active").siblings().removeClass("active")}function o(){"x"==d.dir?(j=-i*d.step*d.width,b.stop().animate({left:j+"px"},d.speed)):(k=-i*d.step*d.height,b.stop().animate({top:k+"px"},d.speed)),n()}function p(){i++,i>h-1&&(i=0),o(i)}function q(){i--,0>i&&(i=h-1),o(i)}a(this).wrap('<div class="sudy-scroll-wrap">');var b=a(this),c=a(this).children(),e=c.length,f=a(this).parent(),g="scroll-"+Number(new Date),h=Math.ceil(e/d.step),i=0,j=0,k=0;d.step=d.step>d.display?d.display:d.step,f.wrap('<div class="sudy-scroll" id="'+g+'">');var l=a(this).parent().parent();if("x"==d.dir?(l.css({width:d.width*d.display+"px"}),f.css({width:d.width*d.display+"px"}),b.css({width:d.width*e+"px",position:"absolute",left:"0px",top:"0px"}),c.css({width:d.width+"px","float":"left",display:"inline-block"})):(l.css({height:d.height*d.display+"px"}),f.css({height:d.height*d.display+"px"}),b.css({position:"absolute",left:"0px",top:"0px"}),c.css({height:d.height+"px"})),d.navigation&&l.append('<div class="sudy-scroll-nav"><a href="javascript:;" class="nav-prev">&lt;</a><a href="javascript:;" class="nav-next">&gt;</a></div>'),d.pagination){var m='<div class="sudy-scroll-page">';a.each(new Array(h),function(a){m=m+'<a class="page-index page-'+a+'" href="javascript:;"><span>'+a+"</span></a>"}),l.append(m)}if(o(i),d.auto){var r;l.hover(function(){clearTimeout(r)},function(){r=setTimeout(function(){p(),l.trigger("mouseleave")},d.hoverPause)}).trigger("mouseleave")}a(".nav-next",l).on(d.navTrigger,function(){p()}),a(".nav-prev",l).on(d.navTrigger,function(){q()}),a(".page-index",l).on(d.pagTrigger,function(){i=a(this).index(),o(i)})})}}(jQuery);