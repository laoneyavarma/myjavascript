//const colors=["yellow","green","red","blue","black","orange","pink","brown","grey","navyblue","darkgreen"];

const contnrElement=document.getElementById("clr-container");
const flipbtnElement = document.getElementById("flip-btn");

function randomColor(){
    const pickupcolors = ["#" + Math.floor(Math.random() * 16777215).toString(16)];
    return pickupcolors
}

function clrflipper(){
    const flipColor = randomColor();
    contnrElement.style.backgroundColor=flipColor;

}
 flipbtnElement.addEventListener("click",clrflipper);