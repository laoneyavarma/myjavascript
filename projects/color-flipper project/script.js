const colors=["yellow","green","red","blue","black","orange","pink","brown","grey","navyblue","darkgreen"];

const contnrElement=document.getElementById("clr-container");
const flipbtnElement = document.getElementById("flip-btn");

function randomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function clrflipper(){
    const flipColor = randomColor();
    contnrElement.style.backgroundColor=flipColor;

}
 flipbtnElement.addEventListener("click",clrflipper);