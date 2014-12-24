// =============================================================================

// APP JS
// Property of Josh Beveridge

// =============================================================================

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Touch Response ==============================================================

	$('.click').click(function() {

		var clickDimension = $('.click-response').outerHeight() / 2;
		var topOffset = $(this).offset().top;

		$(this).find('.click-response').css('position', 'absolute').css('top', event.pageY - topOffset - clickDimension).css('left', event.pageX - clickDimension);
		$(this).find('.click-response').addClass('active clicked');
		setTimeout(function() {
			$('.clicked').removeClass('active clicked');
		}, 200);

	});
