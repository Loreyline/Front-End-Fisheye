//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographer() {
    const parameters = new URLSearchParams(window.location.search)
    const idString = parameters.get('id')

    // promesse
    const photographerData = await fetch('./data/photographers.json')
        .then((data) => data.json());

    // récupération du photographe
    const photographer = photographerData.photographers.find(
        (photographer) => photographer.id == idString
    )
    return photographer;
}

async function getMedias() {
    const parameters = new URLSearchParams(window.location.search)
    const idString = parameters.get('id')

    // promesse
    const photographerData = await fetch('./data/photographers.json')
        .then((data) => data.json());

    //récupération des médias
    let media = photographerData.media.filter(
        (mediaObj) => mediaObj.photographerId == idString
    )
    return media;
}

async function displayDataPhotographer(photographer) {
    const photographHeader = document.querySelector("#main");
    const photographerModel = photographerTemplate(photographer);
    const photographerDom = photographerModel.getPhotographerDom();
    photographHeader.appendChild(photographerDom);
}

async function displayMedia(media) {
    const picturesSection = document.querySelector(".picturesSection");

    if (picturesSection) {
        media.forEach((picture) => {
            const pictureModel = pictureTemplate(picture);
            const pictureCardDOM = pictureModel.getPicturesDom();
            picturesSection.appendChild(pictureCardDOM);
        });
    }
}

async function init() {

    //infos du photographe
    const photographer = await getPhotographer();
    displayDataPhotographer(photographer);

    //infos médias
    const photographerMedias = await getMedias();
    displayMedia(photographerMedias);
}

init();