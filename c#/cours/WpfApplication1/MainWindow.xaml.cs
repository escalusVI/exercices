using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApplication1
{
    /// <summary>
    /// Logique d'interaction pour MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        int randomed;
        int nbEssais;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender , RoutedEventArgs e)
        {
            NouvellePartie();
        }

        private void btnValider_Click(object sender, RoutedEventArgs e)
        {
            int pickedNum = PickANumber();
            
            if (pickedNum > 0)
            {

                if (pickedNum != randomed)
                {
                    pickedNum = TryAgain(pickedNum);

                }
                else
                {
                    YouWin();
                }
            } 

        }

        private void btnNouvellePartie_Click(object sender, RoutedEventArgs e)
        {
            NouvellePartie();
        }

        void YouWin()
        {
           textBlockInfo.Text = "Bravo !! tu as gagné.";
        }

        int PickANumber()
        {
            string picked = textBoxEssai.Text;

            // Vérifier la validité de la saisie avec TryParse
            int pickedNum;
            bool isNumeric = int.TryParse(picked, out pickedNum);
            if (isNumeric == false)
            {
                // A VOUS : Trouvez le code à écrire ici
                textBlockInfo. Text = "Oups, ce n'est pas un nombre. Essaie encore.";
                
            }
            else
            {
                textBlockInfo.Text = "";
            }

            nbEssais = nbEssais + 1;
            UpdateTry();

            return pickedNum;
        }

        void NouvellePartie()
        {
            randomed = GenereNombreAleatoire();
            textBlockInfo.Text = "";
            textBoxEssai.Text = "";
            nbEssais = 0;
            UpdateTry();
        }

        void UpdateTry()
        {
            textBlockNbEssais.Text = "Nb d'essais:" + nbEssais;
        }

      int GenereNombreAleatoire()
        {
       return new Random().Next(20) + 1;
        }

       int TryAgain(int pickedNum)
        {
            // A Vous : On aide l’utilisateur : on lui indique si c’est plus ou moins
            if (pickedNum > randomed)
            {
                textBlockInfo.Text = "C'est moins";
            }
            else
            {
                textBlockInfo.Text = "C'est plus";
            }
                      
            return pickedNum;
        }

        private void btnValider_TouchEnter(object sender, TouchEventArgs e)
        {
            int pickedNum = PickANumber();

            if (pickedNum > 0)
            {

                if (pickedNum != randomed)
                {
                    pickedNum = TryAgain(pickedNum);

                }
                else
                {
                    YouWin();
                }
            }

        }
    }
}
