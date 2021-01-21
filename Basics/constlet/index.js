const nome = "Joao Paulo"
const sobrenome = "Borges Martins"
const age = 40
const weight = 60
const height = 1.70
let imc;
// imc = peso / (altura * altura)
let birthDay;

imc = weight / (height * height);
birthDay = (new Date().getFullYear()) - age;

console.log(`${nome} ${sobrenome} tem ${age} anos, pesa ${weight} kg 
tem ${height} de altura e seu IMC é de ${imc}
${nome} nasceu em ${birthDay}.`)


