#include <stdio.h>
#include <stdlib.h>
int menu()
{

    int choix = 0;


    while (choix < 1 || choix > 4)
    {
        printf(" Menu :\n");
        printf(" 1 : Poulet de dinde aux escargots rotis a la sauce bearnaise\n");
        printf(" 2 : Concombre sucres a la sauce de myrtilles enrobee de chocolat\n");
        printf(" 3 : Escalope de kangourou saignante et sa gelee aux fraises poivree\n");
        printf(" 4 : La surprise du chef (j'en salive d'avance...\n");
        printf(" Votre choix ? ");
        scanf("%d", &choix);

        if (choix < 1 || choix > 4)//Ajout d'un message d'erreur en cas de saisie en dehors du menu
        {
            printf(" %d n'est pas dans le menu, veuillez saisir un plat dans le menu ! \n", choix);
            printf("\n\n");
        }
    }

    return choix;

}

int main()
{
    switch (menu())
    {
        case 1:
            printf(" Vous avez pris le poulet\n");
            break;
        case 2:
            printf(" Vous avez pris les concombres\n");
            break;
        case 3:
            printf(" Vous avez pris l'escalope\n");
            break;
        case 4:
            printf(" Vous avez pris la surprise du chef. Vous etes un sacre aventurier dites donc !\n");
            break;

    }

    return 0;
}
