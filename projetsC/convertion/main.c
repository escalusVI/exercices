#include <stdio.h>
#include <stdlib.h>

double convertionEF (double euros)
{
    double francs = 0;

    francs = 6.55957 * euros;
    return francs;
}

convertionFE (francs)
{
    double euros = 0;

    euros = 6.55957 / francs;
    return euros;
}

int main()
{
    printf( "convertion:\n 10 Euros = %f F\n 50 Euros = %f F \n 100 Euros = %f F \n 200 Euros = %f F\n\n", convertionEF(10), convertionEF(50), convertionEF(100), convertionEF(200));

    int choixConvertion = 0;
    double saisie = 0;

    printf(" Souhaitez vous convertir :\n");
    printf(" 1. Des euros en Francs\n");
    printf(" 2. Des Frnacs en Euros\n");
    scanf("%d", &choixConvertion);

if (choixConvertion == 1)
{
    printf(" Veuillez saisir un montant en euros : ");
    scanf("%lf",&saisie);
    printf(" %f Euros vaut %f Francs", saisie, convertionEF(saisie));
}
else if (choixConvertion == 2)
{
    printf(" Veuillez saisir un montant en Francs : ");
    scanf("%lf",&saisie);
    printf(" %f Francs vaut %f Euros;\n", saisie, convertionFE(saisie));
}


    return 0;
}
