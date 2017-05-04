using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NombreMystereConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            int randomed = new Random().Next(20) + 1;

            NouvellePartie(randomed);


            YouWin(randomed);

            Console.ReadKey();
        }
    
        static void NouvellePartie(int randomed)
        {
            Console.WriteLine("Saisissez un nombre entre 1 et 20: ");


            int pickedNum = PickANumber();


            while (pickedNum != randomed)
            {
                if (pickedNum > randomed)
                    Console.WriteLine("c'est moins: ");



                else
                    Console.WriteLine("c'est plus: ");

                pickedNum = PickANumber();

            }
        }
        static void YouWin(int randomed)
        {
            Console.WriteLine("Bravo le nombre est bien: " + randomed);

        }
        static int PickANumber()
        {
            string picked = Console.ReadLine();

            // Vérifier la validité de la saisie avec TryParse
            int pickedNum;
            bool isNumeric = int.TryParse(picked, out pickedNum);
            while (isNumeric == false)
            {
                // A VOUS : Trouvez le code à écrire ici
                Console.WriteLine("Oups, ce n'est pas un nombre. Essaie encore.");
                picked = Console.ReadLine();
                isNumeric = int.TryParse(picked, out pickedNum);
            }

            return pickedNum;
        }
    }
}
    

