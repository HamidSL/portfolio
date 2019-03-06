document.addEventListener("DOMContentLoaded", () => {
  // Modal
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close");
  // const toggler = document.querySelector(".toggler");

  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // toggler.addEventListener("click", () => {
  //   modal.classList.add("active");
  // });

  // Outside click
  window.addEventListener("click", e => {
    e.target == modal && modal.classList.remove("active");
  });

  // Content Display
  const contentToggler = document.querySelector(".content-toggler");
  contentToggler.addEventListener("click", e => {
    e.preventDefault();

    const contentHolderRow = document.querySelector(".content-holder-row");

    if (contentHolderRow.classList.contains("active-row")) {
      contentHolderRow.classList.remove("active-row");
    } else {
      contentHolderRow.classList.add("active-row");
    }
  });
});
