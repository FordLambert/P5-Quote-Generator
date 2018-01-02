'use strict';
class QuoteSamples {
	constructor(name, beginnings, middles, ends) {
		this.name = name;
		this.beginnings = beginnings;
		this.middles = middles;
		this.ends = ends;
	}
};

class QuoteSamplesStore {
	constructor() {
		this.quoteSamplesList = [];
	}
};

QuoteSamplesStore.prototype.add = function(quoteSamples) {
	this.quoteSamplesList.push(quoteSamples);
};

QuoteSamplesStore.prototype.get = function(quoteSamplesID) {
	return this.quoteSamplesList[quoteSamplesID];
};