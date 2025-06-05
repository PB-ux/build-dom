document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами.");
    form.reset();
  });
});
