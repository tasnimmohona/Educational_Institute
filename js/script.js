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


    var acwrapper = document.getElementById('ac-wrapper');
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    function PopUp(){
      yes.addEventListener("click",function(){
        yes.style.display=" https://tasnimmohona.github.io/Educational_Institute/"
       //  var d = new Date();
       //  var s = document.getElementById(+d.getDay());
       //   acwrapper.style.display = (acwrapper.style.display == 'block') ? 'none' : 'block';
      });
   
          
              
      no.addEventListener("click",function(){
        alert("Sorryy! you are not eligible");
   
     });

    }
            

  


 