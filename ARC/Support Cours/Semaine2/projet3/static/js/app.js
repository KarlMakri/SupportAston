// Ciblage du DOM
const tabLinks = document.getElementsByClassName('tabLink');
const sections = document.getElementsByTagName('section');


// Indice par défaut de la section du lien activé
let activeTabIndex = 0; // Indice de la section / lien activé

// Fonctions
function addEvents() {
  // on attribue à chaque lien un écouteur d'événement
  for (let i=0; i<tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', e => {

      // Approche "Brutale", on boucle sur l'ensemble des sections et des liens pour nettoyage
      //reset();

      // Nettoyage précis
      // On cible précisément les éléments devant être  "nettoyé" grâce à l'indice mémorisé lors du précédent clic
      sections[activeTabIndex].style.display = 'none';
      tabLinks[activeTabIndex].classList.remove('active');

      // ON affiche la section correspondant du lien cliqué
      sections[i].style.display = 'block';

      // Ajout de la classe 'active' su l'élément cliqué
      tabLinks[i].classList.add('active');

      // Mise à jour de l'index de la section activeTabIndex
      activeTabIndex = i;
    })
  }
}

function reset() {
  // masque toutes les sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  // Retire la classe active sur les les liens
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove('active');
  }
}

function init() {
  // on affiche la première section par défaut
  sections[activeTabIndex].style.display = 'block';

  // On rend actif le premier lien
  tabLinks[activeTabIndex].classList.add('active');
  addEvents();
}

init();
