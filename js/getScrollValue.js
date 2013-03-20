$(function() {
	$(window).scroll(function() {
		var value = $(this).scrollTop(); //スクロール値を取得
		$('#scrollValue').text(value);
	});
});