$(document).ready(function (){
    
    /*Sticky navigation*/
   $('.js--section-about').waypoint(function(direction){
      if(direction == "down" ){
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
   }, {
       offset:'60px;'
   })
    
    /* Scroll animation */
    
    $('.js--scroll-to-profile').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top - 50 }, 1000);
    });
    
    /* Scroll nav-bar */
    $('.js--scroll-to-skills').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-skills').offset().top - 50 }, 1000);
    });
    
    $('.js--scroll-to-faq').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-faq').offset().top - 50 }, 1000);
    });
    
    $('.js--scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top - 50 }, 1000);
    });
    
});