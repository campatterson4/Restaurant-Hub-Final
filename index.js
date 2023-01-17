///// NAV
const header = document.querySelector('header');

function nav() {
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

window.addEventListener('scroll', nav);

///// MAIN SCROLL REVEAL
let reveal = ScrollReveal({
    duration: 2500,
    distance: "60px"
});

reveal.reveal(".heading", {origin: "top"});
reveal.reveal(".sub-heading", {delay: 450});