// Nico como estas? te dejo los comentarios por aca porque me parece mas facil
// Me faltan hacer un monton de mejoras esteticas y sobre todo de funcionamiento
// Espero que el objetivo de la entrega esta cumplido
// Se duro en tu devolucion asi puedo mejorar para la entrega final
// Abrazo y una lastima que sean tan pocas clases




$("#botonCalculoML").click(calculoMercadolibre)
$("#botonCalculoMP").click(calculoMercadoPago)
$("#botonCalculoMS").click(calculoMercadoShop)


function calculoMercadolibre() {
   let costoProducto = parseFloat($("#costoProductoML").val())
    let margenGanancia = parseFloat($("#margenGananciaML").val())
    let publi = $("#inputStateML").val()
    let textoOpcion = document.getElementById("inputStateML");
    let selected = textoOpcion.options[textoOpcion.selectedIndex].text;
    let porcen = costoProducto * margenGanancia / 100;

    if (publi == 1) {
        if (costoProducto + porcen / 0.87 < 2500) {
            var valorAPublicar = (costoProducto + porcen + 15) / 0.87;
            valorAPublicar = valorAPublicar.toFixed(2)
        } else {
            var valorAPublicar = (costoProducto + porcen) / 0.87;
            valorAPublicar = valorAPublicar.toFixed(2)
        }
    } else {
        if (costoProducto + porcen / 0.87 < 2500) {
            var valorAPublicar = (costoProducto + porcen + 15) / 0.72;
            valorAPublicar = valorAPublicar.toFixed(2)
        } else {
            var valorAPublicar = (costoProducto + porcen) / 0.72;
            valorAPublicar = valorAPublicar.toFixed(2)
        }
    }
    
   
    estoyProbandounaFunc(porcen, valorAPublicar)
};


function calculoMercadoPago() {

   let costoProducto = parseFloat($("#costoProductoMP").val())
    let margenGanancia = parseFloat($("#margenGananciaMP").val())
    let formaCobro = $("#inputStateMP").val()
    let formaPago = $("#inputStateMPfp").val()
    let textoOpcion = document.getElementById("inputStateML");
    
    let selected = textoOpcion.options[textoOpcion.selectedIndex].text;
  
    let porcen = costoProducto * margenGanancia / 100;

   
   
    if (formaCobro == 1) {
        let costoLink = 5.99 * 1.21
        var valorAPublicar = (costoProducto + porcen) / (1-(costoLink/100))
        valorAPublicar = valorAPublicar.toFixed(2)
    } else if (formaCobro == 2) {
        if (formaPago == 2) {
            let costoQR = 5.99 * 1.21
            var valorAPublicar = (costoProducto + porcen) / (1-(costoQR/100))
            valorAPublicar = valorAPublicar.toFixed(2)
        }else {
            let costoQR = 0.6 * 1.21
            var valorAPublicar = (costoProducto + porcen) / (1-(costoQR/100))
            valorAPublicar = valorAPublicar.toFixed(2)
        }
    }else {
        if (formaPago == 1) {
            let costoPoint = 3.49 * 1.21
            var valorAPublicar = (costoProducto + porcen) / (1-(costoPoint/100))
            valorAPublicar = valorAPublicar.toFixed(2)
        } else if (formaPago == 2) {
            let costoPoint = 5.99 * 1.21
            var valorAPublicar = (costoProducto + porcen) / (1-(costoPoint/100))
            valorAPublicar = valorAPublicar.toFixed(2)
        } else {
            console.log("no calcula")
        }

    }
            
        document.querySelector("#valorAPublicarMP").innerHTML = `$${valorAPublicar}`
};



function calculoMercadoShop() {
    
   let costoProducto = parseFloat($("#costoProductoMS").val())
    let margenGanancia = parseFloat($("#margenGananciaMS").val())
    let formaCobro = $("#inputStateMP").val()
    let formaPago = $("#inputStateMPfp").val()
    let textoOpcion = document.getElementById("inputStateML");
   
    let selected = textoOpcion.options[textoOpcion.selectedIndex].text;
   
    let porcen = costoProducto * margenGanancia / 100;

        let costoMS = 5.99 * 1.21
        
        var valorAPublicar = (costoProducto + porcen) / (1-(costoMS/100))
        valorAPublicar = valorAPublicar.toFixed(2)

   
        document.querySelector("#gananciaMS").innerHTML= `$${porcen}`
        document.querySelector("#valorAPublicarMS").innerHTML= `$${valorAPublicar}`
    
};



function estoyProbandounaFunc(porcentage, valorPubli) {
    
    var aviso = `<small class="form-text text-muted text-center pb-4 " id="pru2"></small>`
    var gananciaPublicada = `<small class="form-text text-center pt-6" id="textito2"></small><h5 type="" class="form-text text-center pb-4 pt-2"  id="calculandoGanancia" name="ingreso"></h5>`
    var calculoPublicado = `<H4 class="form-text text-muted text-center" id="textito"></H4><h3 type="" class=" text-center" id="valorAPublicarML"></h3>`
    
    $("#pru2").text(`IMPORTANTE! no se calculan valores de IIBB. El mismo varía de acuerdo a la condición impositiva.`)
    $("#textito2").text(`GANANCIA`)
    $("#calculandoGanancia").text(`$${porcentage}`)
    $("#valorAPublicarML").css("color", "red");
    $("#textito").text(`VALOR A PUBLICAR`)
    $("#valorAPublicarML").text(`$${valorPubli}`)

    $(".pasandoCalculo").append(aviso)
    $(".pasandoCalculo").append(gananciaPublicada)
    $(".pasandoCalculo").append(calculoPublicado)
}




$("#buttonMP").click(mostrarCalculadoraMP)
$("#buttonMP2").click(mostrarCalculadoraMP)
$("#buttonMP4").click(mostrarCalculadoraMP)

function mostrarCalculadoraMP() {
    $("#mercadolibre").hide()
    $("#mercadoshop").hide()
    $("#mercadopago").show()
}



$("#buttonML").click(mostrarCalculadoraML)
$("#buttonML2").click(mostrarCalculadoraML)
$("#buttonML4").click(mostrarCalculadoraML)

function mostrarCalculadoraML() {
    $("#mercadopago").hide()
    $("#mercadoshop").hide()
    $("#tarjetaML").hide()
    $("#mercadolibre").show()   
}

$("#buttonMS").click(mostrarCalculadoraMS)
$("#buttonMS2").click(mostrarCalculadoraMS)
$("#buttonMS4").click(mostrarCalculadoraMS)

function mostrarCalculadoraMS() {
    $("#mercadopago").hide()
    $("#mercadolibre").hide()
    $("#mercadoshop").show()
}

