function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/samplePhotos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.setAttribute("aria-label", name)
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}