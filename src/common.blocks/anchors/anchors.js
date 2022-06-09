import getId from '@/helpers/getId';
import getOffset from '@/helpers/getOffset';

const anchors = document.querySelectorAll('.anchor-link');

anchors.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.closest('a[href^="#"]');
    const targetSection = document.getElementById(getId(target));
    window.scrollTo({
      top: targetSection.offsetTop - getOffset('.header'),
      behavior: 'smooth',
    });
  });
});
