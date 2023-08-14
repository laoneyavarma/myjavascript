
/*let headingElement = document.createElement("h1");
headingElement.textContent="Hello world!";
document.body.appendChild(headingElement);

let paragraphElement = document.createElement("p");
paragraphElement.textContent="welcome to javascript.it is a programming language of web page Dynamic web sites are build by java script"
document.body.appendChild(paragraphElement);

let buttonElement = document.createElement("button");
buttonElement.textContent="CLICK ME";
document.body.appendChild(buttonElement);
buttonElement.onclick=function(){
    headingElement.style.color="blue";
    headingElement.style.textDecoration="underline";
    paragraphElement.style.color="green";
    paragraphElement.style.fontSize="20px";
};

let inputElement = document.createElement("input");
inputElement.type="text";
document.body.appendChild(inputElement);*/

/*let olElement=document.getElementById("items");
let ingredients= ["chicken", "Oil", "Onions", "Salt", "masala", "chilly"]
for (let each of ingredients){
let listElement=document.createElement("li");
listElement.textContent=each;
olElement.appendChild(listElement);
console.log(each);
}*/


  





/*let containerElement = document.getElementById("container");

let headingElement = document.createElement("h1");
headingElement.textContent="Hello world!";
containerElement.appendChild(headingElement);

let paragraphElement = document.createElement("p");
paragraphElement.textContent="welcome to javascript.it is a programming language of web page Dynamic web sites are build by java script"
containerElement.appendChild(paragraphElement);

let buttonElement = document.createElement("button");
buttonElement.textContent="SUBMIT";
containerElement.appendChild(buttonElement);

let inputElement = document.createElement("input");
inputElement.type="text";
containerElement.appendChild(inputElement);*/



// Create a html form in js
var form = document.createElement("form");

var nameLabel = document.createElement("label");
nameLabel.textContent = "Name: ";

var nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "name";
nameInput.required = true;

var submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(submitButton);

document.body.appendChild(form);