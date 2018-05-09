var offset = 15;
var finalOffset = 0;
var originOffset = 0;
var limitOffset = 0;

function reset()
{
	$("#banner").css("marginTop",0);
	offset = 15;
	finalOffset = 0;
	originOffset = $("#banner").offset().top;
	limitOffset = $("#comments").offset().top;
}

$(window).ready(function(){
	reset();
});

$( window ).resize(function() {
	reset();
});

$(window).scroll(function(){
	if($(this).scrollTop() < finalOffset)
	{
		if($(this).scrollTop() > originOffset)
			offset -= 100;
		else
			offset = 0;
	}
	if($(this).scrollTop() > $("#banner").offset().top)
	{
		if((($("#banner").offset().top + 100) + $("#banner").height()) < limitOffset)
			offset += 100;
		finalOffset = $("#banner").offset().top;
	}
	$("#banner").css("marginTop",offset + "px");
});