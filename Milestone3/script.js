//Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Hadle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prvent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3><Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p><b>Education:</b>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p><b>Experience:</b>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b>").concat(skills, "</p>\n    ");
    // Display the generated reume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume disply element is missing');
    }
});
