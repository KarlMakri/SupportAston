const btnTest = document.querySelector('#btnTest');
const box = document.querySelector('#box');

let interv = null; // Globale pour la gestion de l'interval

// Paramètre
const config = {

    speed: 250,
    step : 50,
    topStart: -140,
    topStop : -20,
    delay : 2000,
    direction: 'down'
}

// Functions
function addEvents(){

  //btnTest.addEventListener('click', displayBox);
  btnTest.addEventListener('click', animBox);

}
// function displayBox(){
//     // box.style.top = '160px';
//     interv = setInterval(moveBox, config.speed, false); // setInterval Appel moveBox avec false pour valeur du paramètre restart => moveBox(false)
// }
// function moveBox(restart){
//
//     //box.style.display = 'none';
//     let currentVal = (box.style.top); // Accès à la prop top en écriture
//     let numVal = parseInt(currentVal.substr(0, currentVal.length -2)); // Permet de retirer l'unité afin de faciliter les calculs Exemple -160px => -160
//
//     // console.log(numVal);
//
//       if(numVal > config.topStop ){
//
//           clearInterval(interval); // Arrêt de l'animation  (du déplacement de la boite)
//           setTimeout(moveBox, config.delay, true); // => moveBox(true)
//
//
//
//
//       }else {
//
//         let newVal = null;
//
//         if(!restart){ // Phase descendante
//
//             newVal = numVal + config.step; // Pour déminiuer
//
//         }else {
//
//            newVal = numVal - config.step; // Pour augmenter
//         }
//
//         box.style.top = newVal + 'px';
//       }
//
//
// }

function animBox() {
  if (interv == null) {
    if (config.direction == 'down') {
      interv = setInterval(moveDown, config.speed);
    } else {
      interv = setInterval(moveUp, config.speed);
    }
  }
}

function moveDown() {
  let topVal = getTopVal();
  if (topVal > config.topStop) {
    clearInterval(interv);
    interv = null;
    config.direction = 'up';
    setTimeout(animBox, config.delay);
  } else {
    box.style.top = (topVal + config.step) + 'px';
  }
}

function moveUp() {
  let topVal = getTopVal();
  if (topVal < config.topStart) {
    clearInterval(interv);
    interv = null;
    config.direction = 'down';
  } else {
    box.style.top = (topVal - config.step) + 'px';
  }
}

function getTopVal() {
  let currentVal = box.style.top;
  let numVal =
    parseInt(currentVal.substr(0, currentVal.length - 2));
  return numVal;
}

// function restart(){}

function init(){
    box.style.top = config.topStart + 'px';
    addEvents();
}

init();
