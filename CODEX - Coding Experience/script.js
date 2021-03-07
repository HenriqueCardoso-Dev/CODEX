$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) 
            $('.navbar').addClass("sticky");
        else 
            $('.navbar').removeClass("sticky");
    });

    /*Script para alternar a navbar - Script to change the navbar*/
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});