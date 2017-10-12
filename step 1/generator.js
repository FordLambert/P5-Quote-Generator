// generator prototype
var QuoteGenerator = function(wrapperId) {
	this.wrapper = wrapperId;
	this.startButton = document.getElementById(wrapperId).querySelector('.start-generation');
	this.dislpayArea = document.getElementById(wrapperId).querySelector('.quote-generator-result');
};

QuoteGenerator.prototype.randomNumber = function randomNumber() {
	return Math.floor(Math.random() * 10);
};

QuoteGenerator.prototype.cleanText = function cleanText() {
	this.dislpayArea.innerHTML = "";
};

QuoteGenerator.prototype.generateQuote = function(quoteTable) {
	var quote = '<p>"' + (quoteTable.partOne[this.randomNumber()] + "" + quoteTable.partTwo[this.randomNumber()] + "" + quoteTable.partThree[this.randomNumber()]) + '"</p>'
	return quote;
};

QuoteGenerator.prototype.displayQuote = function(quoteTable) {
	this.startButton.addEventListener("click", function () {
		this.cleanText();
		this.dislpayArea.innerHTML = this.generateQuote(quoteTable);
	}.bind(this));
};

//end of generator prototype

// quote protoype
var FakeQuote = function(partOne, partTwo, partThree){
	this.partOne = partOne;
	this.partTwo = partTwo;
	this.partThree = partThree;
};
//end of quote prototype

//creating objects
var generator = new QuoteGenerator('generator-box-1');
var kaamelottQuote = new FakeQuote([
	"On devient pas chef", 
	"Nous on est Celtes", 
	"Une fois j'ai dormi avec un porc", 
	"Tu peux préparer les outils", 
	"Tu devais aller en Germanie",
	"Vous connaissez pas le jeu du pélican",
	"Croyez moi, c'est pour votre bien",
	"C'est vous qui faites du bruit",
	"Donc si je comprend bien :",
	"Il faut quand même qu'on sache sur quel pied danser"
],
[
	" parcequ'on le mérite", 
	" une seule année dans la légion", 
	" pendant une semaine", 
	". Allez trouve un Breton", 
	", je connais à mort",
	". vous préférez pas jouer à autre chose ",
	", ça va être la grande rigolade pendant quatre jours",
	", je savais pas que c'était aussi clair",
	", vous voyez bien que c'est un piège",
	" faites pas celui qu'est pas au courant"
],
[
	" andouille !", 
	", ça peut encore s'arranger...", 
	", je serais vous, je lancerais des recherches.", 
	", c’est moi qui paye l’orchestre.", 
	". C'est vrai ou c'est pas vrai ?",
	", une petite partie de dés ça peut pas nous faire de mal.",
	". Ça doit venir du fait qu'on marche...",
	". Pas de vannes, pas de réflexions...",
	", hé ben, c'est pas gentil. Voila.",
	". Bah je sais pas comment vous faites, moi je pourrais pas."
]);

//starting the generator
generator.displayQuote(kaamelottQuote);