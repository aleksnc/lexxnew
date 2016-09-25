$(document).ready(function(){
    $('.reviews__carusel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:4
            },
        }
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= '50') {
            $(".main-nav__wrapper").css("background","rgba(158, 178, 205, 0.80)");
        } else {
            $(".main-nav__wrapper").css("background","none");
        }
    });

});