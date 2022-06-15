/* eslint-disable prefer-destructuring */
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const close = document.querySelector('.header__close');
const navItem = document.querySelectorAll('.nav__link');
const body = document.body;

burger.addEventListener('click', () => {
  body.classList.toggle('lock');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--visible');
});

close.addEventListener('click', () => {
  body.classList.toggle('lock');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--visible');
});

navItem.forEach((el) => {
  el.addEventListener('click', () => {
    body.classList.remove('lock');
    burger.classList.remove('burger--active');
    nav.classList.remove('header__nav--visible');
  });
});
