function validarFormulario()
{
    var enviar = true;
 // Expresiones regulares
    var expRegNombre = /^[a-zA-Záéíóúñ\s]+$/i; 
    var expRegApellido = /^[a-zA-Záéíóúñ\s]+$/i;
    var expRegCorreo= "/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/";
    //var expRegRut 
    var expRegTelefono = /^[0-9]{9}$/;
    var expRegUsuario = /^[a-zA-Záéíóúñ\s]+$/i; 
    var expRegContraseña =/^[a-zA-Z0-9]+$/;

// Llamado de id del form
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var correo = document.getElementById("correo");
    var rut = document.getElementById("rut");
    var telefono = document.getElementById("telefono");
    var usuarioNuevo = document.getElementById("usuarioNuevo");
    var contraseñaNuevo = document.getElementById("contraseñaNuevo");
    //var nacimiento = document.getElementById("nacimiento");
    //var txtRegion = document.getElementById("txtRegion");
    //var txtCity = document.getElementById("txtCity");
    //var txtTipoVivienda = document.getElementById("txtTipoVivienda");
    var formRegistro = document.getElementById("formRegistro");
    
    
    if(!nombre.value)
    {
        alert("Escribir nombre, Por favor :c");
        enviar=false;
        nombre.focus();
    }else if(!expRegNombre.exec(nombre.value))
    {
        alert("Este campo acepta solo  letras ");
        enviar=false;
        nombre.focus();
    }
    
    else if(!apellido.value)
    {
        alert("Escriba su apellido, Por favor c:");
        enviar=false;
        apellido.focus();
    }else if(!expRegApellido.exec(apellido.value))
    {
        alert("Este campo acepta solo  letras ");
        enviar=false;
        apellido.focus();
    }
    
    else if(!correo.value)
    {
        alert("Escribir correo, Por favor :3");
        enviar=false;
        correo.focus();
    }else if(!expRegCorreo.exec(correo.value))
    {
        alert("Ingrese un email valido ");
        enviar=false;
        correo.focus();
    }
      
    
    
   
    
    
    
}//fin


window.onload=function()
{
    var btnEnviar = document.getElementById("registrar");
    btnEnviar.onclick=validarFormulario;

}


    
