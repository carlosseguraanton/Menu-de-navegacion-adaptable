$(document).ready(main);
 
let visible = false;
 
function main() {

	$('.menu_bar').click(function() {
 
		if(!estaVisible()) {

			$('nav').animate({

				left: '0%'

			});

			visible = true;

		} else {

			$('nav').animate({

				left: '-80%'

			});

			visible = false;
		}

	});
 
};

function estaVisible() {

	if (visible == false) {

		return false;

	} else {

		return true;
		
	}

};