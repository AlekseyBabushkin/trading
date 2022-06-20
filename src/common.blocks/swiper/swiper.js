if (document.querySelector('.js-swiper') !== null) {
  document.querySelectorAll('.js-swiper').forEach((n) => {
    // eslint-disable-next-line no-new
    new Swiper(n.querySelector('.js-swiper-container'), {
      grid: {
        fill: 'column',
        columns: 2,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
          // slidesPerColumn: 3,
          // slidesPerColumnFill: 'column',
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
          // slidesPerColumn: 3,
          // slidesPerColumnFill: 'column',
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      },
      navigation: {
        nextEl: '.js-swiper-next',
        prevEl: '.js-swiper-prev',
      },
    });
  });
}
