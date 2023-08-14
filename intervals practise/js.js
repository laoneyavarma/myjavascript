// const btn1El = document.getElementById("btn1")
// const btn2El = document.getElementById("btn2")
// const btn3El = document.getElementById("btn3")
// const btn4El = document.getElementById("btn4")
// const resultEl = document.getElementById("result")

// let intervalId=null;

// btn1El.addEventListener("click",()=>{
//     setInterval(()=>{
//  resultEl.innerText=("welcome") ;
//  console.log("welcome")
//     },1000)
    
// });


// btn2El.addEventListener("click",() =>{
//   let counter = 0;

//   if (counter === 5) {
    
    
//     const updateCounter=()=>{
 
//   console.log("counter:", counter);
//   counter++;
//   clearInterval(intervalId);
    
//   }
 
// };
// });


// // const intervalId = setInterval(updateCounter, 1000)});

// // setTimeout(() => {
// //     clearInterval(intervalId);
// //     console.log("Interval stopped");
// //   }, 1000);



// it schedules the execution of  callback funtions 

// setInterval 
// clearInterval
// setTimeout
// clearTimeout

// setInterval(callbackfunction, time);



// clearInterval(uniqueId);

 let setElement = document.getElementById("set")
 let clearElement = document.getElementById("clear");


setElement.onclick= function(){
   let run =0 ;

let b=function(){
    console.log(run);
    run++
}
let uniquId=null;

let time =1000
uniquId=setInterval(b, time)

 console.log(uniquId)


clearElement.onclick= function(){
    clearInterval(uniquId);
}



//set timeout

let uniqueId= null;
let ru ="bomb blast" ;

let b1=function(){
    console.log(run);
    
}
let tyme =5000


setElement.onclick= function(){
    uniqueid=setTimeout(b1, tyme)
}


clearElement.onclick= function(){
    console.log("stop")}}
