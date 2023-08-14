//duplicate while using filter method
const array=[1,2,3,1,4,1,2,5,6,4,2,8,9,4,5,6,3]
const duplicate=array.filter((element,index,array)=>{
     return array.indexOf(element)=== index 
})
console.log(duplicate)
//max and min numbers while using reduce mathod
const num=[55,78,69,99,10,500,45,36,80]
const maximum = num.reduce((acc,prst)=>{
    return acc>prst?acc:prst
    //if u want to sum return acc+prst
})
console.log(maximum)
//find second largest method using max and splice method
const findarr=[1,2,3,5,8,9,10]
 const firstlargest=Math.max(...findarr)
 const index= findarr.indexOf(firstlargest)
 const remove = findarr.splice(index,1)
 const secondlargest=Math.max(...findarr)
console.log(secondlargest)
//find and filter
const fndarr=[
    {"name":"lav","age":27},
    {"name":"kav","age":28},
    {"name":"bav","age":37},
    {"name":"nav","age":17}
]
const filtermethod=fndarr.filter((item)=>{
    return item.age>20;
})
const findmethod=fndarr.find((item)=>{
    return item.age>20;
})
console.log(findmethod)
console.log(filtermethod)

//missing element of an array
const ari=[1,5,6,7,8,9]
const newari=[]
const high = Math.max(...ari)
const low = Math.min(...ari)
for(let i=low;i<high;i++){
    if(ari.indexOf(i)<0){
        newari.push(i)

    }
}

console.log(newari)

//sum of all elements in a array
const gvary = [1,2,3,4,5,6,7,8,9,10]
const sumari=gvary.reduce((acc,cur)=>{
    return acc+cur
})
console.log(sumari)
//factorial number
const nomber=7
let fact=1
if(nomber<0){
    console.log(`this ${nomber} is not valid`)
} else{
    for(let i=1;i<=nomber;i++){
         fact=fact*i
        
    }
    console.log(`this ${nomber} fact is ${fact}`)
}
//prime number
var findNum=5
if(findNum==1){
    console.log(`this${findNum}is neither prime or composite number`)
}else if(findNum<1){
    console.log(`this${findNum}is not a valid prime number`)
}else{
    for(let i=2;i<findNum;i++){
        if(findNum%i==0){
            var result= (`this${findNum}is not a prime number`)
        }else{
            var result=(`this${findNum}is a prime number`)
        }

    }
    console.log(result)
}
//count vowels
const vstr="ELEVEN"
const vowels=["a","e","i","o","u"]
const lock=vstr.toLocaleLowerCase()
function countVowels(){
    count=0;
    for(let letter of lock){
        if(vowels.includes(letter)){
            count=count+1
        }  
    }
    return count
}
console.log(countVowels(vstr))
//reverse string
const Reversestr="lavanya"
const res1=Reversestr.split("")
const res2=res1.reverse()
const res3=res2.join("")
console.log(res3)

//factors of number
const factnumber=13
for(let i=0;i<=factnumber;i++){
    if(factnumber%i==0){
        console.log(i)
    }
}