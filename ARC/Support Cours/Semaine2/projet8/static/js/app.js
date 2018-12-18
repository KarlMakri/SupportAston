const btnPrimary = document.querySelector('#btnTest');
const box = document.querySelector('#box');
const counter = document.querySelector('#counter');

// Paramètre
const config = {

    delay : 4000
}

// Variable globale Permettant de controler l'intervale
// Lorsque cette variable vaut null, on en déduit  q'un interval n'est en cours
let interv = null;

// Functions
function addEvents(){

  btnPrimary.addEventListener('click', displayBox);

}

function displayBox(){

  if(interv == null) {

    box.style.display = 'block';
    counter.innerText = config.delay / 1000;
    setTimeout(hideBox, config.delay + 100); // Ajout de 100ms de manière à voir le zéro juste avant la disparition de la boite
    interv = setInterval(countdown, 1000); // interv n'est plus null
  }

}

function hideBox(){

    box.style.display = 'none';
    clearInterval(interv); // Destruction de l'intervale
    interv = null; // Interv redevient null
}

function countdown(){

    // Conversion en number de la chaîne exemple : '4' => 4
    let currentValue = parseInt(counter.innerText);
    // console.log(typeof currentValue);

    counter.innerText = currentValue -1;
}

function message(){console.log('coucou');}
function message2(){console.log('cio');}
function message3(msg){console.log(msg);}

function test() {

      //addEvents();
      setTimeout(message, 5000);
      setTimeout(message2, 8000);
      setTimeout(message3, 10000, 'Bravo !');
      setTimeout(message3, 10000, 'Auguri !');
      console.log('Salut');

}

function init(){

    addEvents();
    //displayBox();

    // setInterval(message, 2000);

    countdown();
}

init();
