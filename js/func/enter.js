const enterScreen = document.getElementById("enter-screen");
const music = document.querySelector("audio");
let entered = false;
async function enterSite() {
    if (entered) return;
    entered = true;
    enterScreen.classList.add("leaving");
    if (music) {
        music.volume = 0.7;
        try {
            await music.play();
        } catch (error) {
            console.warn("%c[%ERR%c] Music could not start:", "color: white;", "color: red;", "color: white;", error);
        }
    }
    enterScreen.addEventListener("transitionend", () => {
        enterScreen.remove();
    }, { once: true });
    setTimeout(() => enterScreen.remove(), 1000);
}
enterScreen.addEventListener("click", enterSite);
enterScreen.addEventListener("keydown", event => {
    
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterSite();
    }
    
});
console.log("%c[%cLOG%c] Loaded Assets Successfully", "color: white;", "color: red;", "color: white;");