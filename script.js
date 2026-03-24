function setProcesador(imgSrc) {
  let torre = document.getElementById("torre");

  // eliminar procesador anterior
  let existente = document.getElementById("procesador");
  if (existente) existente.remove();

  let img = document.createElement("img");
  img.src = imgSrc;
  img.id = "procesador";
  img.classList.add("modulo");

  torre.prepend(img); // lo pone arriba
}

function addEquipo(imgSrc) {
  let torre = document.getElementById("torre");

  let img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("modulo");

  torre.appendChild(img);
}

function limpiarTorre() {
  document.getElementById("torre").innerHTML = "";
}
