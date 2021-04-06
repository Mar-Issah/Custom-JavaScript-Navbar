//retrieve all elements
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//ad event listener on the toggle bar
navToggle.addEventListener("click", () => { 
    //just trying to see if you can access the class list {"links",value:"links"} add another class called show-links
    // console.log(links.classList);

    // if (links.classList.contains("show-link")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }
    
    // simple way of adding and removing the show links class when tpggle button is clicked
    links.classList.toggle("show-links");
    
    
});