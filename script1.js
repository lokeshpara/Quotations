const container = document.getElementById('container');
const quote = document.getElementById('quote');
const author = document.getElementById("author");
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById("loader");

function showLoading() {
    loader.hidden = false;
    container.hidden = true; 
}
function removeLoading() {
    if (!loader.hidden) {
        container.hidden = false;
        loader.hidden = true;
    }
}
// Get Quote From API
async function getQuote() {
    showLoading();
    const proxyUrl = 'https://aqueous-savannah-25102.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // If Author is blank, add "UnKnow" 
        if (data.quoteAuthor === "") {
            author.innerText = "--UnKnown--"
        } else {
            author.innerText = data.quoteAuthor;
        } 
        // Reduce font size for long quotes
        if (data.quoteText.length >120) {
            quote.classList.add("long-quote")
        } else {
            quote.classList.remove("long-quote")
        }
        quote.innerText = data.quoteText;
        removeLoading();
    
    } catch (error) {
        getQuote();
    }
}

// Tweet in twitter 
function tweetQuote() {
    const quotetext = quote.innerText;
    const quoteauthor = author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotetext} - ${quoteauthor}`;
    open(twitterUrl,"_blank");
}
 
newQuoteBtn.addEventListener("click",getQuote);
twitterBtn.addEventListener("click",tweetQuote);

// On load
getQuote();
