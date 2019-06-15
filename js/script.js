$(function () {

	'use strict';

	// For Statistics Counter
	$('.count').countTo();

	// Calculate Slider Height
	var winH = $(window).height(),
		uppH = $('.upper-bar').innerHeight(),
		navH = $('.navbar').innerHeight();
		// Here we make the images to be the same size as the slider in the width and height
		$('.slider, .carousel-item, .ceo-slider').height(winH - (uppH + navH));

		/* Images */
		$('.features ul li').on('click', function() {
			$(this).addClass('active').siblings().removeClass('active');
			if ($(this).data('class') === '.all') {
				$('.features .feat-img img').css('opacity', '1');
			} else {
				$('.features .feat-img img').css('opacity', '0.1');
				$($(this).data('class')).css('opacity', 1);
			}
		});
});