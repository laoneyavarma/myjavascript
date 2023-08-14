// Function to fetch user data from the API
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display user information on the page
function displayUser(userData) {
    const userContainer = document.getElementById('user-container');
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    const userImage = document.createElement('img');
    userImage.src = userData.picture.medium;
    userCard.appendChild(userImage);

    const userName = document.createElement('h3');
    userName.textContent = `${userData.name.first} ${userData.name.last}`;
    userCard.appendChild(userName);

    const userEmail = document.createElement('p');
    userEmail.textContent = userData.email;
    userCard.appendChild(userEmail);

    userContainer.appendChild(userCard);
}

// Fetch a random user and display it when the page loads
window.addEventListener('load', async () => {
    const randomUser = await fetchRandomUser();
    displayUser(randomUser);
});

