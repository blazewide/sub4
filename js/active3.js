$(function() {

    $(document).ready(function() {
      var mHtml = $("html");
      var page = 1;
      mHtml.animate({scrollTop : 0},10);
      var scrollOffset = $('html').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.section_inner').addClass('active3')
        }
        else {
          $('.section_inner').removeClass('active3');
        }
      });
    });
  });
