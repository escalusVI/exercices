var nombre = Number (prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
}
else{//nombre<=0
    if (nombre < 0) {
        console.log(nombre + " est négatif");
    }
    else{//nombre ===0
       console.log(nombre + " est nul"); 
    }
   
}
var meteo = prompt("Quel temps fait-il dehors ?");
if(meteo === "soleil") {
    console.log("Sortez en t-shirt.");
}else if (meteo === "vent"){
    console.log("Sortez en pull.");
}else if (meteo === "pluie"){
    console.log ("Sortez en blouson.");
}else if (meteo==="neige"){
    console.log("Restez au chaud à la maison.");
}else{
    console.log("Je n'ai pas compris !");
}
var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
    case "soleil":
        console.log("Sortez zn t-shirt.");
        break;
    case "vent":
        console.log("Sortez en pull.");
        break;
    case "pluie":
        cosole.log("Sortez en blouson.");
        break;
    case "neige":
        console.log("Restez au chaud à la maison.");
        break;
    default:
        console.log("Je n'ai pas compris !")
        
}