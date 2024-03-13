function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Contar elementos mayores a 10 devuelve 0 para un array vacío.
  // Tu código:
  if (array.length === 0) {
    return 0;
  }
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      contador++;
    }
  }
  return contador;
}

module.exports = contarElementosMayoresA10;
