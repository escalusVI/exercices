var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films.length); //afffiche 3


var tableauVide = []; //Création d'un tableau 

console.log(tableauVide.length); //Affiche 0

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films[0]); //Affiche "Le Loup de Wall Street"
console.log(films[1]); //Affiche "Vice-Versa"
console.log(films[2]); //Affiche "Babystitting"
console.log(films[3]); //Affiche undefined

//Même resultat avec une boucle
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
	console.log(films[i]);
}

//Même resultat avec forEach() qui permet de créer une fonction
var films =["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.forEach(function (film) {
	console.log(film);
});

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.push("Les Bronzés");

console.log(films[3]); //Affiche "Les Bronzés"

var Film = {
	//Initialise le film
	init: function (titre, annee) {
		this.titre = titre;
		this.annee = annee;
	},
	//Renvoi la description du film
	decrire: function() {
		var description = this.titre + " (" + this.annee + ")";
		return description;
	}
};

var film1 = Object.create(Film);
film1.init("Le Loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film){
	console.log(film.decrire());
});