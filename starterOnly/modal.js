function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// variables

var validNom, validPrenom, validEmail, validQuantity, validVille, validDate = false;
var validConditions = true;

var longueur;


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const spanClose = document.querySelector('.close');
const listInput = document.querySelectorAll(".formData input");
//const form = document.getElementsByName('form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  //console.log("launch");
  modalbg.style.display = "block";
}


// Evenement fermer la modale

spanClose.addEventListener('click', () =>{

 modalbg.style.display = 'none';
 location.reload();
 
});



// Affectation de l'évenement 'change' aux différents input du formulaire

  for(let i = 0; i < listInput.length; i++){
    

    listInput[i].addEventListener('change', (event) =>{

      if(event.target.id == 'first'){

          
          validPrenom = verifPrenomNom(event.target.value);
          console.log(validPrenom);
          messageDerreurPrenom();

      } else if (event.target.id == 'last'){

          validNom = verifPrenomNom(event.target.value);
          console.log(validNom);
          messageDerreurNom();

      } else if(event.target.id == 'email'){

       
        validEmail = verifEmail(event.target.value);
        console.log(validEmail);
        messageDerreurEmail();

      } else if(event.target.id == 'birthdate'){

          validDate = verifDateNaissance(event.target.value);
          console.log(validDate);

      } else if(event.target.id == 'quantity'){

        validQuantity = verifNombre(event.target.value);
        messageDerreurNbConcours(event.target.value);


      } else if (event.target.checked && (i <= 10 && i >=5 )){

          validVille = true;
          messageDerreurOption();

      } else if (i == 11){

            if(event.target.checked){

              validConditions = true;
              console.log(validConditions);

          } else{

            validConditions = false;
            console.log(validConditions);

         }
         messageDerreurConditions();

      }

    });
  
  }


