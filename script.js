const swup = new Swup();
const hamburger = document.querySelector(".nav .hamburger");
const mobile_menu = document.querySelector(".nav-menu ul");
const menu_item = document.querySelectorAll(".nav-menu ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
