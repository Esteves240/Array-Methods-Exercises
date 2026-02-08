array.reduce((acumulador, valorAtual) => {
  return novoAcumulador;
}, valorInicial);

// 1. Multiplicação Total
// Dado o array [2, 3, 4], use reduce para calcular a multiplicação de todos os números

let numeros = [2, 3, 4];

const  multiplicacao = numeros.reduce((acumulador, nr) =>{
    return acumulador * nr
}, 1)

console.log(multiplicacao)


// 2. Concatenar Strings
// Dado o array ["Olá", "mundo", "JavaScript"], use reduce para concatenar todas as strings com um espaço entre elas.

let palavras = ["Olá", "mundo", "JavaScript"]

const concatenar = palavras.reduce((acumulador, palavra) => {
  return acumulador + " " + palavra;
});

console.log(concatenar);


// 3. Agrupar por Categoria
// Dado um array de produtos [{nome, categoria}], use reduce para criar um objeto que agrupe produtos por categoria.

let produtos = [
  {nome: "Monitor", categoria:"Infotmatica"},
  {nome: "Panela", categoria:"Cozinha"},
  {nome: "Teclado", categoria:"Infotmatica"},
];


const agruparPorCategoria = produtos.reduce((acumulador, produto) =>{
  const categoria = produto.categoria;

  if(!acumulador[categoria]){
    acumulador[categoria] = []
  }

  acumulador[categoria].push(produto.nome);

  return acumulador
}, {});

console.log(agruparPorCategoria)



// 4. Calcular Média
// Dado um array de notas, use reduce para calcular a média. (Dica: some tudo e depois divida pelo comprimento do array)

const notas = [12, 14, 11, 16, 10]

const calcularMedia = notas.reduce((acumulador, nota) => {

  return acumulador + nota
}, 0) /notas.length

console.log(calcularMedia)