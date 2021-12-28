const quotes = [
    {
        quote: 'Life is too short, You need Python.',
        author: 'unidentified'
    },
    {
        quote: 'Life is too short, You need Python 1.',
        author: 'unidentified'
    },
    {
        quote: 'Life is too short, You need Python 2.',
        author: 'unidentified'
    },
    {
        quote: 'Life is too short, You need Python 3.',
        author: 'unidentified'
    },
    {
        quote: 'Life is too short, You need Python4 .',
        author: 'unidentified'
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;