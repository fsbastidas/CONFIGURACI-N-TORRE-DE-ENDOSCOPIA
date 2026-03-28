let reemplazoPendiente = null;

function crearImagen(src, altText = "") {
  const img = document.createElement("img");
  img.src = src;
  img.alt = altText;
  img.className = "equipo-img";
  return img;
}

function setProcesador(imgSrc) {
  const slot = document.getElementById("procesadorSlot");
  slot.innerHTML = "";
  slot.appendChild(crearImagen(imgSrc, "Procesadora"));
}

function marcarSeleccionReemplazo(id) {
  limpiarMarcadoReemplazo();
  reemplazoPendiente = id;
  const slot = document.getElementById(id);
  slot.classList.add("seleccionado-reemplazo");
}

function limpiarMarcadoReemplazo() {
  ["per1a", "per1b", "per2a", "per2b"].forEach(id => {
    document.getElementById(id).classList.remove("seleccionado-reemplazo");
  });
  reemplazoPendiente = null;
}

function ocuparSlotPeriferico(slotId, imgSrc) {
  const slot = document.getElementById(slotId);
  slot.innerHTML = "";
  slot.appendChild(crearImagen(imgSrc, "Periférico"));
  slot.onclick = function () {
    marcarSeleccionReemplazo(slotId);
  };
}

function addPeriferico(imgSrc) {
  const slots = ["per1a", "per1b", "per2a", "per2b"];

  for (const id of slots) {
    const slot = document.getElementById(id);
    if (slot.querySelector(".placeholder")) {
      ocuparSlotPeriferico(id, imgSrc);
      limpiarMarcadoReemplazo();
      return;
    }
  }

  if (reemplazoPendiente) {
    ocuparSlotPeriferico(reemplazoPendiente, imgSrc);
    limpiarMarcadoReemplazo();
    return;
  }

  alert("Los espacios de periféricos están llenos. Haz clic en uno de los periféricos para reemplazarlo.");
}

function setTanque(imgSrc) {
  const slot = document.getElementById("tanqueSlot");
  slot.innerHTML = '<div class="vertical-text">TANQUE</div>';

  const img = crearImagen(imgSrc, "Tanque");
  img.classList.add("tanque-img");
  slot.appendChild(img);
}

function setEndoscopio(imgSrc) {
  const slot = document.getElementById("endoscopioSlot");
  slot.innerHTML = '<div class="vertical-text">ENDOSCOPIOS</div>';

  const img = crearImagen(imgSrc, "Endoscopio");
  img.classList.add("endoscopio-img");
  slot.appendChild(img);
}

function limpiarTorre() {
  document.getElementById("procesadorSlot").innerHTML =
    '<div class="placeholder">FUENTE DE LUZ / PROCESADORA</div>';

  document.getElementById("per1a").innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';
  document.getElementById("per1b").innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';
  document.getElementById("per2a").innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';
  document.getElementById("per2b").innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';

  ["per1a", "per1b", "per2a", "per2b"].forEach(id => {
    document.getElementById(id).onclick = null;
  });

  document.getElementById("endoscopioSlot").innerHTML =
    '<div class="vertical-text">ENDOSCOPIOS</div>';

  document.getElementById("tanqueSlot").innerHTML =
    '<div class="vertical-text">TANQUE</div>';

  limpiarMarcadoReemplazo();
}
