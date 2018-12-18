//console.log('node fonctionne !');
const express = require('express');
const app = express();

// Prise en compte du dossier les fichiers statiques
app.use(express.static('static'));
// app.use(express.static('index.html'));

// Sources de données
let fruits = [
  {fr: 'Pomme', en: 'Apple', it:'Mea'},
  {fr: 'Citron', en: 'Lemon', it:'Limone'},
  {fr: 'Orange', en: 'Orange', it:'Arancia'},
  {fr: 'Raisin', en: 'Grapefruit', it:'Uva'},
  {fr: 'Noisette', en: 'Nut', it: 'Nocciola'},
];

app.get('/', (req, res) =>{
  res.send('Bravo');
})

app.get('/fruits', (req, res) =>{
   res.send('fruits');
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

app.listen(4000, () =>{
  console.log('Serveur écoutant le port 4000. Ctrl + C pour le Stopper !');
})
