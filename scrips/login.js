
function datosUsers(usuario,claveUsuario,check) {
  $.ajax({
      url: 'usuarios.json',
      method: 'GET',
      dataType: 'json',
      success: function (data) {      
        users = data;
        
        for (var i=0; i < users.length; i++){
            let userRegistro = users[i].usuario;
            let userClave = users[i].clave;
            var estado = false
            if (usuario == userRegistro) {
                console.log("si si si")
              

                if (claveUsuario == userClave) {
                     $("#bienvenido").text(`Bienvenido ${usuario}`)
                     $("#borrar").hide()
                     $("#botonIngreso").hide()
                    if (check) {
                        estado = true
                        localStorage.setItem('usuario', usuario)
                        localStorage.setItem('clave', claveUsuario)
                        var usuarioLocal = localStorage.getItem("usuario")
                        $("#ingresoModal").text(`${usuarioLocal}`)
                        
                        break
                    }else {
                        estado = true
                        sessionStorage.setItem('usuario', usuario)
                        sessionStorage.setItem('clave', claveUsuario)
                        usuarioSession = sessionStorage.getItem("usuario")
                        $("#ingresoModal").text(`${usuarioSession}`)
                        break
                    }
                }  
            } 
           
        }

        
        if (estado ==false) {
            $("#nombreUsuario").css("background-color", "red")
            $("#nombreUsuario").val("DATOS INCORRECTOS")
            $("#claveUsuario").css("background-color", "red")
            $("#claveUsuario").val("")
            $("#pru").css("color", "red");
            $("#pru").text("Los datos Ingresados son Incorrectos")
         
            
        
            $("#nombreUsuario").click(limpiarUsuario)
            $("#claveUsuario").click(limpiarClave)
            
        }
      },
      error: function (error) {
        console.log(error);
      }
    })
}



function limpiarUsuario() {
    $("#nombreUsuario").css("background-color", "")
    $("#nombreUsuario").val("")
    $("#pru").text("")
}
function limpiarClave() {
    $("#claveUsuario").css("background-color", "")
    $("#claveUsuario").val("")
    $("#pru").text("")
}


function login() {

  
    const modal = document.querySelector("#modalUnirse");   

    modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Ingresar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h3 id="bienvenido"></h3>
                <div class="modal-body" id="borrar">
                    <form>
                        <div class="form-row">
                            <div class="form-group col">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label for="inputUser" class="input-group-text">User</label>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Ingresar Usuario" aria-label="Username"
                                        aria-describedby="inputUser" id="nombreUsuario" class="nombreUsuario">
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label for="inputPassword" class="input-group-text">Pass</label>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Clave"
                                        aria-label="Password" aria-describedby="inputPassword" id="claveUsuario">
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <small class="form-check-label" for="gridCheck">
                                        Recordar datos de ingreso
                                    </small>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="alert alert-info" role="alert" pt-4>
                        Si aún no estas registrado o queres recuperar tus datos de ingreso hace <a href="#"
                            class="alert-link">Click Aquí</a>
                    </div>
                </div>
                <div id="pru" class="text-center"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Volver</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="botonSalida">Cerrar Sesion</button>
                    <button type="button" class="btn btn__ficha" id="botonIngreso">Ingresar</button>
                </div>
            </div>
        </div>`


    $("#botonIngreso").click(checkUser)
    $("#botonSalida").click(removeUser)
   
}

function removeUser() {
     var cerrar = prompt('Desea cerrar sesión S/N?');
        if (cerrar != null) {
        cerrar = cerrar.toLowerCase();
        }
         if (cerrar == "s" || cerrar == "si") {
             alert("SESION CERRADA")
            localStorage.clear()
    }
}

function checkUser() {
    console.log("entro a la funcion")
    let usuario = $("#nombreUsuario").val()
    let claveUsuario = $("#claveUsuario").val()
    let check = $("#gridCheck").prop("checked")
    console.log(usuario, claveUsuario, check)
    datosUsers(usuario,claveUsuario,check)
}

$("#nombreUsuario").change(function(){
        let usuario = $("#nombreUsuario").val()
        datosUsers(usuario)
        

    });
    
      $("#claveUsuario").change(function(){
		let claveUsuario = $("#claveUsuario").val()
          
    });
    
    $("#gridCheck").change(function(){
		let check = $("#claveUsuario").val()
    });
    
    $("#nombreUsuario").change(function(){
        let usuario = $("#nombreUsuario").val()
       
        if (usuario === null) {
          
        }
        datosUsers(usuario)
       
    });