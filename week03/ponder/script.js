
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
  const clickedImage = e.target.closest("img");
  if (!clickedImage) return;


  modalImage.src = clickedImage.src.replace("-sm.jpg", ".jpg");
  modalImage.src = clickedImage.src;
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
          
