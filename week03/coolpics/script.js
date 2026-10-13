const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});





const gallery = document.querySelector('.image-container');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
  const clickedImage = e.target.closest("img");
  if (!clickedImage) return;


  modalImage.src = "https://wddbyui.github.io/wdd131/images/norris-full.jpg";
  modalImage.alt = clickedImage.alt;

  modal.showModal();
}
    

closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          
