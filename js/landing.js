// ==============================
// Typing Animation
// ==============================

const text =
"AI & Data Science Students • Web Developer •";

let index = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,60);

    }

}

window.onload = typeEffect;


// ==============================
// Enter Portfolio Button
// ==============================

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click",()=>{

    document.body.style.transition="opacity .8s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="portfolio.html";

    },800);

});