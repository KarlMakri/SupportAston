// ciblage du document
const btns = document.querySelectorAll('#menu button');
const domBasket = document.querySelector('#basket tbody');
const domTotal = document.getElementById('total'); // total est l'id du
const btnOrder = document.getElementById('btnOrder');
const inputsQuantity = document.querySelectorAll('#menu input');

let basket = []; // Panier

// Fonctions
function addEvents() {
  // Ecoute tous les boutons d'ajout au panier
  for(let i =0; i<btns.length; i++){
      btns[i].addEventListener('click', e =>{
        let article = e.target.parentNode; // Parent direct du bouton porteur de l'événement, du bouton cliqué
        //console.log(article.querySelectorAll('.name').innerText); //

        let quantity = parseInt(article.querySelector('input').value);

          if(quantity < 0) { // Si la quantité est négative
            article.querySelector('input').value = 1;
            quantity = 1;
          }


        let item = { // Ciblage et récupération des informations utiles
          name: article.querySelector('.name').innerText,
          quantity : quantity,
          price: parseFloat(article.querySelector('.price').innerText) // parseFloat
        };

        // console.log(item);
        basket.push(item); // Ajout de l'élément dans le panier
        updateBasket();
      })
  } // Fin for

  // Ecoute le bouton Commander

  btnOrder.addEventListener('click', e =>{
    //e.targert
    //console.log(e.target.nextSibling);
    e.target.nextSibling.innerText = 'Merci infiniment ....'; // Par rapport au bouton porteur de l'événement on cible l'élément suivant à la Dom
    setTimeout(() => {
      e.target.nextSibling.innerText = '';
    }, 4000);
  })

  // Ecoute les inputs Quantité
  for (let i=0; i<inputsQuantity.length; i++){
    inputsQuantity[i].addEventListener('change', checkInput);

    inputsQuantity[i].addEventListener('keyup', checkInput);
  }
} // Fin functin addEvents

function checkInput(e){
  let val = parseInt(e.target.value);
  let btn = e.target.nextSibling.nextSibling;

  //console.log(val);

    // Si la valeur de l'input nulle ou négative ou qu'elle n'est pas une valeur numérique (NaN = Not à number) on désactive le bouton d'ajout au panier
    // if(val < 1 || isNaN(val)){
    //   btn.disabled = true
    // }else {
    //   btn.disabled = false
    // }
    // btn.disabled = (val < 1 || isNaN(val));
    btn.disabled = val < 1 || isNaN(val);
}

function updateBasket(){
  let html = '';
  let total = 0;
  let totals = 0;
  basket.forEach(item => {
    total = item.price * item.quantity;
    totals += total; // Cumul totaux

    html += '<tr>';
    html += '<td class="name">'+ item.name +'</td>';
    html += '<td>'+ item.quantity +'</td>';
    html += '<td>'+ item.price +'</td>';
    html += '<td>'+ total +'</td>';
    html += '<td><button id="'+ item.name +'" class="btn btn-sm btn-danger delete">Supprimer</button></td>'; // On ajoute une propriété id au bouton afin de pouvoir de récupérer facilement le nom de l'élément à Supprimer voir plus bas l'approche 2
    html += '</tr>';
  });
  domBasket.innerHTML = html;
  domTotal.innerText = totals;

  // écoute des boutons de suppression
  let btnsDelete = domBasket.querySelectorAll('.delete');
    for(i=0; i<btnsDelete.length; +i++){
      btnsDelete[i].addEventListener('click', e=> {
        // console.log('click');
        // Approche 1. Exploration du DOM relative au bouton cliqué
        // let tr = e.target.parentNode.parentNode;
        // // console.log(tr);
        // let name = tr.querySelector('.name').innerText;

        // Approche 2 Lecture d'une propriété (ici: id) de l'élément
        let name = e.target.id;
        //console.log(e.target.id);

        basket.splice(find(name), 1);
        updateBasket(); // Mettre le DOM à jour après suppression
      })
    }

}

function find(name){
  let index = -1;

    for(let i=0; i<basket.length; i++){
      if(basket[i].name == name){
        index = i;
        break;
      }
    }

  return index;
}

function initInputs(){

  for(let i=0; i<inputsQuantity.length; i++){ // Donne valeur initiale aux inputs quantité
    inputsQuantity[i].value = 1;
  }
}

function init() {

  addEvents();
  initInputs();
}

init();
