function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "evening";

    if (password === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error").innerText = "Incorrect password.";
    }
}
