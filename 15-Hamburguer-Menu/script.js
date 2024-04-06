const hamburguer = document.querySelector('.hamburguer-menu');
const navbar = document.querySelector('.navbar');

hamburguer.addEventListener('click', () => {
    navbar.classList.toggle('change')
})
