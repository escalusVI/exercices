var Chien = {
	initChien: function (nom, race, taille){
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},
	aboyer: function (){
		var aboiement = "Wouah ! Wouah !";
		if (this.taille < 25) {
			aboiement = "Kaii ! kaii !"; 
		} else if (this.taille >60){
			aboiement = "Grrr ! Grrr !";
		}
		return aboiement;
	}
};	

var crokdur = Object.create(Chien);
crokdur.initChien("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.initChien("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());