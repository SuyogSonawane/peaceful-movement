function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "evening"; // change this if you want

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
            document.getElementById("slideshow").style.display = "none";
            showQuestion();
            return;
        }

        slides[index].classList.add("active");

    }, 3500);
}

function showQuestion() {
    const question = document.getElementById("question-screen");
    question.style.display = "flex";

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let scale = 1;

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * 250 - 125;
        const y = Math.random() * 200 - 100;

        noBtn.style.position = "relative";
        noBtn.style.transform = `translate(${x}px, ${y}px)`;

        scale += 0.1;
        yesBtn.style.transform = `scale(${scale})`;
    });

    yesBtn.addEventListener("click", () => {
        showFinalMessage();
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
        ">
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
                I love you Bayboo.
            </p>
        </div>
    `;
}
