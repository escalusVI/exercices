using System;


namespace SayMyName
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Who are you ?");
            string name = Console.ReadLine();

            Console.WriteLine("nice to meet you " + name);

            Console.WriteLine("When were yo born ?");
            string year = Console.ReadLine();
            int yearNum = int.Parse(year);

            int age = DateTime.Now.Year - yearNum;
            Console.WriteLine("you are: " + age.ToString());

            if (age < 40)
            {
                Console.WriteLine("You are young, lucky " + name);
                    
                    }

            else
            {
                Console.WriteLine("You are experienced, " + name);
            }

            Console.ReadKey();
            
            
        }
    }
}
