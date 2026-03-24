function agregarImagen(src) {
  let torre = document.getElementById("torre");
  let img = document.createElement("img");
  img.src = src;
  img.classList.add("modulo");
  torre.appendChild(img);
}
