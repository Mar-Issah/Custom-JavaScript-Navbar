//retrieve all elements
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//toggle to add/remove the show-links class
navToggle.addEventListener("click", () => { 
   
    links.classList.toggle("show-links");
    
    
});
