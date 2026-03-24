function setProcesador(nombre) {
  document.getElementById("procesador").innerText = nombre;
}

function addPeriferico(nombre) {
  let bloque = document.getElementById("perifericos");
  bloque.innerText += "\n" + nombre;
}
