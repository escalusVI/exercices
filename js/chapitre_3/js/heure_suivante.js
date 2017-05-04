var hh = Number(prompt("Veuillez saisir l'heure : "));
var mn = Number(prompt("Veuillez saisir les minutes : "));
var sc = Number(prompt("Veuillez saisir les secondes : "));

if ((sc >= 0)&&( sc<59)) {
    sc++;
}else if (sc===59) {
    sc = 00;
    mn++;
}else{
    console.log("les secondes doivent etre comprises entre 0 et 60 !");
}

if ((mn >= 0)&&(mn<59)){
    mn++;
}else if ((mn>=59)&&(sc===0)){
    mn = 00;
    hh++;  
}else if (mn > 59){
    console.log("les minutes doivent etre comprise entre 0 et 60 !");
}


if (hh === 24){
    hh = 00;
}else if ( hh > 24){
    console.log("les heures doivent etre comprise entre 0 et 24 !");
}

  console.log("Dans une seconde il sera, " + hh + "h " + mn + "min " + sc + "sec .");

if(hh || mn || sc !==NUmber){
    console.log("Merci de verifier votre saisie!")
}
