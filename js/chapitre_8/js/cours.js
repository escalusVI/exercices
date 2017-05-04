var unObjet = {
	a: 2
};

//crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a);//Affiche 2

//crée encoreUnAutreObjet avec unAutreObjet comme prototype
var encoreUnAutreObjet = Object.create(unAutreObjet);

console.log(encoreUnAutreObjet.a);//Affiche 2
console.log(encoreUnAutreObjet.b);//Affiche undefined