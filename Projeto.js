function gerarAleatoriosOtimizado(quantidade = 6) {
  const numeros = new Set();

  // Continua adicionando até o Set ter a quantidade desejada de números únicos
  while (numeros.size < quantidade) {
      const aleatorio = Math.floor(Math.random() * 60 + 1);
      numeros.add(aleatorio); // O Set ignora duplicatas automaticamente
  }

  return Array.from(numeros);
}

// Função original para comparação
function gerarAleatoriosAntigo(quantidade = 6) {
  const vetor = [];

  while (vetor.length < quantidade) {
      const aleatorio = Math.floor(Math.random() * 60 + 1);
      if (!vetor.includes(aleatorio)) {
          vetor.push(aleatorio);
      }
  }

  return vetor;
}

// Função de comparação de desempenho
function compararAlgoritmos() {
  const quantidadeNumeros = 6;
  const repeticoes = 10000; // Número de execuções para média de desempenho

  let inicioAntigo = performance.now();
  for (let i = 0; i < repeticoes; i++) {
      gerarAleatoriosAntigo(quantidadeNumeros);
  }
  let tempoAntigo = performance.now() - inicioAntigo;

  let inicioOtimizado = performance.now();
  for (let i = 0; i < repeticoes; i++) {
      gerarAleatoriosOtimizado(quantidadeNumeros);
  }
  let tempoOtimizado = performance.now() - inicioOtimizado;

  const reducaoPercentual = ((tempoAntigo - tempoOtimizado) / tempoAntigo) * 100;

  console.log(`Tempo do algoritmo antigo: ${tempoAntigo.toFixed(2)} ms`);
  console.log(`Tempo do algoritmo otimizado: ${tempoOtimizado.toFixed(2)} ms`);
  console.log(`Redução de tempo: ${reducaoPercentual.toFixed(2)}%`);
}

// Chamadas de função para exibir os resultados
console.log("Números gerados pelo algoritmo otimizado:", gerarAleatoriosOtimizado());
compararAlgoritmos();
