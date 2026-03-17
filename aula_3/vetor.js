// Criando o vetor vazio
        let vendas = [];

        
        // Função para atualizar a lista na tela
        function atualizarLista() {
            const listaDiv = document.getElementById('listaValores');
            const infoDiv = document.getElementById('info');
            
            // Limpa a lista atual
            listaDiv.innerHTML = '';
            
            // Verifica se o vetor está vazio
            if (vendas.length === 0) {
                listaDiv.innerHTML = '<div class="vazio">Nenhum valor cadastrado</div>';
                infoDiv.innerHTML = 'Total de elementos: 0';
                return;
            }
            
            // Percorre o vetor e cria um item para cada número
            for (let i = 0; i < vendas.length; i++) {
                const item = document.createElement('div');
                const dataFormatada = new Date(vendas[i].data).toLocaleString('pt-BR');
                item.className = 'item-lista';
                
                item.innerHTML = `
                    <span>${vendas[i].id}</span>
                    <span>${vendas[i].nome}</span>
                    <span>R$ ${vendas[i].valor}</span>
                    <span>${vendas[i].dataFormatada}</span>

                `;
                
                listaDiv.appendChild(item);
            }
            
            // Atualiza a informação de total
            infoDiv.innerHTML = `Total de vendas: ${vendas.length}`;
            
            // Mostra o vetor no console
            console.log('Vetor atual:', vendas);
        }

        // Função para adicionar número (push)
        function adicionarVenda() {
            // Pega o valor do input
            const valorInput = document.getElementById('valor');
            const nomeInput = document.getElementById('nome');
            const dataInput = document.getElementById('data');

            const valor = parseFloat(valorInput.value);
            const nome = nomeInput.value;
            const data = obterDataAtual();



            // Valida se é um número
            if (isNaN(valor) || nome === '' || data === '') {
                alert('Por favor, digite um número válido!');
                valorInput.focus();
                return;
            }
            
            // calculo do desconto 
            const novaVenda = {
                
                id: vendas.length + 1,
                nome: nome,
                valor: valor,
                data: data

            };
            
            vendas.push(novaVenda);

            // Limpa o input
            valorInput.value = '';
            nomeInput.value = '';
            dataInput.value = obterDataAtual();
  

            
            valorInput.focus();
            
            // Atualiza a lista
            atualizarLista();
        }

        // Função para remover o último número (pop)
        function removerNumero() {
            if (vendas.length === 0) {
                alert('Não há números para remover!');
                return;
            }
            
            // Remove o último usando pop
            const removido = vendas.pop();
            
            // Atualiza a lista
            atualizarLista();
            
            alert(`Número ${removido} removido!`);
        }

        function obterDataAtual(){

            const agora = new Date()

            const ano = agora.getFullYear;
            const dia = String(agora.getDate()).padStart(2, '0');
            const mes = String(agora.getMonth() + 1).padStart(2, '0');

            return `$[dia]-$[mes]-$[ano]`


        }

        // Função para limpar toda a lista
        function limparLista() {
            if (vendas.length === 0) {
                alert('A lista já está vazia!');
                return;
            }
            
            if (confirm('Deseja realmente limpar todos os números?')) {
                // Limpa o vetor
                vendas = [];
                
                // Atualiza a lista
                atualizarLista();
            }
        }

        // Inicializa a lista
        atualizarLista();