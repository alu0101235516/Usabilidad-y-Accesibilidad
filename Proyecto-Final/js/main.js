// Registro

const signUpForm = document.querySelector("#formularioSignUp");


signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = signUpForm["signupEmail"].value;
    const password = signUpForm["signupPassword"].value;
    const password2 = signUpForm["signupPassword2"].value;

    if (password == password2){
        auth
        .createUserWithEmailAndPassword(usuario, password)
        .then((userCredential) => {

            console.log("Registro correcto.")
     
            signUpForm.reset();
      
            $("#signup").modal("hide");
        }).catch(error =>  {
            alert("El usuario o la contraseña no son válidos.")
        })
    }
    else{
        alert("Las contraseñas no coinciden.")
    }


    
})


// Log in

const logInForm = document.querySelector("#formularioLogin");


logInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = logInForm["signinEmail"].value;
    const password = logInForm["signinPassword"].value;

    auth
        .signInWithEmailAndPassword(usuario, password)
        .then((userCredential) => {

            console.log("Log In correcto.")
    
            logInForm.reset();
    
            $("#signin").modal("hide");
        })
        .catch(error =>  {
            document.getElementById("errorCommand").style.display = "block"
            //alert("El usuario o la contraseña no son válidos. Introduzca unas credenciales válidas")
        })
            
            
})