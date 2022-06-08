const acc = document.querySelector('.accordion');

if (acc) {
  document.querySelectorAll('.accordion__trigger').forEach((accTrigger) => {
    accTrigger.addEventListener('click', () => {
      const parent = accTrigger.parentNode;
      const content = accTrigger.nextElementSibling;
      if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        content.style.maxHeight = null;
      } else {
        document.querySelectorAll('.accordion__item').forEach((accItem) => {
          accItem.classList.remove('open');
          accItem.querySelector('.accordion__content').style.maxHeight = null;
        });
        parent.classList.add('open');
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });
}
