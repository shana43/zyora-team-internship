// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

if (form) {
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

        form.reset();
        name.focus();
    });
}

// ===============================
// Dark Mode / Light Mode
// ===============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // Restore saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }

    });

}

// ===============================
// Fetch Sample Portfolio Data
// ===============================

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const portfolioList = document.getElementById("portfolioList");

if (loading && error && portfolioList) {

    loading.style.display = "block";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {

            loading.style.display = "none";

            data.slice(0, 5).forEach(user => {

                portfolioList.innerHTML += `
                    <div class="card">
                        <h3>${user.name}</h3>
                        <p>${user.email}</p>
                    </div>
                `;

            });

        })
        .catch(() => {

            loading.style.display = "none";
            error.textContent = "Unable to load portfolio data.";

        });

}