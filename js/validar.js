window.onload=iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click',validar,false);
}
function validaNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        Error(elemento);
        return false;
    }
    return true;
}

function validar(e){
    if(validaNombre()){
        return true
    }else{
        e.preventDefault();
    }
}