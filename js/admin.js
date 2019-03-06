document.addEventListener("DOMContentLoaded", () => {
  // Modal
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close");
  const toggler = document.querySelector(".toggler");

  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  toggler.addEventListener("click", () => {
    modal.classList.add("active");
  });

  // Outside click
  window.addEventListener("click", e => {
    e.target == modal && modal.classList.remove("active");
  });
});
