var chien = {
	nom : "Crokdur",
	race : "matin de Naples",
	taille: "75",
	aboyer: function(){
		var aboie = "Grr! Grr!";
		return aboie;
	}
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + "aboie : " + chien.aboyer());