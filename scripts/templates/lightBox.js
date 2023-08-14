// Ouvrir
function openLightbox() {
    // affichage de la lightBox par clik sur image
    document.querySelector('.lightBox').style.display = 'block';
    document.querySelector('.lightBox').setAttribute('aria-hidden', 'false');
}

// fermer
function closeLightbox() {
    //cacher la lightBox
    document.querySelector('.lightBox').style.display = "none";
    document.querySelector('.lightBox').setAttribute('aria-hidden', 'true');

    // remise au début de la vidéo
    const video = document.querySelector('.mediaVideo');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Clavier
function handleKeyPress(event) {
    // si on appuie sur esc
    if (event.keyCode === 27) {
        closeLightbox();
    }

    // si on appuie sur fleche de gauche du clavier
    if (event.keyCode === 37) {
        showPrevMediaItem();
    }

    // si on appuie sur fleche de droite du clavier
    if (event.keyCode === 39) {
        showNextMediaItem();
    }
}


// ajout d'un eventListener sur le bouton fermer
const closeButton = document.querySelector('.closeBtn');
closeButton.setAttribute('aria-label', 'close')
if (closeButton) {
    closeButton.addEventListener('click', closeLightbox);
}

// ajout d'un eventListener sur le bouton esc
document.addEventListener('keydown', handleKeyPress);

// ajout des fonctionalités prev et next
const nextButton = document.createElement('button');
nextButton.className = 'fa fa-chevron-right nextBtn';
nextButton.setAttribute('role', 'button')
nextButton.setAttribute('aria-label', 'next media')
nextButton.addEventListener('click', function () {
    showNextMediaItem();
});

const prevButton = document.createElement('button');
prevButton.className = 'fa fa-chevron-left preBtn';
prevButton.setAttribute('role', 'button')
prevButton.setAttribute('aria-label', 'previous media')
prevButton.addEventListener('click', function () {
    showPrevMediaItem();
});

const lightboxContainer = document.querySelector('.lightBoxContainer');
if (lightboxContainer) {
    lightboxContainer.appendChild(nextButton);
    lightboxContainer.appendChild(prevButton);
}

// accéder a l'item suivant
function showNextMediaItem() {
    const mediaItems = document.querySelectorAll('.lienLightBox');
    for (let i = 0; i < mediaItems.length; i++) {
        let currentMediaItem = mediaItems[i];
        if (currentMediaItem.style.display === 'flex') {
            let nextMediaItem = mediaItems[i + 1];
            if (nextMediaItem) {
                currentMediaItem.style.display = 'none';
                nextMediaItem.style.display = 'flex';
            }
            break;
        }
    }
}

// accéder a l'item précédant
function showPrevMediaItem() {
    const mediaItems = document.querySelectorAll('.lienLightBox');
    for (let i = 0; i < mediaItems.length; i++) {
        let currentMediaItem = mediaItems[i];
        if (currentMediaItem.style.display === 'flex') {
            let prevMediaItem = mediaItems[i - 1];
            if (prevMediaItem) {
                currentMediaItem.style.display = 'none';
                prevMediaItem.style.display = 'flex';
            }
            break;
        }
    }
}