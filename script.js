let perifericoActual = 1;

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

function addEquipo(imgSrc) {
  if (perifericoActual > 2) {
    alert("Ya no hay más espacios de periféricos en esta vista.");
    return;
  }

  const slot = document.getElementById(`perifericoSlot${perifericoActual}`);
  slot.innerHTML = "";
  slot.appendChild(crearImagen(imgSrc, "Periférico"));

  perifericoActual++;
}

function setEndoscopio(imgSrc) {
  const slot = document.getElementById("endoscopioSlot");
  slot.innerHTML = `
    <div class="vertical-text">ENDOSCOPIOS</div>
  `;
  const img = crearImagen(imgSrc, "Endoscopio");
  img.classList.add("endoscopio-img");
  slot.appendChild(img);
}

function limpiarTorre() {
  document.getElementById("procesadorSlot").innerHTML =
    '<div class="placeholder">FUENTE DE LUZ / PROCESADORA</div>';

  document.getElementById("perifericoSlot1").innerHTML =
    '<div class="placeholder">PERIFÉRICOS</div>';

  document.getElementById("perifericoSlot2").innerHTML =
    '<div class="placeholder">PERIFÉRICOS</div>';

  document.getElementById("endoscopioSlot").innerHTML =
    '<div class="vertical-text">ENDOSCOPIOS</div>';

  perifericoActual = 1;
}
