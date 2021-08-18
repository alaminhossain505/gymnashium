// banner slider
$('.banner-slider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
});

// video pop up 
$('.venobox').venobox();

// testimonial slider
$('.t-slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

// counterup js 
$('.counter').counterUp({
    delay: 20,
    time: 1500,
});


// brand slider 

$('.brand-slider').slick({
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<i class="fas fa-chevron-left prev-btn"></i>',
    nextArrow: '<i class="fas fa-chevron-right next-btn"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

});


// colour plate js

$('.color-plate .color-icon').on('click', function () {
    $('.color-plate').toggleClass('color-plate-pos');
});

$('.color-plate ul .green').on('click', function () {
    $('body').addClass('green').removeClass('blue').removeClass('pink').removeClass('orange');
});

$('.color-plate ul .blue').on('click', function () {
    $('body').addClass('blue').removeClass('green').removeClass('pink').removeClass('orange');
});

$('.color-plate ul .pink').on('click', function () {
    $('body').addClass('pink').removeClass('blue').removeClass('green').removeClass('orange');
});

$('.color-plate ul .orange').on('click', function () {
    $('body').addClass('orange').removeClass('blue').removeClass('graan').removeClass('pink');
});
