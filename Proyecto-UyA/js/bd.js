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
  
	document.getElementById("mostrado-final").style.display = "block";
	document.getElementById("place").style.display = "none";
  
	salidaNombre = nombre;
	document.getElementById("nombreF").innerHTML = salidaNombre;
	salidaTipo = tipo;
	document.getElementById("tipoF").innerHTML = salidaTipo;
	salidaFecha = fecha;
	document.getElementById("fechaF").innerHTML = salidaFecha;
}
  
  function redirect() {
	location.href = "./principal.html"
  }
  
  function change() {

	var nombre;
	var tipo;
	var fecha;
  
	nombre = document.getElementById("nombre-evento").value;
	tipo = document.getElementById("tipo-de-evento").value;
	fecha = document.getElementById("fecha").value;
  
	var salidaNombre;
	var salidaTipo;
	var salidaFecha;
  
	document.getElementById("mostrado-final").style.display = "block";
	document.getElementById("place").style.display = "none";
  
	salidaNombre = nombre;
	document.getElementById("nombreF").innerHTML = salidaNombre;
	salidaTipo = tipo;
	document.getElementById("tipoF").innerHTML = salidaTipo;
	salidaFecha = fecha;
	document.getElementById("fechaF").innerHTML = salidaFecha;

	document.getElementById("datos").style.display = "block";
	document.getElementById("datos").style.margin = "auto";
	document.getElementById("boton-datos").style.width = "30%";
	document.getElementById("boton-datos").style.marginLeft = "35%";
	document.getElementById("datos").style.width = "70%";
	document.getElementById("mostrado-final").style.display = "block";
	document.getElementById("place").style.display = "none";
	document.getElementById("registro").style.display = "none";
  }