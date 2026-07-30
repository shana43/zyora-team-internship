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
            profession.focus();
            return;
        }

        if (email.value.trim() === "") {
            alert("Please enter your email.");
            email.focus();
            return;
        }

        if (about.value.trim() === "") {
            alert("Please enter your About Me.");
            about.focus();
            return;
        }

        if (skills.value.trim() === "") {
            alert("Please enter your skills.");
            skills.focus();
            return;
        }

        if (projects.value.trim() === "") {
            alert("Please enter your projects.");
            projects.focus();
            return;
        }

        alert("Portfolio saved successfully!");

        form.reset();
        fullName.focus();
    });
}