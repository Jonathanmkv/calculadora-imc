const imc = (peso,altura) => peso/(altura*altura);
const situacao = (valor_imc) => {
	if(valor_imc<18.5)
		return"abaixo do peso";
	else if(valor_imc<25)
		return"Peso ideal (parabéns)";
	else if(valor_imc<30)
		return"Levemente acima do peso";
	else if(valor_imc<35)
		return"Obesidade de grau I";
	else if(valor_imc<40)
		return"Obesidade de grau II (mórbida)";
	else 
		return"Obesidade de grau III (mórbida)";
		
	}

const executar = () => {
	const peso = number(document.getElementById("v1").value);
	const altura = number(document.getElementById("v2").value);

	if (peso === 0 || altura === 0) {
		alert("Por Favor, digite peso e altura corretamente.");
		return;
	}
	const v_imc = imc(peso, altura);
	const v_sit = situacao(v_imc);

	alert(`IMC: $´{v_imc.toFixed(2)} :: Situação ${v_sit}`);
};