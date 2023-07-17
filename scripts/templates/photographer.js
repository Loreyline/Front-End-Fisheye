function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/samplePhotos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        //création des éléments du dom
        const article = document.createElement('article');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const pTagline = document.createElement('p');
        const pPrice = document.createElement('p');

        //insertion des attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        h2.setAttribute("aria-label", name);
        h3.setAttribute("aria-label", h3.textContent);
        pTagline.setAttribute("aria-label", tagline);
        pTagline.setAttribute("class", "tagline");
        pPrice.setAttribute("aria-label", pPrice.textContent);
        pPrice.setAttribute("class", "prix");
        a.setAttribute("aria-role", "lien vers page du photographe");
        a.setAttribute("aria-label", "lien vers page du photographe");

        //indication des textes à afficher
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        pTagline.textContent = tagline;
        pPrice.textContent = price + "€/jour";

        //affichage des éléments du dom en fonction de l'emplacement choisi
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(h3);
        a.appendChild(pTagline);
        a.appendChild(pPrice);

        //redirection vers la page du photigraphe
        a.href = `photographer.html`;
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}

function informationsPhotographerTemplate(data) {

    const { name, portrait, city, country, tagline, price } = data

    const identite = `assets/samplePhotos/Photographers_ID_Photos/${portrait}`;

    function getPhotographersDom() {

        //création des éléments du dom
        const asset = document.createElement('asset');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const pTagline = document.createElement('p');
        const pPrice = document.createElement('p');
        const div = document.createElement('div');
        const button = document.createElement('button');

        //insertion des attributs des éléments
        img.setAttribute("src", identite);
        img.setAttribute("alt", name);
        h2.setAttribute("aria-label", name);
        h3.setAttribute("aria-label", h3.textContent);
        pTagline.setAttribute("aria-label", tagline);
        pTagline.setAttribute("class", "tagline");
        pPrice.setAttribute("aria-label", pPrice.textContent);
        pPrice.setAttribute("class", "prix");
        div.setAttribute("class", "identite");
        button.setAttribute("class", "contact_button");
        button.setAttribute("aria-role", "modale");
        button.setAttribute("aria-label", "contactez-moi");

        //indication des textes à afficher
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        pTagline.textContent = tagline;
        pPrice.textContent = price + "€/jour";

        //affichage des éléments du dom en fonction de l'emplacement choisi
        asset.appendChild(div);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(pTagline);
        div.appendChild(pPrice);
        asset.appendChild(button);
        asset.appendChild(img);

        return (asset);
    }
}

function pictureTemplate(data) {

    const { id, photographerId, title, image, likes, date, price } = data;

    const picture = `assets/samplePhotos/${photographer}/${image}`;

    function getPicturesDom() {

        //création des éléments du dom
        const article = document.createElement('article');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        //insertion des attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.setAttribute("aria-role", "informations image");
        h3.setAttribute("aria-label", title);
        p.setAttribute("aria-label", likes + "likes");

        //indication des textes à afficher
        h3.textContent = title;
        p.textContent = likes + '<i class="fa-solid fa-heart"></i>';

        //affichage des éléments du dom en fonction de l'emplacement choisi
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);

        return (article);
    }


}