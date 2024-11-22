function calcular(valor){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
	let resultado;
	
	switch(valor){
		case 1:
		resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
		break;
		
		case 2:
		resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
		break;
		
		case 3:
		resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
		break;
		
		case 4:
		resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
		break;

		case 5:
		resultado = parseInt(operandoA.value) ** parseInt(operandoB.value);
		
	}	

    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "<span>La operación no tiene números</span>";
    }else{
        document.getElementById("resultado").innerHTML = "<span>Resultado: " + resultado + "</span>";
    }
}
