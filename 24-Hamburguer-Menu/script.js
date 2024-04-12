const hamburguer = document.querySelector('.hamburguer-menu');
const navigation = document.querySelector('.navigation');

hamburguer.addEventListener('click', () => {
    navigation.classList.toggle('change');
})

