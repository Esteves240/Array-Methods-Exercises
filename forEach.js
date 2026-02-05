// 1. Imprimir Produtos
// Crie um array com 5 produtos (strings) e use forEach para imprimir cada produto precedido de "Produto: ".

const produtos = ['Cadeira', 'Secretária', 'Ecrã', 'Teclado', 'Rato'];

function imprimirProdutos() {
  produtos.forEach(produto => {
    console.log(produto);
  });
}

imprimirProdutos(produtos)


// 2. Soma com forEach
// Dado o array [10, 20, 30, 40, 50], use forEach para calcular a soma total. (Dica: crie uma variável fora do forEach para guardar a soma)

const numeros = [10, 20, 30, 40, 50]

function somarNumeros() {
  let soma = 0;
  numeros.forEach(nr => {
    soma += nr;
  });

  return soma;
}

console.log(somarNumeros(numeros));


// 3. Modificar Array de Objetos
// Dado um array de objetos representando pessoas com {nome, idade}, use forEach para imprimir "Nome: X, Idade: Y" para cada pessoa.

const pessoas =[
    {nome:"Juan Carlos", idade: 26},
    {nome:"Perro Sanchez", idade: 46},
];

function  apresentarPessoas(){
    pessoas.forEach(ppl =>{
        console.log(`Nome: ${ppl.nome}, Idade: ${ppl.idade}`)
    })
}

apresentarPessoas(pessoas)


// 4. Contar Pares
// Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use forEach para contar quantos números são pares.

const numeroz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function contarPares() {
    let contadorPares = 0;
    numeroz.forEach(nr => {
        if (nr % 2 === 0) {
            contadorPares++;
        }
    });
    return contadorPares;
}

console.log(contarPares(numeroz))