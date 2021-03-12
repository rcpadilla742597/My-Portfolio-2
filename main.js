// This code work well for a company that needs to retrieve data from using an API

async function postContactForm(fname, lname, company, email, phone, message) {
    const response = await fetch("https://contactform-portfolio-65fc3-default-rtdb.firebaseio.com/messages.json", {
        method: "POST",
        body: JSON.stringify({
            fname: fname,
            lname: lname,
            company: company,
            email: email,
            phone: phone,
            message: message
        })
    })
}

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Creating a function called submitForm that has an eventListener asssigned to it. When you submit the form, the function saveMessage will save what is inputed into the fields

function submitForm(e) {
    e.preventDefault();

    // Getting the values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    postContactForm(fname, lname, company, email, phone, message);

    // Show alert when submit
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clears the form after submission
    document.getElementById('contactForm').reset();
}




// Creating a function to get form values. I don't have to keep writting document.getElementById for each field.

function getInputVal(id) {
    return document.getElementById(id).value;
    // I just want the value that's put into the field.
}




// Hamburger menu
const hamburger = document.querySelector('.hamburger'); /* Matches the first element within the document that matches the specified selector. I am setting hamburger to the querySelector */
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li'); /* Selects all of the links */

/* Adding the opening transition */

hamburger.addEventListener('click', () => { /*  Adds an event listener of click to the query selector hamburger */
    navLinks.classList.toggle("open"); /* I created this open in css */
    /* adding fade class to links */
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});