// build time:Mon Feb 25 2019 11:57:15 GMT+0800 (GMT+08:00)
$(document).ready(function(){t();function t(){var t=".post-toc";var a=$(t);var e=".active-current";a.on("activate.bs.scrollspy",function(){var e=$(t+" .active").last();o();e.addClass("active-current");a.scrollTop(e.offset().top-a.offset().top+a.scrollTop()-a.height()/2)}).on("clear.bs.scrollspy",o);$("body").scrollspy({target:t});function o(){$(t+" "+e).removeClass(e.substring(1))}}});$(document).ready(function(){var t=$("html");var a=200;var e=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var o="sidebar-nav-active";var s="sidebar-panel-active";if(t.hasClass(o)){return}var i=$("."+s);var l=$("."+t.data("target"));e?i.velocity("transition.slideUpOut",a,function(){l.velocity("stop").velocity("transition.slideDownIn",a).addClass(s)}):i.animate({opacity:0},a,function(){i.hide();l.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){i.removeClass(s);l.addClass(s)})});t.siblings().removeClass(o);t.addClass(o)});$(".post-toc a").on("click",function(a){a.preventDefault();var o=NexT.utils.escapeSelector(this.getAttribute("href"));var s=$(o).offset().top;e?t.velocity("stop").velocity("scroll",{offset:s+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:s},500)});var o=$(".post-toc-content");var s=CONFIG.page.sidebar;if(typeof s!=="boolean"){var i=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var l=o.length>0&&o.html().trim().length>0;s=i&&l}if(s){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
//rebuild by neat 