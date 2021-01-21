// Array
const familia = ['Isabel','Joao'];
/* 
familia[familia.length] = 'Ju'
familia[familia.length] = 'Leo'
familia[familia.length] = 'Chico' */

// adiciona um elemento ao fim do array
familia.push('Ju');
familia.push('Chico');

// adiciona um elemento no começo do array
familia.unshift('Leo');

// remove elemento do final do array
familia.pop();

// remove elemento do inicio do array
familia.shift();


familia.push('Leo');
familia.push('Chico');

const humanos = familia.slice(0,2);
console.log('humanos:',humanos);
const gatos = familia.slice(-3);
console.log('gatos', gatos)
console.log(familia);

