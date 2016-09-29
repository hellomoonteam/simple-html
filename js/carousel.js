$(document).ready(function() {
	var current = 0;

	$('a[data-action="next"]').click(function() {
		var newMargin;

		current += 1;
		newMargin = current * -100 + '%';

		$('.carousel .carousel_card:first-child').css('margin-left', newMargin);
	});
	$('a[data-action="back"]').click(function() {
		var newMargin;

		current -= 1;
		newMargin = current * -100 + '%';
		
		$('.carousel .carousel_card:first-child').css('margin-left', newMargin);
	});
});

