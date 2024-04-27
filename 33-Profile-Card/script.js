const cardBtn = document.querySelector('.card-btn');
const container = document.querySelector('.container');

cardBtn.addEventListener('click', () => {
  container.classList.toggle('change');
})