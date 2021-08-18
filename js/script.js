const mobileMenuButton = document.querySelector('.menu-button');

mobileMenuButton.addEventListener('click', function () {
  const nav = document.querySelector('.nav');

  if (nav.classList.contains('nav__opened')) {
    nav.classList.remove('nav__opened');
    return;
  }

  nav.classList.add('nav__opened');
});
