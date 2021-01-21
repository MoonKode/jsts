const nome = prompt("Por favor digite o seu nome completo:");
document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `O primeiro indice da letra a no seu nome é: ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `O ultimo indice da lera a no seu nome é: ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As últimas 3 palavras do seu nome são: ${nome.split(" ", 3)} <br />`;
document.body.innerHTML += `O seu nome com letras maiusculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `O seu nome com letras minusculas: ${nome.toLowerCase()} <br />`;

