// Trabalhando com Arrays - Propriedades e Iteração
/*
var myArray = [2,4,6,8,10]
myArray.length
myArray.every(n => n % 2 === 0) -- every: testa se todos os elementos batem com a condição

var myArray2 = [2,3,4,5,6,8,10,11]
myArray2.filter(n => n % 2 !== 0) -- filtra o array
myArray2.find(n => n > 5) -- retorna o valor
myArray2.findIndex(n => n > 5) -- retorna o index do valor
myArray2.some(n => n % 2 !== 0) -- some: pelo menos um elemento bate com a condição
 
var myArray3 = [1,2,3]
myArray3.reduce((acumulado, atual) => acumulado + atual) -- reduz o array
myArray3.forEach(n => {
    console.log(n) 
}) -- looping
myArray3.map(n => n * 2) -- modifica o array

var myArray4 = [8,2,15,10,4,6];
myArray.sort() -- ordena transformando todos em uma string, trás todos os números 1 para a frente, isso
                    se resolve assim:
                        myArray4.sort((a,b) => a > b ? 1 : -1)

*/

// Trabalhando com Arrays - Métodos
/*
var myArray = [1,2,3];
var myArray2 = Array(1,2,3);
Array.of(1,2,3) -- [1,2,3]
myArray.concat(myArray2) -- [1,2,3,1,2,3]
myArray.includes(3) -- se existe no array este valor
myArray.indexOf(3) -- index que este elemento está
myArray2.join('') -- junta tudo em uma única string
myArray2.join('-') -- junta tudo em uma única string e separa com um traço
'abc'.split('') -- quebra a string em caracteres
[1,2,3].reverse() -- inverte todos os elementos de um array
myArray.push(2) -- insere o elemento no final do array
myArray.pop() -- remove o elemento no final do array
myArray.unshift(5) -- insere no começo do array
myArray.shift() -- remove no começo do array
*/

//Arrays Multidimensionais
/*
var myArray = [1,2,3,4,5];
var myArray2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
myArray2[1][1] -- elemento 5
*/
