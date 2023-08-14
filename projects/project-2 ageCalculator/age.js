const btnEl=document.getElementById("calbtn");
const inputEl=document.getElementById("DOB");
const resEl=document.getElementById("result");

function calculateAge(){
    const birthvalue = inputEl.value;

    if(birthvalue === ""){
        alert("please enter your birthday")
    } else {
const age = getAge(birthvalue)
resEl.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
};
function getAge(birthvalue){
const currentdate=new Date();
const currentbirthday = new Date(birthvalue);

let age = currentdate.getFullYear() - currentbirthday.getFullYear();
const month = currentdate.getMonth() - currentbirthday.getMonth();

if (month < 0 ||
   ( month === 0 && currentdate.getDate() < currentbirthday.getDate())

){
    age--;
}
 return age;
}
btnEl.addEventListener("click", calculateAge);