$(document).ready(function(){

	$(window).scroll(function () {

		if ($(window).scrollTop() > 525) {
			$('#nav').addClass('nav_fixed');
		}
		if ($(window).scrollTop() < 524) {
			$('#nav').removeClass('nav_fixed');
		}
	});

	$('#js-mobile-nav-open-btn').click(function(){
		$('body').addClass('overflow-hidden');
		$('#js-mobile-nav').addClass('open');
	});
	$('#js-mobile-nav__close-btn').click(function(){
		$('body').removeClass('overflow-hidden');
		$('#js-mobile-nav').removeClass('open');
	});

	$('.js-slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true
	});

	$('.js-article__slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true
	});

	$('a[href*="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});

});