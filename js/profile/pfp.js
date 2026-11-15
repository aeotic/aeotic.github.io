const discordid = "1380188448702332931";
async function getDiscordAvatar() {
    try {
        const response = await fetch(
            `https://api.lanyard.rest/v1/users/${discordid}`
        );
        const result = await response.json();
        if (!result.success) return;
        const user = result.data.discord_user;
        const avatar = user.avatar
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith("a_") ? "gif" : "png"}?size=512`
            : `https://cdn.discordapp.com/embed/avatars/0.png`;

        document.getElementById("discord-avatar").src = avatar;
    } catch (error) {
        console.error("Failed to load Discord avatar:", error);
    }
}
getDiscordAvatar();