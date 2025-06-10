$('#owl-carousel1').owlCarousel({
    loop: true,
    margin: 0,
        //default settings:
autoplay:false,
autoplayTimeout:2000,
autoplayHoverPause:false,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});