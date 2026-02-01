const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const gifPage = document.getElementById("gifPage");

/* YES CLICK */
yesBtn.addEventListener("click", () => {

    // show GIF page
    main.classList.add("hidden");
    gifPage.classList.remove("hidden");

    // Confetti blast
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
});

/* NO BUTTON RUN AWAY */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position="absolute";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";
});

/* Falling hearts generator */
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="❤️";

    heart.style.left = Math.random()*100+"vw";
    heart.style.animationDuration = (3+Math.random()*2)+"s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{ heart.remove(); },5000);
}

setInterval(createHeart, 300);