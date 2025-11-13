
const mobileBtn = document.querySelector(".btn-mobile");
const navLinks = document.getElementById("nav-links");
const icon = document.querySelector(".btn-mobile i");

// Abre e fecha o menu
mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

