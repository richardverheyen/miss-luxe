$(document).ready(function() {

  PAGE = $('body').attr('id');

  // Mobile navigation
  var showingMobileNav = false;
  $('header .trigger').on('click', function() {
    if (showingMobileNav) {
      $('header .menu').removeClass('dropdown');
      showingMobileNav = false;
    } else {
      $('header .menu').addClass('dropdown');
      showingMobileNav = true;
      $('html, body').animate({
        scrollTop: 0
      }, 200);
    }
  });

  // Close mobile nav on click of background
  $('#hero').on('click', function() {
    $('header .menu').removeClass('dropdown');
    // 2 = false;
  });

});
