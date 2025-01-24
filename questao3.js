// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

import { readFile } from 'fs';

// Função para analisar o faturamento mensal
function analisarFaturamento(faturamentoDiario) {
    // Remove dias sem faturamento (valores iguais a 0) para cálculo da média mensal
    const faturamentoValido = faturamentoDiario.filter(valor => valor > 0);

    const menorFaturamento = Math.min(...faturamentoDiario);
    const maiorFaturamento = Math.max(...faturamentoDiario);

    // Calcula a média mensal (baseando-se em dias válidos)
    const somaFaturamento = faturamentoValido.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = Math.round(somaFaturamento / faturamentoValido.length);
    const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > mediaMensal).length;

    // Retorna os resultados
    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia,
        mediaMensal
    };
}

// Leitura do arquivo JSON de exemplo
readFile('./complementares/questao3.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        const { faturamentoDiario } = JSON.parse(data);
        const resultado = analisarFaturamento(faturamentoDiario);

        // Exibe os resultados no console
        console.log("Menor valor de faturamento:", resultado.menorFaturamento);
        console.log("Maior valor de faturamento:", resultado.maiorFaturamento);
        console.log("Dias com faturamento acima da média ("+resultado.mediaMensal+"):", resultado.diasAcimaDaMedia);
    } catch (error) {
        console.error('Erro ao processar o arquivo JSON:', error);
    }
});