var perso = {
	nom : "Aurora",
	sante: 150,
	force: 25,
	xp: 0,

//Renvoie la description d'un perso
  decrire: function () {
	var description = this.nom + " a " +  this.sante + " points de vie et " + this.force + " en force et " + this.xp +  " points d'éxperience";
	return  description;
  }
};

console.log(perso.decrire());


//Aurora est blessée par un flèche
perso.sante = perso.sante - 20;

//Aurora truve un bracelet de force
perso.force = perso.force + 10;

//Aurora apprend une nouvelle compétence
perso.xp = +15;

console.log(perso.decrire());



