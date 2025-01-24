// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let soma = 0;
let k = 0;

// Inicia o  while, que será executado enquanto k for menor que o índice
while (k < indice) {
    k += 1;
    soma += k;
}

// Exibe o valor final da variável soma no console
console.log(soma);