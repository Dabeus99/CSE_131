const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


gallery.addEventListener('click', openModal);

function openModal(event) {
    const fullImageSrc = event.target.src.replace('-sm.jpg', '-full.jpg');
    modalImage.src = fullImageSrc;
    modalImage.alt = event.target.alt;
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

ener
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});