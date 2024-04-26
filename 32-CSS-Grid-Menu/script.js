const menu = document.querySelector('.hamburguer-menu');
const container = document.querySelector('.container');

menu.addEventListener('click', () => {
  container.classList.toggle('change');
});
