let num1 = 9.44876234;
// corta o numero pra baixo inteiro
let flooredNum1 = Math.floor(num1)
console.log(flooredNum1);

// corta o numero para cima inteiro
let ceilingNum1 = Math.ceil(num1)
console.log(ceilingNum1);

// arredonda o numero
let roundedNum1 = Math.round(num1);
console.log(roundedNum1);


// da o maior numero de um conjunto
console.log(Math.max(1,2,3,4,5,6,7,8,9,29));

// dá o menor numero de um conjunto
console.log(Math.min(1,2,3,4,5,6,7,8,9,29));

// gera numero aleatóreo entre 0 e 1 (1 não incluído)
const random = Math.random();

// da-me um numero aleatorio entre 5 e 10
console.log(Math.round(random * (10-5) + 5));

// raiz quadrada
console.log(9 ** 0.5);


