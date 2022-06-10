if (document.querySelector('.js-swiper') !== null) {
  document.querySelectorAll('.js-swiper').forEach((n) => {
    // eslint-disable-next-line no-new
    new Swiper(n.querySelector('.js-swiper-container'), {
      navigation: {
        nextEl: '.js-swiper-next',
        prevEl: '.js-swiper-prev',
      },
      slidesPerView: 4,
      spaceBetween: 32,
    });
  });
}
