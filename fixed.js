var offset = 65;
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
	{
		$("#banner").addClass("position-absolute");
		if(dirOffset < offset)
		{
			$("#banner").css("top",offset + "px");
			offset += 100;
			//dirOffset = offset;
		}
		else
			offset -= 100;
	}
	else
		$("#banner").removeClass("position-absolute");
});