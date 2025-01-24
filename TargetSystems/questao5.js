// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverterString(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      novaString += string[i];
    }
    return novaString;
}

// Exemplo de uso com dado do usuário:
import { createInterface } from 'readline';

// Cria uma interface para entrada e saída no terminal
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a string a ser invertida: ', (answer) => {
  const stringInvertida = inverterString(answer);
  console.log(`A string invertida é: ${stringInvertida}`);
  rl.close();
});


// Exemplo de uso com dado pré definido:
// const minhaString = "Olá, mundo!";
// const stringInvertida = inverterString(minhaString);
// console.log(stringInvertida); // Saída: !odnum ,álO