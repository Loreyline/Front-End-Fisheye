function pictureTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/images/${photographerId}/${image}`;
    const mediaVideo = `./assets/images/${photographerId}/${video}`;

    function getPicturesDom() {

        //création des éléments du dom
        const article = document.createElement('article');
        const section = document.createElement('section');
        const video = document.createElement('video')
        const source = document.createElement('source');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const pLike = document.createElement('p');
        const sLikes = document.createElement('span');
        const likeButton = document.createElement('i');
        const pVideo = document.createElement('p');
        const lienLightBox = document.createElement('div');
        const lienVideo = document.createElement('a');
        let idButton = id + "like";
        const imgLightbox = document.createElement('img');
        const videoLightbox = document.createElement('video');
        const sourceLightbox = document.createElement('source');

        //gestion des likes
        data.isLiked = false;
        let totalLikes = 0;
        const nbLikes = parseInt(likes)
        totalLikes += nbLikes;

        if (data.isLiked) {
            likeButton.setAttribute("class", "fa-solid fa-heart");
        } else {
            likeButton.setAttribute("class", "fa-regular fa-heart");
        }

        sLikes.textContent = totalLikes + " ";

        likeButton.addEventListener('click', function () {

            if (data.isLiked) {
                totalLikes--;
                data.isLiked = false;
                likeButton.setAttribute("class", "fa-regular fa-heart");
            } else {
                totalLikes++;
                data.isLiked = true;
                likeButton.setAttribute("class", "fa-solid fa-heart");
            }

            sLikes.textContent = totalLikes + " ";
        });

        //insertion des attributs des éléments
        article.setAttribute("class", "media");
        source.setAttribute("src", mediaVideo);
        video.setAttribute("controls", true);
        source.setAttribute("type", "video/mp4");
        video.setAttribute("aria-role", "img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.setAttribute("aria-role", "img");
        h3.setAttribute("aria-label", title);
        pLike.setAttribute("aria-label", sLikes.textContent + "likes");
        pLike.setAttribute("id", id);
        likeButton.setAttribute('role', 'button');
        likeButton.setAttribute('aria-label', 'Like');
        likeButton.setAttribute("title", "likes");
        likeButton.setAttribute("id", idButton);
        lienLightBox.setAttribute("class", "lienLightBox");
        lienLightBox.setAttribute("style", "cursor:pointer");
        lienLightBox.setAttribute("onclick", "openLightbox()");
        lienVideo.setAttribute("href", mediaVideo);
        sLikes.setAttribute('role', 'text');
        sourceLightbox.setAttribute("src", mediaVideo);
        videoLightbox.setAttribute("controls", true);
        sourceLightbox.setAttribute("type", "video/mp4");
        videoLightbox.setAttribute("aria-role", "img");
        imgLightbox.setAttribute("src", picture);
        imgLightbox.setAttribute("alt", title);
        imgLightbox.setAttribute("aria-role", "img");

        //indication des textes à afficher
        h3.textContent = title;
        pVideo.textContent = "Votre navigateur ne prend pas en charge les vidéos. Voici, à la place, un ";
        lienVideo.textContent = "lien vers la vidéo";



        //affichage des éléments du dom en fonction de l'emplacement choisi
        if (data.image) {
            lienLightBox.appendChild(img);
        } else {
            lienLightBox.appendChild(video);
            video.appendChild(source);
            video.appendChild(pVideo);
            pVideo.appendChild(lienVideo);
        }

        article.appendChild(lienLightBox);
        article.appendChild(section);
        section.appendChild(h3);
        section.appendChild(pLike);
        pLike.appendChild(sLikes);
        pLike.appendChild(likeButton);

        //affichage dans la lightbox
        const container = document.querySelector('.lightbox__container');

        const slide = document.createElement('div');
        slide.setAttribute("class", "slide");
        container.appendChild(slide);
        if (data.image) {
            slide.appendChild(imgLightbox);
        } else {
            slide.appendChild(videoLightbox);
            videoLightbox.appendChild(sourceLightbox);
        }

        return (article);
    }
    return { id, photographerId, title, image, video, likes, date, price, getPicturesDom }

}



