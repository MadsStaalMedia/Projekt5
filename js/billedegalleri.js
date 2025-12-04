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
//Start: vist første billede og gør første prik aktiv

let billedenummer = 0;

for(let i= 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[0].style.display = "block";
prikker[0]. classList.add("active");

// Pile 
function gaFrem() {
    if (billedenummer < slides.length - 1) {
        billedenummer++;   //gå et frem 
    } else {
        billedenummer = 0; // hvis vi er ved sidste - start forfra
    }
    skiftbillede(billedenummer);
}

function gaTilbage() {
    if (billedenummer > 0) {
        billedenummer--;     //gå et tilbage 
    } else {
        billedenummer = slides.length - 1; //hvis vi er ved første - gå til sidste 
}

skiftbillede(billedenummer);




//Gammel kode function skiftbillede(x) {

    for (i = 0; i < prikker.length; i++) {
        prikker[i].classList.remove("active");
        slides[i].style.display = "none";
    }

    billedenummer = x;

    prikker[x].classList.toggle("active");

    slides[x].style.display = "block";
}
