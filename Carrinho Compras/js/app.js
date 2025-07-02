let totalGeral;
limpar();


function adicionar() {
    // recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // calculando o preço do produto
    let preco = quantidade *  valorUnitario;

    //adicionando os itens ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;

    //calculando o valor total do carrinho
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    quantidade = document.getElementById('quantidade').value = 0;
    
    
    
} 

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';    
}

