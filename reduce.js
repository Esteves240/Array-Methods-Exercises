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