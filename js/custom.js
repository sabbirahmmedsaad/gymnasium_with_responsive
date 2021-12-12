$(document).ready(function(){
    'use strict'

    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots:true
    });

    //about video popup;
    $('.venobox').venobox();
    
    //testimonial slider;
    $('.testimonial-slider').slick({
        arrows : false,
        slidesToShow : 2,
        dots : true,
        responsive : [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
            },
        ]
    });

    //counterup;
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //brand slider;
    $('.brand-slider').slick({
        slidesToShow : 5,
        centerMode : true,
        centerPadding : '0px',
        prevArrow : '<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow : '<i class="fas fa-chevron-right slick-next next-Arrow"></i>',
        responsive :[
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
            },

            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
            },

            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
            },
        ]

    });

    //footermap;
    $('.location').location();

});