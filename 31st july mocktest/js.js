/*function printPrime(a,b){
    
    for(let i=a;i<=b;i++){
        
        count=0
        for(let j=2;j<i;j++){
            if(i%j==0){
                count=1
                break
            }
        }
    if (i > 1 && count==0){
        console.log(i)
    }
}
    
}
printPrime(50,100)



function fact(a){
    count=1
    for(let i=1;i<10;i++){
        
        count=count*i 

    }
    console.log(count)
}
fact(10)*/

const str="this is code of javascript"
const str1 = str.split(/\s+/)
console.log(str1)
const str2 = str1.map(word=>word.split("").reverse().join(""))
console.log(str2)
const str3 = str2.join(" ")
console.log(str3)



const catImage = document.getElementById('catImage');
const newImageButton = document.getElementById('newImageButton');

// Function to fetch a random cat image from the Cat API
async function fetchRandomCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    const imageUrl = data[0].url;
    catImage.src = imageUrl;
  } catch (error) {
    console.error('Error fetching cat image:', error);
  }
}
// Event listener for the "New Image" button
newImageButton.addEventListener('click', fetchRandomCatImage);

// Fetch a random cat image when the page loads
fetchRandomCatImage();

