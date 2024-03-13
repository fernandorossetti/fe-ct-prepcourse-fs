function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const resultado = [];
  for(var i = 0; i < array.length; i++){
    if( typeof array[i] === "number" && array[i] % 2 === 0){
      resultado.push(array[i]);
    }
  }
  return resultado;
}

module.exports = filtrarNumerosPares;
