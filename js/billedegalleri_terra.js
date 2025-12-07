const billederTerra = ["img/terra/terra_1.webp","img/terra/terra_2.webp","img/terra/terra_3.webp"];

let prikviserTerra = document.getElementById("carousel_prikkerTerra");
let billedeviserTerra = document.getElementById("carousel_billedeTerra");

for (let i = 0; i < billeder.length; i++) {
    prikviserTerra.innerHTML += "<div class='carousel_prikTerra'></div>";
    billedeviserTerra.innerHTML += "<img class='carousel_billedeTerra fade' src="+billederTerra[i]+">";
}

const slidesTerra = document.getElementsByClassName("carousel_billedeTerra");
const prikkerTerra = document.getElementsByClassName("carousel_prikTerra");

//Start: vist første billede og gør første prik aktiv

let billedenummerTerra = 0;

for(let i= 0; i < slidesTerra.length; i++) {
    slidesTerra[i].style.display = "none";
}
slidesTerra[0].style.display = "block";
prikkerTerra[0]. classList.toggle("active");

// Pile 
function gaFremTerra() {
    slidesTerra[billedenummerTerra].style.display = "none";
    prikkerTerra[billedenummerTerra].classList.toggle("active");
    if (billedenummerTerra < slidesTerra.length -1) {
        billedenummerTerra++;   //gå et frem 
    } else {
        billedenummerTerra = 0; // hvis vi er ved sidste - start forfra
    }
    skiftbilledeTerra(billedenummerTerra);
}

function gaTilbageTerra() {
    slidesTerra[billedenummerTerra].style.display = "none";
    prikkerTerra[billedenummerTerra].classList.toggle("active");
    if (billedenummerTerra > 0) {
        billedenummerTerra--;     //gå et tilbage 
    } else {
        billedenummerTerra = slidesTerra.length - 1; //hvis vi er ved første - gå til sidste 
}
skiftbilledeTerra(billedenummerTerra);
}

function skiftbilledeTerra(x) {
    slidesTerra[x].style.display = "block";
    prikkerTerra[x].classList.toggle("active");

}





