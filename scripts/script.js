$(document).ready(function () {
  // save 
  var windowWidth = $(window).width();
  if (windowWidth < 992) {
    $('nav').addClass('scrolled box-shadow');
  } else {
    console.log("masuk")
    $('.nav-link').addClass('white-text');

    // get the last scroll position from local storage
    var lastScrollPos = localStorage.getItem("last scroll position");
    
    // check if the last scroll position is greater than 0
    if (lastScrollPos > 0) {
      $('nav').addClass('scrolled box-shadow');
      $('.nav-link').removeClass('white-text');
    }
    
    $(window).scroll(function () {
      // save last scroll top so when page is refreshed the navbar wont changed to transparent if scrolled
      var lastPos = window.pageYOffset;
      localStorage.setItem("last scroll position", lastPos);
      var lastScrollPos = localStorage.getItem("last scroll position");
      if (lastScrollPos > 0) {
        $('nav').addClass('scrolled box-shadow');
        $('.nav-link').removeClass('white-text');
      } else {
        $('nav').removeClass('scrolled box-shadow');
        $('.nav-link').addClass('white-text');
      }
    });
  }
  $('#tabel-data').DataTable();




});
