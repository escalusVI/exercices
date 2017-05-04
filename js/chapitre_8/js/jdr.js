var Personnage = {
	nom: "",
	sante: 0,
	force: 0,
	xp: 0,


	//Renvoie la description du personnage
	decrire: function(){
		var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'experience";
		return description; 
	}
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());

//Initialisation des personnages

var Personnage = {
	//Intialise le personnage
	initPerso: function (nom, sante, force, or, cle){
		this.nom = nom;
		this.sante = sante;
		this.force = force;
		this.inventaire = {
			or: 10,
			cle: 1
		} 
	},
	//Attaquer: un personnage cible
	attaquer: function(cible) {
		if(this.sante > 0) {
			var degats = this.force;
			console.log(this.nom +" attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
			cible.sante = cible.sante - degats;
		if(cible.sante > 0){
			console.log(cible.nom + " a encore " + cible.sante + " point de vie");
		} else{
			cible.sante = 0;
			console.log(cible.nom + " est mort !");
		}
	} else {
		console.log(this.nom + " ne peut plus attaquer : il est mort...");
		}
	}
};

var Joueur = Object.create(Personnage);
//Initialise le joueur
Joueur.initJoueur = function (nom, sante, force){
	this.initPerso(nom, sante, force);
	this.xp = 0; //L'espérience du joueur est toujours initialisée à 0
	};
//Renvoi la description du joueur
Joueur.decrire = function (){
var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'experience, " + this.inventaire.or + " pièces d'or et " + this.inventaire.cle + " clé(s)";
return description  
};
//Combat un adversaire
Joueur.combattre = function(adversaire){
	this.attaquer(adversaire);
	if (adversaire.sante === 0) {
		console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " points d'experience");
		this.xp += adversaire.valeur;
		this.inventaire.or += adversaire.inventaire.or;
		this.inventaire.cle += adversaire.inventaire.cle;
	}
};

var Adversaire = Object.create(Personnage);
//Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur){
	this.initPerso(nom, sante, force);
	this.race = race;
	this.valeur = valeur;

};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeux d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());

monstre = Object.create(Adversaire);
monstre.initAdversaire("Ragnar", 60, 30, "troll", 20);

console.log("Encore un monstre qui attaque c'est un " + monstre.race + " qui s'appele " + monstre.nom);

monstre.attaquer(joueur2);
monstre.attaquer(joueur1);

joueur1.combattre(monstre);
joueur2.combattre(monstre);
joueur1.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());
