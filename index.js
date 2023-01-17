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

reveal.reveal(".main-heading", {origin: "top", delay: 100});
reveal.reveal(".main-sub-heading", {delay: 550});

///// HOW TO SCROLL REVEAL
reveal.reveal(".how-to-heading", {origin: "right", delay: 100});
reveal.reveal(".how-to-text", {origin: "right", delay: 100});
reveal.reveal(".how-to-card", {origin: "left", delay: 100});