// Declarando e nomeando variáveis
var idade = 25;

console.log(idade);
// 25

var concatenacao = "Minha idade é " + idade + "!";

console.log(concatenacao);
// Minha idade é 25!

/*
Isso: 
    var idade = 25;
É diferente disso:
    var Idade = 7;
*/

// Operadores de atribuição
var myValue = 5;

// isso
myValue = myValue + 2;
// é isso
myValue += 2;

// Incrementando e Decrementando
var minhaVariavel = 5;
minhaVariavel = minhaVariavel + 1;
minhaVariavel += 1;
minhaVariavel++;
minhaVariavel--;

// let, const e variáveis globais
let numero = 5;
// não pode declarar duas vezes com let

const MY_CONST = 2;
// não pode ser alterado
