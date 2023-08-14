for (let i=0;i<5;i++){
    console.log(i)
}

key="string"
for(let i of key){
    console.log(i)
}

arr={
    name:"lava",age:"35",city:"yzag"
}
for (let i in arr){
    console.log(i,arr[i])
}

count=0
do{
console.log(count)
count=count+1
}while(count<=5)


check=0
while(check<10){
    console.log(check)
    check++
}

const marks=45
if(marks>80){
    console.log("your marks is excellent")
}else if( marks>=50){
    console.log("your marks is good")
}else{
    console.log("sorry,your fail")
}


const dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    // ... other cases ...
    default:
        dayName = "Unknown day";
}
console.log(`Today is ${dayName}.`);

function funcName(){
     console.log("hai hellow function")
}
funcName()

 const Afunc=(a,b)=>{
    return a+b
}
console.log(Afunc(5,6))







