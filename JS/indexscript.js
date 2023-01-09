// navbar controls and navbar hamburger sidebar controls

// search-box open close controls
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-magnifying-glass");
let searchBoxCancel = document.querySelector(".search-box .fa-xmark");

searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
        if(navbar.classList.contains("showInput")) {
        searchBox.classList.replace("fa-magnifying-glass" ,"fa-xmark");
        }else {
        searchBox.classList.replace("fa-xmark" ,"fa-magnifying-glass");
        }
    }
);
 
// sidebar open close controls
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".nav-links .fa-xmark");

menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
}
 
// sidebar submenu open close controls
let reasonsArrow = document.querySelector(".reasons-arrow");

reasonsArrow.onclick = function() {
    navLinks.classList.toggle("show1");
}
 
let aboutUsArrow = document.querySelector(".aboutus-arrow");

aboutUsArrow.onclick = function() {
    navLinks.classList.toggle("show2");
}

// scroll to top button

// Get the button:
let Btn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    Btn.style.display = "block";
  } else {
    Btn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// image carousel with auto-play and manual controls

var slideIndex = 1;

var myTimer;

var slideContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    
    myTimer = setInterval(function(){plusSlides(1)}, 4000); //interval for slidechange = 4s
  
    //arrows of mouseenter for pause/resume
    slideContainer = document.getElementsByClassName('slide-container')[0];
    slideContainer.addEventListener('mouseenter', pause)
    slideContainer.addEventListener('mouseleave', resume)
    }
)

// function for prev and next button
function plusSlides(n) {
    clearInterval(myTimer);
        if (n < 0) {
        showSlides(slideIndex -= 1);
        } else {
        showSlides(slideIndex += 1); 
        }
    
        if (n === -1) {
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
        } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
        }
}

//manual controls
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// function to pause
pause = () => {
    clearInterval(myTimer);
}

// function to resume
resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}


// footer-disclaimer modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the span that opens modal
var trigger = document.getElementById("modalTrigger");

// Get button that closes modal
var btn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
trigger.onclick = function disclaimerOpen() {
  modal.style.display = "block";
}

// button to close the modal onclick
btn.onclick = function disclaimerClose() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}