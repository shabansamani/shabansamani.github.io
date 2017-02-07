jQuery(document).ready(function() { 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {
            $('#scroll-to-top').fadeIn(300);
        }
        else {
            $('#scroll-to-top').fadeOut(300);
        }
    });

    $('#scroll-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, "slow");
    });
});