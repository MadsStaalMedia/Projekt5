const bookButton = document.getElementsByClassName("book");

for (i = 0; i < bookButton.length ; i++) {
    bookButton[i].addEventListener("click", function(){
        window.location = "booking.html";
    });
}