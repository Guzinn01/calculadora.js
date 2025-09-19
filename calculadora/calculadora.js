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


// função subtrair 
function subtrair() {
    // Pega o valor atual do display e converte para numero.
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    // Atualiza o segundo display para lembrar o usuario qual numero esta calculando. 
    document.querySelector('#display-cont').value = primeiroNumero + "" + operador;

    // Guarda o operador logico.
    operador = '-';

    // Limpa o display para o usuario digitar o segundo numero.
    cleanDisplay();

}

function somar() {
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    operador = '+';

    clean();
}

function dividir() {
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    operador = '/';

    clean();
}

function multiplicar() {
    primeiroNumero = parseFloat(document.querySelector("#display").value);

    operador = '*';

    clean();
}
