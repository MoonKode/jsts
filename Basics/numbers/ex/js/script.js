const num = prompt('Digite um numero:')
const num1 = Number(num)
const numero = document.getElementById('num');
const texto = document.getElementById('texto');

numero.innerHTML = `${num1} </br>`;
texto.innerHTML += `<p> Raiz quadrada: ${num1 ** 0.5} </p>`;
texto.innerHTML += `<p> O número é inteiro:  ${Number.isInteger(num1)} </p>`;
texto.innerHTML += `<p> O número é NAN:  ${Number.isNaN(num1)} </p>`;
texto.innerHTML += `<p> Arredondado para cima:  ${Math.ceil(num1)} </p>`;
texto.innerHTML += `<p> Arredondado para baixo:  ${Math.floor(num1)} </p>`;
texto.innerHTML += `<p> Com duas casas decimais:  ${num1.toFixed(2)} </p>`;

