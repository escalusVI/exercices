#include <stdio.h>
#include <stdlib.h>

int main()
{
    int resultat = 0;
    resultat = 5 + 3;// Fonctionne pour tout les calculs +, -, *, / et % (les modulo)
    printf("5 + 3 = %d\n", resultat);

    resultat = 5 / 2;
    printf("5 / 2 = %d\n", resultat);//la console affiche 2 au lieu de 2.5 pour que le resultat soit exacte il faut ecrire les nombres en nombres decimaux

    double resultatDouble = 0;//Mettre double au lieu de int
    resultatDouble = 5.0 / 2.0; //Même chose que division ci-dessus mais avec les nombres decimaux
    printf("5 / 2 = %f\n", resultatDouble);//Le bon resultat s'affiche
    //POur connaitre le reste d'une division on peut utiliser le modulo
    resultat = 5 / 2;//On reprend notre division
    int reste = 0; // On crée une nouvelle variable
    reste = 5 % 2;
    printf("5 / 2 = %d et reste %d",resultat, reste);

}
