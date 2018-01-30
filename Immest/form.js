
var formValid = document.getElementById("bouton_estimer");
var adresse = document.getElementById("adresse");
var missAdresse = document.getElementById("missAdresse");

formValid.addEventListener("click","validation");

function validation(event){
	if(adresse.validity.valueMissing){
		event.preventDefault();
		missAdresse.textContent = " Adressse manquante ";
		missAdresse.style.color = "red";
	}

}
