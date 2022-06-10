const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const headerHeight = header.offsetHeight;
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;
  console.log(scrollDistance);

  if (scrollDistance >= heroHeight + headerHeight) {
    header.classList.add('header--fixed');
    hero.style.marginTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header--fixed');
    hero.style.marginTop = null;
  }
});
