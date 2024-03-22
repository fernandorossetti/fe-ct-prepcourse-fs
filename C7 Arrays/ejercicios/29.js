function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var numeroFaltante;
  if (numeros.length === 0) {
    return null; // Devuelve null si el arreglo es vacío
}

const max = Math.max(...numeros);
const min = Math.min(...numeros);

const sumaEsperada = ((max - min + 1) * (min + max)) / 2;

const sumaReal = numeros.reduce((acc, num) => acc + num, 0);

if (sumaReal === sumaEsperada) {
    return null; // No hay números faltantes
}

numeroFaltante = sumaEsperada - sumaReal;
return numeroFaltante;
}

module.exports = encontrarNumeroFaltante;