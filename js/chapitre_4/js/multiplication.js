var saisie = Number(prompt("Veuillez saisir le chiffre dont vous souhaitez connaitre sa table de multiplication :"));
var multiplicateur ="";
for (multiplicateur = 1; multiplicateur<=10; multiplicateur++){
    var resultat = saisie*multiplicateur;
    console.log(saisie + " * " + multiplicateur + " = " + resultat );
}

var saisie = Number(prompt("Veuillez saisir le chiffre dont vous souhaitez connaitre sa table de multiplication :"));
var multiplicateur ="";

  while((saisie<2)||(saisie>9)) {
       saisie = Number(prompt("Veuillez saisir le chiffre dont vous souhaitez connaitre sa table de multiplication entre 2 et 9 :")); 
    }

for (multiplicateur = 1; multiplicateur<=10; multiplicateur++){
    var resultat = saisie*multiplicateur;
    console.log(saisie + " * " + multiplicateur + " = " + resultat );
}
