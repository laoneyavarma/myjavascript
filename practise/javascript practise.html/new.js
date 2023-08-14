/*function birthday() {
    alert("hello javascript")
}
birthday()*/

let a=[1,2,3,4]
console.log(a);





//for loop statement
for(let i=0; i<10; i++) {
    console.log(i);
}
//for in loop statement
const games = {
    india:"hockey",
    austrelia:"cricket",
    "america": "football"
}
for (let key in games) {
    console.log(key+" "+games[key]);
}
//for of loop statements

const names = ["lavanya","jayanth","suresh"];

for (let name of names){
    console.log(name);
}
 const statement ="you are a nice person";

 for (let char of statement){
    console.log(char);
 }
 //while loop statement

 let i=0;
 while(i<10){
    console.log(i);
    i=i+1;
 }
 // do while loop statememnt

 let k = 0;
 do {
   console.log(k);
   k=k-1;
 } while (k > 5);
 
 //switch statememnt

 let person = 3;
 let personName;
 switch (person){
case 1:
    personName = "suresh";
    break;
case 2:
    personName = "jayanth";
    break;
case 3:
    personName = "LAVANYA";
    break;
case 4:
    personName = "krithvik";
    break;
case 5:
    personName = "yuvan";
    break;
default:
    personName = "invalid";
    break
 }
 console.log(personName);


 //functions

  function party() {
    console.log("welcome")
  }
  party()

//function expression

const add=(a,b) => {
    return a+b;
}
let c= add(5,7)
console.log(c);

//arrow function with parameters

const multipy = (a,b,c) => { return a*b*c};

d=multipy(1,2,3)
console.log(d);

//arrow function without parameters

const greeting = () => {console.log("hai how are you!")};
greeting();

//map function

const numbers = [1,2,3,4,5,6]
const divisible = numbers.map((num)=>num%2);
console.log(divisible);

let name = [5,10,15,20,25]
let doubled = name.map((num)=>num*2);
console.log(doubled);

//filter function

const variables = [2,4,6,8,10]
const result = variables.filter((num)=>num%2 === 0);
console.log(result);

let z=[10,20,30,40,50]
let remainder =z.filter((num)=>num%2 === 0);
console.log(remainder);

//reduce function

const y = [12,15,19,21,25]
const sum = y.reduce((accumulator,current) => accumulator+current,0)
console.log(sum);

let x = [100,75,50,25]
let sub = x.reduce((accumulator,current) => accumulator-current,0)
console.log(sub);

//forEach function

const w = [1,2,3,4,5];
w.forEach((number)=>{
     let u=number*5;
    console.log(u);
})

//map and filter functions are used in one array

const num=[10,20,30,40,50,60,70,80,90,100]
const mapfilterresult=num.map((num)=>num*2).filter((num)=>num%3==0);
console.log(mapfilterresult);

const nums = [1,2,3,4,5,6,7,8,9,10];
const filtermapresult = nums.filter((num)=> num>=5).map((num)=>num*num);
console.log(filtermapresult);

//map and filter and reduce are used in one place

const integers = [1,3,5,9,11,13,15,17,19,21];
const mapfilterreduce = integers.map((num)=>num+num).filter((num)=>num>=10).reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(mapfilterreduce);


//map function with long example

let o=[
    {firstname:"lavanya",lastname:"varma"},
    {firstname:"suresh",lastname:"chekuri"},
    {firstname:"jayanth",lastname:"varma"},
    {firstname:"krithvik",lastname:"raju"},
];
 
const fullname = o.map(function(o){
    return (o.firstname+" "+o.lastname)})

console.log(fullname);

 const firstnames = o.filter(function(o){
    return (o.firstname === "lavanya")
 })
 console.log(firstnames);

  let p = [{'name': 'Phani', 'age': 27 },{'name': 'Vinod', 'age': 10 }, {'name':'Raju', 'age': 27 },{'name': 'Geetha', 'age': 16 }]
  for (let each of p) {
    if (each.age > 18){
        console.log(each);
    }
  }
  //practise starts

  let num9 = "hello"
  let s = Array.from(num9)
  for ( let each of s){
    console.log(each)
  };
// add two numbers
  let f = 10
  let g = 20
  console.log(f+g)

//square root
let number = 100;
let q = Math.sqrt(number)
console.log(q)
  
//area of traingle

let length = 3;
let height = 4;
const area = (length*height)/2
console.log(area)

//swap variables

var n1 = 50
var n2 = 100
let r;
r=n1
n1=n2
n2=r
console.log(n1)
console.log(n2)

// kilometers to miles
let kilo = 28;
let convrt =(kilo*0.621371);
console.log(convrt);

//celcius to fahrenheit

let cel = 5;
let convt = (cel*(9/5))+32
console.log(convt);

//generate random number

const give = Math.random()*100
console.log(Math.ceil(give))

//check number + r - r 0
 
const vibe = -8;
if (vibe > 0){
  console.log("positive")
} else if (vibe == 0){
  console.log("neutral")
} else {
  console.log("negative")
};
 //check a number even r odd

 const ver = 581150
 if (ver%2==0){
  console.log("it is even")
 } else {
  console.log("it is odd")
 };

 //check large number among 3 numbers
 k=80
 l=90
 m=10
 const bigNumber = Math.max(k,l,m);
 //const smallNumber = Math.min(k,l,m);
 console.log(bigNumber)
 //console.log(smallNumber)

 //check a prime number
  let checknum = 29
  function isprime(checknum){

    if(checknum < 2)
    return `${checknum} is not a prime number`

    for(let i=2;i<checknum;i=i+1){
      if(checknum % i === 0){
        return `${checknum} is not a prime number`
      }
    }
    return `${checknum} is a prime number`
  }
  console.log(isprime(checknum));
  
  //print prime numbers such an interval

  const lower = 20
  const higher = 50
   function printprimenumbers(lower,higher){
    for(let digit=lower; digit<=higher;digit=digit+1){
      if(isprime(digit)){
      console.log(digit)
      }
    }
   }
   function isprime(digit){
    if(digit < 2){
      return false
    }
    for (let i = 2; i<digit; i=i+1){
      if(digit % i === 0){
        return false
      }
    }
    return true
   }
printprimenumbers(lower,higher)

//guess a random number
const no = 9
function guessRandom(){
let random = Math.random()*10+1
let guess = Math.floor(random)
  
 
    if(guess==no){
      return `${no} is a correct`
    }
    else{
      return `${no} is not a correct try again`
    }
  }
  console.log(guessRandom(no))

  //how to remove duplicates of an array

  const array=[1,2,3,4,5,6,1,2,3,4,5,7,7,5,9,7,6,2,7,89,1,2,4]
  const unique = [...new Set(array)]
  console.log(unique)

  //spread operator
  //...with array

  let spread = [1,2,3,4,5]
  let spread2 = [...spread,5,6,7,9,8]
  console.log(spread2)

  //spread with obj
  let object = {
    x:1,
    y:2
  }
  let object2 = {...object,z:3}
  console.log(object2);

  //spread with string
let str1 = "hello"
let str2 = [...str1]
console.log(str2)

//spread with functions

 function multy(x,y,z) {
  return x*y*z

}
const mult = [2,3,4]
console.log(multy(...mult));