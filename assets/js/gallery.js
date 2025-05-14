// Image data (replace with your own images)
const images = [
    { src: '/assets/images/gallery/MECA-NASENI-ARP.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/picture17.png', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture1.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture3.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture4.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture5.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture7.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture8.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture9.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/Picture16.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_1.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_2.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_3.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_4.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_5.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_6.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_7.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_8.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_9.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_10.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_11.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_12.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_13.jpg', alt: 'gallery-img' },
    { src: '/assets/images/gallery/IMG_14.jpg', alt: 'gallery-img' },
];

// Build gallery grid
const galleryGrid = document.querySelector('.gallery-grid');

images.forEach((image) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
    <img src="${image.src}" alt="${image.alt}">
  `;
    galleryGrid.appendChild(galleryItem);

    // Add click event to open lightbox
    galleryItem.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightbox.style.display = 'block';
    });
});

// Close lightbox
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

// Close lightbox when clicking outside the image
window.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});