$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scrolled');
        $('.logo-nav').addClass('logo-nav-white');
    } else {
        $('nav').removeClass('scrolled');
        $('.logo-nav').removeClass('logo-nav-white');
    }
})


$(window).keydown((event) => {
    if (event.keyCode === 27) {
        $('#writeReview').modal('hide');
        $('#writeReviewMobile').modal('hide');
        $('#reviewMobile').modal('hide');
        $('#detailFood').modal('hide');
        $('#detailDrink').modal('hide');
    }
})

$(window).on('load', () => {
    if (window.innerWidth > 576) {
        $(".navbar-dark").toggleClass("max-z-index");
        $('#randomizer').popover({
            trigger: 'manual'
        });
        $('#randomizer').popover('show');
        $(window).click(function() {
                $('#randomizer').popover('hide');
            })
            // $('#randomizer').on('click', (event) => {
            //     event.preventDefault();
            //     $('.random-animation').addClass('show');
            // }).setTimeout(() => {
            //     window.location = "/profile_cafe.html";
            // }, 2500);

        document.getElementById('randomizer').addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('random-animation').classList.add('show');

            setTimeout(() => {
                window.location = "profile_cafe.html";
            }, 2500);
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

$('button[data-target|="#writeReview"').on('click', () => {
    $('#detailFood').modal('hide');
    $('#detailDrink').modal('hide');

})

$('.carousel').carousel({
    interval: 3500
})

$(".ratings").rating({
    "click": function(e) {
        // OUTPUT Nilai ratingnya
        console.log(e.stars);
    }
});