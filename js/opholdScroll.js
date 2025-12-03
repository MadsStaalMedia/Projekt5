const tentIcons = document.getElementsByClassName("tentIcon");

const tentButtons = document.getElementById("tentButtons");

const tentScroll = [
{ href:"ophold.html#silva", title:"Vis Silva →", id:"silvaScroll" },
{ href:"ophold.html#aqua", title:"Vis Aqua →", id:"aquaScroll" },
{ href:"ophold.html#terra", title:"Vis Terra →", id:"terraScroll" }
];

for (i = 0; i < tentScroll.length; i++) {

    tentButtons.innerHTML += '<div id="'+tentScroll[i].id+'">';

    let scrollArea = document.getElementById(tentScroll[i].id);

    scrollArea.innerHTML += tentIcons[i].innerHTML;
    scrollArea.innerHTML += '<p><a href='+tentScroll[i].href+'>'+tentScroll[i].title+'</a></p>'

}