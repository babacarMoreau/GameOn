// Verification qu'un nom et prenom est correctement saisie
function verifPrenomNom(string){

  const regex = new RegExp("[a-zA-z]+");

  if(string.length >=2 && regex.test(string) && string != "") return true;
  else return false;

}

// Verification qu'une email renseigné est correcte
function verifEmail(string){

    const regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if(regex.test(string)) return true;
    else return false;

}
