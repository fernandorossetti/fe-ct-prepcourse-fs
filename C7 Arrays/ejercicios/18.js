function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const contador = 0;
  const proArray = [];

  for(var i = 0;i < resultadosTest.length; i++){
    if(typeof resultadosTest[i] === "number"){
      contador++;
    }
  }
  proArray = resultadosTest[i] / contador;
  return proArray;
}

module.exports = promedioResultadosTest;
