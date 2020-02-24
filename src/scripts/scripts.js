// Navigation Toggle
const navHamburger = document.getElementsByClassName('hamburger');
const navContent = document.getElementsByClassName('navigation__content');
navHamburger[0].addEventListener('click', () => {
  navHamburger[0].classList.toggle('hamburger--active');
  navContent[0].classList.toggle('navigation__content--active');
});
