/*
	Carousel JS

	requirements...
		- loop the cards
		- add dots
		- add images
*/

$(document).ready(function() {
	var current = 0;
	var total = $('.carousel .carousel_card').length;

	// Call cardNav
	$('a[data-action="next"]').click(function() {
		cardNav('next');
	});
	$('a[data-action="back"]').click(function() {
		cardNav('back');
	});


	function cardNav(direction) {
		var newMargin;
		
		// Increment/Decrement the current card 
		if (direction === 'next'){
			current += 1;
		} else if (direction === 'back') {
			current -= 1;
		}

		// If we are on the last card
		if (current == total){

			// Copy first card to the end of strip
			$('.carousel_strip .carousel_card:first-child').clone().attr('style', '').appendTo('.carousel_strip');
			
			// move back to start position after animation
			setTimeout(function(){
				current = 0;
				$('.carousel .carousel_strip').css('left', '0').addClass('no-animate');
				$('.carousel .carousel_card:last-child').remove();
				setTimeout(function(){
					$('.carousel .carousel_strip').removeClass('no-animate')
				}, 50);
			}, 333);

		} else if (current == -1) {
			//$('.carousel .carousel_card:last-child').addClass('is-end');
		}

		// Move the card strip
		newMargin = current * -100 + '%';
		$('.carousel .carousel_strip').css('left', newMargin);

	}
});

