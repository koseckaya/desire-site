$(function () {


    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    })

    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay:true
    });

    $('.article-slider__box').slick({ 
     
         prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-salider-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-salider-right.svg" alt="arrow"></button>'
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        dots: true,
        arrows: false,
        slidesToScroll:10
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
})

