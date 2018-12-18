const flagEn = document.getElementById('flagEn');
const flagIt = document.getElementById('flagIt');

const spansEn = document.getElementsByClassName('en');
const spansIt = document.getElementsByClassName('it');

// Variable permettant de relier des flags et des spans
// Variable utilisée par la fonction addEventsV2
let languages = [

    {flag: flagEn, spans: spansEn, active:false},
    {flag: flagIt, spans: spansIt, active:false}
];



function addEvents(){

  // Approche 1 : on copie les instructions pour chaque language
  // Redondance
  flagEn.addEventListener('click', e =>{
    for (let i=0; i<spansEn.length; i++){
      spansEn[i].style.display = 'inline';
    }
  })

  flagIt.addEventListener('click', e =>{
    for (let i=0; i<spansEn.length; i++){
      spansIt[i].style.display = 'inline';
    }
  })
}

// Approche 2, optimisation : on passe pour un tableau
// Mettent en reation, sous forme d'objets, des drapeaux (image et des spans. Pas de code redondant, il suffit de modifier la
// variable languages pour ajouter une langue, addEventsV2 continuera de fonctionner sans besoin d'être modifiée)
function addEventsV2(){

    languages.forEach(language => {

      language.flag.addEventListener('click', e =>{

        // let display = '';
        // if(language.active){
        //   display = 'none'
        // }else {
        //   display = 'inline'
        // }

        // Expression ternaire : (Expression Booleènne) ? Instruction Si Vrai : Instruction si Faux
        // Si language.active vaut True, display est initialiséelse
        // avec la valeur 'none', sinon display reçoit 'inline'
        let display = (language.active) ? 'none' : 'inline';

        for (let i=0; i<language.spans.length; i++){
          langue.spans[i].style.display = display;
        }

        // Changer l'apparence du drapeau
        // if(language.active){
        //
        //   language.flag.style.opacity = 0.3
        //
        // }else{
        //
        //   language.flag.style.opacity = 1
        // }
        language.flag.style.opacity = (language.active) ? 0.3 : 1;


        // Bascule  (toogle), on renverse la valeur de language.active
        // grâce à l'opérateur de négation (inverse)!
        language.active = !language.active;
      })
      //console.log(languages)
    })
}




function init(){

  addEventsV2();
}

init();
