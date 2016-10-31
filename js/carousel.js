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
		
		// Increment/Decrement the current card 
		if (direction === 'next'){
			current += 1;
		} else if (direction === 'back') {
			current -= 1;
		}

		// If we are going from last to first card
		if (current == total){

			// Copy first card to the end of strip
			$('.carousel_strip .carousel_card:first-child').clone().appendTo('.carousel_strip');
			
			// Move cards back to start position after animation between last and first
			setTimeout(function(){
				current = 0;
				$('.carousel .carousel_strip').css('left', '0').addClass('no-animate');
				$('.carousel .carousel_card:last-child').remove();
				setTimeout(function(){
					$('.carousel .carousel_strip').removeClass('no-animate')
				}, 10);
			}, 333);

		} else if (current == -1) {
			// Copy last card to the begining of strip
			$('.carousel_strip .carousel_card:last-child').clone().appendTo('.carousel_strip').addClass('is-begining');
			
			// move back to start position after animation
			setTimeout(function(){
				current = total-1;

				$('.carousel .carousel_strip').css('left', current * -100 + '%').addClass('no-animate');
				$('.carousel_strip .carousel_card.is-begining').remove();
				setTimeout(function(){
					$('.carousel .carousel_strip').removeClass('no-animate')
				}, 10);
			}, 333);
		}

		// Move the card strip
		newMargin = current * -100 + '%';
		$('.carousel .carousel_strip').css('left', newMargin);

				setTimeout(function(){$('.carousel .carousel_card:first-child').removeClass('no-animate')}, 50);
			}, 333);
		}

		// Move the card strip
		$('.carousel .carousel_card:first-child').css('margin-left', current * -100 + '%');
	}
});

