var moyenne = Number(prompt("Saisissez votre moyenne au baccalauréat: "));
if (moyenne < 10){
    console.log("Désolé mais " + moyenne +" Ne vous permet pas d'avoir votre baccalauréat.")
}else if (moyenne <12){
    console.log ("Félicitation vous etes reçu avec une moyene de " + moyenne + ".");
}else {
    console.log("Felicitation, vous etes reçu avec mention pour votre moyenne de " + moyenne +".")
}

