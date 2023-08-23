function pictureTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/images/${photographerId}/${image}`;
    const mediaVideo = `./assets/images/${photographerId}/${video}`;

    function getPicturesDom() {

        //création des éléments du dom
        const article = document.createElement('article');
        const section = document.createElement('section');
        const source = document.createElement('source');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const pLike = document.createElement('p');
        const sLikes = document.createElement('span');
        const likeButton = document.createElement('i');
        const pVideo = document.createElement('p');
        const lienLightBox = document.createElement('a');
        const lienVideo = document.createElement('a');
        let idButton = id + "like";
        const idMedia = id + "Media";
        const mediaLink = document.createElement('a');
        let mediaLinkElement;
        const mediaLightboxElement = document.createElement('div');
        let mediaElement;


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
        source.setAttribute("type", "video/mp4");
        h3.setAttribute("aria-label", title);
        pLike.setAttribute("aria-label", sLikes.textContent + "likes");
        pLike.setAttribute("id", idMedia);
        likeButton.setAttribute('role', 'button');
        likeButton.setAttribute('aria-label', 'Like');
        likeButton.setAttribute("title", "likes");
        likeButton.setAttribute("id", idButton);
        lienLightBox.setAttribute("class", "lienLightBox")
        lienVideo.setAttribute("href", mediaVideo);
        sLikes.setAttribute('role', 'text');
        mediaLink.setAttribute("class", "mediaLink");
        mediaLightboxElement.setAttribute("class", "mediaLightbox");

        if (video) {
            mediaLink.setAttribute("href", mediaVideo);

            mediaElement = document.createElement('video');
            mediaElement.setAttribute("class", "mediaVideo media");
            mediaElement.setAttribute("src", mediaVideo);
            mediaElement.setAttribute("controls", true);
            mediaElement.setAttribute("aria-role", "img");
            mediaElement.setAttribute("id", id);
            mediaLinkElement = mediaElement.cloneNode(true);
            mediaLinkElement.setAttribute("href", mediaVideo);
            mediaLinkElement.setAttribute("target", "_blank");
            mediaLinkElement.appendChild(source);

            const mediaLinkVideoElement = mediaElement.cloneNode(true);
            mediaLink.appendChild(mediaLinkVideoElement);

            //pour la lightbox
            const mediaLightboxVideoElement = document.createElement('video');
            mediaLightboxVideoElement.setAttribute("class", "mediaLightbox");
            mediaLightboxVideoElement.setAttribute("src", mediaVideo);
            mediaLightboxVideoElement.setAttribute("controls", true);
            mediaLightboxVideoElement.setAttribute("aria-role", "img");
            mediaLightboxVideoElement.setAttribute("id", id);
            mediaLightboxVideoElement.setAttribute('loop', '');
            mediaLightboxVideoElement.appendChild(source);


            mediaLightboxElement.setAttribute("class", "mediaLightbox");
            mediaLightboxElement.appendChild(mediaLightboxVideoElement);

        } else {
            mediaLink.setAttribute("href", picture);

            mediaElement = document.createElement('img');
            mediaElement.setAttribute("class", "mediaVideo media");
            mediaElement.setAttribute("src", picture);
            mediaElement.setAttribute("alt", title);
            mediaElement.setAttribute("aria-role", "img");
            mediaElement.setAttribute("id", id);
            mediaLinkElement = mediaElement.cloneNode(true);
            mediaLinkElement.setAttribute("href", picture);
            mediaLinkElement.setAttribute("target", "_blank");

            const mediaLinkImgElement = mediaElement.cloneNode(true);
            mediaLink.appendChild(mediaLinkImgElement);
            const mediaLightboxImgElement = mediaElement.cloneNode(true);
            mediaLightboxElement.classList.add('mediaLightbox');
            mediaLightboxElement.appendChild(mediaLightboxImgElement);
        }





        //indication des textes à afficher
        h3.textContent = title;
        pVideo.textContent = "Votre navigateur ne prend pas en charge les vidéos. Voici, à la place, un ";
        lienVideo.textContent = "lien vers la vidéo";



        //affichage des éléments du dom en fonction de l'emplacement choisi
        // if (data.image) {
        //     lienLightBox.appendChild(img);
        // } else {
        //     lienLightBox.appendChild(video);
        //     video.appendChild(source);
        //     video.appendChild(pVideo);
        //     pVideo.appendChild(lienVideo);
        // }

        article.appendChild(mediaLink);
        article.appendChild(section);
        section.appendChild(h3);
        section.appendChild(pLike);
        pLike.appendChild(sLikes);
        pLike.appendChild(likeButton);


        //création de la lightBox


        return (article);
    }
    return { id, photographerId, title, image, video, likes, date, price, getPicturesDom }

}



