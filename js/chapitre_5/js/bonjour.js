function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("Veuillez saisir votre prénom !");
var nom = prompt("Veuillez saisir votr nom !");
                     console.log(direBonjour(prenom, nom));