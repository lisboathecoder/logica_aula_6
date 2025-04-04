let N = 50;
let numeros = 0;

for (i = 1; i <= N; i++) {
  if (i % 3 == 0) {
    numeros = numeros + 1
  }
}
console.log(`${numeros}`);
