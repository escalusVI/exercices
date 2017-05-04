using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bonjour, comment t'appelles tu? ");
            string name = Console.ReadLine();
            
                       
                        
           
            Console.WriteLine("Bonjour, " + name);

            Console.WriteLine("quelle est ton année de naissance?");
            string year = Console.ReadLine();
            int yearNum = int.Parse(year);

            int age = DateTime.Now.Year - yearNum;
            Console.WriteLine("Tu as donc: " + age.ToString() + " ans");

            if ( age < 40) 
            {
                Console.WriteLine("Tu es jeune, tu a de la chance.");
            }

            
            else
            {
                Console.WriteLine("Tu a de l'experience.");
                
            }
              

            Console.ReadKey();
        }
    }
}
