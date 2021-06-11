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
                document.getElementById("errorCommandPE").style.display = "block";
            })
        }
        else{
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
        })
            
            
})


function mostrarOpciones() {
    if ( document.getElementById("lol").style.display == "block"){
        document.getElementById("lol").style.display = "none";
    }
    else{
        document.getElementById("lol").style.display = "block";
    }
}


function obtenerUsuario(email){

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

    return usuario.join("")
}


// Función Insertar datos en bbdd 
function setDatos() {
    if (document.getElementById("nombre-evento").value.toString() != ""){
        const email = firebase.auth().currentUser.email.toString()
        const usuario = obtenerUsuario(email)
        const myDatabase = firebase.database();
        const referencia = myDatabase.ref(usuario+"/"+document.getElementById("nombre-evento").value.toString());
        referencia.set({
            Nombre: document.getElementById("nombre-evento").value.toString(),
            Tipo: document.getElementById("tipo-de-evento").value.toString(),
            Fecha: document.getElementById("fecha").value.toString()
        })
    }
    else{
        // Mensaje de alerta... No hay nombre de alerta
    }
}


// Función mostrar datos
function getDatos(){
    const email = firebase.auth().currentUser.email.toString()
    const usuario = obtenerUsuario(email)
    var informacion = $("#informacion")
    informacion.append(
        '<div>'
        + '</div>'
    )
    const dbRef = firebase.database().ref(usuario);
    dbRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            if (childSnapshot.val().Nombre != undefined){
                informacion.append(
                    '<div>'
                    +  `<p> <b> El nombre del evento es: </b> ${childSnapshot.val().Nombre} <b> El tipo del evento es: </b>  ${childSnapshot.val().Tipo} <b> La fecha del evento es: </b>  ${childSnapshot.val().Fecha}</p>`
                    + '</div>'
                )
            }
        });
    });
}
