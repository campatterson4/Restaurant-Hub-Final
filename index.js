///// NAV

const header = document.querySelector('header');

function nav() {
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

window.addEventListener('scroll', nav);