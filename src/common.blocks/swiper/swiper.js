if (document.querySelector('.js-swiper') !== null) {
  document.querySelectorAll('.js-swiper').forEach((n) => {
    // eslint-disable-next-line no-new
    new Swiper(n.querySelector('.js-swiper-container'), {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerColumn: 3,
      slidesPerColumnFill: 'row',
      breakpoints: {
        576: {
          slidesPerView: 1.5,
          spaceBetween: 15,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'row',
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 26,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'row',
        },
      },
      navigation: {
        nextEl: '.js-swiper-next',
        prevEl: '.js-swiper-prev',
      },
    });
  });
}
