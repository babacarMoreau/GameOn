

// Verification qu'un nom et prenom est correctement saisie
function verifPrenomNom(string){

  const regex = new RegExp("^[a-zA-Z-]{2,}$");
  longeur = string.length;

  if(string.length >=2 && regex.test(string) && string != "") return true;
  else return false;

}

// Verification qu'une email renseigné est correcte
function verifEmail(string){

    const regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if(regex.test(string)) return true;
    else return false;

}

//Verification de la date de naissance

function verifDateNaissance(date){

  const regex = new RegExp("")


}

// Verification que le nombre de concours est numérique

function verifNombre(nbconcours){

 // parseInt pour gerer le cas ou il y a 'rien' ou des'espaces'
  if(!isNaN(parseInt(nbconcours))) return true;
  else return false;

}

// Affichage du message d'erreur pour prenom invalide

function messageDerreurPrenom(){

  const msgErreur = document.getElementById("prenomError");

  msgErreur.style.color = 'red';
  msgErreur.style.fontSize = "small";
 

  if(longeur < 2){

      msgErreur.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
      msgErreur.style.display = 'block';
      
  } else if (!validPrenom){

      msgErreur.innerHTML = "Veuillez entrez un prenom valide"
      msgErreur.style.display = 'block';
      
  } else {

     msgErreur.style.display = 'none';
   
  }

}

//Affichage du message d'erreur pour nom invalide

function messageDerreurNom(){

  const msgErreur = document.getElementById("nomError");

  msgErreur.style.color = 'red';
  msgErreur.style.fontSize = "small";
 
 

  if(longeur < 2){

      
      msgErreur.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      msgErreur.style.display = 'block';
      
  } else if (!validNom){

     
      msgErreur.innerHTML = "Veuillez entrez un nom valide"
      msgErreur.style.display = 'block';
      
  } else {

     msgErreur.style.display = 'none';
   
  }

}

// Affichage message d'erreur pour email invalide

function messageDerreurEmail(){

  const msgErreur = document.getElementById("emailError");

  msgErreur.style.color = 'red';
  msgErreur.style.fontSize = "small";
 
  if(!validEmail){

    msgErreur.innerHTML = "Veuillez entrez un email valide";
    msgErreur.style.display = 'block';

  } else {

    msgErreur.style.display = 'none';

  }


}


// validation du formulaire
function validate(){

  if(validNom && validPrenom && validEmail && validQuantity && validVille && validConditions && validDate) {
    console.log('ok');
    return true;
   } else {

    console.log('erreur champs');
    return false;
   }
  

}
