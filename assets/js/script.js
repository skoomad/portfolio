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

// Contact form submission: obfuscate email in JS and open mailto when user submits
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (contactForm.querySelector('input[name="name"]') || {}).value || '';
        const fromEmail = (contactForm.querySelector('input[name="email"]') || {}).value || '';
        const phone = (contactForm.querySelector('input[name="phone"]') || {}).value || '';
        const subject = (contactForm.querySelector('input[name="subject"]') || {}).value || '';
        const message = (contactForm.querySelector('textarea[name="message"]') || {}).value || '';

        // Obfuscated email parts (not plain in HTML)
        const local = ['t','a','u','m','a','n','.','t','a','n','a','t','u','l','y'].join('');
        const domain = ['s','t','u','d','e','n','t','.','k','d','g','.','b','e'].join('');
        const to = local + '@' + domain;

        const mailSubject = subject || `Message from portfolio site (${name})`;
        const body = `Name: ${name}%0D%0AEmail: ${fromEmail}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`;

        // open mailto - this will open user's mail client
        const mailto = `mailto:${to}?subject=${encodeURIComponent(mailSubject)}&body=${body}`;
        window.location.href = mailto;
    });
}