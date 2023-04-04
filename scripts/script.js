$(document).ready(function(){
    var windowWidth = $(window).width();
    if (windowWidth < 768){
        console.log(screen.width)
        $('nav').addClass('scrolled');
        return;
    }else{
        $('.nav-link').addClass('white-text');

        $(window).scroll(function() {
                if ($(this).scrollTop() > 0) {
                    $('nav').addClass('scrolled');
                    $('.nav-link').removeClass('white-text');
                  } else {
                    $('nav').removeClass('scrolled');
                    $('.nav-link').addClass('white-text');
            
                  }
            
    
          });
    }

      
  });