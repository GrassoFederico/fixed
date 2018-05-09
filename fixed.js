var offset = 15;
var dirOffset = 0;

function hide()
{
}

function hideBanner(hideStatus)
{
}

$(window).ready(function(){
});

$(window).scroll(function(){
	console.log($(this).scrollTop() + " " + $("#banner").offset().top);
	if($(this).scrollTop() > $("#banner").offset().top)
		offset += 100;
	$("#banner").css("marginTop",offset + "px");
});