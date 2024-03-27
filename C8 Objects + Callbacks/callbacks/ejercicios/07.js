function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var arrayA = [];
   for(let i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i].toString().startsWith('a'))
      arrayA.push(arrayOfStrings[i]);
   }
   return arrayA;
}

module.exports = filter;
