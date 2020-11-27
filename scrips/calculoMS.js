$("#botonCalculoMS").click(calculoMercadoShop)


function calculoMercadoShop() {
    
   let costoProducto = parseFloat($("#costoProductoMS").val())
    let margenGanancia = parseFloat($("#margenGananciaMS").val())
    let formaCobro = $("#inputStateMP").val()
    let formaPago = $("#inputStateMPfp").val()
    let textoOpcion = document.getElementById("inputStateML");
   
    let selected = textoOpcion.options[textoOpcion.selectedIndex].text;
   
    let porcen = costoProducto * margenGanancia / 100;

    if ( costoProducto && margenGanancia) {
        let costoMS = 5.99 * 1.21
        
        var valorAPublicar = (costoProducto + porcen) / (1-(costoMS/100))
        valorAPublicar = valorAPublicar.toFixed(2)

        document.querySelector("#valorAPublicarMS").innerHTML= `$${valorAPublicar}`
        $("#costoProductoMS").val("")
        $("#margenGananciaMS").val("")
    }
};