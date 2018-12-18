(function (){
  const baseUrl = 'http://localhost:4003';

  $(document).ready(function(){
    const flagEn = $('#flagEn');
    const flagIt = $('#flagIt');
    const spansEn = $('#spansEn');
    const spansIt = $('#spansIt');
    const DomTranslate = $('#DomTranslate');
    const item = $('#item');
    const enDrap = $('#enDrap');
    const itDrap = $('#itDrap');

    const fruitList = $('#fruitList');
    const flags = $('.flag');

    enDrap.on('click', getEnfruit);
    itDrap.on('click', getItfruit);

    flags.on('click', getFruits);

    getFruits();

    function getFruits(){
        // console.log(this.alt);
        // Si l'appel à getFruits n'est pas du à un click this.alt n'est pas défini
        let lang = '';
        if(this.alt == 'undefined'){
          // La langue par défaut est fr
          lang = 'fr';
        }else{
          // getFruits appelée par un clic sur une image
          lang = this.alt
        }
        console.log(lang);

        fetch(baseUrl + '/fruits')
        .then(res => res.json())
        .then(fruits => {
          //fruitList.html(''); // Supprime les li
          fruitList.children().remove(); // Equivalent : children retourne les éléments les noeuds enfants du ul ( c'est à dire les li) remove() reture ces noeuds du DOM
          fruits.forEach( fruit => {
            // console.log(fruit.en);
            // append ajoute à la fin  l'élément fourni en entrée en tant qu'enfant de l'élément
            // cilble (ici on ajoute un li au ul) prepend ajoue dans l'ordre inverse
            fruitList.append('<li>'+fruit[lang]+'</li>');
          })
          console.log(fruitList.children().length);
        })
    }

    function getEnfruit(){
      let SelectEnDrap = enDrap.val();
        fetch(baseUrl + '/fruits/En', {
          headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method : 'get',
          body : JSON.stringify({en : SelectEnDrap })
        })
        .then(res => res.json())
        .then(res => {
          if(res.length > 0){
            html = '';
            res.forEach(item => {
              html += '<p>'+ item.en +'</p>';
            })
            DomTranslate.html(html);
          }
        })
    }

    function getItfruit(){
      let SelectItDrap = itDrap.val();
        fetch(baseUrl + '/fruits/It', {
          headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method : 'get',
          body : JSON.stringify({it : SelectItDrap })
        })
        .then(res => res.json())
        .then(res => {
          if(res.length > 0){
            html = '';
            res.forEach(item => {
              html += '<p>'+ item.it +'</p>';
            })
            //DomTranslate.html(html);
            console.log(res);
          }
        })
    }
  })

})() // Fin de la fonction globante
