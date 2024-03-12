function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   var caracteres = texto.split('');
   var caracteresInvertidos = caracteres.reverse();
   var textoInvertido = caracteresInvertidos.join('');
 
   return textoInvertido;
}

module.exports = invertirTexto;
