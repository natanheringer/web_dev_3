document.getElementById('jurosForm').addEventListener('submit', function(event){

    event.preventDefault();

    const valorTotal = parseFloat(document.getElementById('valorTotal').value);
    const parcelas = parseFloat(document.getElementById('parcelas').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value);


    parcelas = calcularJuros()

    document.getElementById('resultadoParcela').textContent = `R$ ${parcelas.toFixed(2)}`;
    document.getElementById('resultadoTotal').textContent = `R$ ${valorTotal.toFixed(2)}`;

    
});

function calcularJuros(valorTotal, parcelas, taxaJuros){

    const resultado = 0;
    const jurosTotal = valorTotal * parcelas * taxaJuros;
    resultado = resultado + jurosTotal
    return jurosTotal;

}