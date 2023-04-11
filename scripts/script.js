$(document).ready(function () {
  // save 
  var windowWidth = $(window).width();
  if (windowWidth < 768) {
    console.log(screen.width)
    $('nav').addClass('scrolled');
  } else {
    $('.nav-link').addClass('white-text');

    $(window).scroll(function () {
      // save last scroll top so when page is refreshed the navbar wont changed to transparent if scrolled
      localStorage.setItem("location", $(this).scrollTop());
      if (localStorage.getItem("location") > 0) {
        $('nav').addClass('scrolled');
        $('.nav-link').removeClass('white-text');
      } else {
        $('nav').removeClass('scrolled');
        $('.nav-link').addClass('white-text');

      }
    });
  }
  $('#tabel-data').DataTable();




});




