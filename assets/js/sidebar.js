jQuery(function($) {

    // Dropdown menu
    $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }

    });

    //toggle sidebar
    $("#toggle-sidebar").click(function() {
        $(".page-wrapper").toggleClass("toggled");
        $(".sidebar-wrapper").toggleClass("max-z-index");
        $(".navbar-dark").toggleClass("max-z-index-1");
        $(".bottom-nav").toggleClass("max-z-index-1");
    });

    $("#toggle-sidebar2").click(function() {
        $(".page-wrapper").toggleClass("toggled");
        $(".sidebar-wrapper").toggleClass("max-z-index");
        $(".navbar-dark").toggleClass("max-z-index-1");
        $(".bottom-nav").toggleClass("max-z-index-1");
    });

    //toggle sidebar overlay
    $("#overlay").click(function() {
        $(".page-wrapper").toggleClass("toggled");
        $(".sidebar-wrapper").toggleClass("max-z-index");
        $(".navbar-dark").toggleClass("max-z-index-1");
        $(".bottom-nav").toggleClass("max-z-index-1");

    });

    //switch between themes 
    var themes = "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";
    $('[data-theme]').click(function() {
        $('[data-theme]').removeClass("selected");
        $(this).addClass("selected");
        $('.page-wrapper').removeClass(themes);
        $('.page-wrapper').addClass($(this).attr('data-theme'));
    });

    // switch between background images
    var bgs = "bg1 bg2 bg3 bg4";
    $('[data-bg]').click(function() {
        $('[data-bg]').removeClass("selected");
        $(this).addClass("selected");
        $('.page-wrapper').removeClass(bgs);
        $('.page-wrapper').addClass($(this).attr('data-bg'));
    });

    // toggle background image
    $("#toggle-bg").change(function(e) {
        e.preventDefault();
        $('.page-wrapper').toggleClass("sidebar-bg");
    });

    // toggle border radius
    $("#toggle-border-radius").change(function(e) {
        e.preventDefault();
        $('.page-wrapper').toggleClass("border-radius-on");
    });

    //custom scroll bar is only used on desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".sidebar-content").mCustomScrollbar({
            axis: "y",
            autoHideScrollbar: true,
            scrollInertia: 300,
            // setLeft: "-100px"
        });
        $(".sidebar-content").addClass("desktop");

    }

    // autohide whene navbar signin clicked
    $('.signin').on('click', function(){
        $(".page-wrapper").toggleClass("toggled");
        $(".sidebar-wrapper").toggleClass("max-z-index");
        $(".navbar-dark").toggleClass("max-z-index-1");
        $(".bottom-nav").toggleClass("max-z-index-1");
    });
    $('.register').on('click', function(){
        $(".page-wrapper").toggleClass("toggled");
        $(".sidebar-wrapper").toggleClass("max-z-index");
        $(".navbar-dark").toggleClass("max-z-index-1");
        $(".bottom-nav").toggleClass("max-z-index-1");
    });
    $('.signout').on('click', function(){
        $(".page-wrapper").toggleClass("toggled");
        $(".sidebar-wrapper").toggleClass("max-z-index");
        $(".navbar-dark").toggleClass("max-z-index-1");
        $(".bottom-nav").toggleClass("max-z-index-1");
    });
});