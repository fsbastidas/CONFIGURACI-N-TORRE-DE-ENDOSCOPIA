const CLAVE_SISTEMA = "fujifilm123";

function verificarClave() {

  const clave =
    document.getElementById(
      "passwordInput"
    ).value;

  if (clave === CLAVE_SISTEMA) {

    document.getElementById(
      "loginBox"
    ).style.display = "none";

    document.getElementById(
      "contenidoPagina"
    ).style.display = "block";
  }

  else {

    document.getElementById(
      "errorLogin"
    ).innerText =
      "Contraseña incorrecta";
  }
}

let elementoSeleccionado = null;

let reemplazoPendiente = null;

let serieSeleccionada = "";

let configuracionActual = [];
/* =========================
   BASE DE DATOS ENDOSCOPIOS
========================= */

const endoscopios = {

  "500": {

    "GASTROSCOPIO": [
      "EG-590WR",
      "EG-590ZW",
      "EG-530WR",
      "EG-530CT",
      "EG-530D",
      "EG-580RD",
      "EG-580NW2"
    ],

    "COLONOSCOPIO": [
      "EC-590WM",
      "EC-590ZW-L",
      "EC-530LP",
      "EC-530DL",
      "EC-530FL",
      "EC-530WL3",
      "EC-580RD/M,/L"
    ],

    "DUODENOSCOPIO": [
      "ED-530XT/XT8",
      "ED-580XT",
      "EI-580BT"
    ],

    "BRONCOSCOPIO": [
      "EB-530US",
      "EB-530P",
      "EB-530XT",
      "EB-580S",
      "EB-580T"
    ],

    "ECO GASTROSCOPIO": [
      "EG-580UT\UR"
    ]

  },

  "600": {

    "GASTROSCOPIO": [
      "EG-600WR",
      "EG-600ZW"
    ],

    "COLONOSCOPIO": [
      "EC-600WM/WI/WL",
      "EC-600ZW/M,/L"
    ],
  },

  "700": {

    "GASTROSCOPIO": [
      "EG-720R",
      "EG-760R",
      "EG-760Z",
      "EG-740N"
    ],

    "COLONOSCOPIO": [
      "EC-760R-V-L",
      "EC-760R-VM/VI/VL",
      "EC-760ZP-VM/VL",
      "EC-720RM/RI/RL"
    ],

    "ECO GASTROSCOPIO": [
      "EG-740UT"
    ]

  },

  "800": {

    "GASTROSCOPIO": [
      "EG-840T",
      "EG-860R"
    ],

    "COLONOSCOPIO": [
      "EC-860R-V-L"
    ],

    "DUODENOSCOPIO": [
      "ED-580XT8"
    ],

    "BRONCOSCOPIO": [
      "EB-800T"
    ],

    "ECO GASTROSCOPIO": [
      "EG-740UT"
    ]

  }

};

/* =========================
   CREAR IMAGEN
========================= */

function crearImagen(src, altText = "") {

  const img = document.createElement("img");

  img.src = src;
  img.alt = altText;

  img.className = "equipo-img";

  return img;
}

/* =========================
   PROCESADORA
========================= */

function setProcesador(imgSrc) {

  const slot =
    document.getElementById("procesadorSlot");

  slot.innerHTML = "";

  slot.appendChild(
    crearImagen(imgSrc, "Procesadora")
  );
   const modelo =
       imgSrc.replace(".png", "");
   
     agregarConfiguracion(
       "Procesadora",
       modelo
     );
   
     document.getElementById(
       "tituloConfig"
     ).innerText =
       `CONFIGURACION TORRE ${modelo}`;
  slot.onclick = function() {

  document
    .querySelectorAll(".equipo-seleccionado")
    .forEach(el =>
      el.classList.remove("equipo-seleccionado")
    );

  slot.classList.add("equipo-seleccionado");

  elementoSeleccionado = {
    tipo: "procesadora",
    id: "procesadorSlot"
  };
};
   }

/* =========================
   PERIFERICOS
========================= */

function marcarSeleccionReemplazo(id) {

  limpiarMarcadoReemplazo();

  reemplazoPendiente = id;

  const slot =
    document.getElementById(id);

  slot.classList.add(
    "seleccionado-reemplazo"
  );
}

function limpiarMarcadoReemplazo() {

  ["per1a", "per1b", "per2a", "per2b"]
    .forEach(id => {

      document
        .getElementById(id)
        .classList
        .remove("seleccionado-reemplazo");

    });

  reemplazoPendiente = null;
}

function ocuparSlotPeriferico(slotId, imgSrc) {

  const slot =
    document.getElementById(slotId);

  slot.innerHTML = "";

  slot.appendChild(
    crearImagen(imgSrc, "Periférico")
  );

  slot.onclick = function () {

    document
      .querySelectorAll(".equipo-seleccionado")
      .forEach(el =>
        el.classList.remove("equipo-seleccionado")
      );

    slot.classList.add("equipo-seleccionado");

    elementoSeleccionado = {
      tipo: "periferico",
      id: slotId
    };
  };
}

function addPeriferico(imgSrc) {

  const slots = [
    "per1a",
    "per1b",
    "per2a",
    "per2b"
  ];

  for (const id of slots) {

    const slot =
      document.getElementById(id);

    if (slot.querySelector(".placeholder")) {

      ocuparSlotPeriferico(
        id,
        imgSrc
      );

      limpiarMarcadoReemplazo();

      const modelo =
        imgSrc.replace(".png", "");

      agregarConfiguracion(
        "Periférico",
        modelo
      );

      return;
    }
  }

  if (reemplazoPendiente) {

    ocuparSlotPeriferico(
      reemplazoPendiente,
      imgSrc
    );

    const modelo =
      imgSrc.replace(".png", "");

    agregarConfiguracion(
      "Periférico",
      modelo
    );

    limpiarMarcadoReemplazo();

    return;
  }

  alert(
    "Los espacios de periféricos están llenos. Haz clic en uno para reemplazarlo."
  );
}
/* =========================
   TANQUE
========================= */

function setTanque(imgSrc) {

  const slot =
    document.getElementById("tanqueSlot");

  slot.innerHTML =
    '<div class="vertical-text">TANQUE</div>';

  const img =
    crearImagen(imgSrc, "Tanque");

  img.classList.add("tanque-img");

  slot.appendChild(img);
   const modelo =
  imgSrc.replace(".png", "");
   agregarConfiguracion(
     "Tanque de agua",
     modelo
   );
  slot.onclick = function() {

  document
    .querySelectorAll(".equipo-seleccionado")
    .forEach(el =>
      el.classList.remove("equipo-seleccionado")
    );

  slot.classList.add("equipo-seleccionado");

  elementoSeleccionado = {
    tipo: "procesadora",
    id: "procesadorSlot"
  };
};
}

/* =========================
   ENDOSCOPIO
========================= */

function setEndoscopio(imgSrc) {

  const slot =
    document.getElementById("endoscopioSlot");

  slot.innerHTML =
    '<div class="vertical-text">ENDOSCOPIOS</div>';

  const img =
    crearImagen(imgSrc, "Endoscopio");

  img.classList.add("endoscopio-img");

  slot.appendChild(img);
}

/* =========================
   SERIES
========================= */

function seleccionarSerie(serie) {

  serieSeleccionada = serie;

  document
    .getElementById("menuEndoscopios")
    .style.display = "block";

  const tipoSelect =
    document.getElementById("tipoEndoscopio");

  tipoSelect.innerHTML =
    '<option value="">Seleccione tipo</option>';

  const tipos =
    Object.keys(endoscopios[serie]);

  tipos.forEach(tipo => {

    tipoSelect.innerHTML +=
      `<option value="${tipo}">${tipo}</option>`;

  });

  document.getElementById(
    "modeloEndoscopio"
  ).innerHTML =
    '<option value="">Seleccione modelo</option>';
}

/* =========================
   CARGAR MODELOS
========================= */

function cargarModelos() {

  const tipo =
    document.getElementById(
      "tipoEndoscopio"
    ).value;

  const modeloSelect =
    document.getElementById(
      "modeloEndoscopio"
    );

  modeloSelect.innerHTML =
    '<option value="">Seleccione modelo</option>';

  if (!tipo) return;

  const modelos =
    endoscopios[serieSeleccionada][tipo];

  modelos.forEach(modelo => {

    modeloSelect.innerHTML +=
      `<option value="${modelo}">${modelo}</option>`;

  });
}

/* =========================
   SELECCIONAR MODELO
========================= */

function seleccionarModelo() {

  const modelo =
    document.getElementById(
      "modeloEndoscopio"
    ).value;

  if (!modelo) return;

  /*
    AUN NO TIENES IMAGENES
    POR ESO SOLO MOSTRAREMOS
    EL NOMBRE DEL MODELO
  */

  const slot =
    document.getElementById(
      "endoscopioSlot"
    );

  slot.innerHTML = `
    <div class="vertical-text">
      ENDOSCOPIOS
    </div>

    <div style="
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      font-size: 18px;
      font-weight: bold;
      color: #0b5394;
      padding: 10px;
      text-align: center;
    ">
      ${modelo}
    </div>
  `;

   agregarConfiguracion(
     "Endoscopio",
     modelo
      );
  slot.onclick = function() {

  document
    .querySelectorAll(".equipo-seleccionado")
    .forEach(el =>
      el.classList.remove("equipo-seleccionado")
    );

  slot.classList.add("equipo-seleccionado");

  elementoSeleccionado = {
    tipo: "tanque",
    id: "tanqueSlot"
  };
};
}

/* =========================
   LIMPIAR
========================= */

function limpiarTorre() {

  document.getElementById(
    "procesadorSlot"
  ).innerHTML =
    '<div class="placeholder">FUENTE DE LUZ / PROCESADORA</div>';

  document.getElementById(
    "per1a"
  ).innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';

  document.getElementById(
    "per1b"
  ).innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';

  document.getElementById(
    "per2a"
  ).innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';

  document.getElementById(
    "per2b"
  ).innerHTML =
    '<div class="placeholder small">PERIFÉRICO</div>';

  ["per1a", "per1b", "per2a", "per2b"]
    .forEach(id => {

      document.getElementById(id).onclick = null;

    });

  document.getElementById(
    "endoscopioSlot"
  ).innerHTML =
    '<div class="vertical-text">ENDOSCOPIOS</div>';

  document.getElementById(
    "tanqueSlot"
  ).innerHTML =
    '<div class="vertical-text">TANQUE</div>';

  document.getElementById(
    "menuEndoscopios"
  ).style.display = "none";

  document.getElementById(
    "tipoEndoscopio"
  ).innerHTML =
    '<option value="">Seleccione tipo</option>';

  document.getElementById(
    "modeloEndoscopio"
  ).innerHTML =
    '<option value="">Seleccione modelo</option>';

  limpiarMarcadoReemplazo();
   configuracionActual = [];

   actualizarTabla();

   document.getElementById(
     "tituloConfig"
   ).innerText =
     "CONFIGURACION TORRE";
}


function actualizarTabla() {

  const body =
    document.getElementById("configBody");

  body.innerHTML = "";

  configuracionActual.forEach(item => {

    body.innerHTML += `
      <tr>
        <td>${item.nombre}</td>
        <td>${item.marca}</td>
        <td>${item.modelo}</td>
      </tr>
    `;

  });
}

function agregarConfiguracion(nombre, modelo) {

  configuracionActual =
    configuracionActual.filter(
      item => item.nombre !== nombre
    );

  configuracionActual.push({

    nombre: nombre,
    marca: "FUJIFILM",
    modelo: modelo

  });

  actualizarTabla();
}

function eliminarSeleccionado() {

  if (!elementoSeleccionado) {

    alert("Seleccione un equipo.");

    return;
  }

  const slot =
    document.getElementById(
      elementoSeleccionado.id
    );

  switch (elementoSeleccionado.tipo) {

    case "procesadora":

      slot.innerHTML =
        '<div class="placeholder">FUENTE DE LUZ / PROCESADORA</div>';

      break;

    case "tanque":

      slot.innerHTML =
        '<div class="vertical-text">TANQUE</div>';

      break;

    case "endoscopio":

      slot.innerHTML =
        '<div class="vertical-text">ENDOSCOPIOS</div>';

      break;

    case "periferico":

      slot.innerHTML =
        '<div class="placeholder small">PERIFÉRICO</div>';

      break;
  }

  slot.classList.remove(
    "equipo-seleccionado"
  );

  elementoSeleccionado = null;
}

async function descargarPDF() {

  const { jsPDF } = window.jspdf;

  const captura =
    document.querySelector(".vista");

  const canvas =
    await html2canvas(captura);

  const imgData =
    canvas.toDataURL("image/png");

  const pdf =
    new jsPDF("landscape");

  pdf.addImage(
    imgData,
    "PNG",
    10,
    10,
    270,
    150
  );

  pdf.save(
    "Configuracion_Torre.pdf"
  );
}

function descargarExcel() {

  const wb =
    XLSX.utils.book_new();

  const ws =
    XLSX.utils.table_to_sheet(
      document.getElementById(
        "tablaConfig"
      )
    );

  XLSX.utils.book_append_sheet(
    wb,
    ws,
    "Configuracion"
  );

  XLSX.writeFile(
    wb,
    "Configuracion_Torre.xlsx"
  );
}
