// JavaScript Document //

/* ページトップへ戻るボタンの設定 */
$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '25px'}, 700); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 700); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});
