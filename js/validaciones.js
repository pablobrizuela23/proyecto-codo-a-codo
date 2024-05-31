document.addEventListener("DOMContentLoaded",()=> {
    const formulario = document.getElementById("inicioSesion");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    //validamos email
    const validarEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    //mostramos los errores
    const mostrarError = (elementId, mensaje) => {
        elementId.innerText = mensaje;
        elementId.classList.add("visible");
        
    };

    const resetError = ()=>{
        emailError.innerText = "";
        passwordError.innerText = "";
        emailError.classList.remove("visible");
        passwordError.classList.remove("visible");
    };
  

    formulario.addEventListener("submit",event =>{
        resetError();

        let valido = true;

        if(!validarEmail(email.value)){
            mostrarError(emailError,"Por favor, introduce un correo electrónico válido")
            valido=false;
        }

        if(password.value.length <6){
            mostrarError(passwordError,"La contraseña debe tener al menos 6 caracteres.");
            valido=false;
        }

        if(!valido) event.preventDefault();
    });

    
});