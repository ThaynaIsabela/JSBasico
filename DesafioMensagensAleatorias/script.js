function message() {
  var number = Math.trunc(Math.random() * 3 + 1);
  switch (number) {
    case 1:
      console.log("Ola");
      break;
    case 2:
      console.log("Oi, tudo bem?");
      break;
    case 3:
      console.log("Como você está?");
      break;
  }
}
