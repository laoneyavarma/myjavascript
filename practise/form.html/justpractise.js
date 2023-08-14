//generate random number

function randomNumber(){
    console.log(Math.random())
    console.log(Math.random()*100)
    console.log(Math.floor(Math.random()*100))
    console.log(Math.ceil(Math.random()*100))
    highestNumber=100
    lowestNumber=50
    console.log(Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber)

};
randomNumber()

//event

const buttonEl=document.getElementById("button")

function eventsHandle(){
    buttonEl.style.color="yellow";
    buttonEl.style.backgroundColor="green";
};
 buttonEl.onclick=eventsHandle;

 //recurstion of sum of numbers

 const num=Math.random()*100;
  function sum(num){
    if(num>50){
        console.log("True")
    } else{
        console.log("False")
    }
  }
  sum(num);

  //factorial function number
 
  function factorial(num){
    let count=1
    for(let i =1;i<=num;i=i+1){
        count=count*i
    }
    return count
  }
  console.log(factorial(6));

  //decimal to binary numbers convert

  function decToBinary(decimal){
    let binary=""
    while(decimal>0){
         binary = (decimal%2)+binary
        decimal=Math.floor(decimal/2)
    }
    return binary
  };
  const decimalnum = 50
  const binarynum=decToBinary(decimalnum)
  console.log(binarynum)

  //ASCII value of character

  let string="A"
  let result = string.charCodeAt(0)
  console.log(result);
   
  let strings="zab"
  let results = strings.codePointAt(0)
  console.log(results);

// character to ASCII value

const ascii = 122;
const final = String.fromCharCode(ascii);
console.log(final);

//function default parameters

function sumAdd(a=5,b=10){
    let i = a+b;
    console.log(i)
}
sumAdd(1,2)
sumAdd(8,1)
sumAdd()

//pass parameters to setTimeOut()

function parameters(){
    console.log("hello");
};
 setTimeout (parameters,2000)
console.log("Hi");


//function overloadded

function sum(){
    switch (arguments.length) {
        case 0:
            console.log("please pass parameters");
        break;
        case 1:
            console.log("atleast pass the two parameters");
            break;
            default :
            let result=0
            let length = arguments.length

            for(i=0;i<length;i=i+1){
                result=result+arguments[i]
            }
           console.log(result)
           break;
        }
    }

sum();
sum(5);
sum(4,5);
sum(8,3,5,4,7,8,9,10);

//function as a parameter

function greet(){
    return ("hello")
}
 function name(user,greet){
const message=greet();
console.log(`${message} ${user}`);
    
 };
 name('LAVANYA', greet)
 name('SURESH', greet)
 name('JAYANTH', greet)