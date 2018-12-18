//console.log('app.js chargé');

//const sectionPlayers =  document.getElementById('players');
/*let players = [
  'Paola Dybala',
  'Cristiano Ronaldo',
  'Leo Bonnucci',
  'Blaise Matuidi'
];*/

// Liste des types en Js
/*let name = 'Del Piero'; // String
let age = 42; // Number
let retired = true; // Boolean
let team = null; // Null
let country = undefined; // undefined (utiilisé par le compilateur)

let teams = []; // Tableau vide
let player = {

    firstname : 'Alessandro',
    lastname : 'Del Piero',
    age : 42,
    retired : true,
    country : 'Italy'
    //team: 'FC Juventus'
    //team: [{name: 'Juve', color : 'white, black'}]

};*/ // Objet vide

// Ciblae d'élements du DOM
const sectionPlayers = document.getElementById('players');
const selectTeam = document.getElementById('selectTeam');
const resultNumber = document.getElementById('resultNumber');
const cbActive = document.getElementById('cbActive');

// Source de données globales (accessibles  toutes les fonctions)
let players = [
  {active:true, firstname: 'Blaise', lastname: 'Matuidi', num: 16, team: 'Juventus', photoUrl:'static/img/Matuidi.jpg' },
  {active:false, firstname: 'Paolo', lastname: 'Dybala', num: 10, team: 'Juventus', photoUrl:'static/img/Dybala.jpg'},
  {active:true, firstname: 'Leo', lastname: 'Bonucci', num: 19, team: 'Juventus', photoUrl:'static/img/Bonucci.jpg'},
  {active:true, firstname: 'Kylian', lastname: 'Mbappé', num: 7, team: 'PSG', photoUrl:'static/img/Mbappé.jpg'},
  {active:false, firstname: 'Maradonna', lastname: 'Diego', num: 10, team: 'Naples', photoUrl:'static/img/Maradonna.jpg'},

];

// Déclaration d'événements
selectTeam.addEventListener('change', e => {
  //console.log(e.target.value);
  buildTable(e.target.value, false);
})

cbActive.addEventListener('click', e =>{

    //console.log(e);

  // if(e.target.checked){
  //   console.log('case cochée');
  // }else {
  //   console.log('case décochée');
  // }

  buildTable(null, e.target.checked);
})

// Fonctions
function test(){
  console.log('test');
}

function buildTable(selectedTeam, activePlayers){

  console.log(selectedTeam);
  let nbVisiblePlayers = players.length;

  let list = '<table class="table table-border table-striped">';
  list += '<thead><tr><th>Photo</th><th>Nom</th><th>Prénom</th><th>Equipe</th><th>Numéro</th></th></thead>';

  // ES6 (arrow funtion)
  players.forEach(player => {

    if(selectedTeam !=null && selectedTeam != '0'){

        // if(player.team != selectedTeam){
         if(player.team != selectedTeam){

          list += '<tr style="display:none">'
          nbVisiblePlayers--; // Décrémentation
        }else{
          list += '<tr>';
        }
    }else{
      // if(player.active != activePlayers ){
      if(player.active != activePlayers && activePlayers){
        list += '<tr style="display:none">'
        nbVisiblePlayers--; // Décrémentation
      }else {
        list += '<tr>';
      }
    }



    // if(player.lastname.indexOf('ci') != -1){
    //
    //   list +=  '<td style="color:red">' + player.lastname + '</td>';
    // }else{
    //   list +=  '<td>' + player.lastname + '</td>';
    // };

    // if(player.img ==''){
    //   list += '<td><img class="player" alt="" src="static/img/unknown.png" /> </td>';
    // }else{
    //   list += '<td><img class="player" alt="'+ player.lastname +'" src="'+ player.img +'"/> </td>'
    // }

    if (player.photoUrl == '') {
      list += '<td><img class="player" alt="" src="static/img/unknown.png"/></td>';
    } else {
      list += '<td><img class="player" title="'+ player.lastname +'" src="'+ player.photoUrl +'"/></td>';
    }

    list += '<td>' + player.lastname + '</td>';
    list += '<td>' + player.firstname + '</td>';
    list += '<td>' + player.team + '</td>';
    list += '<td><div class="playerNumber">' + player.num + '</div></td>';
    //list += '<td><img alt="" src="' + player.img + '</td>';
    list += '</tr>';

  });
  list += '</table>';
  sectionPlayers.innerHTML = list;
  resultNumber.innerText = nbVisiblePlayers + ' Joueur(s) Trouvé(s)';

}



function init(){

    buildTable(null, false);
}

// Initianisation de démarrage
init();

/*let players = [
  'Paola Dybala',
  'Cristiano Ronaldo',
  'Leo Bonnucci',
  'Blaise Matuidi'
];*/

//sectionPlayers.innerHTML = '<p>Test</p>';

// ES 5
//players.forEach(function(player){
//  console.log(player)
//});

// ES6
//players.forEach(player => console.log(player))
