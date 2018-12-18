// Ciblage du document
const imagesSmall = document.getElementById('imagesSmall').children;
const imagesBig = document.getElementById('imagesBig').children;
const imagesSmall2 = document.getElementById('imagesSmall2').children;
const imageBig = document.getElementById('imageBig');
//console.log(section);


// Foctions
function addEventsV1(){

  for(let i =0;  i<imagesSmall.length; i++){

    //console.log(section[i]);
    imagesSmall[i].addEventListener('mouseover', e => {

        //console.log(e);
      // e.target.src contient l'url de l'image survolée, image cible.

      // Approche 1 : valable si les imagees sont un ordre différent
      displayImageBig(e.target.src);

      // Approche 1 : valable si les imagees sont le même  ordre
      //imagesBig[i].style.display = 'inline';
    })

    imagesSmall[i].addEventListener('mouseout', e => {

      //  console.log(e);
      reset();
    })
  }
}

function addEventsV2(){

    // Ajoute un écouteur d'évenement à chaque miniature
    for(let i=0; i<imagesSmall2.length; i++){

      imagesSmall2[i].addEventListener('mouseover', e => {

          displayImageBigV2(e.target.src);

      })
    }
}

function displayImageBig(imageSrc){
    // Parcourt l'ensemble des images grand format
    for(let i=0; i<imagesBig.length; i++){
        // Si les proprioriétés src des deux formats correspondent
        if (imageSrc == imagesBig[i].src){
          // On affiche l'image garand format en modifiant sa prop
          // Style.display
          imagesBig[i].style.display = 'inline';

        }else {
          // Si non on masque l'image grand format qui est éventuellement resté affichée ou visible
          imagesBig[i].style.display = 'none';
          //console.log('Image Agrandi');
        }

    }
}

function displayImageBigV2(imageSrc){

    let indiceSmall = imageSrc.indexOf('small/');
    let baseUrl = imageSrc.substr(0, indiceSmall);
    let filename = imageSrc.substr(indiceSmall + 6);
    let finalUrl = baseUrl + filename;

    //console.log(finalUrl);

    // APRES injection de l'image de ce DOM
    // ajout d'un écouteur d'événement click
    // Permettant de supprimer l'image lorsque l'on clique dessus

    imageBig.innerHTML = '<img id="big" src="'+ finalUrl +'" alt="" />';
    document
      .getElementById('big')
      .addEventListener('click', e =>{

          //console.log('click');
          imageBig.innerHTML = '';
      })

}

function reset(){

    for(let i=0; i<imagesBig.length; i++){

        imagesBig[i].style.display = 'none';
    }
}

function init(){

  addEventsV1();
  addEventsV2();
}

init();
