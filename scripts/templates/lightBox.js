function openLightbox() {
    const box = document.getElementById("lightbox");
    box.style.display = "block";
}

function closeLightbox() {
    const box = document.getElementById("lightbox");
    box.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function next(n) {
    showSlides(slideIndex += n);
    console.log("next");
}
function previous(n) {
    showSlides(slideIndex = n);
    console.log("prev");
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}