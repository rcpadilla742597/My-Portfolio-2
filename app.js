const hamburger = document.querySelector('.hamburger'); /* Matches the first element within the document that matches the specified selector. I am setting hamburger to the querySelector */
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li'); /* Selects all of the links */

/* Adding the opening transition */

hamburger.addEventListener('click', () => { /*  Adds an event listener of click to the query selector hamburger */
    navLinks.classList.toggle("open"); /* I created this open in css */
    /* adding fade class to links */
    links.forEach(link =>{
        link.classList.toggle('fade');
    })
});