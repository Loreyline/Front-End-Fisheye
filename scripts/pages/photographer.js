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
    );
    return media;
}




async function displayDataPhotographer(photographer) {
    const photographHeader = document.querySelector("#main");
    const photographerModel = photographerTemplate(photographer);
    const photographerDom = photographerModel.getPhotographerDom();
    photographHeader.appendChild(photographerDom);
    const encart = document.querySelector("#price");
    encart.textContent = photographerModel.price + "€/Jour";
}


async function displayMedia(media) {
    const picturesSection = document.querySelector(".afficherMedias");


    if (picturesSection) {

        let totalLikes = 0;


        media.forEach((picture) => {
            const pictureModel = pictureTemplate(picture);
            const pictureCardDOM = pictureModel.getPicturesDom();
            picturesSection.appendChild(pictureCardDOM);

            const encart = document.getElementById("nbLikes");
            let id = pictureModel.id + "like";
            totalLikes += pictureModel.likes;
            encart.textContent = totalLikes;
            const likeButton = document.getElementById(id);
            pictureModel.isliked = false;
            likeButton.addEventListener("click", function () {
                if (pictureModel.isliked) {
                    totalLikes--;
                    pictureModel.isliked = false;
                } else {
                    totalLikes++;
                    pictureModel.isliked = true;
                }
                encart.textContent = totalLikes;
            });
        });

    }
}

function tri(photographerMedias) {
    let mediasTries;
    const tri = document.querySelector("#tri");
    tri.addEventListener("change", function () {
        mediasTries = "";
        const container = document.querySelector('.afficherMedias');
        container.innerHTML = "";
        switch (tri.value) {

            case 'popularity':
                mediasTries = photographerMedias.sort((a, b) => b.likes - a.likes);
                displayMedia(mediasTries);
                break;

            case 'date':
                mediasTries = photographerMedias.sort((a, b) => new Date(b.date) - new Date(a.date));
                displayMedia(mediasTries);
                break;

            case 'title':
                mediasTries = photographerMedias.sort((a, b) => a.title.localeCompare(b.title));
                displayMedia(mediasTries);
                break;

            default:
                displayMedia(photographerMedias);
                break;
        };

    });
}

async function init() {

    //infos du photographe
    const photographer = await getPhotographer();
    displayDataPhotographer(photographer);

    //infos médias
    const photographerMedias = await getMedias();
    displayMedia(photographerMedias);
    tri(photographerMedias);
}

init();