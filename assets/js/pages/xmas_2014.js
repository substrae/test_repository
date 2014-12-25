// =============================================================================

	// XMAS 2014 JS
	// Property of Josh Beveridge

// =============================================================================

// XMAS Card Scripts ===========================================================

	$(function() {

		function begin() {

			if($('.c01').hasClass('active')) {

				function reveal() {
					$('.button-next.white').addClass('active');
				}

				$('.c01').removeClass('active');
				$('.c02').addClass('active');

				setTimeout(reveal, 1500);

			}
			else {

				return false;

			}

		}

		setTimeout(begin, 2000);

	});

	// Button Clicks
	$('.button-next').click(function() {

		function buttonHide() {
			$('.button-next').css('display', 'none');
		}

		if($('.c01').hasClass('active')) {
			return false;
		}
		if($('.c02').hasClass('active')) {

			$('.c02').removeClass('active');
			$('.f01').addClass('active');
			$('.f02').addClass('active');
			$('.f03').addClass('active');
			$('.f04').addClass('active');
			$('.f05').addClass('active');
			$('.f06').addClass('active');
			$('.xmas').addClass('white');
			$('.c03').addClass('active');
			$('.mobile-flakes').addClass('active');
			$('.desktop-flakes').addClass('active');
			$('.click-response').removeClass('white');

			function nextDelayWhite() {
				$('.button-next.white').removeClass('active');
			}

			function nextDelayBlack() {
				$('.button-next.black').addClass('active');
			}

			setTimeout(nextDelayWhite, 1500);
			setTimeout(nextDelayBlack, 9000);

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
			if($('.xmas').hasClass('erin')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
			if($('.xmas').hasClass('stephen')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
			return false;
		}
		if($('.c08').hasClass('active')) {
			$('.c08').removeClass('active');
			$('.c09').addClass('active');
			if($('.xmas').hasClass('leah')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
			if($('.xmas').hasClass('jorrie')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
			return false;
		}
		if($('.c09').hasClass('active')) {
			$('.c09').removeClass('active');
			$('.c10').addClass('active');
			if($('.xmas').hasClass('julia')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
			if($('.xmas').hasClass('justin')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
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
			if($('.xmas').hasClass('mom')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
			return false;
		}
		if($('.c13').hasClass('active')) {
			$('.c13').removeClass('active');
			$('.c14').addClass('active');
			return false;
		}
		if($('.c14').hasClass('active')) {
			$('.c14').removeClass('active');
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
			$('.c18').addClass('active');
			return false;
		}
		if($('.c18').hasClass('active')) {
			$('.c18').removeClass('active');
			$('.c19').addClass('active');
			return false;
		}
		if($('.c19').hasClass('active')) {
			$('.c19').removeClass('active');
			$('.c20').addClass('active');
			if($('.xmas').hasClass('dad')) {
				$('.button-next').removeClass('active');
				setTimeout(buttonHide, 1000);
				return false;
			}
			return false;
		}

	});
