function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/samplePhotos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        //création des éléments du dom
        const article = document.createElement('article');
        const link = document.createElement('a');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const pTagline = document.createElement('p');
        const pPrice = document.createElement('p');
        const url = `./photographer.html?id=${id}`;

        //insertion des attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        h2.setAttribute("aria-label", name);
        h3.setAttribute("aria-label", h3.textContent);
        pTagline.setAttribute("aria-label", tagline);
        pTagline.setAttribute("class", "tagline");
        pPrice.setAttribute("aria-label", pPrice.textContent);
        pPrice.setAttribute("class", "prix");
        link.setAttribute("aria-role", "lien vers page du photographe");
        link.setAttribute("aria-label", "lien vers page du photographe");
        link.setAttribute("href", url);

        //indication des textes à afficher
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        pTagline.textContent = tagline;
        pPrice.textContent = price + "€/jour";

        //affichage des éléments du dom en fonction de l'emplacement choisi
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h3);
        link.appendChild(pTagline);
        link.appendChild(pPrice);


        return (article);
    }

    function getPhotographerDom() {

        //création des éléments du dom
        const header = document.createElement('div');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const pTagline = document.createElement('p');
        const pPrice = document.createElement('p');
        const divPresentation = document.createElement('div');
        const button = document.createElement('button');
        const divImg = document.createElement('div');


        //insertion des attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        h2.setAttribute("aria-label", name);
        h3.setAttribute("aria-label", h3.textContent);
        pTagline.setAttribute("aria-label", tagline);
        pTagline.setAttribute("class", "tagline");
        pPrice.setAttribute("aria-label", pPrice.textContent);
        pPrice.setAttribute("class", "prix");
        divPresentation.setAttribute("class", "presentation");
        button.setAttribute("class", "contact_button");
        button.setAttribute("aria-role", "modale");
        button.setAttribute("aria-label", "contactez-moi");
        button.setAttribute("onclick", displayModal());
        divImg.setAttribute("class", "portrait");
        divImg.setAttribute("aria-role", "image");
        header.setAttribute("class", "photograph-header")
        header.setAttribute("aria-role", "header");

        //indication des textes à afficher
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        pTagline.textContent = tagline;
        pPrice.textContent = price + "€/jour";
        button.textContent = "contactez-moi";

        //affichage des éléments du dom en fonction de l'emplacement choisi
        header.appendChild(divPresentation);
        divPresentation.appendChild(h2);
        divPresentation.appendChild(h3);
        divPresentation.appendChild(pTagline);
        divPresentation.appendChild(pPrice);
        header.appendChild(button);
        divImg.appendChild(img);
        header.appendChild(divImg);

        return (header);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getPhotographerDom }
}


