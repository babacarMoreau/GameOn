function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// variables

var validNom, validPrenom, validEmail = false;


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const spanClose = document.querySelector('.close');
const listInput = document.querySelectorAll(".formData input");

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
 
});



// Affectation de l'évenement 'change' aux différents input du formulaire

  for(let i = 0; i < listInput.length; i++){
    

    listInput[i].addEventListener('change', (event) =>{

      if(event.target.id == 'first'){

          validPrenom = verifPrenomNom(event.target.value);
          console.log(validPrenom);

      } else if (event.target.id == 'last'){

          validNom = verifPrenomNom(event.target.value);
          console.log(validNom);

      } else if(event.target.id == 'email'){

        validEmail = verifEmail(event.target.value);
        console.log(validEmail);

      } else if(event.target.id == 'quantity'){

        


      }
    

    });
  
  }
