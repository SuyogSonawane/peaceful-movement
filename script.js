function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "evening";

    if (password === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        startSlideshow();
    } else {
        document.getElementById("error").innerText = "Incorrect password.";
    }
}

function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    const interval = setInterval(() => {
        slides[index].classList.remove("active");
        index++;

        if (index >= slides.length) {
            clearInterval(interval);
            document.getElementById("slideshow").style.display = "none";
            document.getElementById("question-screen").style.display = "block";
            return;
        }

        slides[index].classList.add("active");

    }, 3500);
}
