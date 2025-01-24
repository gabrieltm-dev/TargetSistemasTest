// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

// Dados do problema, representados como um objeto
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentual(faturamentoPorEstado) {
let faturamentoTotal = 0;
for (const estado in faturamentoPorEstado) {
    faturamentoTotal += faturamentoPorEstado[estado];
}

// Calcula o percentual de cada estado e armazena em um novo objeto
const percentuais = {};
for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
    percentuais[estado] = percentual.toFixed(2); // Arredonda para duas casas decimais
}

return percentuais;
}

// Chama a função e armazena o resultado
const resultado = calcularPercentual(faturamentoPorEstado);

// Imprime o resultado no console
for (const estado in resultado) {
    console.log(`O estado ${estado} representa ${resultado[estado]}% do faturamento total.`);
}
