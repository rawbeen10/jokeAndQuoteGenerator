document.addEventListener('DOMContentLoaded', () => {
const jokeButton = document.getElementById('jokeBtn');
const setupElement = document.getElementById('setup');
const punchlineElement = document.getElementById('punchline');

async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();

        setupElement.textContent = `"${joke.setup}`;
        punchlineElement.innerHTML = `${joke.punchline}"` ;
    } catch (error) {
        setupElement.textContent = 'Oops! Something went wrong.';
        punchlineElement.textContent = '';
        console.error('Error fetching joke:', error);
    }
}

jokeButton.addEventListener('click', fetchJoke);

fetchJoke();
});