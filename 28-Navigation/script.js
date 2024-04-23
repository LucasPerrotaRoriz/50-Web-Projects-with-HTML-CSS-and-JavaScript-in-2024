const dotsBtn = document.querySelector('.dots-btn');
const container = document.querySelector('.container');

dotsBtn.addEventListener('click', () => {
    container.classList.toggle('change');
})
