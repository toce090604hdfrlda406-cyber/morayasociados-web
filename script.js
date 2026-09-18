
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");
  if(toggle && nav){
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => nav?.classList.remove("open"));
  });

  const year = document.querySelector("#year");
  if(year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#contactForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Formulario de demostración enviado. Para hacerlo funcional, conecta este formulario a un servicio de correo o a un backend.");
      form.reset();
    });
  }
});
