//console.log('node fonctionne !');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Sources de données
let users = [
  {name:'Naïm', email:'naim@gusto.it', password:'az88mm'},
  {name:'Yusuf', email:'Yusuf@sufureux.tr', password:'yu99mm'},
  {name:'Céline', email:'Céline@jquery.com', password:'hhhh55PmP'}
];

function checkData(data){
  let userName = null;
  for(let i=0; i<users.length; i++){
    if(data.email == users[i].email &&
      data.password == users[i].password){
        userName = users[i].name;
        break;
      }
  }
  return userName;
}


// Prise en compte du dossier les fichiers statiques
app.use(express.static('static'));
// app.use(express.static('index.html'));

// Parse les données JSON dans le corps des requêtes POST
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) =>{
  res.send('Bravo');
})

app.get('/users', (req, res) =>{
   res.send('users');
})

app.post('/user/check', (req, res) =>{
  // Vérifier présence de l'utilisateur + mot de passe dans Sources
  //console.log(req.body);
  let userName = checkData(req.body);
  // Si userName contient un "truty value" c'est à dire une valeur ni null, ni underfined
  if(userName){
    res.send('Hello ' + userName + ', ça fait plaisir !');
  }else {
    res.send('Qui es-tu ?');
  }
  // res.send('ok');
})

app.get('/players/json', (req, res) =>{
  let players = [
    { firstname:'Paul', lastname:'Pogba', num: 6},
    { firstname:'Paolo', lastname:'Dybala', num: 10},
    { firstname:'Pavel', lastname:'Nedved', num: 7}
  ];

  // Le méthode 1) json convertit les données fournies en entrée en chaîne de caraclère au format JSON : chaîne de caractère
  // 2) envoie les données
  res.json(players);
})

app.get('/players', (req, res) =>{
  let players = `

    <ul>
      <li>Paul Pogba</li>
      <li>Antoine G</li>
      <li>Ngolo K</li>
    </ul>

  `
  res.send(players);
})

app.get('/test', (req, res) =>{
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test</title>
      </head>
        <body>
          <h1>Test</h1>
        </body>
    </html>
  `;
  res.send(html);
})

app.listen(4001, () =>{
  console.log('Serveur écoutant le port 4001. Ctrl + C pour le Stopper !');
})
