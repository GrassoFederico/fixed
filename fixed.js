var position, bannerPosition, limitPosition, bannerHeight;
var MAX_WIDTH = 1024;
var responsive = window.matchMedia("(max-width: " + MAX_WIDTH + "px)");

function getPosition()
{
	return($(this).scrollTop());
}

function reset()
{
	position = getPosition();
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
	}
}

function matchSize(responsive) 
{
	if(responsive.matches)
		$("#banner").hide();
	else
		$("#banner").show();
}

$(window).ready(function(){
	matchSize(responsive);
	responsive.addListener(matchSize);
	reset();
});

$(window).scroll(function(){
	checkPosition();
});