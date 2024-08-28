const nav = document.querySelector(".sidebar ul");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
});
