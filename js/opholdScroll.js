const language = navigator.language

const tentIcons = document.getElementsByClassName("tentIcon");

const tentButtons = document.getElementById("tentButtons");

const tentScroll = [
{ href:"ophold.html#silva", datitle:"Vis Silva →", entitle:"Show Silva →", id:"silvaScroll" },
{ href:"ophold.html#aqua", datitle:"Vis Aqua →", entitle:"Show Aqua →", id:"aquaScroll" },
{ href:"ophold.html#terra", datitle:"Vis Terra →", entitle:"Show Terra →", id:"terraScroll" }
];

for (i = 0; i < tentScroll.length; i++) {

    tentButtons.innerHTML += '<div id="'+tentScroll[i].id+'">';

    let scrollArea = document.getElementById(tentScroll[i].id);

    scrollArea.innerHTML += tentIcons[i].innerHTML;

    console.log(language)

    if (language == "en-US" || "en") {
        scrollArea.innerHTML += '<p><a href='+tentScroll[i].href+'>'+tentScroll[i].entitle+'</a></p>'
    } else {
        scrollArea.innerHTML += '<p><a href='+tentScroll[i].href+'>'+tentScroll[i].datitle+'</a></p>'
    }

}