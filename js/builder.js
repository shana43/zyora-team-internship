const form = document.getElementById("builderForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName");
        const profession = document.getElementById("profession");
        const email = document.getElementById("builderEmail");
        const about = document.getElementById("about");
        const skills = document.getElementById("skills");
        const projects = document.getElementById("projects");

        if (fullName.value.trim() === "") {
            alert("Please enter your name.");
            fullName.focus();
            return;
        }

        if (profession.value.trim() === "") {
    alert("Please enter your profession.");

    setTimeout(() => {
        profession.focus();
    }, 100);

    return;
}
if (email.value.trim() === "") {
    alert("Please enter your email.");

    setTimeout(() => {
        email.focus();
    }, 100);

    return;
}

        if (about.value.trim() === "") {
            alert("Please enter your About Me.");
            setTimeout(() => {
            about.focus();
            }, 100);
            return;
        }

        if (skills.value.trim() === "") {
            alert("Please enter your skills.");
            setTimeout(() => {
            skills.focus();
            }, 100);
            return;
        }

        if (projects.value.trim() === "") {
            alert("Please enter your projects.");
            setTimeout(() => {
                projects.focus();
            }, 100);
            return;
        }
        // Save form data to localStorage
localStorage.setItem("fullName", fullName.value);
localStorage.setItem("profession", profession.value);
localStorage.setItem("builderEmail", email.value);
localStorage.setItem("about", about.value);
localStorage.setItem("skills", skills.value);
localStorage.setItem("projects", projects.value);

        alert("Portfolio saved successfully!");
        fullName.focus();
    });
}
// ===============================
// Restore saved form data
// ===============================

window.addEventListener("load", function () {

    if (localStorage.getItem("fullName")) {
        document.getElementById("fullName").value = localStorage.getItem("fullName");
    }

    if (localStorage.getItem("profession")) {
        document.getElementById("profession").value = localStorage.getItem("profession");
    }

    if (localStorage.getItem("builderEmail")) {
        document.getElementById("builderEmail").value = localStorage.getItem("builderEmail");
    }

    if (localStorage.getItem("about")) {
        document.getElementById("about").value = localStorage.getItem("about");
    }

    if (localStorage.getItem("skills")) {
        document.getElementById("skills").value = localStorage.getItem("skills");
    }

    if (localStorage.getItem("projects")) {
        document.getElementById("projects").value = localStorage.getItem("projects");
    }

});