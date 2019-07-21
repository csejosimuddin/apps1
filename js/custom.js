
// Custom js INDEX Table

// 01.preloader js
// 02.Closes responsive menu when a scroll link is clicked
// 03.Banner slider js
// 04.Testimonial slider
// 05.counter up js
// 06.swiper Slider
// 07.sticky nav
// 08.animation scroll js
// 09.back to top



(function ($) {

    'use strict';
    var windo = $(window);

     // loading setting a timeout
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3500);


    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

// Banner slider js

  $('.slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots:true,
        arrows: true,
        prevArrow: '.angle-left',
        nextArrow: '.angle-right',
        autoplaySpeed: 2000,
    });

// Testimonial slider

$('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots:true,
        arrows: true,
        prevArrow: '.angle-left',
        nextArrow: '.angle-right',
        autoplaySpeed: 2000,
    });

 // counter up js
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



// swiper Slider
        var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          loop: !0, 
          mode:'horizontal',
          grabCursor: true,
          centeredSlides: !0,
          parallax: !0,
          grabCursor: true,
          effect: 'coverflow',
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate:  -5, 
            stretch: 0,
            depth: 90,
            modifier: 1,
            slideShadows : !1,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: !0
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });


        // sticky nav
    /*----------------------------
       START - Menubar scroll animation
       ------------------------------ */
       $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 500){
        $(".header-bottom").addClass("sticky");
    }
    else{
        $(".header-bottom").removeClass("sticky");
    }
    if(scrolling > 400){
        back2top.fadeIn(800);
    }
    else {
        back2top.fadeOut(800);
    }
        
        
});


  //animation scroll js click a smoth scroll button a click a
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });


 
   //    back to top jquery section
    
    var html_body = $('html, body');
    var back2top = $(".back-to-top");
    back2top.click(function(){
       html_body.animate({scrollTop:0}, 1000); 
    });
 







})(jQuery);