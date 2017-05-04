var saisie = prompt ("Veuillez saisir un mot !");
var mot= saisie.toLowerCase();//Transforme le mot en minuscule//
//Calcul du nombre de caractères début//
var longueurMot = mot.length;
console.log("Le mot contient " + longueurMot +" caractère(s)")
//Fin//
//Mot en minuscule début//
var motEnMinuscules = mot.toLowerCase();
console.log("il s'écrit en minuscules " + motEnMinuscules);
//Fin//
//Mot en majuscule début//
var motEnMajuscule = mot.toUpperCase();
console.log("il s'écrit en majuscules " + motEnMajuscule);
//Fin//
//Voyelles et consonnes début//
var nbVoyelles = 0;
var nbConsonne = 0;
function compterVoyelles(mot)
	{
	for (var i = 0; i < mot.length; i++) 
		{
			var lettre = mot[i].toLowerCase();//Reprend lettre par lettre en minuscule//			
			if((lettre==="a")||(lettre==="e")||(lettre==="i")||(lettre==="o")||(lettre==="u")||(lettre==="y"))
			{
				nbVoyelles++;
			}
			else
			{
				nbConsonne++;
			}
		}
			console.log("Il contient " + nbVoyelles + " voyelle(s) et " + nbConsonne + " consonne(s).");
	}
	compterVoyelles(mot);
//Fin//
//Mot en inversé// 
function inverser (Mot){
	var motInverse = "";
for (var i = mot.length -1; i>=0 ; i--)
{
	motInverse = motInverse + mot[i];
}
console.log("Il s'écrit à l'envers "+ motInverse);
//Palindrome//
if (motInverse === mot){
	console.log("C'est un Palindrome");
}
else{
	console.log("Ce n'est pas un Palindrome");
}
//fin Palindrome//
}
inverser(mot);
//fin mot inversé//
//Renvoie un mot converti en "leet speak"//
function convertirEnLeetSpeak(mot)
{
	var motLeet = "";
	for (var i = 0; i < mot.length; i++)
	 {
		motLeet = motLeet + trouverLettreLeet(mot[i]);	
	 }
	 return motLeet;
}

//Renvoie l'équivalent "leet speak" d'une lettre//
function trouverLettreLeet(lettre)
//Par défaut, la lettre ne change pas//
{
var lettreLett = lettre;
switch (lettre.toLowerCase())
	{
		case "a":
			lettreLett = "4";
			break;
		case "b":
			lettreLett = "8";
			break;
		case "e":
			lettreLett = "3";
			break;
		case "l":
			lettreLett = "1";
			break;
		case "o":
			lettreLett = "0";
			break;
		case "s":
			lettreLett = "5";
			break;
		case "t":
			lettreLett ="7";
			break;
	}	
	return lettreLett;
	}
	var motLeetSpeak = convertirEnLeetSpeak(mot);
	console.log ("Il s'écrit en leet speak " + motLeetSpeak);
	//Fin "leet speak"//