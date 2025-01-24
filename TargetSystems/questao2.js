// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

import { createInterface } from 'readline';

// Cria uma interface para entrada e saída no terminal
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar se o número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
    let a = 0; 
    let b = 1;

    while (a <= numero) {
        if (a === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        let proximo = a + b;
        a = b;
        b = proximo;
    }
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}


function exibirFibonacci(numero) {
    let a = 0; 
    let b = 1; 
    let fibonacciArray = []; // Array para armazenar os valores da sequência

    while (a <= numero) {
        fibonacciArray.push(a); 
        if (a === numero) { 
            break; 
        }

        let proximo = a + b; 
        a = b;
        b = proximo; 
    }

    return fibonacciArray;
}

// Pergunta ao usuário o número desejado
rl.question('Digite um número para verificar se ele pertence à sequência de Fibonacci: ', (input) => {
    const numero = parseInt(input); 

    // Verifica se a entrada é válida
    if (isNaN(numero)) {
        console.log('Por favor, digite um número válido.');
    } else {
        console.log(verificaFibonacci(numero)); 
        console.log(exibirFibonacci(numero));
    }

    rl.close();
});
