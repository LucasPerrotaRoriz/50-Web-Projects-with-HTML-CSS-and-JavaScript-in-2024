const menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  console.log('test');
  container.classList.toggle("change");
});

navList.addEventListener("click", (e) => {
  const el = e.target.parentNode;

  if (el.classList[0] === "nav-link") {
    el.nextElementSibling.classList.toggle("change");
    el.classList.toggle("change");
  }
});
