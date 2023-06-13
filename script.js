const imagenHotel = document.querySelector("#img-1");
const ulDetalles = document.querySelector("#datos-ingresados");
const labelOpcionesCamas = document.querySelector("#opciones-camas");
const labelOpcionesDias = document.querySelector("#opciones-dias");
const labelOpcionesDiaIngreso = document.querySelector("#opciones-dia-ingreso");
const labelOpcionesServicioExtra = document.querySelector("#opciones-servicio-extra");
const selectCamas = document.querySelector("#select-1");
const selectDias = document.querySelector("#select-2");
const selectDiaIngreso = document.querySelector("#select-3");
const selectServicioExtra = document.querySelector("#select-4");

const IMAGEN_1 = "https://th.bing.com/th/id/OIP.H0G_89DcrQqKoEKw0FJGCAHaDt?w=346&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7";

imagenHotel.src = IMAGEN_1;

const OPC_POR_DEF = "0";

const ELECCION_CAMAS = "Cantidad de camas";
const ELECCION_DIAS = "Cantidad de días";
const ELECCION_DIA_INGRESO = "Día de ingreso";
const ELECCION_SERV_EXTRA = "Servicio extra";


ocultarOpcionPagina(labelOpcionesDias, selectDias);
ocultarOpcionPagina(labelOpcionesDiaIngreso, selectDiaIngreso);
ocultarOpcionPagina(labelOpcionesServicioExtra, selectServicioExtra);


function mostrarReserva() {

  ulDetalles.innerHTML = '';
  actualizaSeccOpciones(selectCamas, labelOpcionesCamas, labelOpcionesDias, selectDias, ELECCION_CAMAS);
  actualizaSeccOpciones(selectDias, labelOpcionesDias, labelOpcionesDiaIngreso, selectDiaIngreso, ELECCION_DIAS);
  actualizaSeccOpciones(selectDiaIngreso, labelOpcionesDiaIngreso, labelOpcionesServicioExtra,selectServicioExtra, ELECCION_DIA_INGRESO);
  finalizaSeccionOpciones(selectServicioExtra, labelOpcionesServicioExtra, ELECCION_SERV_EXTRA);
}


/**
 * Actualiza la seccion de opciones 
 * @param {HTMLSelectElement} selectOpcion la lista de opciones actuales
 * @param {HTMLLabelElement} labelTituloOpc el titulo de la lista de opciones actuales
 * @param {HTMLLabelElement} labelTituloOpcSig el titulo de la lista de opciones siguiente
 * @param {HTMLSelectElement} selectOpcSig la lista de opciones siguiente
 * @param {String} infoDetalleOpc es la informacion del detalle de la opcion a mostrar
 */
function actualizaSeccOpciones(selectOpcion, labelTituloOpc, labelTituloOpcSig, selectOpcSig, infoDetalleOpc) {
  if (selectOpcion.value !== OPC_POR_DEF) {
    actualizaSeccDetallesReserva(infoDetalleOpc, selectOpcion);
    ocultarOpcionPagina(labelTituloOpc, selectOpcion);
    labelTituloOpcSig.style.display = "inline-block";
    selectOpcSig.style.display = "inline-block";
  }
}

/**
 * Oculta la opcion recibida en la pagina
 * @param {*} labelTituloOpc el titulo de la lista de opciones a ocultar
 * @param {*} selectOpcion la lista de opciones a ocultar
 */
function ocultarOpcionPagina(labelTituloOpc, selectOpcion) {
  labelTituloOpc.style.display = "none";
  selectOpcion.style.display = "none";
}

/**
 * Actualiza la seccion de detalles de la reserva
 * @param {HTMLSelectElement} selectOpcion la lista de opciones actuales
 * @param {String} infoDetalleOpc es la informacion del detalle de la opcion a mostrar
 */
function actualizaSeccDetallesReserva(infoDetalleOpc, selectOpcion) {
  ulDetalles.innerHTML += `<p>${infoDetalleOpc}: ${selectOpcion.value}</p>`;
}


/**
 * Finaliza la seccion de opciones
 * @param {HTMLSelectElement} selectOpcion la ultima lista de opciones 
 * @param {HTMLLabelElement} labelTituloOpc el ultima titulo de la lista de opciones
 * @param {String} infoDetalleOpc es la informacion del detalle de la ultima opcion a mostrar
 */
function finalizaSeccionOpciones(selectOpcion, labelTituloOpc, infoDetalleOpc ){
  if (selectOpcion.value !== OPC_POR_DEF) {
    actualizaSeccDetallesReserva(infoDetalleOpc, selectOpcion);
    ocultarOpcionPagina(labelTituloOpc, selectOpcion);
  }
}