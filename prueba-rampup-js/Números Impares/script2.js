// CONTADOR IMPARES 1ª VERSIÓN // - FOR IF

function imprimirImpares(numero) {
  let impares = '';

  for (let i = 0; i < 50; i++) {
    if (numero % 2 !== 0) {
      impares += numero + ', ';
    }
    numero++;
  }

  return impares;
}

function mostrar() {
  const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
  const resultado = imprimirImpares(numeroInicial);

  document.getElementById('resultado').innerHTML = `Los números impares son: ${resultado}`;
}



// CONTADOR IMPARES 2ª VERSIÓN // - WHILE

/*function imprimirImpares(numero) {
    let contador = 0;
  
    while (contador < 50) {
      if (numero % 2 !== 0) {
        console.log(numero);
        contador++;
      }
      numero++;
    }
  }

*/
