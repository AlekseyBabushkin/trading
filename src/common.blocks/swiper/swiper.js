if (document.querySelector('.js-swiper') !== null) {
  document.querySelectorAll('.js-swiper').forEach((n) => {
    // eslint-disable-next-line no-new
    new Swiper(n.querySelector('.js-swiper-container'), {
      slidesPerView: 4,
      spaceBetween: 32,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'row',
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerColumn: 3,
          slidesPerColumnFill: 'column',
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerColumn: 3,
          slidesPerColumnFill: 'column',
        },
        996: {
          slidesPerView: 2,
          spaceBetween: 15,
          slidesPerColumn: 2,
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
