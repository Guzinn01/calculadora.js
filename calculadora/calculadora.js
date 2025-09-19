// Insert no display  
function insertToDisplay(data) {
    document.querySelector('#display').value += data
}

// Limpa a barra
function clean() {
    document.querySelector('#display').value = '';
    document.querySelector('#display-cont').value = '';
}

function cleanDisplay() {
    document.querySelector('#display').value = '';
}


// Apaga numero por numero
function back() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)

}

// result usando o eval. (Eval não muito seguro para aplicações em prodrução)
/*function result() {
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)

    } catch {
        display.value = 'Error'

    }

}*/

let primeiroNumero = 0;
let operador = '';
let segundoNumero = 0;


// função subtrair.
function subtrair() {
    // Pega o valor atual do display e converte para numero.
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    // Guarda o operador logico.
    operador = '-';

    // Atualiza o segundo display para lembrar o usuario qual numero esta calculando. 
    document.querySelector('#display-cont').value = primeiroNumero + "" + operador;

    // Limpa o display para o usuario digitar o segundo numero.
    cleanDisplay();

}

function somar() {
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    operador = '+';

    document.querySelector('#display-cont').value = primeiroNumero + "" + operador;

    cleanDisplay();
}

function dividir() {
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    operador = '/';

    document.querySelector('#display-cont').value = primeiroNumero + "" + operador;

    cleanDisplay();
}

function multiplicar() {
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    operador = '*';

    document.querySelector('#display-cont').value = primeiroNumero + "" + operador;

    cleanDisplay();
}

function calcular() {
    // Valida o segundo numero.
    segundoNumero = parseFloat(document.querySelector("#display").value);

    // Inicia a variavel do resultado.
    let resultadoFinal;

    // switch de operadores, cada case uma operação matematica.
    switch (operador) {
        case '+':
            resultadoFinal = primeiroNumero + segundoNumero;
            break;

        case '-':
            resultadoFinal = primeiroNumero - segundoNumero;

        case '/':
            resultadoFinal = primeiroNumero / segundoNumero;

        case '*':
            resultadoFinal = primeiroNumero * segundoNumero;
    }
    // Exibi o resultado no display.
    document.querySelector('#display').value = resultadoFinal;

    // Armazena o calculo matematico no display de historico.
    document.querySelector('#display-cont').value = `${primeiroNumero} ${operador} ${segundoNumero}=`;

    // O primeiro numero vira o resultado final para calcular mais depois.
    primeiroNumero = resultadoFinal;
}