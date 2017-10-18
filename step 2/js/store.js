var QuoteSamples = function(beginnings, middles, ends){
	this.beginnings = beginnings;
	this.middles = middles;
	this.ends = ends;
};

var QuoteSamplesStore = function() {
	this.quoteSamplesList = [];
};

QuoteSamplesStore.prototype.add = function(quoteSamples) {
	this.quoteSamplesList.push(quoteSamples);
};

QuoteSamplesStore.prototype.get = function(quoteSamplesID) {
	return this.quoteSamplesList[quoteSamplesID];
};