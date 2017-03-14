var fire = {};

$(document).ready(function(){
	setSizes();


	$('.content img').addClass('pure-img');


	$(window).load(function(){
		setSizes();
	
	});
	
	$(window).resize(function(){
		setSizes();
	
	});

	$(window).scroll(function(){
	
	});


});

function setSizes() {
	var winW = $(window).width();
	var winH = $(window).height();
	
	/*
	var postsW = $(".posts").width();
	var postsH = $(".posts").height();
	var $footer = $(".footer");
	
	if (postsH < winH) {
		
	} else {
		
	}
	*/
}