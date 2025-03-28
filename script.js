let nombreValido = false;
let mailValido = false;
let contraValida = false;
let contraValida2 = false;

function validarNombre(){
    const inNombre = document.getElementById("inNombre").value;
    const nombreIngresado = document.getElementById("nombre");
    if(inNombre.length < 3){
        nombreIngresado.innerText = `El nombre debe tener al menos 3 caracteres.`
        nombreIngresado.setAttribute("class", "error");
        nombreValido = false;
    }else{
        nombreIngresado.innerText = `Nombre valido.`
        nombreIngresado.setAttribute("class", "correct");
        nombreValido = true;
    }
}

function validarMail(){
    const inMail = document.getElementById("inMail").value;
    const mailIngresado = document.getElementById("mail")
    if (/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,63}$/.test(inMail)){
        mailIngresado.innerText = `Mail valido.`
        mailIngresado.setAttribute("class", "correct");
        mailValido = true;
    } else {
        mailIngresado.innerText = `Mail no valido.`
        mailIngresado.setAttribute("class", "error");
        mailValido = false;
    }
}

function validarContraseña(){
    const inContraseña = document.getElementById("inContraseña").value;
    const contraIngresada = document.getElementById("contra");

    if(inContraseña.length >= 8 && (/[0-9]/.test(inContraseña)) && (/[A-Za-z]/.test(inContraseña))){
        contraIngresada.innerText = `Contraseña valida.`
        contraIngresada.setAttribute("class", "correct");
        contraValida = true;
    }else{
        contraIngresada.innerText = `La contraseña debe tener al menos 8 caracteres y un numero y letra`
        contraIngresada.setAttribute("class", "error");
        contraValida = false;
    }
}

function confirmarContraseña(){
    const inContraseña = document.getElementById("inContraseña").value;
    const inConfirmar = document.getElementById("inConfirmar").value;
    const confirmarIngresada = document.getElementById("confirmar");

    if(inConfirmar === inContraseña){
        confirmarIngresada.innerText = `Las contraseñas coinciden.`
        confirmarIngresada.setAttribute("class", "correct");
        contraValida2 = true;
    }else{
        confirmarIngresada.innerText = `Las contraseñas deben coincidir.`
        confirmarIngresada.setAttribute("class", "error");
        contraValida2 = false;
    }
}

function validarFormulario(e){
    console.log("hola");
    if(nombreValido == true && mailValido == true && contraValida == true && contraValida2 == true){
        alert("Formulario enviado")
    }
    else{
        e.preventDefault()
        alert("Error: Faltan requisitos")
    }
}

