// overlay menu fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay2
// inspiration til javascript fra tidelligere projekt i dropdown https://github.com/MadsStaalMedia/Projekt4
// tilpasset med hjælp fra chatGPT se bilag: "Mikkel hjælp chatGPT overlay menu"
const header = document.getElementById("header");

// Variabler og typer
const overlay = document.getElementById("myNav");
const menuContainer = document.getElementById("menuContainer");
const knapOpn = document.getElementById("burgerKnap");
const knapLuk = document.getElementById("krydsKnap");

// Arrays + objekter
const menuPunkter = [
  { href: "index.html", title: "Hjem" },
  { href: "ophold.html", title: "Ophold" },
  { href: "faciliteter.html", title: "Faciliteter" },
  { href: "oplevelser.html", title: "Oplevelser" },
  { href: "eventsal.html", title: "Eventsal" },
  { href: "kontakt.html", title: "Kontakt" },
  { href: "#", title: "Book" }
];

// Loop til menu-punkterne
for (let i = 0; i < menuPunkter.length; i++) {
  const punkt = menuPunkter[i];

// menu aktivering 
  let link__valgt = "";
  if (window.location.pathname.indexOf(punkt.href) !== -1) {
    link__valgt = " dropdown__link--valgt";
  }
  
  menuContainer.innerHTML +=
    "<a href='" + punkt.href + "' class='dropdown__link" + link__valgt + "'>" + punkt.title + "</a>";
}


// Funktion med if/else for overlay menu 
function visMenu(vis) {
  if (vis) {
    overlay.style.height = "100%";       // åbner overlay
    document.body.style.overflow = "hidden"; 
  } else {
    overlay.style.height = "0%";         // lukker overlay
    document.body.style.overflow = "auto";
  }
}

// Event listeners funktion reaktion 
knapOpn.addEventListener("click", function() {
  visMenu(true);
});

knapLuk.addEventListener("click", function() {
  visMenu(false);
});