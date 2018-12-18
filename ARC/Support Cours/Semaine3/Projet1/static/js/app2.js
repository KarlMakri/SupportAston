// Design Pattern (Modèle de conception ) : Module
// Fonction annonyme envelope la totalité du code
// afin de protéger les variables, les fonctions définies dans le corps de le fonctin annonyme

(function (){
  var test = 'variable défini dans app2.js';
  //console.log(test);

  function message(){
    console.log(test + ' ** ');
  }

  message();

})() // fonction  annonyme auto exécutée.
