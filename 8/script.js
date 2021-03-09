// Objetos JavaScript
var myObj = {
  length: 15,
  color: "yellow",
  write: function () {
    console.log("Hello");
  },
};

// Trabalhando com Arrays
var myArray = [5, 8, 4, 12];
var posicao = myArray[0];
/*
Alterando um valor 
myArray[0] = 7;
[7, 8, 4, 12]
*/
var tamanho = myArray.length();

// Conhecendo o JSON - JavaScript Object Notation
{
    "color": "yellow"
}

/*
var myObj = {a: 1, b: 2};
JSON.stringfy(myObj);
"{"a":1,"b":2}"
*/

// Comparando Objeto - O que é Referência?
/*
var myNumb = 5;
var myNumb2 = 5;
myNumb === myNumb2
    true
*/

// Declarando variáveis - Objetos e Arrays
var myArray = [2, 4, 6];
var myObjt = {d: 5, e: 10, f: 15};

var a = myArray[0],
    b = myArray[1],
    c = myArray[2];

var d = myObjt.d,
    e = myObjt.e,
    f = myObjt.f;

// Operador Spread (...)
function sum (n1, n2){
    return n1 + n2;
}

var array = [5, 20];
console.log(sum(array[0], array[1]));
console.log(sum(...array));

// Laços de Repetição - for..in e for..of
var numeros = [5, 10, 15, 20];

for (var a in objNumeros) {
    console.log(a);
}
// imprime o nome das propriedades

for (var a of objNumeros) {
    console.log(a);
}
// imprime os valores