// A gente espera o navegador carregar todo o HTML antes de rodar o JavaScript.
// O 'defer' no <script> do HTML também ajuda nisso.
document.addEventListener('DOMContentLoaded', () => {

    // Para não ter que ficar buscando os elementos na tela toda hora, a gente
    // guarda eles em variáveis aqui no começo. Fica bem mais rápido.
    const display = document.querySelector('#display');
    const displayCont = document.querySelector('#display-cont');
    const buttons = document.querySelector('.box-buttons');

    // Variáveis para guardar o estado da calculadora, como você já tinha feito.
    let primeiroNumero = '';
    let operador = '';
    let esperandoSegundoNumero = false; // Uma ajuda pra saber quando limpar o display.

    // Aqui está a 'mágica' de usar um 'escutador' só para todos os botões.
    // Ele fica de olho no container dos botões e, quando um clique acontece,
    // ele descobre qual botão foi e o que fazer.
    buttons.addEventListener('click', (event) => {
        const target = event.target; // O botão que foi clicado.

        // Se o que foi clicado não for um BOTÃO, a gente nem continua.
        if (!target.matches('button')) {
            return;
        }

        const valor = target.dataset.value; // Pega o valor do botão (se for um número)
        const acao = target.dataset.action; // Pega a ação do botão (se for um operador)

        // --- Lógica para inserir os números no display ---
        if (valor) {
            // Se o display mostra '0' ou se a gente acabou de clicar num operador,
            // o display é limpo antes de mostrar o novo número.
            if (display.textContent === '0' || esperandoSegundoNumero) {
                display.textContent = valor;
                esperandoSegundoNumero = false;
            } else {
                display.textContent += valor;
            }
        }

        // --- Lógica para o ponto decimal ---
        if (acao === 'decimal') {
            // Só adiciona o ponto se ainda não tiver um.
            if (!display.textContent.includes('.')) {
                display.textContent += '.';
            }
        }

        // --- Lógica para os operadores (+, -, *, /) ---
        // Juntamos todas as suas funções (somar, subtrair...) em uma só.
        if (acao === 'add' || acao === 'subtract' || acao === 'multiply' || acao === 'divide') {
            // Se já tiver um cálculo pendente, resolve ele primeiro
            if (primeiroNumero && operador) {
                calcular();
            }

            primeiroNumero = display.textContent;
            operador = target.textContent; // Pega o símbolo, ex: "+"
            esperandoSegundoNumero = true;
            displayCont.textContent = `${primeiroNumero} ${operador}`;
        }

        // --- Lógica para apagar tudo (C) ---
        if (acao === 'clear') {
            display.textContent = '0';
            displayCont.textContent = '';
            primeiroNumero = '';
            operador = '';
        }

        // --- Lógica para apagar o último número (<) ---
        if (acao === 'backspace') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        }

        // --- Lógica para calcular (=) ---
        if (acao === 'calculate') {
            calcular();
        }
    });

    function calcular() {
        // Só calcula se tivermos tudo o que precisamos: o primeiro número e um operador.
        if (!primeiroNumero || !operador) {
            return;
        }

        const segundoNumero = display.textContent;
        let resultado;

        // Seu switch para fazer a conta.
        // Sem eles, o código executa um caso atrás do outro, o que causa um bug no resultado.
        switch (operador) {
            case '+':
                resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
                break; 
            case '-':
                resultado = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
                break; 
            case '*':
                resultado = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
                break; 
            case '/':
                resultado = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
                break; 
        }

        display.textContent = resultado;
        displayCont.textContent = `${primeiroNumero} ${operador} ${segundoNumero} =`;

        // Reseta o estado para poder fazer novos cálculos.
        primeiroNumero = resultado.toString(); // O resultado vira o primeiro número para o próximo cálculo
        operador = '';
        esperandoSegundoNumero = true;
    }
});