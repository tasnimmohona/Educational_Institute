window.addEventListener("scroll",function(){
 var header = document.querySelector(".header-area");
 header.classList.toggle("sticky",window.scrollY > 0);
});

//preloader
$(window).on("load", function() {


    $(".preloader").fadeOut();
});

//counter
jQuery(document) .ready(function($){
$('.counter').counterUp({
 delay:30,
 time:2500
});
});