function gerarAleatoriosOtimizado(quantidade = 6) {
  const numeros = new Set();

  while (numeros.size < quantidade) {
      const aleatorio = Math.floor(Math.random() * 60 + 1);
      numeros.add(aleatorio); 
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


// Comparação de desempenho
function compararAlgoritmos() {
  const quantidadeNumeros = 6;
  const repeticoes = 10000; 

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

console.log("Números gerados pelo algoritmo otimizado:", gerarAleatoriosOtimizado());
compararAlgoritmos();
