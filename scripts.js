const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox img');

let currentImageIndex = 0;

// Event listeners for each image in the gallery
gallery.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        lightboxImg.src = image.src;
        lightbox.style.display = 'block';
    });
});

// Function to close lightbox when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to navigate to the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
    lightboxImg.src = gallery[currentImageIndex].src;
}

// Function to navigate to the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % gallery.length;
    lightboxImg.src = gallery[currentImageIndex].src;
}

// Keyboard navigation for the lightbox
document.addEventListener('keydown', (event) => {
    if (lightbox.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            prevImage();
        } else if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'Escape') {
            closeLightbox();
        }
    }
});
