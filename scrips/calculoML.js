
$("#botonCalculoML").click(calculoMercadolibre)


function calculoMercadolibre(){
    // FUNCION QUE REALIZA EL CALCULO DE LOS VALORES INGRESADOS
    let costoProducto = parseFloat($("#costoProductoML").val())
    let margenGanancia = parseFloat($("#margenGananciaML").val())
    let publi = $("#inputStateML").val()
    let textoOpcion = document.getElementById("inputStateML");
    let selected = textoOpcion.options[textoOpcion.selectedIndex].text;
    let porcen = costoProducto * margenGanancia / 100;
    
    
    if ( costoProducto && margenGanancia) {
            
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

            resultados(porcen, valorAPublicar,costoProducto,margenGanancia, selected)
            $("#costoProductoML").val("")
            $("#margenGananciaML").val("")

    }
};






function resultados(porcentage, valorPubli, costoProducto, margenGanancia,selected) {
    // FUNCION CON EL FIN DE ENVIAR LOS DATOS RESULTADOS
    document.querySelector("#avisoImpuesto").innerHTML = `IMPORTANTE! no se calculan valores de IIBB.</br>El mismo varía de acuerdo a la condición impositiva.`
    document.querySelector("#detalleML").innerHTML = `El costo Producto Ingresado es <strong>$${costoProducto}</strong></br>
    Con una margen de ganancia <strong>%${margenGanancia}</strong> que equivale a <strong>$${porcentage}</strong></br>
    Publicación elegida: <strong>${selected}</strong></br></br>
    EL VALOR A PUBLICAR ES</br>`
    document.querySelector("#resultadoFinalML").innerHTML = `<strong>$ ${valorPubli}</strong>`
    
}

