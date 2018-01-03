'use strict';
class Engine {
	constructor() {
		this.generator = {};
		this.quoteSamplesStore = new QuoteSamplesStore();
	}

	createAndStartGenerator() {
		this.fillQuoteSampleStore();
		this.generator = new QuoteGenerator('generator-box-1', this.quoteSamplesStore);
		this.generator.generateThemeList();
		this.generator.displayQuotes();
	}

	fillQuoteSampleStore() {
		const kaamelottQuoteSamples = new QuoteSamples('Kaamelott', 
		[
			'On devient pas chef',
	        'Nous on est Celtes',
	        'Une fois j\'ai dormi avec un porc',
	        'Tu peux préparer les outils',
	        'Tu devais aller en Germanie',
	        'Vous connaissez pas le jeu du pélican',
	        'Croyez moi, c\'est pour votre bien',
	        'C\'est vous qui faites du bruit',
	        'Donc si je comprend bien',
	        'Il faut quand même qu\'on sache sur quel pied danser'
	    ],
	    [
	        ' parcequ\'on le mérite',
	        ' une seule année dans la légion',
	        ' pendant une semaine',
	        ', allez trouve un Breton',
	        ', je connais à mort',
	        ' si vous préférez pas jouer à autre chose ',
	        ', ça va être la grande rigolade pendant quatre jours',
	        ', je savais pas que c\'était aussi clair',
	        ', vous voyez bien que c\'est un piège',
	        ' faites pas celui qu\'est pas au courant'
	    ],
	    [
	        ' andouille !',
	        ', ça peut encore s\'arranger...',
	        ', je serais vous, je lancerais des recherches.',
	        ', c’est moi qui paye l’orchestre.',
	        ', c\'est vrai ou c\'est pas vrai ?',
	        ', une petite partie de dés ça peut pas nous faire de mal.',
	        ', ça doit venir du fait qu\'on marche...',
	        ', pas de vannes, pas de réflexions...',
	        ', hé ben, c\'est pas gentil, voila.',
	        ' bah je sais pas comment vous faites, moi je pourrais pas.'
	    ]);

		const classicQuoteSamples = new QuoteSamples('Classic', 
		[
			'Dans la vie on ne fait pas ce que l\'on veut', 
			'La vie est un mystère qu\'il faut vivre', 
			'On passe une moitié de sa vie à attendre', 
			'La vie, c\'est comme une bicyclette', 
			'Dans la nature, tout a toujours une raison',
			'Notre plus grande gloire n\'est point de tomber', 
			'Certains ont l\'air honnête', 
			'Etre libre, ce n\'est pas seulement se débarrasser de ses chaînes', 
			'Le courage, c\'est de comprendre sa propre vie', 
			'L\'éducation ne se borne pas à l\'enfance'
		],
		[
			' mais on est responsable', 
			'. Non pas tant à cause de ceux qui font le mal', 
			' mais donne autant de lumière qu\'un sourire', 
			' ils ne se rendent jamais compte de leurs souffrances', 
			', tout obstacle renforce la détermination',
			', je cherche à comprendre les questions', 
			' car la promesse est une dette', 
			', c\'est quand tout fonctionne et que personne ne sait pourquoi', 
			' mais j\'en suis fier', 
			' et s\'attendre à un résultat différent'
		],
		[
			' à cause de ceux qui regardent et laissent faire.', 
			' pour ne pas perdre l\'équilibre.', 
			' un seul jour de votre vie.', 
			', ça n\'est pas forcément le pot qui est vide.', 
			', les enfants sont des tyrans.',
			' chaque fois que nous tombons.', 
			' mais la capacité de la vaincre.', 
			', tout le reste c\'est de travers.', 
			'. Il n\'y a que de mauvais cultivateurs.', 
			'. J\'avais déjà du mal avec la main !'
		]);

		this.quoteSamplesStore.add(kaamelottQuoteSamples);
		this.quoteSamplesStore.add(classicQuoteSamples);
	}
};