document.getElementById('numeroForm').addEventListener('submit', function(event){

    // impede o envio de formulario em branco
    event.preventDefault();

    // analisa o valor do numero digitado 
    const numero = parseFloat(document.getElementById('numero').value);
    const operator_select = document.getElementById('operator').value; 

    let resultado;

    // define a variavel resultado conforme a opção escolhida
    if (operator_select == 'quadratic') {
        resultado = calcularQuadrado(numero);
    } else if (operator_select == 'cubic') {
        resultado = calcularCubo(numero);
    }

    // mostra o resultado na tela
    document.getElementById('resultado').textContent = resultado;

});

// função para calcular o quadrado do numero 
function calcularQuadrado(numero){
    return numero * numero; 
}

function calcularCubo(numero){
    return numero * numero * numero;
}