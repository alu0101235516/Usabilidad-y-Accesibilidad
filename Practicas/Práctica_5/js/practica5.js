$(document).ready(function() {
  $("#texto_escrito").keyup(function() {
    var texto = $("#texto_escrito").val();
    $("#texto_copiado").text(texto);
  });
}); 

$(document).ready(function() {
  $("#cant_parrafos").text('Parrafos totales: ' + $("p").length);
  $("#cant_enlaces").text('Enlaces totales: ' + $("a").length);
  $("#cant_div").text('Divs totales: ' + $("div").length);

});