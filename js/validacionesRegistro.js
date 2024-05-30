document.addEventListener("DOMContentLoaded",() => {

    const formulario = document.querySelector("#formReg")
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const fechaNac = document.getElementById("fechaNac");
    const terminosYCondiciones = document.getElementById("terminosYCondiciones");

    const nombreError = document.getElementById("nombreError");
    const apellidoError = document.getElementById("apellidoError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const fechaError = document.getElementById("fechaError");
    const tYCError = document.getElementById("tYCError");


   
    formulario.addEventListener("submit",event =>{
        event.preventDefault(); //aca prevenimos el envio del formulario

        let valido = true;

        resetError();

        //validamos los campos

        if(nombre.value.trim()=== ""){
            mostrarError(nombreError,"el nombre es requerido");
            valido=false;
        }

        if(apellido.value.trim()===""){
            mostrarError(apellidoError,"el apellido es requerido");
            valido=false;
        }

        if(!validarEmail(email.value.trim())){
            mostrarError(emailError,"el email no es valido");
            valido=false;
        }

        if(password.value.length < 6){
            mostrarError(passwordError,"la contraseña debe tener al menos 6 caracteres");
            valido=false;
        }

        if(!validarFecha(fechaNac.value)){
            mostrarError(fechaError,"fecha invalida");
            valido=false;
        }

        if(!terminosYCondiciones.checked){
            mostrarError(tYCError,"Debe aceptar terminos y condicones");
            valido=false;
        }

        //si el formulario es valido se envia
        if(valido){
            formulario.submit();
            alert("el formulario se envio correctamente");
        }

    });

    const resetError = ()=>{
        nombreError.innerText = "";
        apellidoError.innerText = "";
        emailError.innerText = "";
        passwordError.innerText = "";
        fechaError.value = "";
        tYCError.checked = false;

        emailError.classList.remove("visible");
        passwordError.classList.remove("visible");
        emailError.classList.remove("visible");
        passwordError.classList.remove("visible");
        fechaError.classList.remove("visible");
        tYCError.classList.remove("visible");
    };

    //mostramos los errores
    const mostrarError = (elementId, mensaje) => {
        elementId.innerText = mensaje;
        elementId.classList.add("visible");
        
    };

    function validarEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validarFecha(fecha){
        const hoy = new Date();
        const cumpleanio = new Date(fecha);
        return cumpleanio <= hoy;
    }
//se valida en tiempo real
    function validateInput(input, errorElement, validationFunction) {
        input.addEventListener('input', () => {
            if (validationFunction(input.value)) {
                errorElement.innerText = "";
                errorElement.classList.remove("visible");
            } else {
                //errorElement.innerText = "Error";
                errorElement.classList.add("visible");
            }
        });
    }

    validateInput(nombre, nombreError, (value) => value.trim() !== '');
    validateInput(apellido, apellidoError, (value) => value.trim() !== '');
    validateInput(email, emailError, validateEmail);
    validateInput(password, passwordError, (value) => value.length >= 6);
    validateInput(fechaError, fechaErrorMessage, validateDate);
    tYCError.addEventListener('change', () => {
        if (tYCError.checked) {
            tYCErrorMessage.innerText = "";
            tYCErrorMessage.classList.remove("visible");
        } else {
            tYCErrorMessage.innerText = "Debe aceptar los términos y condiciones.";
            tYCErrorMessage.classList.add("visible");
        }
    });
    

})