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

	add(quoteSamples) {
		this.quoteSamplesList.push(quoteSamples);
	}

	get(quoteSamplesID) {
		return this.quoteSamplesList[quoteSamplesID];
	}
};