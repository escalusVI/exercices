var chien = {
	nom : prompt("Veuillez saisir le nom du chien !"),
	race : prompt("Veuillez saisir sa race !"),
	taille: prompt ("Veuillez saisir sa taille !"),
	aboyer: function(){
		var aboie = prompt("Veuillez saisir son cri");
		return aboie;
	}
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());