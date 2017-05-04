#include <stdio.h>
#include <stdlib.h>

int main()
{
   int resultat = 0, nombre1 = 0, nombre2 = 0;

   printf("Nous allons faire quelques calculs!\n");//Calculer une addition
   printf("Saisir le premier nombre : ");
   scanf("%d",&nombre1);
   printf("Saisir le deuxieme nombre : ");
   scanf("%d",&nombre2);

   resultat = nombre1 + nombre2;

   printf("\n Addition\n %d + %d = %d\n\n", nombre1, nombre2,resultat);

   resultat = nombre1 - nombre2; //Soustraction
   printf(" Soustraction\n %d - %d = %d\n\n",nombre1,nombre2,resultat);

   resultat = nombre1 * nombre2;
   printf(" multiplication\n %d * %d = %d\n\n",nombre1,nombre2,resultat);

   resultat = nombre1 / nombre2;
   printf(" Division\n %d / %d = %d",nombre1,nombre2,resultat);
   resultat = nombre1 % nombre2;
   printf( " et il reste %d\n", resultat);

   return 0;
}
