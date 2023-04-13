const burger = document.querySelector(".nav__burger");

burger.addEventListener("click", () => burger.classList.toggle("active"));

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    burger.classList.remove("active");
  }
});
