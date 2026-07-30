const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.focus();
        return;
    }

    if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        return;
    }

    alert("Form submitted successfully!");

    // Clear the form after successful submission
    form.reset();

    // Put the cursor back in the Name field
    name.focus();
});
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.style.backgroundcolor="black";
        document.body.style.color="white";

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Light Mode";
        } else {
            themeBtn.textContent = "Dark Mode";
        }
    });
}
// Dark Mode / Light Mode

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } 
        else {
            themeBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }

    });

}


// Keep selected theme after refresh

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    if (themeBtn) {
        themeBtn.textContent = "☀️ Light Mode";
    }

}
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.onclick = function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.innerHTML = "☀️ Light Mode";
        } else {
            themeBtn.innerHTML = "🌙 Dark Mode";
        }
    };
}
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️ Light Mode";
        } else {
            themeBtn.textContent = "🌙 Dark Mode";
        }

    });
}
