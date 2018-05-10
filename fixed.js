var position, bannerPosition, limitPosition, velocity;
var MAX_WIDTH = 1024;
var responsive = window.matchMedia("(max-width: " + MAX_WIDTH + "px)")
var scrollDirection = Object.freeze({"none":0, "down":1, "up":2})

function resetPositionElements()
{
	bannerPosition = $("#banner").offset().top;
	limitPosition = $("#limit").offset().top;
	position = $(this).scrollTop();
}

function getVelocity()
{
	return($(window).scrollTop() - position);
}

function isScrolling()
{
	velocity = getVelocity();
	position = $(window).scrollTop();
	if(velocity > 0)
		return(scrollDirection.down);
	if(velocity < 0)
		return(scrollDirection.up);
	if(velocity == 0)
		return(scrollDirection.none);
}

function bannerScroll()
{
	if(position <= bannerPosition)
	{
		$("#banner").css("marginTop",0);
	}
	if(position > bannerPosition)
	{
		if(position < (limitPosition-$("#banner").height()))
			$("#banner").css("marginTop",(position-bannerPosition)+"px");
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
	resetPositionElements();	
});

$(window).resize(function(){
	matchSize(responsive);
	responsive.addListener(matchSize);	
});

$(window).scroll(function(){
	isScrolling();
	bannerScroll();
});