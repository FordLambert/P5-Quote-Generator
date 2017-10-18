// generator prototype
var QuoteGenerator = function(wrapperID, primaryQuoteFragments) {
	this.wrapper = document.getElementById(wrapperID);
    this.primaryQuoteFragments = primaryQuoteFragments;
	this.startButton = this.wrapper.querySelector(this._selectors.startButton);
	this.displayArea = this.wrapper.querySelector(this._selectors.resultWrapper);
};

QuoteGenerator.prototype._selectors = {
    'startButton': '.start-generation',
    'resultWrapper': '.quote-generator-result'
};

QuoteGenerator.prototype.randomNumber = function() {
	return Math.floor(Math.random() * 10);
};

QuoteGenerator.prototype.cleanText = function() {
	this.displayArea.innerHTML = '';
};

QuoteGenerator.prototype.generateQuote = function() {
    var beginningQuoteIndex = this.randomNumber();
    var middleQuoteIndex = this.randomNumber();
    var endQuoteIndex = this.randomNumber();

    var beginning = this.primaryQuoteFragments.beginnings[beginningQuoteIndex];
    var middle = this.primaryQuoteFragments.middles[middleQuoteIndex];
    var end = this.primaryQuoteFragments.ends[endQuoteIndex];

	return new Quote(beginning, middle, end);
};

QuoteGenerator.prototype.displayQuote = function() {
	this.startButton.addEventListener('click', function() {
		this.cleanText();

		// Get a new instance of Quote
		var newQuote = this.generateQuote();

		// Finally inject html in the result area
        this.displayArea.innerHTML = '<p>' + newQuote.beginning + newQuote.middle + newQuote.end + '</p>';
	}.bind(this));
};

var Quote = function(beginning, middle, end){
	this.beginning = beginning;
	this.middle = middle;
	this.end = end;
};
