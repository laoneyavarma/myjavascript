document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "vWyR7u69FxGf3P1axBCpGaPWb8Mxo7dd9Nz1awli"
    const apiUrl = "https://api.nasa.gov/planetary/apod";
  
    const apodImage = document.getElementById("apod-image");
    const apodTitle = document.getElementById("apod-title");
    const apodExplanation = document.getElementById("apod-explanation");
  
    async function getAstronomyPictureOfTheDay() {
      try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
        const data = await response.json();
  
        apodImage.src = data.url;
        apodTitle.textContent = data.title;
        apodExplanation.textContent = data.explanation;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
  
    getAstronomyPictureOfTheDay();
  });
  