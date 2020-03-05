import Glide from '@glidejs/glide';

// Navigation Toggle
const navHamburger = document.getElementsByClassName('hamburger');
const navContent = document.getElementsByClassName('navigation__content');
navHamburger[0].addEventListener('click', () => {
  navHamburger[0].classList.toggle('hamburger--active');
  navHamburger[0].setAttribute(
    'aria-expanded',
    navHamburger[0].getAttribute('aria-expanded') === 'false' ? 'true' : 'false',
  );
  navContent[0].classList.toggle('navigation__content--active');
  navContent[0].classList.remove('navigation__content--initial');
  document.body.classList.toggle('disable-scroll');
});

const sprintElement = document.getElementById('processSprint');
const aboutElement = document.getElementById('aboutTeam');
if (sprintElement || aboutElement) {
  window.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide', {
      gap: 0,
      peek: { before: 0, after: 32 },
    }).mount();
  });
}
