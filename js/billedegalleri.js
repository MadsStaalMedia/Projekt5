const billeder = ["billeder/carousel/carousel1.webp","billeder/carousel/carousel2.webp","billeder/carousel/carousel3.webp"];

let prikviser = document.getElementById("carousel_prikker");
let billedeviser = document.getElementById("carousel_billede");

for (let i = 0; i < billeder.length; i++) {
    prikviser.innerHTML += "<div class='carousel_prik' onclick='skiftbillede("+i+")'></div>";
    billedeviser.innerHTML += "<img class='carousel_billede fade' src="+billeder[i]+">";
}

const slides = document.getElementsByClassName("carousel_billede");
const prikker = document.getElementsByClassName("carousel_prik");

slides[0].style.display = "block";

let billedenummer = 0;

function skiftbillede(x) {

    for (i = 0; i < prikker.length; i++) {
        prikker[i].classList.remove("active");
        slides[i].style.display = "none";
    }

    billedenummer = x;

    prikker[x].classList.toggle("active");

    slides[x].style.display = "block";
}
