var prixHT = Number(prompt("Saisir le montant hors taxe: "));
var tva = prixHT * 19.6 / 100;
var prixTTC = prixHT + tva;
console.log("le prix TTC est de" +prixTTC +" euros" );                          