#include <math.h>

int main()
{
    //Cette fonction retourne la valeur absolue d'un nombre
  double absolu = 0, nombre = -27;
  absolu = fabs(nombre); //Absolu renverra 27
  printf("%f\n", absolu);

  //Cette fonction renvoie le premier nombre entier après le nombre décimal
  double dessus = 0, nombre2 = 52.71;
  dessus = ceil(nombre2);//dessus vaudra 53
  printf("%f\n",dessus);
  //{floor} a l'effet inverse elle renvoie le nombre en dessous

  // Cettte fonction permet de calculer la puissannce d'un nombre
  double resultat = 0, nombre3 = 2;
  resultat = pow(nombre3, 3);//Resultat vaudra 2{\textasciicrium}3 = 8
  printf("%f\n", resultat);
  //mettre une puissance de 2 permet de calculer un carre

  //CEtte fonction permet de calculer la racine carrée d'un nombre
  double racine = 0, nombre4 = 100;
  racine = sqrt(nombre4);//Resultat vaut 10
  printf("%f\n",racine);

  //IL en existe d'autre à retrouver au chapitre 5 du cours Apprenez à programmez en C
}
