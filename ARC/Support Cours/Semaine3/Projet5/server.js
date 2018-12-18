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
   res.send(fruits);
})

app.get('/fruits/En', (req, res) => {
  let list = getEnfruit(req.body.en);
  res.json(list);
})

app.get('/fruits/It', (req, res) => {
  let list = getItfruit(req.body.it);
  res.json(list);
})

app.listen(4003, () =>{
  console.log('Serveur écoutant le port 4003. Ctrl + C pour le Stopper !');
})
