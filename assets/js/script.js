let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const top = window.scrollY;
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector("header nav a[href*='" + id + "']");
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        navbar.classList.toggle('active');
    });
}