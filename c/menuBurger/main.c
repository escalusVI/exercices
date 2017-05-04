#include <stdio.h>
#include <stdlib.h>

int main()
{
    int choixMenu;

    printf(" === Menu ===\n");
    printf(" 1. Royal Cheese\n");
    printf(" 2. Mc Deluxe\n");
    printf(" 3. Mc Bacon\n");
    printf(" 4. Big Mac\n");
    printf("\n Votre choix ?");
    scanf("%d",&choixMenu);

    printf("\n");

    switch(choixMenu)
    {
    case 1:
        printf("\n Vous avez choisi le Royal Cheese. Bon choix !");
        break;
    case 2:
        printf("\n Vous avez choisi le Mc Deluxe. Berk, trop de sauce...");
        break;
    case 3:
        printf("\n Vous avez choisi le Mc Bacon. Bon, ça passe encore ça ;o");
        break;
    case 4:
        printf("\n Vous avez choisi le Big Mac. Vous devez avoir tres faim !");
        break;
    default:
        printf("Vous n'avez pas rentre un nombre correct. Vous ne mangerez rien du tout !");
    }
    printf("\n\n");
    return 0;
}
