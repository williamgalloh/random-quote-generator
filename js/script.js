/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// Initialize `quotes` array 
let quotes = [
  {
    quote: "The journey of a thousand miles begins with one step",
    source: "Lao Tzu",
    citation: "Twitter",
    year: "2022"
  },
  {
    quote: "Life is what happens when you’re busy making other plans",
    source: "John Lennon",
    citation: "Facebook",
  },
  {
    quote: "You must be the change you wish to see in the world",
    source: "Mahatma Gandhi",
    year: "1987"
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    source: "Mae West",
    tags: ["Popular", "Science"]
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right",
    source: "Henry Ford",
    tags: ["Automotive"]
  }
];

/**
 * getRandomQuote
 * 
 * Creates a random number, and uses that random number to return a random quote
 *
 * @returns {quote Object} A random quote object from the quotes array.
 */
function getRandomQuote() {
  // Get a random number from 0 to the last index of the quotes array
  let i = Math.floor(Math.random() * quotes.length);

  // Use random number as index to select quote
  let quote = quotes[i];

  return quote;
}

/**
 * printQuote
 * 
 * Displays a new quote to the page
 *
 */
function printQuote() {
  // Get random quote
  let quote = getRandomQuote();

  // Build html to print
  let html = `<p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}`;

  // Check if there is a citation property
  if(Object.keys(quote).indexOf('citation') > -1) {
    html += `<span class="citation"> ${quote.citation} </span>`;
  }

  // Check if there is a year property
  if(Object.keys(quote).indexOf('year') > -1) {
    html += `<span class="year"> ${quote.year} </span>`;
  }

  html += `</p>`;

  // Check if there is a tags property
  if(Object.keys(quote).indexOf('tags') > -1) {
    html += `<p class="tags">Tags: ${quote.tags.join(", ")}</p>`;
  }

  // Output quote to page
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);