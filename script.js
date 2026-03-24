function agregar(elemento) {
  let lista = document.getElementById("torre");
  let item = document.createElement("li");
  item.textContent = elemento;
  lista.appendChild(item);
}
