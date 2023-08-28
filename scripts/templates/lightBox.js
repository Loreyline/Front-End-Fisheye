function openLightbox() {
    const box = document.getElementById("lightbox");
    box.style.display = "block";
    showSlides(slideIndex)
}

function closeLightbox() {
    const box = document.getElementById("lightbox");
    box.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function next() {
    slideIndex += 1;

    showSlides(slideIndex);
}
function previous() {
    slideIndex -= 1;

    showSlides(slideIndex);
}

function showSlides(slideIndex) {

    let slides = document.getElementsByClassName("slide");

    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    slides[slideIndex - 1].style.display = "flex";
}