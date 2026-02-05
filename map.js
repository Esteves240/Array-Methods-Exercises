// 1. Dobrar Números
// Dado o array [5, 10, 15, 20], use map para criar um novo array com todos os números dobrados.

const numeros = [5, 10, 15, 20];

function dobrarNumeros() {
  return numeros.map(nr => nr * 2);
}

console.log(dobrarNumeros(numeros));


// 2. Nomes em Maiúsculas
// Dado o array ["ana", "bruno", "carla"], use map para criar um novo array com todos os nomes em maiúsculas.
const nomes = ["ana", "bruno", "carla"];

function passarMaiusculas(){
    return nomes.map(nome => nome.toUpperCase());
}

console.log(passarMaiusculas(nomes));


// 3. Extrair Propriedades
// Dado um array de objetos de produtos [{nome, preco}], use map para criar um array apenas com os nomes dos produtos.

const produtos = [
    {nome:"Aspirinas", preco: "9.39"},
    {nome:"Paracetamol", preco: "5.99"},
];

function apenasNome(){
    return produtos.map(produto => produto.nome)
}

console.log(apenasNome(produtos));


// 4. Adicionar IVA
// Dado um array de preços [100, 200, 300], use map para criar um novo array com os preços acrescidos de 23% de IVA.

const precos = [100, 200, 300];

function precoIVA(){
    return precos.map(preco => preco * 1.23)
}

console.log(precoIVA(precos));