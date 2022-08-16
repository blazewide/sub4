$(function(){
	$("#board> li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
});

$(function(){
	$("iftram").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
});