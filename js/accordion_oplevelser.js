const acc = document.getElementsByClassName("accordion__button");

for (let i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        this.classList.toggle("expanded");

        let wrapper = this.closest(".accordion__section")
        let pan = wrapper.nextElementSibling;

        if (pan.style.maxHeight) {
            pan.style.maxHeight = "";
        } else {
            pan.style.maxHeight = pan.scrollHeight + "px";
        }
    });
}

//Kilder & inspiration
//https://www.w3schools.com/howto/howto_js_accordion.asp - How to create an accordion (hentet d. 11 december 2025)