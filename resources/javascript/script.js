$(document).ready(function() {
    
    /*------ Button-scroll-------- */
    
    $('.js--scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
});
    
    $('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
});
    
    /*--------Navi-------*/
    
    // Select all links with hashes [copied from CSS tricks]
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
              scrollTop: target.offset().top
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
    
    /*--------Animation-------*/
    
   /* $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addclass('animated fadeIn');
    }
    );
    
      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addclass('animated fadeInUp');
    }
    );
    
      $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addclass('animated fadeIn');
    }
    );
    
      $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addclass('animated pulse');
    }
    );*/
    
    
    
});
