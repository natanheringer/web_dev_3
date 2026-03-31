// Substituindo a função tradicional por arrow function
const calcularQuadrado = (numero) => numero * numero;

const calcularCubo = (numero) => numero * numero * numero;

const calcularRaiz = (numero) => Math.sqrt(numero);

document.getElementById('numeroForm').addEventListener('submit', (event) => {
event.preventDefault(); // Impede o envio do formulário
// Obtém o valor do número digitado
const numero = parseFloat(document.getElementById('numero').value);
// Chama a função arrow para calcular o quadrado
const resultado1 = calcularQuadrado(numero);
const resultado2 = calcularCubo(numero);
const resultado3 = calcularRaiz(numero);

const opcoesSelecionadas = document.getElementById('operacoes').selectedOptions;

for (let opcao of opcoesSelecionadas ) {
    console.log(opcao.value);

    if (opcao.value === "quadrado"){
        
        document.getElementById('resultado1').textContent = `O quadrado é: ${resultado1}`;
        
    } else if (opcao.value === "cubo"){

        document.getElementById('resultado2').textContent = `O cubo é: ${resultado2}`;

    } else {

        document.getElementById('resultado3').textContent = `A raiz quadrada de ${numero} é ${resultado3}`;
    }

}

// Exibe o resultado na página
});


