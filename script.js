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

  const house = document.getElementById("house3d");
  if (house) {
    let dragging = false;
    let lastX = 0;
    let rotation = 0;

    const update = (dx) => {
      rotation += dx * 0.5;
      house.style.transform = `rotateY(${rotation}deg)`;
    };

    house.addEventListener("mousedown", (e) => {
      dragging = true;
      lastX = e.clientX;
      house.classList.add("grabbing");
    });

    window.addEventListener("mouseup", () => {
      dragging = false;
      house.classList.remove("grabbing");
    });

    window.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      update(e.clientX - lastX);
      lastX = e.clientX;
    });

    house.addEventListener("touchstart", (e) => {
      dragging = true;
      lastX = e.touches[0].clientX;
    });

    window.addEventListener(
      "touchmove",
      (e) => {
        if (!dragging) return;
        update(e.touches[0].clientX - lastX);
        lastX = e.touches[0].clientX;
      },
      { passive: true },
    );

    window.addEventListener("touchend", () => {
      dragging = false;
    });
  }
});
