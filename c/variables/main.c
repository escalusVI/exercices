#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) //Equivalent de int main()
{
    const int NOMBRE_DE_VIES_INITIALS = 5;//La constante est un evaleur qui ne peut pas être changée, elle s'ecrit en majuscule, même si ça n'est pas obligatoire

   int nombreDeVies;// On peut créer plusieurs variable en même temps en les séparant par ne virgule ex {int nombreDeVies, niveau, ageDuJoueur}
   nombreDeVies = 5; //Permet de donner une valeur à une variable
   int niveau = 1;

   // Le code ci-dessus aurait pu s'ecrire { int nombreDeVie  = 5, niveau = 1;}

    printf("Il vous reste %d vies et vous etes au niveau n° %d\n",nombreDeVies, niveau);//Affiche le nopmbre de vies %d appel la variable nommé après la virgule
    printf("***B A M***\n");//Là il se prend un grand coup sur la tête
    nombreDeVies = 4;//Il vient de perdre une vie
    printf("Ah desole, il ne vous reste plus que %d vies maintenat !\n\n",nombreDeVies);

   return 0;
}
