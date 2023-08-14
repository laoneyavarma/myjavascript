// //palindrome
// let tring="racecar"
// let divide=tring.split("")
// let down = divide.reverse()

// if (divide==down){
//     console.log("True")
// }else{
//     console.log("False")
// };

// //remove whitespaces
// const a ="    lavanya      "
// const b= a.trim();
// console.log(b)
// console.log(a)
// //date
// console.log(new Date())
// //pass a function as a parameter
// function func(){
//     return "hello"
// }
// function name(user,func){
//     console.log(user+" "+func())
// }
//  name("world",func)
//  name("lavanya",func)
//  name("hai",func)

//  //check number integer r float
// function checkNumber(x){
//     if(v =Number.isInteger(x)){
//         console.log("true")
//     } else{
//         console.log("false")
//      }
// };
// checkNumber("155687")
// checkNumber(123456)
// checkNumber(12.56789)
// //generate range
// function range(a,b){
// for(let i=a;i<=b;i++){
//     console.log(i)
// }}
// range(1,10)

// //pass parameter to setTimeout()

// function hai(){
//     console.log("hai")
// }
// setTimeout(hai,2000)
// console.log("hello")

// //randome number generates between two numbers

// function Range(a,b){
//    const z=Math.floor(Math.random()*(b-a+1))+a
//    console.log(z)
// }
// Range(1,15)
// //split array into small chunks
// function smallparts(arr,index){
//     for(let i = 0;i <=arr.length;i+=index){
//         let newarray;
//         newarray = arr.slice(i,i+index)
//         console.log(newarray)
//     }
// }
// const arr=[1,2,3,4,5,5,8,7,5,1,0,6,7,2]
// const index=3
// smallparts(arr,index)

// //random in array
// function randindex(ary){
//      const rndidx=Math.floor(Math.random() * ary.length);
//     const result =ary[rndidx];
//     return result;
// }
// const ary = [1,2,5,"hai","hello",10]
//  const get=randindex(ary)
//  console.log(get)

//  //remove duplicates
//  function duplicate(arrai){
//     let unique = []
//     for(let i of arrai){
//         if(unique.indexOf(i) === -1){
//             unique.push(i)
//         }
//     }
//     console.log(unique)
//  };
//  const arrai = [ 1,1,2,3,4,5,4,8,5,2,1,7,0]
//  duplicate(arrai)
//  //reverse string

//  d="LAVANYA"
//  let newstr=""
//  for(let i = d.length-1;i>=0;i--){
//     newstr += d[i]
//  }
//  console.log(newstr)

//  let sorted = "i am learning react"
//   sorted=sorted.split(" ")
//   sorted.sort()
//  for(let name of sorted){
//     console.log(name)
//  };

//  let word="i am a good girl"
//  const realword = word.replace("girl","boy")
//  console.log(realword);

//  const msg="this is a first step"+
//  "those are the second"+
//  "he is the last "
//  console.log(msg)
//   const msg2="hai friend\n" +
//   "how are you\n"+
//   "these are multiple\n"+
//   "lines of a code here"
//   console.log(msg2)

//   const nick = "i am a good girl and looking good"
//   const mainname=nick.split("good").join("bad")
//   console.log(mainname);




   const newnum= 1634


 //1+1296+81+256

   const len=newnum.toString().length
   const lon=newnum.toString()
   
   let cnt=0
function armstrongnumber(){
   
for(let i = 0;i<len;i++){
   const value = parseInt(lon[i])
   cnt = cnt+ Math.pow(value,len)
 }
 return cnt=== newnum
}
 console.log(armstrongnumber());

function printarmstrong(start,end){
  const printnumbers=[];
  for(let i=start;i<=end;i++){
    if(armstrongnumber(i)){
    printnumbers.push(i)
    }
  }
  return armstrongnumber

}
console.log(armstrongnumber(printarmstrong(1,200)));