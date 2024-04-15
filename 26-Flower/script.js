const petals = document.querySelectorAll('.petal');

petals.forEach((petal, idx) => {
    petal.style.transform = `rotateZ(${30 * idx}deg)`;
});