'use strict';
const QuoteGenerator = {
	init: function(wrapperID, quoteSamplesStore) {
		this._selectors = {
			'startButton': '.start-generation',
			'resultWrapper': '.quote-generator-result',
			'quoteQuantities': '#number',
			'quoteSubject': '#subject'
		}

		this.quoteSamplesStore = quoteSamplesStore;
		this.wrapper = document.getElementById(wrapperID);
		this.startButton = this.wrapper.querySelector(this._selectors.startButton);
		this.displayArea = this.wrapper.querySelector(this._selectors.resultWrapper);
		this.quoteSubjectList = this.wrapper.querySelector(this._selectors.quoteSubject);

		return this;
	}
};

QuoteGenerator.updateValues = function() {
	this.quoteQuantities = this.wrapper.querySelector(this._selectors.quoteQuantities).value;
	this.quoteSubjectID = this.wrapper.querySelector(this._selectors.quoteSubject).value;
};

QuoteGenerator.generateThemeList = function() {
	const loopNumber = this.quoteSamplesStore.quoteSamplesList.length;
	
	for (var i = 0; i < loopNumber; i++) {

		const newSubjectOption = document.createElement('option');
		newSubjectOption.text = this.quoteSamplesStore.quoteSamplesList[i].name;
		newSubjectOption.value = i;

		this.quoteSubjectList.add(newSubjectOption);
	}
};

QuoteGenerator.randomNumber = function() {
	return Math.floor(Math.random() * 10);
};

QuoteGenerator.cleanText = function() {
	this.displayArea.innerHTML = '';
};

QuoteGenerator.generateQuote = function() {
	const beginningQuoteIndex = this.randomNumber();
	const middleQuoteIndex = this.randomNumber();
	const endQuoteIndex = this.randomNumber();

	const beginning = this.quoteSamplesStore.get(this.quoteSubjectID).beginnings[beginningQuoteIndex];
	const middle = this.quoteSamplesStore.get(this.quoteSubjectID).middles[middleQuoteIndex];
	const end = this.quoteSamplesStore.get(this.quoteSubjectID).ends[endQuoteIndex];
	
	const quote = Object.create(Quote).init(beginning, middle, end);

	return quote;
};

QuoteGenerator.displayQuotes = function() {
	this.startButton.addEventListener('click', function () {
		this.cleanText();
		this.updateValues();
	
		for (let i = 1; i <= this.quoteQuantities; i++) {
			const newQuote = this.generateQuote();
			this.displayArea.innerHTML = this.displayArea.innerHTML + '<p>' + newQuote.beginning + newQuote.middle + newQuote.end + '</p>';
		}
	}.bind(this));
};