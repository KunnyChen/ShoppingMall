/*--------------返回顶部----------------*/
$(document).ready(function () {
    var backButton = $('.back-to-top');
    var topText = $('.back-to-top-text');
    backButton.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        $(this).animate({
            top: 0
        }, function () {
            var em = $(this);
            em.css("opacity", 0);
            em.animate({
                top: "85%"
            });
            setTimeout(function (e) {
                em.css("opacity", 1);
            }, 500)
        });
    });
    $(window).on('scroll', function () {
        console.log('back');
        if ($(window).scrollTop() > $(window).height() * 0.4) {
            backButton.fadeIn();
            topText.show();
        } else {
            backButton.fadeOut();
            topText.hide();
        }
    });
    $(window).trigger('scroll');
});