// 1. Extrair Coordenadas
// Dado o array [10, 20], use destructuring para extrair as coordenadas x e y em variáveis separadas.

const coordenadas = [10, 20];

const [x, y] = coordenadas;

console.log(x); 
console.log(y); 



// 2. Trocar Valores
// Dadas duas variáveis a=1 e b=2, use destructuring para trocar os valores (a deve ficar 2 e b deve ficar 1).

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); 
console.log(b); 



// Extrair Dados de Pessoa
// Dado o objeto {nome: "Ana", idade: 25, cidade: "Porto"}, use destructuring para extrair apenas nome e idade.

let pessoa = {nome: "Ana", idade: 25, cidade: "Porto"}

const { cidade } = pessoa;

console.log(cidade);



// 4. Parâmetros com Destructuring
// Crie uma função que recebe um objeto de produto {nome, preco, stock} e usa destructuring nos parâmetros para imprimir as informações.

function mostrarProduto({ nome, preco, stock }) {
  console.log(`Nome: ${nome}`);
  console.log(`Preço: ${preco}`);
  console.log(`Stock: ${stock}`);
}

const produto = { nome: "Teclado", preco: 49.99, stock: 10 };

mostrarProduto(produto);

