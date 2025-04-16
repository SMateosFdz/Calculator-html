/**
 * Function to do the operations
 * 
 * It takes the values from the html and parses to Float
 * 
 * It also covers errors like the lack of an operand
 */
function calcular(valor){
	const changeButton = document.getElementById("changeLanguage");
    let operandoA = changeButton.innerHTML == "EN" ? formEs["operandoA"] : formEn["operandoA"];
    let operandoB = changeButton.innerHTML == "EN" ? formEs["operandoB"] : formEn["operandoB"];
	let resultado;
	
	switch(valor){
		case 1:
			resultado = parseFloat(operandoA.value) + parseFloat(operandoB.value);
			break;
		
		case 2:
			resultado = parseFloat(operandoA.value) - parseFloat(operandoB.value);
			break;
		
		case 3:
			resultado = parseFloat(operandoA.value) * parseFloat(operandoB.value);
			break;
		
		case 4:
			resultado = parseFloat(operandoA.value) / parseFloat(operandoB.value);
			break;

		case 5:
			resultado = parseFloat(operandoA.value) % parseFloat(operandoB.value);
			break;

		case 6:
			resultado = parseFloat(operandoA.value) ** parseFloat(operandoB.value);
			break;

		case 7:
			if(operandoA.value != ""){ //necessary because Math.sqrt understands "" like 0
				resultado = Math.sqrt(operandoA.value);
			}else{
				if(changeButton.innerHTML == "EN"){
					document.getElementById("resultEs").innerHTML = "<span>Falta uno de los operandos</span>";
				}else{
					document.getElementById("resultEn").innerHTML = "<span>One of the operands is missing</span>";
				}
			}
	}	

    if(isNaN(resultado)){
		if(changeButton.innerHTML == "EN"){
			document.getElementById("resultEs").innerHTML = "<span>Falta uno de los operandos</span>";
		}else{
			document.getElementById("resultEn").innerHTML = "<span>One of the operands is missing</span>";
		}
    }else{
		if(changeButton.innerHTML == "EN"){
			document.getElementById("resultEs").innerHTML = "<span>Resultado: " + resultado + "</span>";
		}else{
			document.getElementById("resultEn").innerHTML = "<span>Result: " + resultado + "</span>";
		} 
    }
}


// Get the message, button and close button
const modalEs = document.getElementById("infoModalEs");
const btnEs = document.getElementById("infoButtonEs");
const closeButtonEs = document.getElementsByClassName("close-buttonEs")[0];

const modalEn = document.getElementById("infoModalEn");
const btnEn = document.getElementById("infoButtonEn");
const closeButtonEn = document.getElementsByClassName("close-buttonEn")[0];

// When the user clicks the button, open the message 
btnEs.onclick = function() {
    modalEs.style.display = "block";
	modalEs.style.position = "fixed";
	modalEs.style.left = "50%";
	modalEs.style.transform = "translate(-50%, 0)";
	modalEs.style.zIndex = 2;

}

// When the user clicks the cross, it hides the message
closeButtonEs.onclick = function() {
    modalEs.style.display = "none";
}

// When the user clicks the button, open the message 
btnEn.onclick = function() {
    modalEn.style.display = "block";
	modalEn.style.position = "fixed";
	modalEn.style.left = "50%";
	modalEn.style.transform = "translate(-50%, 0)";
	modalEn.style.zIndex = 2;
}

// When the user clicks the cross, it hides the message
closeButtonEn.onclick = function() {
    modalEn.style.display = "none";
}

// If the user clicks out of the message, it hides it
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/



/**
 * Functionn to change the language of the web
 * 
 * Currently EN and ES
 */
function changeLanguage(){
	const changeButton = document.getElementById("changeLanguage");
	changeButton.innerHTML == "ES" ? changeButton.innerHTML = "EN" : changeButton.innerHTML = "ES";
	
	if(changeButton.innerHTML == "EN"){
		document.getElementById("es-language").style.display = "inline";
		document.getElementById("en-language").style.display = "none";
		document.getElementById("resultEs").innerHTML = "";
		document.getElementById("resultEn").innerHTML = "";
		formEs["operandoA"].value = "";
		formEs["operandoB"].value = "";
	}else{
		document.getElementById("en-language").style.display = "inline";
		document.getElementById("es-language").style.display = "none";
		document.getElementById("resultEs").innerHTML = "";
		document.getElementById("resultEn").innerHTML = "";
		formEn["operandoA"].value = "";
		formEn["operandoB"].value = "";
	}
}
