$(function() {
    var top = $('#item1').offset().top; //y座標の初期値を取得
    $(window).scroll(function() {
        var value = $(this).scrollTop(); //スクロール値を取得
        $('#scrollValue').text(value);

        //取得したスクロール値を矩形のY座標値に指定
        //スクロール値を除算して移動距離に変化をつける
        $('#item1').css('top', top + value / 2);
        $('#item2').css('top', top + value / 4);
        $('#item3').css('top', top + value / 6);
        $('#item4').css('top', top + value / 8);
        $('#item5').css('top', top + value / 10);
        });
});