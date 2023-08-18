let imgElement=document.getElementById("imagesize");
let plusbtnElement=document.getElementById("incre");
let minusbtnElement=document.getElementById("decre");

function plussize(){
    const currentwidth=parseInt(getComputedStyle(imgElement).width);
    imgElement.style.width=parseInt(currentwidth + 5)+"px";
}
plusbtnElement.addEventListener("click",plussize)

function minussize(){
    const currentwidth=parseInt(getComputedStyle(imgElement).width);
    imgElement.style.width=parseInt(currentwidth - 5)+"px";
}
minusbtnElement.addEventListener("click",minussize);
