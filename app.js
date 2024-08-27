const nav = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
});
