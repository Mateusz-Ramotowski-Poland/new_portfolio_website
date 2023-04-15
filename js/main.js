const burger = document.querySelector(".nav__burger");
burger.addEventListener("click", () => burger.classList.toggle("active"));
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    burger.classList.remove("active");
  }
});

const typedArea = document.querySelector(".hero__container__typed");
const typedTitles = typedArea.dataset.typed.split(".");
new Typed(".hero__container__typed", {
  strings: typedTitles,
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
});
