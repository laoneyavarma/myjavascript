const form = document.getElementById('numberForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const numberInput = document.getElementById('numberInput').value;

  if (numberInput.trim() === '') {
    return;
  }

  const apiUrl = `http://numbersapi.com/${numberInput}?json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      resultDiv.innerText = data.text;
    } else {
      resultDiv.innerText = 'An error occurred while fetching the data.';
    }
  } catch (error) {
    resultDiv.innerText = 'An error occurred while fetching the data.';
  }
});


