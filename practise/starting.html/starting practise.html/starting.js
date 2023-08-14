// let a=[1,2,3,4]
// console.log(a);
// console.log(a[1])
// console.log(a.length)
// console.log(a.push(100))
// console.log(a);
// console.log(a.pop())
// console.log(a);
// console.log(a.shift())
// console.log(a);
// console.log(a.unshift(100))
// console.log(a);
// console.log(a.concat([10,20,30]))
// console.log(a);

// a=[10,"love",50.56,"True"]
// let i=0;
// for(let i of a){
//     console.log(i);
// }

// const details={
//     name:"suri",
//     color:"white",
//     salary:"30k",
//     age:35,
//     place:"yzag"
// };

// for (key in details) {
//     console.log(key)
// };

// for(let i=0;i<10;i=i+2) {
// console.log(i)
// };


// function signup(){
//     event.preventDefault();

// var username = document.getElementById("username").value;
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;

// var user={
//     username :username,
//     email : email,
//     password : password,
// };
// var json = JSON.stringify(user);
// localStorage.setItem(username, json);


// console.log(user);

// }
// var btn = document.getElementById("subbtn")
// btn.addEventListener("click",function(event){
// subbtn.style.backgroundColor="green";
// console.log('Button clicked!');
// });

//  localStorage.setItem("username","LAVANYA")
//  localStorage.setItem("email","lavanya@gmail.com")
//  localStorage.setItem("password","12345")


// var jak = localStorage.getItem("email")
// var emg = localStorage.getItem("password")
// var unm = localStorage.getItem("username")

// localStorage.removeItem("username")

// HTTP//

let url ="https://gorest.co.in/public/v2/users/3608341";



let options ={
  method : "DELETE",
  headers : {
    "Content-type" : "application/json",
    Accept : "application/json",
    Authorization : "Bearer 83f3d734e51e407b739d5cf36c4e01a44b5bcff2b111660fa72b232fca0185a3"
  },
  //body : JSON.stringify(data)
};


fetch (url, options)
.then(function(response){
  return response.json()
})
.then(function(jsonData){
  console.log(jsonData)
});