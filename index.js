// section 1 close nav
var section1 = document.getElementById("section1")
var close = document.getElementById("close")

close.addEventListener("click", function () {
    section1.style.display = "none"
})
// sidenav
var menubar = document.getElementById("menubar")
var closesidenav = document.getElementById("closesidenav")
var closenav = document.getElementById("closenav")
 menubar.addEventListener("click",function(){
    sidenav.style.right = 0
 })
 closesidenav.addEventListener("click",function(){
    sidenav.style.right = "-50%"
 })
// New arrival section
var section2 = document.getElementById("container-main")
var newarrivals = document.getElementById("newarrivals")
var brands = document.getElementById("brands")
var feedback = document.getElementById("feedback")
var review = document.getElementById("review")
var newarrival = document.getElementById("newarrival")
newarrival.addEventListener("click", function () {
    section2.style.display = "none"
    brands.style.display = "none"
    feedback.style.display = "none"
    review.style.display = "none"
})
// Most Wanted section
var section2 = document.getElementById("container-main")
var newarrivals = document.getElementById("newarrivals")
var brands = document.getElementById("brands")
var feedback = document.getElementById("feedback")
var review = document.getElementById("review")
var mostwanted = document.getElementById("mostwanted")
mostwanted.addEventListener("click", function () {
    section2.style.display = "none"
    brands.style.display = "none"
    feedback.style.display = "none"
    review.style.display = "none"
    newarrivals.style.display = "none"

})

// Carousel function
currentSlideID = 1;


sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;
function nextslide() {
    if (currentSlideID < totalSlides) {
        currentSlideID++;

    }
    else {
        currentSlideID = 1; // loop back
    }
    showSlide();


}
function prevslide() {
    if (currentSlideID > 1) {
        currentSlideID--;

    }
    else {
        currentSlideID = totalSlides
    }
    showSlide();
}
function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideID === index + 1) {
            element.classList.remove('hidden')
        }
        else {
            element.classList.add('hidden')
        }
    }
}
showSlide();




// Image slider

let sliderContainer = document.getElementById("mwslider-container");
let slider = document.getElementById("mwslider")
let cards = slider.getElementsByTagName("li")
let sliderContainerWidth = sliderContainer.clientWidth;
let elementsToShow = 4;
if(document.body.clientWidth<1000){
    elementsToShow = 2;
}
if(document.body.clientWidth<1500){
    elementsToShow = 2;
}
let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';


for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px';
}
function next() {
    if (+slider.style.marginLeft.slice(0, -2) != -cardWidth * (cards.length - elementsToShow))
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';
}
function prev() {
    if (+slider.style.marginLeft.slice(0, -2) != 0)
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
}


