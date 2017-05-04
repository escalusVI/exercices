#include <stdio.h>
#include <stdlib.h>

int main()
{
   int nombreEntre = 0;
   while (nombreEntre != 47)
   {
    printf("tapez le nombre 47 ! ");
    scanf("%d", &nombreEntre);
   }

   int compteur = 0;

   while(compteur < 10)
   {
    printf(" La variable compteur vaut %d\n", compteur);
    compteur++;
   }

   return 0;
}
