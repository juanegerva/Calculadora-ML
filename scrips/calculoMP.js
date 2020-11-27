$("#botonCalculoMP").click(calculoMercadoPago)

function calculoMercadoPago() {
    document.querySelector("#valorAPublicarMP").innerHTML = ""
    let costoProducto = parseFloat($("#costoProductoMP").val())
    let margenGanancia = parseFloat($("#margenGananciaMP").val())
    let formaCobro = $("#inputStateMP").val()
    let formaPago = $("#inputStateMPfp").val()
    let textoOpcion = document.getElementById("inputStateML");
    
    let selected = textoOpcion.options[textoOpcion.selectedIndex].text;
  
    let porcen = costoProducto * margenGanancia / 100;

   if ( costoProducto && margenGanancia) {
   
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
            $("#costoProductoMP").val("")
            $("#margenGananciaMP").val("")
        }
};
