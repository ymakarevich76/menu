// $('.header__nav .nav__item > a[href*="#"]').on('click', function () {

//   let href = $(this).attr('href');

//   $('html, body').animate({
//     scrollTop: $(href).offset().top - 70
//   });
//   return false;
// });

jQuery(function ($) {

  const section = $('.catalog__block'),
    nav = $('.header__nav .nav__list'),
    navHeight = nav.outerHeight(); // получаем высоту навигации

  // поворот экрана
  window.addEventListener('orientationchange', function () {
    navHeight = nav.outerHeight();
  }, false);

  $(window).on('scroll', function () {
    const position = $(this).scrollTop();

    section.each(function () {
      const top = $(this).offset().top - navHeight - 50,
        bottom = top + $(this).outerHeight();

      if (position >= top && position <= bottom) {
        nav.find('a').removeClass('active');
        section.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    const id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - navHeight - 40
    }, 1000);

    return false;
  });

});
