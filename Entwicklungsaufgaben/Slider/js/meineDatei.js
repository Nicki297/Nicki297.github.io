"use strict";
let redslider = document.getElementById("redslider");
let blueslider = document.getElementById("blueslider");
let greenslider = document.getElementById("greenslider");
redslider.addEventListener("input", () => {change_Color()});
blueslider.addEventListener("input", () => {change_Color()});
greenslider.addEventListener("input", () => {change_Color()});

function change_Color() {
    let red = redslider.value;
    let blue = blueslider.value;
    let green = greenslider.value;
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("red").innerHTML=red;
    document.getElementById("green").innerHTML=green;
    document.getElementById("blue").innerHTML=blue;
}
window.addEventListener("load", () => {change_Color()});