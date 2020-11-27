const urlML = 'https://api.mercadolibre.com/sites/MLA/search?q=SEARCHKEY';
const MAXIMO_ELEMENTOS = 5;

var ultimaBusqueda = "";

window.onload = () => {
    document.getElementById("buscar").addEventListener('click', e => {
        let busqueda = document.getElementById("buscador").value;
        if(busqueda != ultimaBusqueda){
            if(ultimaBusqueda) eliminarElementos(articulos);
            ultimaBusqueda = busqueda;
            busqueda = busqueda.replace(" ", "%20");
            const url = urlML.replace("SEARCHKEY", busqueda);

            fetch(url).then(res => res.json())
            .then(res => {
                console.log(res.results);
                var contenedor = document.getElementById("contenedor");
                crearElementos(res.results, MAXIMO_ELEMENTOS, contenedor);
            });
        }
    });
}

var articulos = [];

function crearElementos(array, maximo, elementoPadre){
    for(var i = 0; i < maximo; i++){
        articulos.push(new Articulo(array[i], elementoPadre));
    }
}

function eliminarElementos(array){
    array.forEach(elemento => elemento.eliminarElemento());
}

class Articulo{
    constructor(articulo, elementoPadre){
        this.padre = elementoPadre;
        this.elemento = this.crearElemento(articulo);
    }

    eliminarElemento(){
        this.elemento.parentElement.parentElement.removeChild(this.elemento.parentElement);
    }

    crearElemento(datos){
        const elemento = document.createElement("div");

        const _id = datos.id;
        const imagen = datos.thumbnail;
        const linkML = datos.permalink;
        const nombre = datos.title;
        const precio = datos.price;

        elemento.innerHTML = `
            <div id="${_id}" style="width: 300px; position: relative; left: 50px; top: 50px; display: inline;">
                <img src="${imagen}" alt="fotoArticulo" style="width: 200px; position: relative; display: block; left: 50px;">
                <p>${nombre} <strong>$${precio}</strong></p>
                <a href="${linkML}">Ir a la publicacion</a>
            </div>
        `;

        this.padre.appendChild(elemento);

        return document.getElementById(`${_id}`);
    }
}