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

function tri() {
    const tri = document.querySelector("#tri");
    tri.addEventListener("change", function () {
        if (tri.value === "popularity") {
            // console.log(tri.value);
            return ('popularity');
        } else if (tri.value === "date") {
            //  console.log(tri.value);
            return ('date');
        } else {
            //  console.log(tri.value);
            return ('title');
        }
    })
}

async function getMedias(sortBy = 'title') {
    const parameters = new URLSearchParams(window.location.search)
    const idString = parameters.get('id')


    // promesse
    const photographerData = await fetch('./data/photographers.json')
        .then((data) => data.json());

    //récupération des médias
    let media = photographerData.media.filter(
        (mediaObj) => mediaObj.photographerId == idString
    );

    sortBy = tri();
    if (sortBy === 'popularity') {
        media.sort((a, b) => b.likes - a.likes);
        console.log(sortBy);
    } else if (sortBy === 'date') {
        media.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log(sortBy);
    } else if (sortBy === 'title') {
        media.sort((a, b) => a.title.localeCompare(b.title));
        console.log(sortBy);
    };
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
    const picturesSection = document.querySelector(".picturesSection");

    let totalLikes = 0;
    if (picturesSection) {

        media.forEach((picture) => {
            const pictureModel = pictureTemplate(picture);
            const pictureCardDOM = pictureModel.getPicturesDom();
            picturesSection.appendChild(pictureCardDOM);
            let id = pictureModel.id + "like";
            totalLikes += pictureModel.likes;
            const likeButton = document.getElementById(id);
            pictureModel.isliked = false;
            likeButton.addEventListener("click", function () {
                if (pictureModel.isliked) {
                    totalLikes--;
                    pictureModel.isliked = false;
                    console.log(totalLikes);
                } else {
                    totalLikes++;
                    pictureModel.isliked = true;
                    console.log(totalLikes);
                }
                //return (totalLikes);
            });

        });
        const encart = document.getElementById("nbLikes");
        const heart = document.createElement('i');
        heart.setAttribute("class", "fa-solid fa-heart");
        encart.textContent = totalLikes;
        //heart.appendChild(encart);
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