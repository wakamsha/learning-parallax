$(function() {
	var section2PosTop = $('#section2').offset().top;
	var section3PosTop = $('#section3').offset().top;
	var ashPosTop = $('#sectionAshColor').offset().top;

	$(window).scroll(function() {
		var value = $(this).scrollTop(); //スクロール値を取得
		$('#scrollValue').text(value);

		$('#area1').css('background-position-y', value);

		if (value > section2PosTop) {
			$('#section2').css('background-position-y', value - section2PosTop);
		} else {
			$('#section2').css('background-position-y', 'top');
		}

		if (value > section3PosTop) {
			$('#section3').css('background-position-y', (value - section3PosTop)*2);
		} else {
			$('#section3').css('background-position-y', 'top');
		}

		if (value > ashPosTop) {
			var section4Top = value - ashPosTop - 800;
			$('#section4').css('background-position-y', section4Top);
		} else {
			$('#section4').css('background-position-y', -200);
		}
	});
});