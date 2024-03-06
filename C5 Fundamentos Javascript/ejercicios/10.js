function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.S
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  var dato = new Date(fecha);

  return !isNaN(dato) && !isNaN(dato.getDate()) && dato.toString() !== 'Invalid Date';
}

module.exports = esFechaValida;