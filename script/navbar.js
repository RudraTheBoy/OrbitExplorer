const hamburger = document.querySelector('.hamburger');
const navitems = document.querySelector('.navitems');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navitems.classList.toggle('active');
})