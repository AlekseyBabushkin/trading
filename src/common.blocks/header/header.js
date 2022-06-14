const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const heightScreen = window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;
  if (scrollDistance > headerHeight * 2) {
    header.classList.add('header--hidden');
  } else {
    header.classList.remove('header--hidden');
  }
  // eslint-disable-next-line no-mixed-operators
  if (scrollDistance > heightScreen - headerHeight * 1.5) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
  console.log(scrollDistance);
});

console.log(heightScreen);
