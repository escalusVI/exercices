var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "bic"
};

//Constructeur MonObjet
function MonObjet() {
	//Initialisation de l'objet
	//...
}
//Instanciation d'un objet à partir de Constructeur
var monObj = new MonObjet();

console.log(stylo.type); //Affiche "bille"
console.log(stylo.couleur);//Affiche "bleu"
console.log(stylo.marque);//Affiche "bic"

//ou

console.log(stylo["type"]);
console.log(stylo["couleur"]);
console.log(stylo["marque"]);
//Methode moins utilisé

var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge";//Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5; //Ajout de la propriété prix à l'objet stylo
console.log("Il coûte " + stylo.prix + " euros");