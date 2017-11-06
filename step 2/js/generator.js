// generator prototype
var QuoteGenerator = function(wrapperID, quoteSamplesStore) {
	this._selectors = {
		'startButton': '.start-generation',
		'resultWrapper': '.quote-generator-result',
		'quoteQuantities': '.number',
		'quoteSubject': '.subject'
	}

	this.quoteSamplesStore = quoteSamplesStore;
	this.wrapper = document.getElementById(wrapperID);
	this.startButton = this.wrapper.querySelector(this._selectors.startButton);
	this.displayArea = this.wrapper.querySelector(this._selectors.resultWrapper);
	this.quoteSubjectList = this.wrapper.querySelector(this._selectors.quoteSubject);
};

QuoteGenerator.prototype.updateValues = function() {
	this.quoteQuantities = this.wrapper.querySelector(this._selectors.quoteQuantities).value;
	this.quoteSubjectID = this.wrapper.querySelector(this._selectors.quoteSubject).value;
};

QuoteGenerator.prototype.generateThemeList = function() {
	var i = 0;

	while (this.quoteSamplesStore.quoteSamplesList.length > i) {
		var newSubjectOption = document.createElement('option');
		newSubjectOption.text = this.quoteSamplesStore.quoteSamplesList[i].name;
		newSubjectOption.value = i;

		this.quoteSubjectList.add(newSubjectOption);

		i++;
	}
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

	var beginning = this.quoteSamplesStore.get(this.quoteSubjectID).beginnings[beginningQuoteIndex];
	var middle = this.quoteSamplesStore.get(this.quoteSubjectID).middles[middleQuoteIndex];
	var end = this.quoteSamplesStore.get(this.quoteSubjectID).ends[endQuoteIndex];
	
	return new Quote(beginning, middle, end);
};

QuoteGenerator.prototype.displayQuotes = function() {
	this.startButton.addEventListener('click', function () {
		this.cleanText();
		this.updateValues();
		
		var i = 1;

		while (this.quoteQuantities >= i) {
			var newQuote = this.generateQuote();

			this.displayArea.innerHTML = this.displayArea.innerHTML + '<p>' + newQuote.beginning + newQuote.middle + newQuote.end + '</p>';

			i++;
		};
	}.bind(this));
};