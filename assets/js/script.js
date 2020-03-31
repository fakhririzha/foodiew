$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scrolled');
        $('.logo-nav').addClass('logo-nav-white');
    } else {
        $('nav').removeClass('scrolled');
        $('.logo-nav').removeClass('logo-nav-white');
    }
})

$(window).on('load', () => {
    // if (window.innerWidth > 416) {
    if (window.innerWidth > 576) {
        // $(".page-wrapper").toggleClass("toggled");
        // $(".sidebar-wrapper").toggleClass("max-z-index");
        $(".navbar-dark").toggleClass("max-z-index");
        // $(".bottom-nav").toggleClass("max-z-index-1");
        // document.getElementById("toggle-sidebar2").style = "display: none";
        // document.getElementById("toggle-sidebar").style = "opacity: 0";
        // document.getElementsByClassName("top-logo-nav").style = "display: none";
        // $(".top-logo-nav").hide();
        $('#randomizer').popover({
            trigger: 'manual'
        });
        $('#randomizer').popover('show');
        $(window).click(function() {
            $('#randomizer').popover('hide');
        })
    } else {
        $('#randomizer2').popover({
            trigger: 'manual'
        });
        $('#randomizer2').popover('show');
        $(window).click(function() {
            $('#randomizer2').popover('hide');
        })

        $('#reviewSingle').on('click', () => {
            $('#reviewMobile').modal('show');
        })
    }
});

$('button[data-target|="#writeReviewMobile"').on('click', () => {
    $('#reviewMobile').modal('hide');
})

$('.carousel').carousel({
    interval: 3500
})