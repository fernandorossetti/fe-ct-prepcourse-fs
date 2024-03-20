function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var contador = 0;
  var proArray = [];

  for(var i = 0;i < resultadosTest.length; i++){
      contador += resultadosTest[i];
  }
  proArray = contador / resultadosTest.length;
  return proArray;
}

module.exports = promedioResultadosTest;
