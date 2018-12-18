// Ciblage du DOM
const tabLinks = document.getElementsByClassName('tabLink');
const sections = document.getElementsByTagName('section');

//console.log(sections);


function addEvents(){

    // On attribue à chaque lien un écouteur d'événement
    for(let i=0; i<tabLinks.length; i++){

      tabLinks[i].addEventListener('click', e => {
        reset();
        section[i].style.display = 'block';

        //console.log(e)
      })

    }
}

function reset(){

  // Masque toutes les sections :
  // for (let i=0; i<section.length; i++) {
  //   section[i].style.display = 'none';
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
}

function init(){

    // On affiche la première sectio par défaut
    sections[0].style.display = 'block';
    addEvents();
}

init();
