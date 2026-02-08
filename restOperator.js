// 1. Função Soma Variável
// Crie uma função que aceita qualquer quantidade de números e retorna a soma de todos usando rest operator.

function somaVariavel(...numeros) {
  return numeros.reduce((acc, nr) => acc + nr, 0);
}

console.log(somaVariavel(1, 2, 3));       
console.log(somaVariavel(10, 20, 30, 40)); 



// 2. Nome e Hobbies
// Crie uma função que recebe nome e qualquer quantidade de hobbies, e imprime o nome e a lista de hobbies.

function hobbies(nome, ...hobbies) {
  console.log("Nome:", nome);
  console.log("Hobbies:", hobbies);
}

hobbies("Ricardo", "Gaming", "Música", "Programar");



// 3. Média de Notas
// Crie uma função que recebe qualquer quantidade de notas e calcula a média usando rest operator e reduce.

function media(...notas) {
  const resultado = notas.reduce((acc, nota) => { 
    return acc + nota;
  }, 0) / notas.length;

  return resultado;
}

console.log(media(12, 14, 16, 10));



// 4. Máximo de Números
// Crie uma função que aceita qualquer quantidade de números e retorna o maior deles usando rest operator.

function maxNr(...numeros){
  let max = numeros[0]
  for(i=0; i<numeros.length; i++){
      if(max < numeros[i]){
        max = numeros[i]
      }
  }
  return max
}

console.log(maxNr(12, 14, 16, 10));