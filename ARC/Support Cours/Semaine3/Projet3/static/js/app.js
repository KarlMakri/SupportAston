(function (){

  const baseUrl ='http://localhost:4001';

  $(document).ready(function(){
    const btnSend =$('#btnSend');
    const password =$('#password');
    const email =$('#email');
    const message =$('#message');

    btnSend.on('click', sendData);

    function sendData(){

      if(checkData()){

      // Création d'un objet contenant email et mot de passe valide
          let data = {
            email: email.val(),
            password : password.val()
          };

        //}


        // Requête ajax post, données envoyées en format JSON
        fetch(baseUrl + '/user/check', {
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(res => message.text(res));

      } else {
        message.text('Email et Mot de Passe Invalide');
      }
    } // Fin de senData

      function checkData(){
        //\d{4}[ -]\d{4}[ -]\d{4}[ -]\d{4}
        //1111 2222 3333 4444
        //[a-z-A-Z.0-9_]+@[a-z-A-Z0-9_]+(.[a-z]{2,8}){1,3} pour format @
        // Variable de Détection format email
        let reEmail = /[a-z-A-Z.0-9_]+@[a-z-A-Z0-9_]+(.[a-z]{2,8}){1,3}/;
        // De 2 à 4 caractère miniscules suivies d'exactement de valeurs numériques suivis de 2 à 3 caractères minuscules ou majuscules
        let rePassword = /[a-z]{2,4}\d{2}[a-z-A-Z]{2,3}/;

        let validEmail = reEmail.test(email.val());
        let validPassword = rePassword.test(password.val());

        return validEmail && validPassword;

      }

  })

})() // Fin de la fonction globante
