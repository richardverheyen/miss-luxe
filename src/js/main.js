$(document).ready(function() {

  PAGE = $('body').attr('id');

  // Mobile navigation
  var showingMobileNav = false;
  $('#trigger').on('click', function() {
    if (showingMobileNav) {
      $('header .menu').removeClass('dropdown');
      showingMobileNav = false;
    } else {
      $('header .menu').addClass('dropdown');
      showingMobileNav = true;
      $('html, body').animate({
        scrollTop: 0
      }, 200);
      return showingMobileNav;
    }
  });

  console.log(showingMobileNav);
  if (showingMobileNav) {
    $('header>div>a').replaceWith('<a><img src="/assets/img/logo/missluxe-logo.svg" alt="" /></a>')
  }

  $('main').on('click', function() {
    $('header .menu').removeClass('dropdown');
    showingMobileNav = false;
  });

  $('header nav').siblings().on('click', function() {
    $('header .menu').removeClass('dropdown');
    showingMobileNav = false;
  });

});;
