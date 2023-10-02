// define the images
const images = [
    "src/img/background-01.jpg",
    "src/img/background-02.jpg",
    "src/img/background-03.jpg",
    "src/img/background-04.jpg",
];

// app state
let index = 0;
const max = images.length;

// get the dom element

const containerElement = document.querySelector(".container");
const prevSlideButton = document.querySelector(".prevSlide");
const nextSlideButton = document.querySelector(".nextSlide");

// listen for arrow click events
prevSlideButton.addEventListener("click", () => {
    // prevSlideButton.addEventListener("click",function() {
    index--
    setImageIndex();
    changeBackgroundImage(images[index], containerElement)

});

nextSlideButton.addEventListener("click", () => {
    // nextSlideButton.addEventListener("click",function() {

    index++
    setImageIndex();
    changeBackgroundImage(images[index], containerElement)

});

// utility function
function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`
}

