   function perimetre(rayon){
    var perimetre = 2 * Math.PI * rayon
    var message= "le perimetre est de " + perimetre + "!";
    return message;
   }
function aire(rayon){
    var aire = Math.PI * (rayon * rayon)
     var message= "l'aire est de " + aire + "!";
    return message;
} 
       
    var rayon = prompt ("veuillez saisir le rayon de votre cercle !");
console.log (perimetre(rayon));
console.log(aire(rayon));
      