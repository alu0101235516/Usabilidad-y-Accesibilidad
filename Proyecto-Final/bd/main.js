// Registro

const signUpForm = document.querySelector("#formularioRegistro");


signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = signUpForm["registro-usuario"].value;
    const password = signUpForm["registro-password"].value;

    auth
        .createUserWithEmailAndPassword(usuario, password)
        .then((userCredential) => {

            console.log("Registro correcto.")
     
            signUpForm.reset();
      
            $("#registro").modal("hide");
        });
})


// Log in

const logInForm = document.querySelector("#formularioLogin");


logInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = logInForm["log-in-usuario"].value;
    const password = logInForm["log-in-password"].value;

    auth
        .signInWithEmailAndPassword(usuario, password)
        .then((userCredential) => {

            console.log("Log In correcto.")
    
            signUpForm.reset();
    
            $("#login").modal("hide");
        })
        .catch(error => alert("El usuario o la contraseña no son válidos. Introduzca unas credenciales válidas"))
})