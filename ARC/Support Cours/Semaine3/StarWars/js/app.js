(function(){
  //
  let ship = {
    life : 3,
    score: 0
  };


  $(document).ready(function(){
      const game$ = $('#game');
      const ship$ = $('#ship');
      const life$ = $('#life');
      let asteroids$ = $('.asteroid');
      let bullets$ = $('.bullet');

      let counter$ = $('#counter');
      let scores$ = $('#scores');
      let message$ = $('#message');

      // let live1$ = $('#live1');
      // let live2$ = $('#live2');
      // let live3$ = $('#live3');

      computeLife();
      animBg();
      generateAsteroid();

        $(document).on('keyup', function(e){ // Déclaration des touches clavier Keyboard

            //console.log(e.key);
            if (e.key == 'ArrowRight'){
              ship$.css({'left':'+=20'})
            }

            if (e.key == 'ArrowLeft'){
              ship$.css({'left':'-=20'})
            }

            if(e.key == ' '){ //Si on appuie sur Espace, une balle est générée
              // console.log('Shot');
              generateBullet();
            }
        })

        function animBg(){
          setInterval(() => {

            // Déplace l'arrire-plan vers le bas
            game$.css('background-position-y', '+=5')

            // Déplacement des astéroides
            asteroids$.css('top', '+=5');

            // Déplacement des balles
            bullets$.css('top', '-=10');

            asteroids$.each(function(){
              let aste = $(this);
              let asteTop = aste.offset().top;
              let asteLeft = aste.offset().left;

              //console.log(aste.css('top'));
              //console.log(aste.offset().top);
              if(asteTop > 390) { // Zon à risque , collission possible avec vaisseau
                  //console.log(asteLeft);
                  // Récupération de la postion du vaisseau et de l'astéroide
                  let shipLeft = ship$.offset().left;
                  // let asteLeft = aste.offset().left;

                  if((asteLeft + 40 >= shipLeft)
                  && (asteLeft <= shipLeft+ 50)){
                    // console.log('Contact & Collision !!');
                    // Si les conditions sont vraies, il y a contact entre l'astéroide et le vaisseau
                    // ship$.remove();
                    // console.log('IMPACT');
                    aste.remove(); // Retire l'astéroide
                    ship.life--; // Le vaisseau perd une vie
                    computeLife();

                  }
              }

              if(asteTop > 470){
                aste.remove(); // L'astéroide n'est presque  plus  visible (overflow: hidden)
                // dans la zone de jeu, mais il existe encore dans le DOM par souci d'efficacité, on le retire du DOM
              }

              // Boucle sur les bullets$
              bullets$.each(function(){
                let bul = $(this);
                let bulTop = bul.offset().top;
                let bulLeft = bul.offset().left;
                // console.log('bulTop', bulTop);
                let contactX = ((asteLeft + 40) >= bulLeft) && asteLeft <= (bulLeft + 8);
                let contactY = ((asteTop + 40)  >= bulTop) && asteTop <= (bulTop +8);

                if(contactX && contactY){ // Contact entre l'astéroide et la balle
                  aste.remove(); // On retire l'astéroide du DOM
                  bul.remove(); // On retire la balle du DOM
                  //console.log('Touché');

                  /*********Excercie ********/
                  incrementScrore();
                }
              })

            }) // Fin de each sur les asteroids

          }, 1000/24)
        }

        function generateAsteroid(){
          setInterval(() => {
            let style = 'left:' + getRandomValue() +'px';
            game$.append('<div class="asteroid" style="'+style+'"></div>')
            asteroids$ = $('.asteroid');
          }, 3 * 1000)
        }

        function getRandomValue(){
          return Math.floor(Math.random() * 400)
        }

        function computeLife(){
            life$.html(''); // Purge du div #life avant insertion
            if(ship.life > 0){ // S'il reste au moins une vie
              for(let i=0; i<ship.life; i++){
                life$.append('<img class="heart" src="img/vie.png">');
                }
            }else {
              // game$.html('<h1>**** GAME OVER ****</h1>');
              $('body').html('<h1>**** GAME OVER ****</h1>');
            }

            //}
        }

        function generateBullet(){
          let shipLeft = ship$.offset().left;
          let shipTop = ship$.offset().top;
          let style = `top:${shipTop}px;left:${shipLeft + 21}px`;

          game$.append('<div class="bullet" style="'+style+'"></div>')
          bullets$ = $('.bullet');
        }

        /********** Excercice ************************/

        function incrementScrore(){

              scores$.html('');
                let score = ship.score = ship.score + 1;
                scores$.html('<span>'+score+'</span>');
                message$.html('');

                    if(score == 10){
                      message$.html('<p>Bien Joué</p>');
                      setInterval(() =>{
                          game$.css('background-position-y', '+=5')
                          //deplace les asteroid ver le bas
                           asteroids$.css('top', '+=5')
                      }, 1000 / 26)
                  }

                    if(score == 30){
                        message$.html('<p>Bravo !</p>');
                        setInterval(() =>{
                            game$.css('background-position-y', '+=5')
                            //deplace les asteroid ver le bas
                             asteroids$.css('top', '+=5')
                        }, 1000 / 27)
                    }

                      if(score == 40){
                          message$.html('<p>Super Bravo !</p>');
                          setInterval(() =>{
                              game$.css('background-position-y', '+=5')
                              //deplace les asteroid ver le bas
                               asteroids$.css('top', '+=5')
                          }, 1000 / 28)
                      }


        }

  })

})() // Fin fonction englobante
