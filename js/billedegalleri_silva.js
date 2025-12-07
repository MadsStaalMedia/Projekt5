const billeder = ["img/silva/silva_1.webp","img/silva/silva_2.webp","img/silva/silva_3.webp"];

let prikviser = document.getElementById("carousel_prikkerSilva");
let billedeviser = document.getElementById("carousel_billedeSilva");

for (let i = 0; i < billeder.length; i++) {
     prikviser.innerHTML += "<div class='carousel_prikSilva'></div>";
    billedeviser.innerHTML += "<img class='carousel_billedeSilva fade' src="+billeder[i]+">";
}

const slides = document.getElementsByClassName("carousel_billedeSilva");
const prikker = document.getElementsByClassName("carousel_prikSilva");

//Start: vist første billede og gør første prik aktiv

let billedenummer = 0;

for(let i= 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[0].style.display = "block";
prikker[0]. classList.toggle("active");

// Pile 
function gaFremSilva() {
    slides[billedenummer].style.display = "none";
    prikker[billedenummer].classList.toggle("active");
    if (billedenummer < slides.length -1) {
        billedenummer++;   //gå et frem 
    } else {
        billedenummer = 0; // hvis vi er ved sidste - start forfra
    }
    skiftbillede(billedenummer);
}

function gaTilbageSilva() {
    slides[billedenummer].style.display = "none";
    prikker[billedenummer].classList.toggle("active");
    if (billedenummer > 0) {
        billedenummer--;     //gå et tilbage 
    } else {
        billedenummer = slides.length - 1; //hvis vi er ved første - gå til sidste 
}
skiftbillede(billedenummer);
}

function skiftbillede(x) {
    slides[x].style.display = "block";
    prikker[x].classList.toggle("active");

}





