const increbtnElement = document.getElementById("increment");
const decrebtnElement = document.getElementById("decrement");
const resetbtnElement = document.getElementById("reset");
const countElement = document.getElementById("count");

 let count=0;

 function updatecount(){
    countElement.textContent=count;
 };
 resetbtnElement.addEventListener("click",()=>{
  countElement.style.color="white";
    count=0;
    updatecount()
 })

  increbtnElement.addEventListener("click",()=>{
   countElement.style.color="green";
    count=count+1
    updatecount()
    
  });
  decrebtnElement.addEventListener("click",()=>{
    countElement.style.color="red";
    count=count-1
    updatecount()
    
  });
  updatecount()
