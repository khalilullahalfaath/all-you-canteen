$(document).ready(function(){
    var windowWidth = $(window).width();
    if (windowWidth < 700){
        console.log(screen.width)
        $('nav').addClass('scrolled');
        return;
    }else{
        $('.nav-link').addClass('white-text');
        $('.navbar-text').addClass('white-text');
        $(window).scroll(function() {
                if ($(this).scrollTop() > 0) {
                    $('nav').addClass('scrolled');
                    $('.nav-link').removeClass('white-text');
                    $('.navbar-text').removeClass('white-text');
                  } else {
                    $('nav').removeClass('scrolled');
                    $('.nav-link').addClass('white-text');
                    $('.navbar-text').addClass('white-text');
                  }
            
    
          });
    }

      
  });