const billederSilva = ["img/silva/silva_1.webp","img/silva/silva_2.webp","img/silva/silva_3.webp"];

let prikviserSilva = document.getElementById("carousel_prikkerSilva");
let billedeviserSilva = document.getElementById("carousel_billedeSilva");

for (let i = 0; i < billeder.length; i++) {
    prikviserSilva.innerHTML += "<div class='carousel_prikSilva'></div>";
    billedeviserSilva.innerHTML += "<img class='carousel_billedeSilva fade' src="+billederSilva[i]+">";
}

const slidesSilva = document.getElementsByClassName("carousel_billedeSilva");
const prikkerSilva = document.getElementsByClassName("carousel_prikSilva");

//Start: vist første billede og gør første prik aktiv

let billedenummerSilva = 0;

for(let i= 0; i < slidesSilva.length; i++) {
    slidesSilva[i].style.display = "none";
}
slidesSilva[0].style.display = "block";
prikkerSilva[0]. classList.toggle("active");

// Pile 
function gaFremSilva() {
    slidesSilva[billedenummerSilva].style.display = "none";
    prikkerSilva[billedenummerSilva].classList.toggle("active");
    if (billedenummerSilva < slidesSilva.length -1) {
        billedenummerSilva++;   //gå et frem 
    } else {
        billedenummerSilva = 0; // hvis vi er ved sidste - start forfra
    }
    skiftbilledeSilva(billedenummerSilva);
}

function gaTilbageSilva() {
    slidesSilva[billedenummerSilva].style.display = "none";
    prikkerSilva[billedenummerSilva].classList.toggle("active");
    if (billedenummerSilva > 0) {
        billedenummerSilva--;     //gå et tilbage 
    } else {
        billedenummerSilva = slidesSilva.length - 1; //hvis vi er ved første - gå til sidste 
}
skiftbilledeSilva(billedenummerSilva);
}

function skiftbilledeSilva(x) {
    slidesSilva[x].style.display = "block";
    prikkerSilva[x].classList.toggle("active");

}





