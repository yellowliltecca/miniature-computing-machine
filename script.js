const galleryButtons = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector(".lightbox-close");

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.full;
    const preview = button.querySelector("img");
    lightboxImage.src = image;
    lightboxImage.alt = preview ? preview.alt : "Фотография автосервиса";
    lightbox.showModal();
  });
});

function closeLightbox() {
  lightbox.close();
  lightboxImage.src = "";
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightbox.addEventListener("close", () => {
  lightboxImage.src = "";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) closeLightbox();
});
