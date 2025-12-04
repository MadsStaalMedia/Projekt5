const header = document.getElementById("header");

header.innerHTML = `
    <div class="header__button" id="burgerKnap">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path d="M3.5 7V5.5H20.5V7H3.5ZM3.5 18.5V17H20.5V18.5H3.5ZM3.5 12.75V11.25H20.5V12.75H3.5Z" fill="white"/>
        </svg>
    </div>

    <div id="myNav" class="overlay">
        <span class="closebtn" id="krydsKnap">&times;</span>
        <div id="menuContainer" class="overlay-content"></div>
    </div>

    <div class="header__logo">TEST</div>
`;


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