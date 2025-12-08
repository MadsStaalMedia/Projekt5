const billederCaelum = ["img/caelum/caelum_1.webp","img/caelum/caelum_2.webp","img/caelum/caelum_3.webp"];

let prikviserCaelum = document.getElementById("carousel_prikkerCaelum");
let billedeviserCaelum = document.getElementById("carousel_billedeCaelum");

for (let i = 0; i < billeder.length; i++) {
    prikviserCaelum.innerHTML += "<div class='carousel_prikCaelum'></div>";
    billedeviserCaelum.innerHTML += "<img class='carousel_billedeCaelum fade' src="+billederCaelum[i]+">";
}

const slidesCaelum = document.getElementsByClassName("carousel_billedeCaelum");
const prikkerCaelum = document.getElementsByClassName("carousel_prikCaelum");

//Start: vist første billede og gør første prik aktiv

let billedenummerCaelum = 0;

for(let i= 0; i < slidesCaelum.length; i++) {
    slidesCaelum[i].style.display = "none";
}
slidesCaelum[0].style.display = "block";
prikkerCaelum[0]. classList.toggle("active");

// Pile 
function gaFremCaelum() {
    slidesCaelum[billedenummerCaelum].style.display = "none";
    prikkerCaelum[billedenummerCaelum].classList.toggle("active");
    if (billedenummerCaelum < slidesCaelum.length -1) {
        billedenummerCaelum++;   //gå et frem 
    } else {
        billedenummerCaelum = 0; // hvis vi er ved sidste - start forfra
    }
    skiftbilledeCaelum(billedenummerCaelum);
}

function gaTilbageCaelum() {
    slidesCaelum[billedenummerCaelum].style.display = "none";
    prikkerCaelum[billedenummerCaelum].classList.toggle("active");
    if (billedenummerCaelum > 0) {
        billedenummerCaelum--;     //gå et tilbage 
    } else {
        billedenummerCaelum = slidesCaelum.length - 1; //hvis vi er ved første - gå til sidste 
}
skiftbilledeCaelum(billedenummerCaelum);
}

function skiftbilledeCaelum(x) {
    slidesCaelum[x].style.display = "block";
    prikkerCaelum[x].classList.toggle("active");

}





