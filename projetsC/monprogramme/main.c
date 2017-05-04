/*
Ci-dessous, ce sont des directives de préprocesseur.
Ces lignes permettent d'ajouter des fichiers au projet ,
fichiers que l'on appelle bibliothèque.
Grâce à ces bibliothèque, on disposera de fonctions toutes prêtes pour afficher
par exemple un message à l'écran
*/

#include <stdio.h>
#include <stdlib.h>

/*
Ci-dessous, vous avez la fonction principale de programme, appelée \texttt{main}.
C'est par cette fonction que tout les programmes commencent.
Ici, ma fonction se contente d'afficher Bonjour à l'écran
*/
int main()
{
   printf("Bonjour\n");//Cette instruction affiche Bonjour à l'écran

   return 0;//Le programme renvoie le nombre 0 puis s'arrête
}
/*Ceci est un commentaire sur plusieur ligne, je ne l'ecrit que pour me souvenir de la maniere de l'integrer au code*/
