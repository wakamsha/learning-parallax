$(function() {
	$(window).scroll(function() {
		var value = $(this).scrollTop(); //スクロール値を取得
		$('#scrollValue').text(value);

		var hoge1 = value * 0.001 + 0.5;
		if (hoge1 > 0.5) {
			$('#section1').css('transform', 'scale(' + hoge1 + ')');
		}

		if (hoge1 > 0.1) {
			$('#section2').css('transform', 'perspective(1000px) rotateY(' + value + 'deg)');
		}
		var hoge3 = 2 - value * 0.0009;
			$('#section3').css('transform', 'scale(' + hoge3 + ') rotate(' + value + 'deg)');

		var hoge4 = value * 0.0009;
		if (hoge4 <= 1) {
			$('#section4').css('opacity', hoge4);
		}
	});
});