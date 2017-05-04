/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");
var saisie = Number(prompt("Veuillez saisir un chifre entre 1 et 100 :"));
var essai= "";  
    
       while ((saisie!==solution)&&(essai<6))
          { 
              if(essai <=6)
                {
                    essai++;
                    if ((saisie<0)||(saisie>100))
                        {
                            essai--;
                            console.log("Vous devez saisir un chiffre entre 1 et 100!");
                        }
                    else if (saisie > solution)
                        {   
                            console.log( saisie + " est trop grand.");

                        }
                    else if (saisie < solution)
                        {      
                            console.log( saisie + " est trop petit.");

                        }

                    else
                        {
                            essai--;
                            console.log (" Ceci n'est pas un chiffre !");  
                        }
                    if (essai<6)
                        {
                            saisie = Number(prompt("Veuillez saisir un chifre entre 1 et 100 :")); 
                        } 
              }

            }

    if (saisie===solution)
        {
            essai++;
            console.log( "Bravo la solution est " + saisie + ".");
            console.log( "Vous avez trouvez en " + essai + " essai(s)");        
        }
    else
        {
            console.log( "Perdu... La solution est " + solution + ".");                
        }

// TODO : complétez le programme