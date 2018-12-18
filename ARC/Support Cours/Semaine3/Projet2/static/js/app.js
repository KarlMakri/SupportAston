
(function (){

  const baseUrl = 'http://localhost:4000';

  $(document).ready(function(){

    const btnTest1 = $('#btnTest1');
    const btnTest2 = $('#btnTest2');
    const btnTest3 = $('#btnTest3');
    const section1 = $('#s1');
    const section2 = $('#s2');
    const section3 = $('#s3 tbody');

    // console.log(section);

    function testAjax(){

      fetch(baseUrl + '/players')
      .then(res => res.text()) // .then :  promise
      .then(res => {
          console.log(res);
          section1.html(res);
      })

    }

    function testAjaxJson(){

      fetch(baseUrl + '/players/json')
      .then(res => res.json())
      .then(res => {
        //section2.html(res)
        // res est un tableau d'objets
        // console.log(res.length);
        // Parcours du tableau
        let html = '';
        res.forEach(player => {

          html += '<p>'+ player.lastname + '</p>'
        })
        section2.html(html);
      })
    }

    function getFruits(){

      fetch(baseUrl + '/fruits')
      .then(res => res.json())
      .then(res => {

        let html = '';
        res.forEach(fruit => {
          html += '<tr>';
          html += '<td>'+ fruit.fr +'</td>'
          html += '<td>'+ fruit.en +'</td>'
          html += '<td>'+ fruit.it +'</td>'
          html += '</tr>';
        })

        section3.html(html);
        // Parent () remone  la balise table
        section3.parent().show();

        })

      })
    }

    btnTest1.on('click', testAjax);
    btnTest2.on('click', testAjaxJson);
    btnTest3.on('click', getFruits);

  })

})() // Fin de la fonction globante
