var r = Number(prompt("Entrez le rayon d'un cercle :"));
//Saisir le code
 var cercle = {
 	perimetre: function(){
 		var perimetre = 2* Math.PI * r;
 		return perimetre;
 	},
 	aire: function(){
 		var aire = Math.pow(r, 2) * Math.PI;
 		return aire;
 	}
 }

//Fin de saisie du code
console.log("Son perimètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());