const menuIcon = document.querySelector('.toggle-menu');
const menu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.toggle-close');
const mobileLinks = document.querySelectorAll('.mobile-link');


menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
closeIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const links = menu.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => menu.classList.toggle('active'));
}