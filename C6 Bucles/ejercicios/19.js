function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var contador = 0;

  for (var i = 1; i <= n; i++){
    contador += i;
  }
  return contador;
}

module.exports = sumarHastaN;
