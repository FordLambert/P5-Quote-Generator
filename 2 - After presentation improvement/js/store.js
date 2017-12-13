'use strict';
const QuoteSamples = {
	init: function(name, beginnings, middles, ends){
		this.name = name;
		this.beginnings = beginnings;
		this.middles = middles;
		this.ends = ends;

		return this;
	}
};

const QuoteSamplesStore = {
	init: function() {
		this.quoteSamplesList = [];

		return this;
	}
};

QuoteSamplesStore.add = function(quoteSamples) {
	this.quoteSamplesList.push(quoteSamples);
};

QuoteSamplesStore.get = function(quoteSamplesID) {
	return this.quoteSamplesList[quoteSamplesID];
};