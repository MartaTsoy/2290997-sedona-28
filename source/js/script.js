const pageHeader = document.querySelector('.page-header');
const navToggle = document.querySelector('.navigation__toggle');

pageHeader.classList.remove('no-js');
navToggle.addEventListener('click', () =>  pageHeader.classList.toggle('is-open'));
