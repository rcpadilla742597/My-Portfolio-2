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

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKF11oVlR327fvNYmlB449yHW4WWRzV6Q",
    authDomain: "contactform-portfolio-65fc3.firebaseapp.com",
    databaseURL: "https://contactform-portfolio-65fc3-default-rtdb.firebaseio.com",
    projectId: "contactform-portfolio-65fc3",
    storageBucket: "contactform-portfolio-65fc3.appspot.com",
    messagingSenderId: "1098490301086",
    appId: "1:1098490301086:web:2a82c5f8bb6d7329f2c98f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection in Firebase
var messagesRef = firebase.database().ref('messages');

// contactForm: Listen for form submit. Getting the ID contactForm and adding an event listener to the 'submit' button when submitForm activates.

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Creating a function called submitForm that has an eventListener asssigned to it. When you submit the form, the function saveMessage will save what is inputed into the fields

function submitForm(e){
    e.preventDefault();

    // Getting the values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(fname, lname, company, email, phone, message);

    //Show alert when submitting
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    
    // Clears the form
    document.getElementById('contactForm').reset();
}

// Creating a function to get form values. I don't have to keep writting document.getElementById for each field.

function getInputVal(id) {
    return document.getElementById(id).value;
    // I just want the value that's put into the field.
}

// Creating a function that sends an object of data to my messages collection in Firebase.

function saveMessage(fname, lname, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        lname:lname,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}



// Hamburger menu
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