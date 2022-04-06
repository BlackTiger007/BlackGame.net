const timeTilLogin = localStorage.getItem("discord_expires") - Math.floor(Date.now() / 1000);

if (timeTilLogin <= 0) {
    console.log("Bitte Einloggen")
    document.getElementById("login-platzhalter").hidden = true;
    document.getElementById("login-button").hidden = false;
} else {

    getUserData().then(UserData => {
        document.getElementById("avatar").src = `https://cdn.discordapp.com/avatars/${UserData.id}/${UserData.avatar}.webp`
        document.getElementById("username").innerText = UserData.username;
        document.getElementById("login-platzhalter").hidden = true;
        document.getElementById("login-user").hidden = false;
        document.getElementById("login-button").hidden = true;
    })
}