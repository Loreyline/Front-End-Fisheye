//Mettre le code JavaScript lié à la page photographer.html
async function getPictures() {
    const picture = await fetch('../data/photographers.json')
        .then((data) => data.json())
    return picture
}

async function displayData(media) {
    const picturesSection = document.querySelector(".pictturesSection");

    pictures.forEach(picture => {
        const pictureModel = photographerTemplate(picture);
        const pictureCardDOM = pictureModel.getPicturesDom();
        picturesSection.appendChild(pictureCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographies
    const { pictures } = await getPictures();
    displayData(pictures);
}

init();