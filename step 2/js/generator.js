// generator prototype
var QuoteGenerator = function(wrapperID, primaryQuoteFragment, secondaryQuoteFragment) {
	this.wrapper = document.getElementById(wrapperID);
	this.primaryQuoteFragment = primaryQuoteFragment;
	this.secondaryQuoteFragment = secondaryQuoteFragment;
	this.startButton = this.wrapper.querySelector(this._selectors.startButton);
	this.displayArea = this.wrapper.querySelector(this._selectors.resultWrapper);

};

QuoteGenerator.prototype._selectors = {
	'startButton': '.start-generation',
	'resultWrapper': '.quote-generator-result',
	'quoteQuantities': '.number',
	'quoteSubject': '.subject'
};

QuoteGenerator.prototype.updateValues = function() {
	this.quoteQuantities = this.wrapper.querySelector(this._selectors.quoteQuantities).value;
	this.quoteSubject = this.wrapper.querySelector(this._selectors.quoteSubject).value;
};

QuoteGenerator.prototype.randomNumber = function() {
	return Math.floor(Math.random() * 10);
};

QuoteGenerator.prototype.cleanText = function() {
	this.displayArea.innerHTML = "";
};

QuoteGenerator.prototype.generateQuote = function() {
	var beginningQuoteIndex = this.randomNumber();
	var middleQuoteIndex = this.randomNumber();
	var endQuoteIndex = this.randomNumber();

	if (this.quoteSubject == 'kaamelottQuote') {
		var beginning = this.primaryQuoteFragment.beginnings[beginningQuoteIndex];
		var middle = this.primaryQuoteFragment.middles[middleQuoteIndex];
		var end = this.primaryQuoteFragment.ends[endQuoteIndex];
	} else {
		var beginning = this.secondaryQuoteFragment.beginnings[beginningQuoteIndex];
		var middle = this.secondaryQuoteFragment.middles[middleQuoteIndex];
		var end = this.secondaryQuoteFragment.ends[endQuoteIndex];
	}
	return new Quote(beginning, middle, end);
};

QuoteGenerator.prototype.displayQuote = function() {
	this.startButton.addEventListener('click', function () {
		this.updateValues();
		this.cleanText();
		var i = 1;
		while (this.quoteQuantities >= i) {
			var newQuote = this.generateQuote();
			this.displayArea.innerHTML = this.displayArea.innerHTML + '<p>' + newQuote.beginning + newQuote.middle + newQuote.end + '</p>';
			i++;
		};
	}.bind(this));
};

var Quote = function(beginning, middle, end){
	this.beginning = beginning;
	this.middle = middle;
	this.end = end;
};