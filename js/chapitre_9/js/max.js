var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;

for(i = 0; i < valeurs.length; i++){
	//Compare si la valeurs est plus grande que somme
	if (valeurs [i] > somme){
		somme = 0 //Somme revient à 0 zéro pour éviter le cumul
		somme += valeurs[i];//Valeurs[i] remplace somme
	}
}
		console.log(" Le maximum des éléments vaut " +somme);	

var valeurs = [11, 3, 7, 2, 9, 10];

var max = valeurs[0];
//L'indice commence à 1 puisque le maximum est initialisé avec la 1ere valeur du tableau
for(i = 0; i < valeurs.length; i++) {
	if (valeurs[i] > max){
		max = valeurs[i];
	}
}
console.log("Le maximum des éléments vaut " + max);