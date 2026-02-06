// 1. Números Maiores que 10
// Dado o array [5, 12, 8, 21, 3, 15], use filter para criar um array apenas com números maiores que 10.

const numeros = [5, 12, 8, 21, 3, 15];

const maiorDez = numeros.filter(numero => numero > 10)

console.log(maiorDez)


// 2. Palavras Longas
// Dado um array de palavras, use filter para retornar apenas as palavras com mais de 5 letras.

const palavras = ["JavaScript", "HTML", "CSS", "Python", "Java", "C"];

const palavrasLongas = palavras.filter(palavra => palavra.length > 5);

console.log(palavrasLongas)


// 3. Produtos Baratos
// Dado um array de produtos [{nome, preco}], use filter para retornar apenas produtos com preço menor que 50€.
const produtos = [
{ nome: "Secretaria", preco: 500},
{ nome: "Cadeira", preco: 45},
{ nome: "Rato", preco: 30},
{ nome: "Monitor", preco: 200 }
];

const produtosMaiorCinquenta = produtos.filter(produto => produto.preco > 50);

console.log(produtosMaiorCinquenta);


// 4. Filtrar por Idade
// Dado um array de pessoas [{nome, idade}], use filter para retornar apenas pessoas com idade entre 18 e 30 anos (inclusive).

pessoas =[
    { nome: "Paulo", idade: 50},
    { nome: "Cadeira", idade: 45},
    { nome: "Rato", idade: 30},
    { nome: "Monitor", idade: 20 }
];

const idadeFiltrada = pessoas.filter(pessoa => pessoa.idade >= 18 && pessoa.idade <=30)

console.log(idadeFiltrada)