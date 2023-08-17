// let mypromise=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         const result=true;
//         if(result){
//             resolve ("resolved is successfull")
//         }else{
//             reject("error occurence")
//         }

//     },2000)
// })
// mypromise
// .then((resolve) =>{
//     console.log("resolved")
// })
// .catch((reject) =>{
//     console.log("error")
// });

let mypromise = new Promise((resolve,reject)=>{
    console.log("please wait...")
    setTimeout(()=>{
        result=true;
        if(result){
            resolve("resolved successfully")
        }else{
            reject("reject an error")
        }
    },2000)
})
mypromise
.then((resolve)=>{
    console.log("resolved")
})
.catch((reject)=>{
    console.log("error")
});

async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json()
        return data;
    }
    catch(error){
         console.error("error");
         throw error;
        }
    }
    fetchData()
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.error("error")
    });


// async function fetchData(){
//  try{
//     const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     return data;
//  } catch (error){
//     console.error(error);
//     throw error;
//  }

// }
// fetchData()
// .then(data =>{
//     console.log(data)
// })
// .catch(error =>{
//     console.error("error occurred:", error)
// });


// const backgroundVideo = document.getElementById('backgroundVideo');
// const playPauseBtn = document.getElementById('playPauseBtn');

// playPauseBtn.addEventListener('click', function() {
//     if (backgroundVideo.paused || backgroundVideo.ended) {
//         backgroundVideo.play();
//     } else {
//         backgroundVideo.pause();
//     }
// });

// backgroundVideo.addEventListener('play', function() {
//     playPauseBtn.textContent = 'Pause';
// });

// backgroundVideo.addEventListener('pause', function() {
//     playPauseBtn.textContent = 'Play';
// });

