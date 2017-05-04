//Création objet
var compte ={
	titulaire: "Alex",
	solde: "0",
	//Renvoie la description du compte
	decrire : function (){
		var description = "titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
		return description 
	},
	//Crédite le compte d'un certain montant
	crediter : function(montant){
		this.solde = this.solde + montant;
	},
	//Débite le compte d'un certain montant
	debiter : function(montant){
		this.solde = this.solde - montant;
	}

};
console.log(compte.decrire());
var credit = Number(prompt("Veuillez saisir le montant à crediter : "));
compte.crediter(credit);
var debit = Number(prompt("Veuillez saisir le montant à débiter : "));
compte.debiter(debit);
console.log(compte.decrire());
