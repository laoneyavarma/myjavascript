let befrbtnElement=document.getElementById("nochanges");
let aftrbtnElement=document.getElementById("changesapply");

function beforechange(){
    befrbtnElement.textContent="NO CHANGES HERE";
}
befrbtnElement.addEventListener("click",beforechange);

function afterchanges(){
    aftrbtnElement.style.backgroundColor="green";
    aftrbtnElement.style.fontSize="40px";
    aftrbtnElement.style.color="yellow";
    aftrbtnElement.style.fontWeight="bold";
    aftrbtnElement.style.borderRadius="8px";
    aftrbtnElement.style.padding="2px";

}
aftrbtnElement.addEventListener("click",afterchanges);






