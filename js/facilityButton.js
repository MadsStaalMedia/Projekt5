const facilityButton = document.getElementsByClassName("facilityButton");

for (i = 0; i < facilityButton.length ; i++) {
    facilityButton[i].addEventListener("click", function(){
        window.location = "faciliteter.html";
    });
}