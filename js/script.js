// ===== LIGHTBOX =====
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = imgElement.src;
}

function closeLightbox(event) {
    if (event.target.id === 'lightbox' || event.target.className === 'close') {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
    }
}

