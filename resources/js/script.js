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
    
    $('.js-mobile-nav i').click(function(event){
       var nav = $('.js-main-nav');
        var icon = $('.js-mobile-nav i'); 
    
        //I don't believe this method has all I wanted
        nav.slideToggle(200);
        if(icon.hasClass('icon ion-md-menu')){
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        }else{
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
    });
    
    
    /* Scroll animation */
    
    $('.js--scroll-to-profile').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top - 50 }, 1000);
    });
    
    
    // better way to smoth scrolling 
    
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 50
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
});