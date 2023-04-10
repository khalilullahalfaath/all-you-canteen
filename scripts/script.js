$(document).ready(function () {
  // save 
  var windowWidth = $(window).width();
  if (windowWidth < 992) {
    console.log(screen.width)
    $('nav').addClass('scrolled box-shadow');
  } else {
    $('.nav-link').addClass('white-text');

    $(window).scroll(function () {
      // save last scroll top so when page is refreshed the navbar wont changed to transparent if scrolled

      localStorage.setItem("location", $(this).scrollTop());
      if (localStorage.getItem("location") > 0) {
        $('nav').addClass('scrolled box-shadow');
        $('.nav-link').removeClass('white-text');
      } else {
        $('nav').removeClass('scrolled box-shadow');
        $('.nav-link').addClass('white-text');

      }


    });
  
  }

});