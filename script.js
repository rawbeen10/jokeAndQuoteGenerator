document.addEventListener('DOMContentLoaded', () => {
const jokeButton = document.getElementById('jokeBtn');
const setupElement = document.getElementById('setup');
const punchlineElement = document.getElementById('punchline');

const quoteButton = document.getElementById('quoteBtn')
const quote = document.getElementById('quote')
const person = document.getElementById('person')


async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();

        setupElement.textContent = `"${joke.setup}`;
        punchlineElement.textContent = `${joke.punchline}"` ;
    } catch (error) {
        setupElement.textContent = 'Oops! Something went wrong.';
        punchlineElement.textContent = '';
        console.error('Error fetching joke:', error);
    }
}

async function fetchQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const quotes = await response.json();

        quote.textContent = `"${quotes.quote}"`;
        person.textContent = `-${quotes.author}` ;
    } catch (error) {
        quote.textContent = 'Oops! Something went wrong.';
        person.textContent = '';
        console.error('Error fetching quote:', error);
    }
}

jokeButton.addEventListener('click', fetchJoke);
quoteButton.addEventListener('click', fetchQuote);

fetchJoke();
fetchQuote();
});