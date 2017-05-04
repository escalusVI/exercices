function calculer (operandGauche, operation, operandDroite){
    var resultat
    switch (operation){
        case "+":
            resultat = operandGauche + operandDroite;
            break;
        case "-":
            resultat = operandGauche - operandDroite;
            break;
        case "*":
            resultat = operandGauche * operandDroite;
            break;
        case "/":
            resultat = operandGauche / operandDroite;
            break;
    }
    return resultat;
}


console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0))