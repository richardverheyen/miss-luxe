$(document).ready(function() {

  PAGE = $('body').attr('id');

  // Mobile navigation
  var showingMobileNav = false;
  $('.menu #trigger').on('click', function() {
    if (showingMobileNav) {
      $('header').removeClass('dropdown');
      $('header>div>a').attr('href', '/');
      showingMobileNav = false;
    } else {
      $('header').addClass('dropdown');
      $('header>div>a').attr('href', '');
      showingMobileNav = true;
      $('html, body').animate({
        scrollTop: 0
      }, 200);
      return showingMobileNav;
    }
  });

  $('main').on('click', function() {
    $('header').removeClass('dropdown');
    $('header>div>a').attr('href', '/');
    showingMobileNav = false;
  });

  $(window).on('resize', function() {
    if ($('main').width() >= 901) {
      $('header').removeClass('dropdown');
      $('header>div>a').attr('href', '/');
      showingMobileNav = false;
    }
  });

  // Make any hashtag link scroll with animation to element with matching ID
  // Example: <a href="#features"> will scroll to element with ID #features
  // Commonly found in the #hero of each page
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
