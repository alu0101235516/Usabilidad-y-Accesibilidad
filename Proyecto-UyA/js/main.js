// Registro
const signUpForm = document.querySelector("#formularioSignUp");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = signUpForm["signupEmail"].value;
    const password = signUpForm["signupPassword"].value;
    const password2 = signUpForm["signupPassword2"].value;

    if (usuario.includes("@ull.edu.es") && usuario.includes("alu")){
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
                    location.href = "./principal.html";
            
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
    }
    else{
        document.getElementById("errorCommandULL").style.display = "block";
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
            location.href = "./principal.html";
    
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
        console.log(document.getElementById("nombre-evento").value.toString())
        console.log(document.getElementById("tipo-de-evento").value.toString())
        console.log(document.getElementById("fecha").value.toString())
        referencia.set({
            Nombre: document.getElementById("nombre-evento").value.toString(),
            Tipo: document.getElementById("tipo-de-evento").value.toString(),
            Fecha: document.getElementById("fecha").value.toString()
        })
    }
}


// Función mostrar datos
var datosEventos = new Array()

function getDatos(){
    document.getElementById("botonMostrar").style.display = "none";
    const email = firebase.auth().currentUser.email.toString()
    const usuario = obtenerUsuario(email)
    var informacion = $("#informacion")
    const dbRef = firebase.database().ref(usuario);


    dbRef.once('value', (snapshot) => {
        if(snapshot.val() == null) {
            console.log("Referral Code does not exist.");
            informacion.append(
                '<div class="card purple darken-2">'
                +   '<div class="card-content white-text">'
                +       '<h5> No hay eventos que mostrar </h5>'           
                +   '</div>'
                +'</div>'
            )
        }
    });

    dbRef.on('value', function(snapshot) {
        var i = 0
        var eventos = new Array()
        snapshot.forEach(function(childSnapshot) {
            if (childSnapshot.val().Nombre != undefined){

                var evento = {
                    Nombre: childSnapshot.val().Nombre,
                    Tipo: childSnapshot.val().Tipo,
                    Fecha: childSnapshot.val().Fecha
                }

                console.log(evento)

                eventos.push(evento)

                informacion.append(
                    '<div class="card purple darken-2">'
                    +           '<div class="card-content white-text">'
                    +               `<span class="card-title"><b> ${childSnapshot.val().Nombre} </b></span>`
                    +               `<p><b> ${childSnapshot.val().Tipo}</b> <br> <b> ${childSnapshot.val().Fecha}</b></p><br><br>`
                    +               '<div>'
                    +                   `<a class="grey lighten-5 btn-large purple-text text-darken-2" id="eliminarEvento${i}" onclick="removeDatos(${i})"> Eliminar evento </a>`
                    +               '</div>'
                    +           '</div>'
                    +'</div>'
                )

                i += 1
            }
        });
        
        datosEventos = eventos
    });
}


function removeDatos(elemento){

    const email = firebase.auth().currentUser.email.toString()
    const usuario = obtenerUsuario(email)
    const myDatabase = firebase.database();

    for(var i = 0; i<datosEventos.length; i++){

        if (i == elemento){
            console.log(datosEventos[i].Nombre)
            const referencia = myDatabase.ref(usuario+"/"+datosEventos[i].Nombre);
            referencia.remove()
            break
        }
    }

    location.reload();

}