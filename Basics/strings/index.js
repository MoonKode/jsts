//declarar uma string

let umaString = 'Um texto';
 console.log(umaString)
 
//usando aspas duplas
umaString = 'Um "texto"';
console.log(umaString)
 
// escapando caracteres
umaString = "Um \"texto\"";
console.log(umaString)
 
// strings sao iteráveis
//           01234567
umaString = "Um texto";
console.log(umaString[4]);
console.log(umaString.charAt(6));

// concatenação
console.log(umaString.concat(' em um lindo dia!'));
console.log(umaString +' em um lindo dia!');
console.log(`${umaString} em um lindo dia!`);

// saber o indice de um caractere ou conjunto de caracteres
console.log(umaString.indexOf('texto'));

// procurar de tras pra frente
console.log(umaString.lastIndexOf('o'));

//match
console.log(umaString.match(/[a-z]/g));

//search
console.log(umaString.search(/[a-z]/g));

// replace
console.log(umaString.replace('Um', 'Outro'));

umaString = "O rato roeu a rolha do rei de roma";
console.log(umaString.replace(/r/g, '$'));


// saber o comprimento da string
console.log(umaString.length);

// pegar um trecho da string
console.log(umaString.slice(2, 6));
console.log(umaString.substring(umaString.length -4, umaString.length));

// separar trechos de uma string por caractere
console.log(umaString.split(" "));
console.log(umaString.split(" ", 2));




 
