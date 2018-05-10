var offset = 15;
var finalOffset = 0;
var originOffset = 0;
var limitOffset = 0;
var newPos = null;
var lastPos = null;
var delta = 0;
var istVelocity = 0;

function reset()
{
	$("#banner").css("marginTop",0);
	offset = 15;
	finalOffset = 0;
	originOffset = $("#banner").offset().top;
	limitOffset = $("#comments").offset().top;
}

function mouseVelocity()
{
	newPos = window.scrollY;
	delta = newPos -  lastPos;
	lastPos = newPos;
	return(Math.abs(delta));
}

$(window).ready(function(){
	reset();
});

$( window ).resize(function() {
	reset();
});

$(window).scroll(function(){
	istVelocity = mouseVelocity();
	if($(this).scrollTop() < finalOffset)
	{
		if($(this).scrollTop() > originOffset)
			offset -= istVelocity;
		else
			offset = 0;
	}
	if($(this).scrollTop() > $("#banner").offset().top)
	{
		if((($("#banner").offset().top + istVelocity) + $("#banner").height()) < limitOffset)
			offset += istVelocity;
		finalOffset = $("#banner").offset().top;
	}
	$("#banner").css("marginTop",offset + "px");
});