/*
Ci-dessous, ce sont des directives de pr�processeur.
Ces lignes permettent d'ajouter des fichiers au projet ,
fichiers que l'on appelle biblioth�que.
Gr�ce � ces biblioth�que, on disposera de fonctions toutes pr�tes pour afficher
par exemple un message � l'�cran
*/

#include <stdio.h>
#include <stdlib.h>

/*
Ci-dessous, vous avez la fonction principale de programme, appel�e \texttt{main}.
C'est par cette fonction que tout les programmes commencent.
Ici, ma fonction se contente d'afficher Bonjour � l'�cran
*/
int main()
{
   printf("Bonjour\n");//Cette instruction affiche Bonjour � l'�cran

   return 0;//Le programme renvoie le nombre 0 puis s'arr�te
}
/*Ceci est un commentaire sur plusieur ligne, je ne l'ecrit que pour me souvenir de la maniere de l'integrer au code*/
