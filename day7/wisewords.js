// Quotes array (immutable reference)
const quotes = [
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
        source: "Dr. Seuss"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Aristotle"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        source: "Steve Jobs",
        citation: "Stanford Commencement Speech",
        year: "2005"
    },
    {
        quote: "In the middle of difficulty lies opportunity.",
        source: "Albert Einstein"
    }
];

// Random quote using arrow function
const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

// Random RGB color using template literals
const getRandomColor = () => {
    const randomValue = () => Math.floor(Math.random() * 256);
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};

// Print quote using destructuring
const printQuote = () => {
    const { quote, source, citation, year } = getRandomQuote();
    const quoteBox = document.getElementById("quote-box");

    const citationHTML = citation
        ? `<span class="citation">, ${citation}</span>`
        : "";

    const yearHTML = year
        ? `<span class="year"> (${year})</span>`
        : "";

    quoteBox.innerHTML = `
        <p class="quote">"${quote}"</p>
        <p class="source">
            ${source}
            ${citationHTML}
            ${yearHTML}
        </p>
    `;

    document.body.style.backgroundColor = getRandomColor();
};

// Prevent duplicate intervals
let intervalId;

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("loadQuote");

    printQuote();

    button.addEventListener("click", () => {
        printQuote();
        resetInterval();
    });

    startInterval();
});

const startInterval = () => {
    intervalId = setInterval(printQuote, 15000);
};

const resetInterval = () => {
    clearInterval(intervalId);
    startInterval();
};
