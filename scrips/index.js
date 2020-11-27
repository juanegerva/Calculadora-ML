

$("#ingresoModal").click(login)

function chequeaLocal() {
  var usuarioLocal = localStorage.getItem("usuario")
  if (localStorage.getItem('usuario')) {
      
      $("#ingresoModal").text(`${usuarioLocal}`)
      $("#bienvenido").text(`Bienvenido ${usuarioLocal}`)
               
      $("#borrar").hide()
  }
}

document.addEventListener('DOMContentLoaded', chequeaLocal)


// Limpieza de campos y acciones de los botones


$("#buttonMP").click(mostrarCalculadoraMP)
$("#buttonMP2").click(mostrarCalculadoraMP)
$("#buttonMP4").click(mostrarCalculadoraMP)

function mostrarCalculadoraMP() {
    document.querySelector("#valorAPublicarMS").innerHTML = ""
    document.querySelector("#valorAPublicarMP").innerHTML = ""
    document.querySelector("#avisoImpuesto").innerHTML = "" 
    document.querySelector("#detalleML").innerHTML = ""
    document.querySelector("#resultadoFinalML").innerHTML = ""
    $("#mercadolibre").hide()
    $("#mercadoshop").hide()
    $("#mercadopago").show()
}



$("#buttonML").click(mostrarCalculadoraML)
$("#buttonML2").click(mostrarCalculadoraML)
$("#buttonML4").click(mostrarCalculadoraML)

function mostrarCalculadoraML() {
    document.querySelector("#valorAPublicarMS").innerHTML = ""
    document.querySelector("#valorAPublicarMP").innerHTML = ""
     document.querySelector("#avisoImpuesto").innerHTML = "" 
    document.querySelector("#detalleML").innerHTML = ""
    document.querySelector("#resultadoFinalML").innerHTML = ""
    $("#mercadopago").hide()
    $("#mercadoshop").hide()
    $("#tarjetaML").hide()
    $("#mercadolibre").show()   
}

$("#buttonMS").click(mostrarCalculadoraMS)
$("#buttonMS2").click(mostrarCalculadoraMS)
$("#buttonMS4").click(mostrarCalculadoraMS)

function mostrarCalculadoraMS() {
    document.querySelector("#valorAPublicarMS").innerHTML = ""
    document.querySelector("#valorAPublicarMP").innerHTML = ""
    document.querySelector("#avisoImpuesto").innerHTML = "" 
    document.querySelector("#detalleML").innerHTML = ""
    document.querySelector("#resultadoFinalML").innerHTML = ""
    $("#mercadopago").hide()
    $("#mercadolibre").hide()
    $("#mercadoshop").show()
}
