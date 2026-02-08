// 1. Copiar e Adicionar
// Dado o array [1, 2, 3], crie uma cópia usando spread e adicione os números 4 e 5 ao final.

const numeros = [1, 2, 3];

const novoArray = [...numeros, 4, 5];

console.log(novoArray);



// 2. Combinar Arrays
// Dados os arrays ["a", "b"] e ["c", "d"], use spread para criar um novo array combinado.

const primeiro =  ["a", "b"];
const segundo = ["c", "d"];

const arrayCombinado = [...primeiro, ...segundo]

console.log(arrayCombinado);



// 3. Atualizar Objeto
// Dado o objeto {nome: "João", idade: 25}, use spread para criar um novo objeto alterando apenas a idade para 26.

const pessoa = {nome: "João", idade: 25};

const pessoaAlterada = {...pessoa, idade: 26};

console.log(pessoaAlterada)



// 4. Mesclar Objetos
// Dados dois objetos com informações diferentes, use spread para criar um único objeto com todas as propriedades.

const primeiroObjeto = {nome: "Ricardo", idade: 14};
const segundoObjeto = {altura: 1.53, sexo: "Feminino"};

const objetoUnico = {...primeiroObjeto, ...segundoObjeto};

console.log(objetoUnico);