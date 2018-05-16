var position, bannerPosition, limitPosition, bannerHeight;
var MAX_WIDTH = 1024;
var responsive = window.matchMedia("(max-width: " + MAX_WIDTH + "px)");

function getPosition()
{
	return($(document).scrollTop());
}

function reset()
{
	position = getPosition();
	$("#banner").css("marginTop", "0px");
	bannerHeight = $("#banner").height();
	bannerPosition = $("#banner").offset().top;
	limitPosition = $("#limit").offset().top;
}

function checkPosition()
{
	position = getPosition();
	if((position + bannerHeight) < limitPosition)
	{
		if(position > bannerPosition)
			$("#banner").css("marginTop", (position - bannerPosition) + "px");
		else
			reset();
	}
}

function matchSize(responsive) 
{
	if(responsive.matches)
		$("#banner").hide();
	else
		$("#banner").show();
	reset();
}

$(document).ready(function(){
	$(this).scrollTop(0);
	matchSize(responsive);
	responsive.addListener(matchSize);
	reset();
});

$(window).scroll(function(){
	checkPosition();
});