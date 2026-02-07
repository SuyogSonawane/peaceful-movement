function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "2801"; // change if needed

    if (password === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("slideshow").style.display = "flex";
        startSlideshow();
    } else {
        document.getElementById("error").innerText = "Incorrect password.";
    }
}

function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    slides[0].classList.add("active");

    const interval = setInterval(() => {
        slides[index].classList.remove("active");
        index++;

        if (index >= slides.length) {
            clearInterval(interval);
            fadeToQuestion();
            return;
        }

        slides[index].classList.add("active");

    }, 3500);
}

function fadeToQuestion() {
    const slideshow = document.getElementById("slideshow");
    slideshow.style.opacity = "0";

    setTimeout(() => {
        slideshow.style.display = "none";
        showQuestion();
    }, 800);
}

function showQuestion() {
    const question = document.getElementById("question-screen");
    question.style.display = "flex";
    question.style.opacity = "0";

    setTimeout(() => {
        question.style.transition = "opacity 1s ease";
        question.style.opacity = "1";
    }, 50);

    setupButtons();
}

function setupButtons() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const questionText = document.querySelector("#question-screen h1");

    let scale = 1;
    let noScale = 1;
    let noClicks = 0;

    const responses = [
        "Are you absolutely sure?",
        "I’ll still ask again.",
        "You know the right answer.",
        "I can wait… but not forever."
    ];

    // Desktop hover dodge
    noBtn.addEventListener("mouseover", () => {
        if (window.innerWidth > 768) {
            const x = Math.random() * 250 - 125;
            const y = Math.random() * 200 - 100;
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Mobile / Tap interaction
    noBtn.addEventListener("click", () => {
        noClicks++;

        if (noClicks <= responses.length) {
            questionText.innerText = responses[noClicks - 1];
        }

        scale += 0.12;
        noScale -= 0.08;

        yesBtn.style.transform = `scale(${scale})`;
        noBtn.style.transform = `scale(${noScale})`;
        noBtn.style.opacity = 0.8;
    });

    yesBtn.addEventListener("click", () => {
        showFinalMessage();
        launchConfetti();
    });
}

function showFinalMessage() {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:#f6f1e7;
            font-family:'Playfair Display', serif;
            text-align:center;
            opacity:0;
            transition:opacity 1.2s ease;
        " id="finalScreen">
            <h1 style="font-size:52px; letter-spacing:1px;">
                You just made me the happiest man alive.
            </h1>
            <p style="
                margin-top:25px;
                font-family:'Inter', sans-serif;
                font-size:18px;
                font-weight:300;
                letter-spacing:1px;
            ">
                I love you.
            </p>
        </div>
    `;

    setTimeout(() => {
        document.getElementById("finalScreen").style.opacity = "1";
    }, 50);
}

function launchConfetti() {
    const colors = ["#e8dfcf", "#d6c7b0", "#f3ece0", "#cbbba4"];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = "-10px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.opacity = 0.9;
        confetti.style.borderRadius = "50%";
        confetti.style.zIndex = 9999;

        document.body.appendChild(confetti);

        const fallDuration = 2000 + Math.random() * 2000;

        confetti.animate([
            { transform: `translateY(0px) rotate(0deg)` },
            { transform: `translateY(${window.innerHeight}px) rotate(360deg)` }
        ], {
            duration: fallDuration,
            easing: "ease-out"
        });

        setTimeout(() => {
            confetti.remove();
        }, fallDuration);
    }
}
