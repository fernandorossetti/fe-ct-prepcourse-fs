function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.S
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if(typeof(fecha)=="string"){
    return false;
  } if (Date.parse(fecha)){
    return true;
  }else return false;
}

module.exports = esFechaValida;