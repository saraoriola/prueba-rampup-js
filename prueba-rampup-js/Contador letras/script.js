function contarLetraEnFrase(frase, letra) {
    let contador = 0;
  
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
        contador++;
      }
    }
  
    return contador;
  }
  
  function contar() {
    const frase = document.getElementById('frase').value;
    const letra = document.getElementById('letra').value;
  
    const resultado = contarLetraEnFrase(frase.split(''), letra);
    document.getElementById('resultado').textContent = `La letra '${letra}' aparece ${resultado} veces en la frase.`;
  }