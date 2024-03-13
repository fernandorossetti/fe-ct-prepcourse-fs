function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var multiDos = array.map( (array) => { return array * 2 } );

  return multiDos;
}

module.exports = duplicarElementos;
