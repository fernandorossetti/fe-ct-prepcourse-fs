function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var arrayA = [];
   for(let i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings > 0 && arrayOfStrings[0].toString().toLowerCase().startsWith('a'))
      arrayA.push(arrayOfStrings);
   }
   return arrayA;
}

module.exports = filter;
