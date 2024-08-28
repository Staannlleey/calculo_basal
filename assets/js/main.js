const form = document.querySelector('#formulario')

form.addEventListener("submit", function (e){
    e.preventDefault();
    const inputSexo = e.target.querySelector('#sexo');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const inputIdade = e.target.querySelector('#idade');

    const sexo = String(inputSexo.value);
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const idade = Number(inputIdade.value);

    if (!sexo){
        setResultado('Sexo Inválido', false);
        return;
    }
    if(sexo !== 'masculino' && sexo !== 'feminino'){
        setResultado(`Sexo <b>${sexo}</b> inválido! especifique se é masculino ou feminino`, false);
        return;
    }
    if (!peso){
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura Inválida', false);
        return;
    }
    if (!idade){
        setResultado('Idade Inválida', false);
        return;
    }
    const cal = getCalorias(sexo, peso, altura, idade);
    const msg = `A quantidade de calorias que você gasta é: <b>${cal}</b>`;



    setResultado(msg, true);

});

function getCalorias(sexo, peso, altura, idade){
    if (sexo === 'masculino'){
        // Gasto masculino: 66+(13.7*kg)+(5.0*altura em cm)-(6.8*idade);
        const cal = 66+(13.7*peso)+(5.0*altura)-(6.8*idade);
        return cal.toFixed(2);
    }
    if (sexo === 'feminino'){
        // Gasto feminino: 665+(9.6*kg)+(1.8*cm)-(4.7*idade);
        const cal = 665+(9.6*peso)+(1.8*altura)-(4.7*idade);
        return cal.toFixed(2);
    }
    if (sexo !== 'masculino' && sexo !== 'feminino'){
        return `Sexo inválido.`, false;
    }
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    resultado.appendChild(p);

    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;

}




