// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Touch Response ==============================================================

	$('.click').on("touchStart click", function(event) {

		var clickDimension = $('.click-response').outerHeight() / 2;
		var topOffset = $(this).offset().top;

		$(this).find('.click-response').css('position', 'absolute').css('top', event.pageY - topOffset - clickDimension).css('left', event.pageX - clickDimension);
		$(this).find('.click-response').addClass('active clicked');
		setTimeout(function() {
			$('.clicked').removeClass('active clicked');
		}, 200);

	});

// Jer's Birthday Card =========================================================

	$('.button-next').click(function() {

		if($('.c01').hasClass('active')) {
			$('.c01').removeClass('active');
			$('.c02').addClass('active');
			return false;
		}
		if($('.c02').hasClass('active')) {
			$('.c02').removeClass('active');
			$('.c03').addClass('active');
			return false;
		}
		if($('.c03').hasClass('active')) {
			$('.c03').removeClass('active');
			$('.c04').addClass('active');
			return false;
		}
		if($('.c04').hasClass('active')) {
			$('.c04').removeClass('active');
			$('.c05').addClass('active');
			return false;
		}
		if($('.c05').hasClass('active')) {
			$('.c05').removeClass('active');
			$('.c06').addClass('active');
			return false;
		}
		if($('.c06').hasClass('active')) {
			$('.c06').removeClass('active');
			$('.c07').addClass('active');
			return false;
		}
		if($('.c07').hasClass('active')) {
			$('.c07').removeClass('active');
			$('.c08').addClass('active');
			return false;
		}
		if($('.c08').hasClass('active')) {
			$('.c08').removeClass('active');
			$('.w01').addClass('active');
			$('.pane-left').removeClass('active');
			$('.pane-right').removeClass('active');
			$('.button-next.black').removeClass('active');
			$('.button-next.white').addClass('active');
			$('.c09').addClass('active');
			return false;
		}
		if($('.c09').hasClass('active')) {
			$('.c09').removeClass('active');
			$('.pane-left').addClass('active');
			$('.pane-right').addClass('active');
			$('.button-next.white').removeClass('active');
			$('.button-next.black').addClass('active');
			$('.w01').removeClass('active');
			$('.w02').addClass('active');
			$('.c10').addClass('active');
			return false;
		}
		if($('.c10').hasClass('active')) {
			$('.c10').removeClass('active');
			$('.c11').addClass('active');
			return false;
		}
		if($('.c11').hasClass('active')) {
			$('.c11').removeClass('active');
			$('.c12').addClass('active');
			return false;
		}
		if($('.c12').hasClass('active')) {
			$('.c12').removeClass('active');
			$('.c13').addClass('active');
			return false;
		}
		if($('.c13').hasClass('active')) {
			$('.c13').removeClass('active');
			$('.pane-left').removeClass('active');
			$('.pane-right').removeClass('active');
			$('.button-next.black').removeClass('active');
			$('.button-next.white').addClass('active');
			$('.c14').addClass('active');
			return false;
		}
		if($('.c14').hasClass('active')) {
			$('.c14').removeClass('active');
			$('.pane-left').addClass('active');
			$('.pane-right').addClass('active');
			$('.button-next.white').removeClass('active');
			$('.button-next.black').addClass('active');
			$('.w02').removeClass('active');
			$('.w03').addClass('active');
			$('.c15').addClass('active');
			return false;
		}
		if($('.c15').hasClass('active')) {
			$('.c15').removeClass('active');
			$('.c16').addClass('active');
			return false;
		}
		if($('.c16').hasClass('active')) {
			$('.c16').removeClass('active');
			$('.c17').addClass('active');
			return false;
		}
		if($('.c17').hasClass('active')) {
			$('.c17').removeClass('active');
			$('.pane-left').removeClass('active');
			$('.pane-right').removeClass('active');
			$('.button-next.black').removeClass('active');
			$('.button-next.white').addClass('active');
			$('.c18').addClass('active');
			return false;
		}
		if($('.c18').hasClass('active')) {
			$('.c18').removeClass('active');
			$('.pane-left').addClass('active');
			$('.pane-right').addClass('active');
			$('.button-next.white').removeClass('active');
			$('.button-next.black').addClass('active');
			$('.w03').removeClass('active');
			$('.c19').addClass('active');
			return false;
		}
		if($('.c19').hasClass('active')) {
			$('.c19').removeClass('active');
			$('.c20').addClass('active');
			return false;
		}
		if($('.c20').hasClass('active')) {
			$('.c20').removeClass('active');
			$('.c21').addClass('active');
			return false;
		}
		if($('.c21').hasClass('active')) {
			$('.c21').removeClass('active');
			$('.c22').addClass('active');
			$('.button-next.black').removeClass('active');
			$('.button-next.black').addClass('hidden');
			$('.button-next.white').addClass('hidden');
			return false;
		}

	});
