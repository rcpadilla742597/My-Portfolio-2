/* From lesson

let userI = prompt("Enter your namme");

let obj = {
    name: userI
};


async function postData() {
    const response = await fetch("https://test-295e7-default-rtdb.firebaseio.com/post/.json", { method: "POST", body: JSON.stringify(obj) });
}
postData();
*/

/* Use to grab onto Firebase -> Connection

var firebaseConfig = {
    apiKey: "AIzaSyBKF11oVlR327fvNYmlB449yHW4WWRzV6Q",
    authDomain: "contactform-portfolio-65fc3.firebaseapp.com",
    projectId: "contactform-portfolio-65fc3",
    storageBucket: "contactform-portfolio-65fc3.appspot.com",
    messagingSenderId: "1098490301086",
    appId: "1:1098490301086:web:2a82c5f8bb6d7329f2c98f"

// Init Firebase
firebaseConfig.initializeApp(firebaseConfig());
var firestore = firebase.firestore();

// Start grabbing our DOM element
const submitBtn = document.querySelector('#submit') */



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