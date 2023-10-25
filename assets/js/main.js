$(function() {
    $('.slide-one-item').owlCarousel({
        center: false,
        autoplayHoverPause: false,
        autoplay: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1000,
        pauseOnHover: true,
        dots: true,
        nav: true,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    $('#slide-button-1,#slide-button-2').click(function() {
        $('.slide-one-item').trigger('next.owl.carousel');
    });
});
