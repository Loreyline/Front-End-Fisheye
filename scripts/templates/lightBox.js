// // Ouvrir
// function openLightbox() {
//     // affichage de la lightBox par clik sur image
//     document.querySelector('.lightBox').style.display = 'block';
//     document.querySelector('.lightBox').setAttribute('aria-hidden', 'false');
// }

// // fermer
// function closeLightbox() {
//     //cacher la lightBox
//     document.querySelector('.lightBox').style.display = "none";
//     document.querySelector('.lightBox').setAttribute('aria-hidden', 'true');

//     // remise au début de la vidéo
//     const video = document.querySelector('.mediaVideo');
//     if (video) {
//         //video.pause();
//         video.currentTime = 0;
//     }
// }

// // Clavier
// function handleKeyPress(event) {
//     // si on appuie sur esc
//     if (event.keyCode === 27) {
//         closeLightbox();
//     }

//     // si on appuie sur fleche de gauche du clavier
//     if (event.keyCode === 37) {
//         showPrevMediaItem();
//     }

//     // si on appuie sur fleche de droite du clavier
//     if (event.keyCode === 39) {
//         showNextMediaItem();
//     }
// }


// // ajout d'un eventListener sur le bouton fermer
// const closeButton = document.querySelector('.closeBtn');
// closeButton.setAttribute('aria-label', 'close')
// if (closeButton) {
//     closeButton.addEventListener('click', closeLightbox);
// }

// // ajout d'un eventListener sur le bouton esc
// document.addEventListener('keydown', handleKeyPress);

// // ajout des fonctionalités prev et next
// const nextButton = document.querySelector('.fa-chevron-right');
// nextButton.setAttribute('role', 'button')
// nextButton.setAttribute('aria-label', 'next media')
// nextButton.addEventListener('click', function () {
//     showNextMediaItem();
// });

// const prevButton = document.querySelector('.fa-chevron-left');
// prevButton.setAttribute('role', 'button')
// prevButton.setAttribute('aria-label', 'previous media')
// prevButton.addEventListener('click', function () {
//     showPrevMediaItem();
// });

// const lightboxContainer = document.querySelector('.lightbox__container');
// if (lightboxContainer) {
//     lightboxContainer.appendChild(nextButton);
//     lightboxContainer.appendChild(prevButton);
// }

// // accéder a l'item suivant
// function showNextMediaItem() {
//     const mediaItems = document.querySelectorAll('.lienLightBox');
//     for (let i = 0; i < mediaItems.length; i++) {
//         let currentMediaItem = mediaItems[i];
//         if (currentMediaItem.style.display === 'flex') {
//             let nextMediaItem = mediaItems[i + 1];
//             if (nextMediaItem) {
//                 currentMediaItem.style.display = 'none';
//                 nextMediaItem.style.display = 'flex';
//             }
//             break;
//         }
//     }
// }

// // accéder a l'item précédant
// function showPrevMediaItem() {
//     const mediaItems = document.querySelectorAll('.lienLightBox');
//     for (let i = 0; i < mediaItems.length; i++) {
//         let currentMediaItem = mediaItems[i];
//         if (currentMediaItem.style.display === 'flex') {
//             let prevMediaItem = mediaItems[i - 1];
//             if (prevMediaItem) {
//                 currentMediaItem.style.display = 'none';
//                 prevMediaItem.style.display = 'flex';
//             }
//             break;
//         }
//     }
// }

/**
 * @property {html€lement} element
 */
class LightBox {


    static init() {
        const links = (document.querySelectorAll(`a[href$=".png"], 
        a[href$=".jpg"],a[href$=".jpeg"],a[href$=".mp4"]`)
            .forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new LightBox(e.currentTarget.getAttribute('herf'))
            })));
    }
    /**
     * @param {string} url URL du media
     */
    constructor(url) {
        this.element = this.buildDOM(url);
        this.loadImage(url);
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(this.element);
        document.addEventListener('keyup', this.onKeyUp)
    }

    /**
    * @param {string} url URL de l'image
    */
    loadImage(url) {
        this.url = null
        const image = new Image()
        const container = this.element.querySelector('.lightbox__container')
        const loader = document.createElement('div')
        loader.classList.add('lightbox__loader')
        container.innerHTML = ''
        container.appendChild(loader)
        image.onload = () => {
            container.removeChild(loader)
            container.appendChild(image)
            this.url = url
        }
        image.src = url
    }

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e) {
        if (e.key === 'Ecsape') {
            this.close(e);
        }
    }

    /**
     * ferme la lightbox
     * @param {MouseEvent} e 
     */
    close(e) {
        e.preventDefault();
        this.element.setAttribute('fadeOut');
        window.setTimeout(() => {
            this.element.parentElement.remouveChild(this.element)
        }, 500)
        document.remouveEventListener('keyup', this.onKeyUp)
    }
    /**
    * @param {MouseEvent|KeyboardEvent} e 
    */
    next(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if (i === this.images.length - 1) {
            i = -1
        }
        this.loadImage(this.images[i + 1])
    }

    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    prev(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if (i === 0) {
            i = this.images.length
        }
        this.loadImage(this.images[i - 1])
    }

    /**
     * @param {string} url URL du media
     * @return {html€lement}
     */
    buildDOM(url) {
        const dom = document.getElementById('#lightBox');
        const close = document.createElement('button');
        const next = document.createElement('button');
        const prev = document.createElement('button');
        const nextIcone = document.createElement('i');
        const prevIcone = document.createElement('i');
        const content = document.createElement('div');
        const media = document.createElement('img');


        dom.setAttribute("class", "lightbox");
        close.setAttribute("class", "closeBtn");
        next.setAttribute("class", "lightbox__next");
        prev.setAttribute("class", "lightbox__prev");
        nextIcone.setAttribute("class", "fa fa-chevron-right nextBtn");
        prevIcone.setAttribute("class", "fa fa-chevron-left nextBtn");
        content.setAttribute("class", "lightBoxContent");
        media.setAttribute("src", url);

        dom.appendChild(close);
        dom.appendChild(next);
        dom.appendChild(prev);
        dom.appendChild(content);
        next.appendChild(nextIcone);
        prev.appendChild(prevIcone);
        content.appendChild(media);


        dom.querySelector('.closeBtn').addEventListener('click', this.close.bind(this));
        return dom;
    }
}

LightBox.init();