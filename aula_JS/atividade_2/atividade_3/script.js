document.body.innerHTML += `
    <h1 id="titulo">Loja de Produtos</h1>
    <div class="produto">
        <h2>Nome do Produto: Smartphone XYZ</h2>
        <p>Descrição: Um smartphone moderno com tela de 6.5 polegadas e câmera de alta resolução.</p>
        <p>Preço: R$ 2.499,00</p>
    </div>
`;


const produto = document.createElement('div');
produto.className = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Nome do Produto: Laptop ABC';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição: Laptop ultrafino com processador i7 e 16GB de RAM.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 5.999,00';


produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);


document.body.appendChild(produto);