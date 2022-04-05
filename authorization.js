async function getUserData() {
    const response = await fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("discord_token")}`
        }
    })
    const result = await response.json();
    return result
};


