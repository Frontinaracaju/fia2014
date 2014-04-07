$(document).ready(function() {

/*------ Parallax ------*/ 
// init controller
controller = new ScrollMagic({vertical: true}); 

// build tween
var tween = new TimelineMax ()
	.add([
		TweenMax.fromTo(".wrapper2 .bgfogo", 1, {top: -195,scale: 0.90}, {top: -285,scale: 1, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper2 #logohtml", 1, {top: -150}, {top: -275, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper2 .css3", 1, {left: -120, top: 0}, {left: -250, top: -75, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper2 .guitar", 1, {left: 422, top: -260}, {left: 572, top: -350, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper2 .logofia1", 1, {top:600}, {top: 0, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper2 .logofia2", 1, {top: 800}, {top: 312, ease: Bounce.easeNone}),
		TweenMax.fromTo(".wrapper2 .iconejs", 1, {top: 355}, {top: 515, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper2 .bgcode", 1, {scale: 0.4}, {scale: 1, ease: Bounce.easeNone}),
			  
	]);
	
// build tween 2
var tween_2 = new TimelineMax ()
	.add([
		TweenMax.fromTo(".wrapper3 .escudo", 1, {top: 90}, {top: -30, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper3 .camera", 1, {top: 290}, {top: 388, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper3 .imggaleria", 1, {scale: 0.85}, {scale: 1, ease: Linear.easeNone}),
			  
	]);
	
// build tween 3
var tween_3 = new TimelineMax ()
	.add([
		TweenMax.fromTo(".wrapper4 .raio1", 1, {top: 120}, {top: -25, ease: Bounce.easeNone}),
		TweenMax.fromTo(".wrapper4 .raio2", 1, {bottom: 85}, {bottom: -35, ease: Linear.easeNone}),
		TweenMax.fromTo(".wrapper4 .raio3", 1, {bottom: 205}, {bottom: 45, ease: Bounce.easeNone}),
		TweenMax.fromTo(".wrapper4 .raio4", 1, {top: 350}, {top: 190, ease: Linear.easeNone}),
			  
	]);

// build scene
var scene = new ScrollScene({triggerElement: ".wrapper1", duration: $(window).width()})
				.setTween(tween)
				.addTo(controller);
				
var scene = new ScrollScene({triggerElement: ".wrapper2", duration: $(window).width()})
.setTween(tween_2)
.addTo(controller);

var scene = new ScrollScene({triggerElement: ".wrapper3", duration: $(window).width()})
.setTween(tween_3)
.addTo(controller);

// show indicators (requires debug extension)
scene.addIndicators();


/*------ Script Placeholder ------*/ 
	 if(!Modernizr.input.placeholder){

	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});

}


/*------ Iframe Z-index ------*/ 
$('iframe').each(function(){
	  var url = $(this).attr("src");
	  var char = "?";
	  if(url.indexOf("?") != -1){
			  var char = "&";
	   }
	
	  $(this).attr("src",url+char+"wmode=transparent");
});

Shadowbox.init({
    handleOversize: "drag",
    modal: true
});

});