// // Vérification que jQuery est chargé
// console.log(typeof jQuery);
//
// //jQuery et $ sont identiques
// console.log(jQuery === $);

(function (){

  let test = 'variable défini dans app.js';
  let sectionsVisible = false;
  let counterClick = 0;

  // Fonctions n'interveant pas sur le DOM
  // function toggleSections(){
  //
  //   sectionsVisible = !sectionsVisible;
  //
  //   sections.toggle();
  // }

  $(document).ready(function(){
    // console.log('Je suis prêt');
    // $('h1').text(test);
    // Quant le Dom est complément (état : ready) chargé la fonction anonyme s'éxécute.
    // IL est préférable de placer à l'intérieur de cette fonction
    // toutes les instructions manipulant ou écoutant le DOM
    // Ciblage du DOM
    // Certains déveoppeurs ajoute un dollar dans le nom de la variable pour indiquer qu'elle a reçu la retour de la fonction jQuery
    const sections = $('section');
    const btnShow = $('#btnShow');
    const headers = $('h2');

    // fonctions intervenant sur le SOM
    function toggleSections(){
      sectionsVisible = !sectionsVisible;
      counterClick++;



      // toggleClass utilise un if interne pour déterminer s'il doit ajouter au retirer
      // le nom de la classe css fourni en paramètre
      //headers.toggleClass('highlighted');

      // Modifier le texte du bouton
      // Afficher / Masquer les sections
      if(sectionsVisible){
        btnShow.text('Masquer les Sections');
        sections.show();
        // headers.css('color', 'red');
        // headers.css({'color':'red', 'font-size':'3rem'});
        headers.addClass('highlighted');
      }else {
        btnShow.text('Afficher les Sections');
        sections.hide();
        //headers.css('color', '#000');
        // headers.css({'color':'#000', 'font-size':'1.3rem'});
        headers.removeClass('highlighted');
      }
      // sections.toggle();
      if(counterClick > 9){
            $('body').html('<h1>Vous avez dépassé le nombre de clics autorisé....</h1>')
      }
    }


    headers.on('click', function(){

        //console.log(e.target.parentNode);
        // console.log(this);
        // On masque ou affiche l'élément suivant dans le DOM
        $(this).next().fadeToggle(250); // Fonction toggle fait le travail du if
    })

    // $('#btnShow').on('click', toggleSections);
    btnShow.on('click', toggleSections);
  })

})() // Fin de la fonction globante
