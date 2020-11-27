
// VALIDACION QUE EL INGRESO SEA SOLAMENTE DE NUMEROS mercadolibre

const texto = document.getElementById("costoProductoML");
const alerta = document.getElementById("alerta");
const alertaVacio = document.getElementById("alertaVacio");

texto.addEventListener("input", e => {
  if(isNaN(texto.value)){
    alerta.style.display = "block";
  }else{
    alerta.style.display = "none";
  }

  if(texto.value == ""){
    alertaVacio.style.display = "block";
  }else{
    alertaVacio.style.display = "none";
  }
});


const texto2 = document.getElementById("margenGananciaML");
const alerta2 = document.getElementById("alerta2");
const alertaVacio2 = document.getElementById("alertaVacio2");

texto2.addEventListener("input", e => {
  if(isNaN(texto2.value)){
    alerta2.style.display = "block";
  }else{
    alerta2.style.display = "none";
  }

  if(texto2.value == ""){
    alertaVacio2.style.display = "block";
  }else{
    alertaVacio2.style.display = "none";
  }
});




// VALIDACION QUE EL INGRESO SEA SOLAMENTE DE NUMEROS mercadopago

const textoMP = document.getElementById("costoProductoMP");
const alertaMP = document.getElementById("alertaMP");
const alertaVacioMP = document.getElementById("alertaVacioMP");

textoMP.addEventListener("input", e => {
  if(isNaN(textoMP.value)){
    alertaMP.style.display = "block";
  }else{
    alertaMP.style.display = "none";
  }

  if(textoMP.value == ""){
    alertaVacioMP.style.display = "block";
  }else{
    alertaVacioMP.style.display = "none";
  }
});


const textoMP2 = document.getElementById("margenGananciaMP");
const alertaMP2 = document.getElementById("alertaMP2");
const alertaVacioMP2 = document.getElementById("alertaVacioMP2");

textoMP2.addEventListener("input", e => {
  if(isNaN(textoMP2.value)){
    alertaMP2.style.display = "block";
  }else{
    alertaMP2.style.display = "none";
  }

  if(textoMP2.value == ""){
    alertaVacioMP2.style.display = "block";
  }else{
    alertaVacioMP2.style.display = "none";
  }
});


// VALIDACION QUE EL INGRESO SEA SOLAMENTE DE NUMEROS mercadoshops

const textoMS = document.getElementById("costoProductoMS");
const alertaMS = document.getElementById("alertaMS");
const alertaVacioMS = document.getElementById("alertaVacioMS");

textoMS.addEventListener("input", e => {
  if(isNaN(textoMS.value)){
    alertaMS.style.display = "block";
  }else{
    alertaMS.style.display = "none";
  }

  if(textoMS.value == ""){
    alertaVacioMS.style.display = "block";
  }else{
    alertaVacioMS.style.display = "none";
  }
});

const textoMS2 = document.getElementById("margenGananciaMS");
const alertaMS2 = document.getElementById("alertaMS2");
const alertaVacioMS2 = document.getElementById("alertaVacioMS2");

textoMS2.addEventListener("input", e => {
  if(isNaN(textoMS2.value)){
    alertaMS2.style.display = "block";
  }else{
    alertaMS2.style.display = "none";
  }

  if(textoMS2.value == ""){
    alertaVacioMS2.style.display = "block";
  }else{
    alertaVacioMS2.style.display = "none";
  }
});
