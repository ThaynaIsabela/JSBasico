// Tomando decisões com if e operador ternário
var n1 = 3,
  n2 = 5;

// if (n1 > n2) {
//   console.log("n1 e maior");
// } else {
//   console.log("n1 e menor");
// }

n1 > n2 ? console.log("n1 e maior") : console.log("n1 e menor");

var maior = n1 > n2 ? n1 : n2;

// Comparando váios valores com Switch
switch (n1) {
  case 1:
    console.log("Valor 1");
    break;
  case 2:
    console.log("Valor 2");
    break;
  case 3:
    console.log("Valor 3");
    break;
  default console.log('Outro valor');
}
