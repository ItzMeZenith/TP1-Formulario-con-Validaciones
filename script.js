let esValido;

function validarNombre(){
    const inNombre = document.getElementById("inNombre").value;
    const nombreIngresado = document.getElementById("nombre");
    if(inNombre.length < 3){
        nombreIngresado.innerText = `El nombre debe tener al menos 3 caracteres.`
        nombreIngresado.setAttribute("class", "error");
        esValido = false;
    }else{
        nombreIngresado.innerText = `Nombre valido.`
        nombreIngresado.setAttribute("class", "correct");
        esValido = true;
    }
}

function validarContraseña(){
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const inContraseña = document.getElementById("inContraseña").value;
    const contraIngresada = document.getElementById("contra");
    if(inContraseña.length < 8){
        contraIngresada.innerText = `La contraseña debe tener al menos 8 caracteres`
        contraIngresada.setAttribute("class", "error");
        esValido = false;
    }else{
        contraIngresada.innerText = `Contraseña valida.`
        contraIngresada.setAttribute("class", "correct");
        esValido = true;
    }
}

