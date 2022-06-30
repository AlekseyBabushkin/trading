const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;
  if (scrollDistance > 0) {
    header.classList.add('is-active');
  } else {
    header.classList.remove('is-active');
  }
});
