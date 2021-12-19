var cel = document.getElementById("celcius");
var fah = document.getElementById("fahrenheit");
var kel = document.getElementById("kelvin");

var fahr , kelv , celc;

cel.addEventListener("input",

    function(e)
    {
        c = e.target.value

        fahr = (c * 9 / 5)+32 ;
        if(!Number.isInteger(fahr)){
            fahr = fahr.toFixed(3);
        }
        fah.value=fahr;

        kelv = (Number(c)+273) ;
        if(!Number.isInteger(kelv)){
            kelv = kelv.toFixed(3);
        }
        kel.value=kelv;

});

fah.addEventListener("input",

    function(e)
    {
        f = e.target.value;

        celc = (f-32)/(1.8);
        if(!Number.isInteger(celc)){
            celc = celc.toFixed(3);
        }
        cel.value=celc;

        kelv=(( (f-32)*5/9) + 273.15) ;
        if(!Number.isInteger(kelv)){
            kelv = kelv.toFixed(3);
        }
        kel.value=kelv;  

});


kel.addEventListener("input",

    function(e)
    {
        k=e.target.value;

        celc= Number(k)-273 ;
        if(!Number.isInteger(celc)){
            celc = celc.toFixed(3);
        }
        cel.value=celc;

        fahr=(((k-273.15)*9/5)+32);
        if(!Number.isInteger(fahr)){
            fahr = fahr.toFixed(3);
        }
        fah.value=fahr;

});

//////////////////////////////////////////////////////////////////////////////////////////

var root = document.querySelector(":root");

var green=document.getElementById("green");
var pink=document.getElementById("pink");
var light=document.getElementById("light");
var dark=document.getElementById("dark");
var nav = document.getElementById("nav");


dark.addEventListener("click" , 


function(){
    root.style.setProperty("--lightest" , "rgb(71, 65, 65) ");
    root.style.setProperty("--lighter" , "#5454c5 ");
    root.style.setProperty("--light" , "#342056 ");
    root.style.setProperty("--dark" , "#220e24 ");
    root.style.setProperty("--text_color" , "white");
    nav.style.backgroundColor="rgb(71, 65, 65) ";

    dark.style.backgroundColor="rgb(209, 182, 133)"
    pink.style.backgroundColor="rgb(209, 182, 133)"
    light.style.backgroundColor="rgb(209, 182, 133)"
    green.style.backgroundColor="rgb(209, 182, 133)"

});

green.addEventListener("click" , 

function(){
    root.style.setProperty("--lightest" , "#b7e9af ");
    root.style.setProperty("--lighter" , "#a3cd9e ");
    root.style.setProperty("--light" , "#529471 ");
    root.style.setProperty("--dark" , "#35635b ");
    root.style.setProperty("--text_color" , "black ");
    nav.style.backgroundColor="#b7e9af";

    dark.style.backgroundColor="#b7e9af"
    pink.style.backgroundColor="#b7e9af"
    light.style.backgroundColor="#b7e9af"
    green.style.backgroundColor="#b7e9af"

});

pink.addEventListener("click" , 

function(){
    root.style.setProperty("--lightest" , "#facbd3 ");
    root.style.setProperty("--lighter" , "#ca9dd7 ");
    root.style.setProperty("--light" , "#d789d7 ");
    root.style.setProperty("--dark" , "#9d65c9 ");
    root.style.setProperty("--text_color" , "black ");
    nav.style.backgroundColor="#facbd3";

    dark.style.backgroundColor="#facbd3"
    pink.style.backgroundColor="#facbd3"
    light.style.backgroundColor="#facbd3"
    green.style.backgroundColor="#facbd3"

});

light.addEventListener("click" , 

function(){
    root.style.setProperty("--lightest" , "#f1f4c6");
    root.style.setProperty("--lighter" , "#d6d0b8 ");
    root.style.setProperty("--light" , "#eeedbe ");
    root.style.setProperty("--dark" , "#facbd3 ");
    root.style.setProperty("--text_color" , "black ");
    nav.style.backgroundColor="#f1f4c6";

    dark.style.backgroundColor="#f1f4c6"
    pink.style.backgroundColor="#f1f4c6"
    light.style.backgroundColor="#f1f4c6"
    green.style.backgroundColor="#f1f4c6"

});

