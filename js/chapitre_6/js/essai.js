var mot = prompt ("Veuillez saisir votre mot !");

//Renvoie un mot converti en "leet speak"//
function convertirEnLeetSpeak(mot)
{
	var motLeet = "";
	for (var i = 0; i < mot.length; i++)
	 {
		motLeet = motLeet + trouverLettreLeet(mot[i]);	
	 }
	 return motleet;
}

//Renvoie l'équivalent "leet speak" d'une lettre//
function trouverLettreLeet(lettre)
//Par défaut, la lettre ne change pas//
{
var lettreLett = lettre;
switch (lettre.toLowercase())
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
