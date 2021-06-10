// Registro
const signUpForm = document.querySelector("#formularioSignUp");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = signUpForm["signupEmail"].value;
    const password = signUpForm["signupPassword"].value;
    const password2 = signUpForm["signupPassword2"].value;

    if (password.length < 6) {
        document.getElementById("errorCommandPC").style.display = "block";
    } else {
        document.getElementById("errorCommandPC").style.display = "none";
        if (password == password2){
            auth
            .createUserWithEmailAndPassword(usuario, password)
            .then((userCredential) => {

                document.getElementById("errorCommandPE").style.display = "none";
                console.log("Registro correcto.");
                location.href = "./index.html";
        
                signUpForm.reset();
        
                $("#signup").modal("hide");
            }).catch(error =>  {
                //alert("El usuario o la contraseña no son válidos.")
                document.getElementById("errorCommandPE").style.display = "block";
            })
        }
        else{
            //alert("Las contraseñas no coinciden.")
            document.getElementById("errorCommandPS").style.display = "block";
        }
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

            console.log("Log In correcto.");
            location.href = "./index.html";
    
            logInForm.reset();
    
            $("#signin").modal("hide");
        })
        .catch(error =>  {
            document.getElementById("errorCommand").style.display = "block";
            //alert("El usuario o la contraseña no son válidos. Introduzca unas credenciales válidas")
        })
            
            
})


function mostrarOpciones() {
    document.getElementById("lol").style.display = "block";
}


// Función Insertar datos en bbdd 
function insertar() {
    const email = firebase.auth().currentUser.email.toString()
    var usuario = []
    for (var i = 0; i< email.length; i++){
      if (email[i] != "@"){
        if (email[i] != "." && email[i] != "_" && email[i] != "-"){
          usuario.push(email[i])
        }
      }
      else{
        break
      }
    }
    usuario = usuario.join("")
    var myDatabase = firebase.database();
    var referencia = myDatabase.ref(usuario);
    referencia.set({
      Nombre: document.getElementById("nombre-evento").value.toString(),
      Tipo: document.getElementById("tipo-de-evento").value.toString(),
      Fecha: document.getElementById("fecha").value.toString()
    })
}
