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
 * Initialize `current_quote` variable to keep track of currently displayed quote index
 * and avoid displaying the same quote twice in a row. Value set to -1 to indicate that
 * no quote has been displayed yet.
 */
var current_quote = -1;

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

  // Keep getting a random number until the number generated is diferent the the value in `current_quote` variable
  while(i === current_quote) {
    // Get a random number from 0 to the last index of the quotes array
    i = Math.floor(Math.random() * quotes.length);
  }

  // Update `current_quote` variable to new quote index
  current_quote = i;

  // Use random number as index to select quote
  let quote = quotes[i];

  return quote;
}

/**
 * changeBackgroundColor
 * 
 * Changes the background color of the page
 *
 */
function changeBackgroundColor() {  
  /**
   * Generate random color in hex format
   * 
   * Author: Akhil sai
   * Source: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
   */
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  // Change background color property of body
  document.querySelector('body').style.backgroundColor = randomColor;
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

  // Change page background color
  changeBackgroundColor();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);