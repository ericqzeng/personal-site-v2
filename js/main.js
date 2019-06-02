$(window).on('load', function() { // preloader
    $('#sk-cube-grid').fadeOut(); // cube fadeoute
    $('#preloader').delay(500).fadeOut('slow'); //preloader container fadeout
    $('body').delay(500).css({
        'overflow': 'visible'
    }); //page body fadein

    $('.slick-carousel').slick('slickPlay');
})


$(document).ready(function() {
    $('#header').load('html/header.html');
    $('#preloader').load('html/preloader.html');

    $('.header').height($(window).height());

    $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: false,
        speed: 1500,
        dots: true,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        cssEase: 'ease-out',
        customPaging: function(slider, i) {
            return '<img src="img/landing/' + i + '.jpg">';
        },
    });

    $('.slick-carousel').slick('slickPause');
});
