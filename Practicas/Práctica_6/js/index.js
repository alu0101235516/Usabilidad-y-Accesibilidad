function getInformacion() {

  parametro = document.getElementById("parametro").value;
  stringUrl = 'https://jsonplaceholder.typicode.com/comments?postId=' + parseInt(parametro);

  $.ajax({
    url: stringUrl,
    async: true,
    success: function(respuesta) {
      var informacion = $("#informacion")
      $.each(respuesta, function(index, elemento) {
        informacion.append(
            '<div>'
          +     '<p>' + '<b>PostId: </b>' + elemento.postId + ' ' + '<b> id: </b>' + elemento.id + ' ' + '<b> name: </b>' + elemento.name + ' '+ '<b> email: </b>' + elemento.email + ' ' + '<b> body: </b>' + elemento.body + '</p>'
          + '</div>'
        );
      });
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}


function insertar() {
  var myDatabase = firebase.database();
  var referencia = myDatabase.ref(document.getElementById("nombreA").value);
  referencia.set({
    nombre: document.getElementById("nombreA").value,
    apellido: document.getElementById("papellidoA").value,
    parametro: document.getElementById("parametroA").value
  })
}


function verContenido() {
  var myDatabase = firebase.database();
  var referencia = myDatabase.ref("/");
  var datos = $("#datos")
  referencia.once('value', snapshot => {
    console.log(snapshot.val());
  })
}


function actualizar() {
  var myDatabase = firebase.database();
  var referencia = myDatabase.ref(document.getElementById("nombreA").value);
  referencia.set({
    nombre: document.getElementById("nombreA").value,
    apellido: document.getElementById("papellidoA").value,
    parametro: document.getElementById("parametroA").value
  })
}