$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scrolled');
        $('.logo-nav').addClass('logo-nav-white');
    } else {
        $('nav').removeClass('scrolled');
        $('.logo-nav').removeClass('logo-nav-white');
    }
})

// $(window).on('load', function() {
//     $(window).scrollTop(0);
// });

$('.carousel').carousel({
    interval: 3500
})