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
  { href: "book.html", title: "Book" }
];

// Loop til at vise menu-punkterne (DOM-manipulation)
for (let i = 0; i < menuPunkter.length; i++) {
  const punkt = menuPunkter[i];
  menuContainer.innerHTML +=
    "<a href='" + punkt.href + "'>" + punkt.title + "</a>";
}

// Funktion med if/else (kontrolstruktur)
function visMenu(vis) {
  if (vis) {
    overlay.style.height = "100%";       // åbner overlay
    document.body.style.overflow = "hidden"; 
  } else {
    overlay.style.height = "0%";         // lukker overlay
    document.body.style.overflow = "auto";
  }
}

// Event listeners (JS → HTML)
knapOpn.addEventListener("click", function() {
  visMenu(true);
});

knapLuk.addEventListener("click", function() {
  visMenu(false);
});