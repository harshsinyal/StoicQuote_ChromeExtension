var fetchFromSewer = new XMLHttpRequest()
fetchFromSewer.open( 'GET', 'http://127.0.0.1:5500/quotes.txt', true);
fetchFromSewer.send();
fetchFromSewer.onload = function() {
    var allQuotes = this.responseText;
    var splitInLines = allQuotes.split("\n");
    var randomLineIndex = Math.floor( Math.random() * splitInLines.length);
    var randomQuote = splitInLines[ randomLineIndex ];

    document.getElementById( "quote" ).innerHTML = randomQuote;
}
