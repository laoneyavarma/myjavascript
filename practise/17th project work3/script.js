let divhomeElement=document.getElementById("HOME");
let homeElement=document.getElementById("home");

let divimgElement=document.getElementById("IMAGE");
let imageElement=document.getElementById("img");

let divcityElement=document.getElementById("CITY");
let cityElement=document.getElementById("city");

let headingElement=document.querySelector("h1");
let paragraphElement=document.querySelector("p1");

let headElement=document.querySelector("h2");
let paraElement=document.querySelector("p2");

let hingElement=document.querySelector("h3");
let pgraphElement=document.querySelector("p3");


function addhome(){
    homeElement.style.opacity=5;
    imageElement.style.opacity=0.5;
    cityElement.style.opacity=0.5;
    headingElement.style.visibility="visible";
    paragraphElement.style.visibility="visible";

    hingElement.style.visibility="hidden";
    pgraphElement.style.visibility="hidden";

    headElement.style.visibility=" hidden";
    paraElement.style.visibility="hidden";
}
homeElement.addEventListener("click",addhome);

function addimage(){
    imageElement.style.opacity=5;
    homeElement.style.opacity=0.5;
    cityElement.style.opacity=0.5;
    headElement.style.visibility="visible";
    paraElement.style.visibility="visible";

    headingElement.style.visibility="hidden";
    paragraphElement.style.visibility="hidden";

    hingElement.style.visibility="hidden";
    pgraphElement.style.visibility="hidden";
}
imageElement.addEventListener("click",addimage);

function addcity(){
    cityElement.style.opacity=5;
    imageElement.style.opacity=0.5;
    homeElement.style.opacity=0.5;
    hingElement.style.visibility="visible";
    pgraphElement.style.visibility="visible";

    headElement.style.visibility=" hidden";
    paraElement.style.visibility="hidden";

    headingElement.style.visibility="hidden";
    paragraphElement.style.visibility="hidden";
}
cityElement.addEventListener("click",addcity);