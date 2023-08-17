const increbtnElement = document.getElementById("increment");
const decrebtnElement = document.getElementById("decrement");
const resetbtnElement = document.getElementById("reset");
const countElement = document.getElementById("count");

 let count=0;

 function updatecount(){
    countElement.textContent=count;
 };
 resetbtnElement.addEventListener("click",()=>{
    count=0;
    updatecount()
 })

  increbtnElement.addEventListener("click",()=>{
   
    count=count+1
    updatecount()
    
  });
  decrebtnElement.addEventListener("click",()=>{
    
    count=count-1
    updatecount()
    
  });
  updatecount()