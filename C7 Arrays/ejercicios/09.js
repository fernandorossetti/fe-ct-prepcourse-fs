function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const elementAleatory = Math.floor(Math.random() * array.length);

   return array[elementAleatory];
}

module.exports = obtenerElementoAleatorio;
