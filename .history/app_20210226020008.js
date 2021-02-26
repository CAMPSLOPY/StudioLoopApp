const burger = document.getElementById("burger");
const togglebtn = document.getElementById("toggle");
const modal = document.getElementById("modal-body");
const links = document.querySelectorAll(".links");

burger.addEventListener("click", () => {
  modal.style.display = "flex";
});

togglebtn.addEventListener("click", () => {
  modal.style.display = "none";
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

AOS.init({
  // offset: 120,
  delay: 400,
  duration: 1000,
  once: true,
});
