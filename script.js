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

const ELECCION_CAMAS = "Cantidad de camas";
const ELECCION_DIAS = "Cantidad de días";
const ELECCION_DIA_INGRESO = "Día de ingreso";
const ELECCION_SERV_EXTRA = "Servicio extra";

labelOpcionesDias.style.display = "none";
labelOpcionesDiaIngreso.style.display = "none";
labelOpcionesServicioExtra.style.display = "none";
selectDias.style.display = "none";
selectDiaIngreso.style.display = "none";
selectServicioExtra.style.display = "none";



function mostrarReserva() {
  ulDetalles.innerHTML = '';

  if (selectCamas.value !== '0') {
    ulDetalles.innerHTML += `<li>${ELECCION_CAMAS}: ${selectCamas.value}</li>`;
    labelOpcionesDias.style.display = "inline-block";
    selectDias.style.display = "inline-block";
  }

  if (selectDias.value !== '0') {
    ulDetalles.innerHTML += `<li>${ELECCION_DIAS}: ${selectDias.value}</li>`;
    labelOpcionesDiaIngreso.style.display = "inline-block";
    selectDiaIngreso.style.display = "inline-block";
  }

  if (selectDiaIngreso.value !== '0') {
    ulDetalles.innerHTML += `<li>${ELECCION_DIA_INGRESO}: ${selectDiaIngreso.value}</li>`;
    labelOpcionesServicioExtra.style.display = "inline-block";
    selectServicioExtra.style.display = "inline-block";
  }

  if (selectServicioExtra.value !== '0') {
    ulDetalles.innerHTML += `<li>${ELECCION_SERV_EXTRA}: ${selectServicioExtra.value}</li>`;
  }

}
