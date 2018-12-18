// Ciblage du DOM
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnValid = document.getElementById('valid');
const message = document.getElementById('message');

// Paramètres
const config = {

  password:{
    minLength:8
   }
 };

const errorList =[
    {id: 1, message :'Format de l\'email est incorrect'},
    {id: 2, message : 'Password doit comporter au moins '+config.password.minLength+' caractères '},
    {id: 3, message : 'Password doit contenir au moins deux chiffres'}
  ];


let errors = []; // Tableau des erreurs de validation rencontrées

// Functions
function addEvents(){

  btnValid.addEventListener('click', e => {

      let index = null;

      // Émail
      index = search(1); // Recherche de la valeur 1
      if(email.value.indexOf('@') == -1) { // Erreur

        //console.log('le format de l\'email est incorrect')
        //message.innerHTML =
        // message.innerHTML +=
        // '<li>Format de l\'email est incorrect</li>';

        // Si la valeur 1 n'est pas trouvé dans le tableau des erreurs, on l'ajoute grâce à push
        if(index == -1) errors.push(1);

      }else { // Pas d'erreur
      // Si la valeur existe dans le tableau, on la retire  grâce à splice


        if(index != -1) errors.splice(index,1); // La valeur recherchée a été trouvé
         // On retire l'élément du tableau d'erreurs

      }

      // Password longueur minimale
      index = search(2); // Recherche de la valeur 2
      if(password.value.length < config.password.minLength){
        // message.innerHTML +=
        // '<li>Password doit comporter au moins '+ config.password.minLength +' caractères </li>';
          //errors.push(2);
          if(index == -1) errors.push(2);
      }else {
        if(index != -1) errors.splice(index,1);
      }

      // Password au moins deux chiffres
      index = search(3);
      if(countNumericValues(password.value) < 2){ // Erreur
          if(index == -1) errors.push(3);
      }else { // Pas d'Erreur
          if(index != -1) errors.splice(index,1);
      }

      //console.log(errors);
      displayErrors();
  })
}

function countNumericValues(str){

  // Renvoie le nombre de la valeur numériques rencontrées dans une chaîne
  let nbNumericValues = 0;

  // On parcourt la totalité de la chaîne fournie en entrée
  for(let i=0; i<str.length; i++){
    // si le caractères est compris entre 0 et 9
    if(str[i] >= 0 && str[i] <=9){
      nbNumericValues++;
    }
  }

  return nbNumericValues;

}

function search(id){

    let index = -1; // Par défaut, indicé vaut -1

      for(let i=0; i<errors.length; i++){

        if(id == errors[i]){

          index = i;
          break; // Sortie de boucle (élément recherché trouvé ) Toujours un break pour sortir de la boucle
        }
      }

    return index; // On renvoie l'indice (position dans le tableau) de l'élément trouvé
                  // -1 si l'élément n'a pas été trouvé
}

function displayErrors(){

    let html = '';

    errors.forEach(errorId =>{

        html += '<li>'+getErrorMessage(errorId)+'</li>';
    })
    message.innerHTML = html;
}


function getErrorMessage(id){ // Renvoie le message associée à l'idendifiant d'erreur passé en entrée

  let message = null;

  for (let i=0; i<errorList.length; i++){

    if(id == errorList[i].id){

      message = errorList[i].message;
      break;
    }
  }
  return message;
}



function init(){

    addEvents();
}

init();
