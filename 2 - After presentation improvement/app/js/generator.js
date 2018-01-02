'use strict';
class QuoteGenerator {
	constructor(wrapperID, quoteSamplesStore) {
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
	}
};

QuoteGenerator.prototype.updateValues = function() {
	this.quoteQuantities = this.wrapper.querySelector(this._selectors.quoteQuantities).value;
	this.quoteSubjectID = this.wrapper.querySelector(this._selectors.quoteSubject).value;
};

QuoteGenerator.prototype.generateThemeList = function() {
	const loopNumber = this.quoteSamplesStore.quoteSamplesList.length;

	this.quoteSamplesStore.quoteSamplesList.map((quoteSamples, index) => {
		const newSubjectOption = document.createElement('option');
		newSubjectOption.text = quoteSamples.name;
		newSubjectOption.value = index;

		this.quoteSubjectList.add(newSubjectOption);
	});
};

QuoteGenerator.prototype.randomNumber = function() {
	return Math.floor(Math.random() * 10);
};

QuoteGenerator.prototype.cleanText = function() {
	this.displayArea.innerHTML = '';
};

QuoteGenerator.prototype.generateQuote = function() {
	const beginningQuoteIndex = this.randomNumber();
	const middleQuoteIndex = this.randomNumber();
	const endQuoteIndex = this.randomNumber();

	const beginning = this.quoteSamplesStore.get(this.quoteSubjectID).beginnings[beginningQuoteIndex];
	const middle = this.quoteSamplesStore.get(this.quoteSubjectID).middles[middleQuoteIndex];
	const end = this.quoteSamplesStore.get(this.quoteSubjectID).ends[endQuoteIndex];
	
	const quote = new Quote(beginning, middle, end);

	return quote;
};

QuoteGenerator.prototype.displayQuotes = function() {
	this.startButton.addEventListener('click', function () {
		this.cleanText();
		this.updateValues();
	
		for (let i = 1; i <= this.quoteQuantities; i++) {
			const newQuote = this.generateQuote();
			this.displayArea.innerHTML = this.displayArea.innerHTML + '<p>' + newQuote.beginning + newQuote.middle + newQuote.end + '</p>';
		}
	}.bind(this));
};