// Ciblage du DOM
const email = document.getElementById('email');
const btnValid = document.getElementById('valid');
const success = document.getElementById('success');
const failure = document.getElementById('failure');

const pouceResult = [

    {id: 1, pouce :'<img src="static/img/pouce/leve.png" />'},
    {id: 2, pouce :'<img src="static/img/pouce/bas.png" />'}

  ];

let errors = []; // Tableau des erreurs de validation rencontrées

// Functions
function addEvents(){

  email.addEventListener('keyup', e =>{

      // console.log(e);
      // console.log(email.value);
      let cond1 = email.value.length > 6;
      let cond2 = email.value.indexOf('@') != -1;
      let cond3 =
                  // (email.value.indexOf('.fr') != -1) ||
                  // (email.value.indexOf('.it') != -1);
                  (email.value.substr(-3) == '.fr') ||
                  (email.value.substr(-3) == '.it') ||
                  (email.value.substr(-4) == '.com');


      if(cond1 && cond2 && cond3){

        //console.log('bravo !');
        btnValid.disabled = false;
        success.style.display = 'inline';
        failure.style.display = 'none';
      }else {
        btnValid.disabled = true;
        success.style.display = 'none';
        failure.style.display = 'inline';
      }
  })

}

function displayPouce(){

    // let html = '';
    let img = '';

    errors.forEach(errorId =>{

        // html += '<li>'+getErrorMessage(errorId)+'</li>';
        img += '<li>'+getPouceResult(errorId)+'</li>';
    })
    // pouce.innerHTML = html;
    pouce.innerHTML = img;
}

function getPouceResult(id){ // Renvoie le message associée à l'idendifiant d'erreur passé en entrée

  let pouce = null;

  for (let i=0; i<pouceResult.length; i++){

    if(id == pouceResult[i].id){

      pouce = pouceResult[i].pouce;
      break;
    }
  }
  return pouce;
}


function init(){

    addEvents();
}

init();
