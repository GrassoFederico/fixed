var position, bannerPosition, limitPosition, velocity;
var scrollDirection = Object.freeze({"none":0, "down":1, "up":2})

function resetPositionElements()
{
	bannerPosition = $("#banner").offset().top;
	limitPosition = $("#limit").offset().top;
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
		if(position <= (limitPosition-$("#banner").height()))
			$("#banner").css("marginTop",(position-bannerPosition)+"px");
	}
}

$(window).ready(function(){
	resetPositionElements();
	position = $(window).scrollTop();
	velocity = 0;
});

$( window ).resize(function() {
	resetPositionElements();
});

$(window).scroll(function(){
	isScrolling();
	bannerScroll();
});