// navbar controls and navbar hamburger sidebar controls

// searchbox open close controls
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

//js for gallery filtering

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item")) {
 
        // deactivate current active filter-item
        filterContainer.querySelector(".active").classList.remove("active");
 
        // activate new filter-item
        event.target.classList.add("active");
 
        const filterValue = event.target.getAttribute("data-filter");
 
        galleryItems.forEach((item) =>{
 
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove("hide");
             item.classList.add("show");
        }
 
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
 
         });
    }
});

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