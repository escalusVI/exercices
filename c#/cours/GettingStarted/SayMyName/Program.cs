using System;

namespace SayMyName
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Who are you ?");
            string name = Console.ReadLine();
            Console.WriteLine("Nice to meet you " + name);

            Console.WriteLine("Entrez votre année de naissance:");
            string annee = Console.ReadLine();
            int anneeInt = int.Parse(annee);
            int age = DateTime.Now.Year - anneeInt;
            Console.WriteLine("Votre age: " + age);

            if (age < 40)
            {
                // A vous : petit message pour les plus jeunes mentionnant le nom de la personne
                Console.WriteLine("You are young, lucky " + name);
            }
            else
            {
                // A vous : petit message pour les plus agés, mentionnant le nom de la personne
                Console.WriteLine("You are experienced, " + name);
            }

            // Attendre l'appui d'une touche pour fermer la fenêtre.
            Console.ReadKey();
        }
    }
}
