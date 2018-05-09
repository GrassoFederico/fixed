var offset = 15;
var finalOffset = 0;
var originOffset = 0;

$(window).ready(function(){
	originOffset = $("#banner").offset().top;
});

$(window).scroll(function(){
	console.log($(this).scrollTop() + " " + $("#banner").offset().top);
	if($(this).scrollTop() < finalOffset)
	{
		if($(this).scrollTop() > originOffset)
		{
			offset -= 100;
		}
		else
		{
			offset = 0;
		}
	}
	if($(this).scrollTop() > $("#banner").offset().top)
	{
		finalOffset = $("#banner").offset().top;
		offset += 100;
	}
	$("#banner").css("marginTop",offset + "px");
});