// Function to do the operations
// It takes the values from the html and parses to Float
// It also covers errors like the lack of an operand
function calcular(valor){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
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
				document.getElementById("resultado").innerHTML = "<span>Falta uno de los operandos</span>";
			}
			
		
	}	

    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "<span>Falta uno de los operandos</span>";
    }else{
        document.getElementById("resultado").innerHTML = "<span>Resultado: " + resultado + "</span>";
    }
}


// Get the message, button and close button
const modal = document.getElementById("infoModal");
const btn = document.getElementById("infoButton");
const closeButton = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the message 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks the cross, it hides the message
closeButton.onclick = function() {
    modal.style.display = "none";
}

// If the user clicks out of the message, it hides it
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
