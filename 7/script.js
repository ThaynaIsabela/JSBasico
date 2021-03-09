// Declarando Funções
function sum1(n1, n2) {
  var total = n1 + n2;
  return total;
}

function sum2(num1, num2) {
  var total = 0;

  for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i === 2) {
      return "finish";
    }
  }
}

// Funções Anônimas e Callbacks
// Callbacks: Função que será chamada assim que eu determinada tarefa for realizada
function myFunc() {
  console.log("Hello!");
}
setTimeout(myFunc, 5000);

setTimeout(function () {
  console.log("abc");
}, 2000);

// Arrow Functions
setTimeout(() => {
  console.log("def");
}, 2000);
