function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var resultado = 0;
  objetoUsuario.posts.forEach(post => {
    resultado += post.likes;
  });
  return resultado;
}

module.exports = sumarLikesDeUsuario;
