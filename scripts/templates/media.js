function pictureTemplate(data) {

    const { id, photographerId, title, image, likes, date, price } = data;

    const picture = `assets/samplePhotos/${photographerId}/${image}`;

    function getPicturesDom() {

        //création des éléments du dom
        const article = document.createElement('article');
        const section = document.createElement('section')
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const icone = document.createElement('i');

        //insertion des attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.setAttribute("aria-role", "informations image");
        h3.setAttribute("aria-label", title);
        p.setAttribute("aria-label", likes + "likes");
        icone.setAttribute("class", "fa-solid fa-heart");
        icone.setAttribute("title", "likes");

        //indication des textes à afficher
        h3.textContent = title;
        p.textContent = likes + " ";

        //affichage des éléments du dom en fonction de l'emplacement choisi
        article.appendChild(img);
        article.appendChild(section);
        section.appendChild(h3);
        section.appendChild(p);
        p.appendChild(icone);

        return (article);
    }
    return { id, photographerId, title, image, likes, date, price, getPicturesDom }

}