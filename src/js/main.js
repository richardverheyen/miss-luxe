$(document).ready(function() {

  PAGE = $('body').attr('id');

  // Mobile navigation
  var showingMobileNav = false;
  $('.menu #trigger').on('click', function() {
    if (showingMobileNav) {
      $('header .menu').removeClass('dropdown');
      $('header>div>a').attr('href', '/');
      showingMobileNav = false;
    } else {
      $('header .menu').addClass('dropdown');
      $('header>div>a').attr('href', '');
      showingMobileNav = true;
      $('html, body').animate({
        scrollTop: 0
      }, 200);
      return showingMobileNav;
    }
  });

  $('main').on('click', function() {
    $('header .menu').removeClass('dropdown');
    $('header>div>a').attr('href', '/');
    showingMobileNav = false;
  });

  $(window).on('resize', function() {
    if ($('main').width() >= 901) {
      $('header .menu').removeClass('dropdown');
      $('header>div>a').attr('href', '/');
      showingMobileNav = false;
    }
  });

});
