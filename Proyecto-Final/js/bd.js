function añadir() {
  var nombre;
  var tipo;
  var fecha;

  nombre = document.getElementById("nombre-evento").value;
  tipo = document.getElementById("tipo-de-evento").value;
  fecha = document.getElementById("fecha").value;

  var salidaNombre;
  var salidaTipo;
  var salidaFecha;

  salidaNombre = nombre;
  document.getElementById("nombreF").innerHTML = salidaNombre;
  salidaTipo = tipo;
  document.getElementById("tipoF").innerHTML = salidaTipo;
  salidaFecha = fecha;
  document.getElementById("fechaF").innerHTML = salidaFecha;

  console.log(nombre);
  console.log(tipo);
  console.log(fecha);
}