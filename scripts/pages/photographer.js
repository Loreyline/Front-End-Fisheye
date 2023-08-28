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

function tri(media) {
    const tri = document.querySelector("#tri");
    tri.addEventListener("change", function () {

        if (tri.value == 'popularity') {
            media.sort((a, b) => b.likes - a.likes);

        } else if (tri.value == 'date') {
            media.sort((a, b) => new Date(b.date) - new Date(a.date));

        } else if (tri.value == 'title') {
            media.sort((a, b) => a.title.localeCompare(b.title));

        };

    });
}
async function displayMedia(media) {
    const picturesSection = document.querySelector(".picturesSection");

    let totalLikes = 0;
    if (picturesSection) {

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

            tri();
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