$(function() {

    $(document).ready(function() {
      var mHtml = $("html");
      var page = 1;
      mHtml.animate({scrollTop : 0},10);
      var scrollOffset = $('.top').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.top').addClass('active')
        }
        else {
          $('.top').removeClass('active');
        }

      });
    });
  });
