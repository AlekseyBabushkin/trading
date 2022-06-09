const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = (getTop() * pathLength) / height - pathLength; // eslint-disable-line
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

window.addEventListener('scroll', () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add('active');
  } else {
    scrollUp.classList.remove('active');
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
