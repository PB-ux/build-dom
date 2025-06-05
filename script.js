document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const form = document.getElementById("contactForm");
  const modal = document.getElementById("contactModal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");

  openModal.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами.");
    form.reset();
    modal.classList.remove("active");
  });
});
