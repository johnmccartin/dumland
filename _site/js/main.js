var fire = {};

$(document).ready(function(){
	setSizes();

	mouser();

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

 window.requestAnimFrame = (function(){
      return  function( callback ){
                window.setTimeout(callback, 1000);
              };
    })();


function mouser() {
  var $shadow = $('.splash h1');
  var shadowLimit = 1200;
  var moveEvent = ('ontouchstart' in document.documentElement) ? "touchmove" : "mousemove";
  var highlight = 'fff74c';
  
  (function animloop(){
    requestAnimFrame(animloop);
      
    $(window).bind(moveEvent, function(ev){
      var $this = $(this);
      var w      = $this.width();
      var h      = $this.height();
      var center = { x: w/2, y: h/2 };
    
      var evX = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientX : ev.clientX;
      var evY = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientY : ev.clientY;
      
      var shadowX = (center.x - evX) / 5;
      var shadowY = (center.y - evY) / 5;
      
      shadowX = (shadowX > shadowLimit) ? shadowLimit : shadowX;
      shadowX = (shadowX < shadowLimit*-1) ? shadowLimit*-1 : shadowX;
      shadowY = (shadowY > shadowLimit) ? shadowLimit : shadowY;
      shadowY = (shadowY < shadowLimit*-1) ? shadowLimit*-1 : shadowY;
      
      $shadow.css({ textShadow: Math.ceil(shadowX) + 'px '+ Math.ceil(shadowY) +'px '+ Math.abs(shadowX*shadowY)/80 +'px #'+highlight });
      
      
   });
  })();
}