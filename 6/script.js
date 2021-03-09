// Laços de Repetição com for
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Laços de Repetição com while
var j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

var resposta = "";

while (resposta !== "sair") {
  resposta = prompt("Digite sua resposta");
  console.log("sua resposta foi " + resposta);
}

// Laços de Repetição com do while
var resp = "";

do {
  resp = prompt("Digite sua resposta");
  console.log("sua resposta foi " + resp);
} while (resp !== "");

// Laços de Repetição continue e break
for (var l = 0; l < 5; l++) {
  console.log(l);
  // 0, 1, 2
  if (l === 2) {
    break;
  }
}

for (var k = 0; k < 5; k++) {
  if (k === 2) {
    continue;
  }
  console.log(k);
  // 0, 1, 3, 4
}
