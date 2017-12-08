// generator prototype
var QuoteGenerator = function(wrapperID, quoteFragments) {
	this._selectors = {
	    'startButton': '.start-generation',
	    'resultWrapper': '.quote-generator-result'
	}

	this.wrapper = document.getElementById(wrapperID);
    this.quoteFragments = quoteFragments;
	this.startButton = this.wrapper.querySelector(this._selectors.startButton);
	this.displayArea = this.wrapper.querySelector(this._selectors.resultWrapper);
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

    var beginning = this.quoteFragments.beginnings[beginningQuoteIndex];
    var middle = this.quoteFragments.middles[middleQuoteIndex];
    var end = this.quoteFragments.ends[endQuoteIndex];

	return new Quote(beginning, middle, end);
};

QuoteGenerator.prototype.displayQuote = function() {
	this.startButton.addEventListener('click', function() {
		this.cleanText();
		var newQuote = this.generateQuote();
        this.displayArea.innerHTML = '<p>' + newQuote.beginning + newQuote.middle + newQuote.end + '</p>';
	}.bind(this));
};