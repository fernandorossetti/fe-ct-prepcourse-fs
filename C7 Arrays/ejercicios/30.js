function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const frecuencia = [];
    for (let elemento of numeros) {
        if (frecuencia[elemento] === undefined) {
            frecuencia[elemento] = 1;
        } else {
            return elemento;
        }
    }
    return undefined;
}

module.exports = encontrarElementoRepetido;