$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about').position().top) {
        $(".nav").fadeIn(400)
    }
})