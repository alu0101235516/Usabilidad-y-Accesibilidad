# USO DEL NAVEGADOR PARA EL DESARROLLO WEB

* Vamos a analizar utilizando los navegadores Chrome y Firefox información de la siguiente página web:

	* ***https://www3.gobiernodecanarias.org/citasalud/***

## NAVEGADOR: Chrome

![Peticiones Google Chrome][peticionesChrome]


* **¿Qué peticiones desencadena la consulta?**

	* Desencadena 22 peticiones, que son: 1 documento HTML, 3 de script, 4 de hojas de estilos CSS, 13 fotos (png y jpge) y 1 favicon.
	
	
* **¿Qué tipo de petición estás realizando?**

	* Se realizan peticiones HTTP de tipo GET, porque la página no necesita de ninguna información que provea el usuario.
	
	
* **¿Qué código de estatus devuelve?**

	* Todas las peticiones devuelven el código 200 --> OK.
	 
	
* **¿Qué DNS tiene el servidor?**

	* El DNS del servidor es: www3.gobiernodecanarias.org
	
* **¿Qué IP tiene tiene el servidor?**

	* El servidor tiene la IP: 93.188.137.126
	
* **¿La página tiene alguna cookie? ¿Cuáles?**

	* Si, tiene 2:
	
	![Cookies Google Chrome][cookies]
	
	
* **¿Qué idioma acepta?**

	* Acepta 3 idiomas, Español, Inglés y Alemán:
	
	![Idiomas Google Chrome][idiomas]
	
	
* **Alguna línea de código JavaScript.**

	![Lineas JavaScript Google Chrome][lineasJS]
	
	
* **Alguna línea de código CSS que se aplique.**

	![Lineas CSS Google Chrome][lineasCSS]
	
	
* **Alguna línea de código HTML que se aplique.**

	![Lineas HTML Google Chrome][lineasHTML]


## NAVEGADOR: Firefox

![Peticiones Firefox][peticionesFirefox]


* **¿Qué peticiones desencadena la consulta?**

	* Desencadena 18 peticiones, que son: 1 documento HTML, 3 de script, 13 fotos (png y jpge) y 1 favicon. Por otro lado, el navegador Firefox en el que desarrollamos la práctica no recibe las peticiones de hoja de estilos CSS, sin embargo, en la sección de Style Editor si podemos ver el CSS que se utiliza.
		
* **¿Qué tipo de petición estás realizando?**
	
	* Se realizan peticiones HTTP de tipo GET, porque la página no necesita de ninguna información que provea el usuario.	
	
* **¿Qué código de estatus devuelve?**
 	
	* Los códigos de las peticiones devuelven el código 200 --> OK y el código 304 --> No modificado.
		
* **¿Qué DNS tiene el servidor?**

		
	* El DNS del servidor es: www3.gobiernodecanarias.org
		
* **¿Qué IP tiene tiene el servidor?**

		
	* El servidor tiene la IP: 93.188.136.126
		
* **¿La página tiene alguna cookie? ¿Cuáles?**

	* Si, tiene 1:
	
	![Cookies Firefox][cookiesFirefox]
		
* **¿Qué idioma acepta?**

	* En este caso, el ordenador lo tengo configurado en ingles: en-US,en;q=0.5

* **Alguna línea de código JavaScript.**

	![Lineas JS Firefox][lineasJSFirefox]
		
* **Alguna línea de código CSS que se aplique.**

	![Lineas CSS Firefox][lineasCSSFirefox]
		
* **Alguna línea de código HTML que se aplique.**

	![Lineas HTML Firefox][lineasHTMLFirefox]


[peticionesChrome]: images/peticionesChrome.jpg "Peticiones Google Chrome"
[cookies]: images/cookiesChrome.JPG "Cookies Google Chrome"
[idiomas]: images/idiomasChrome.jpg "Idiomas Google Chrome"
[lineasJS]: images/lineasJSChrome.jpg "Lineas JavaScript Google Chrome"
[lineasCSS]: images/lineasCSSChrome.jpg "Lineas CSS Google Chrome"
[lineasHTML]: images/lineasHTMLChrome.jpg "Lineas HTML Google Chrome"
[peticionesFirefox]: images/peticionesFirefox.JPG "Peticiones Firefox"
[cookiesFirefox]: images/cookiesFirefox.JPG "Cookies Firefox"
[lineasJSFirefox]: images/lineasJSFirefox.JPG "Lineas JavaScript Firefox"
[lineasCSSFirefox]: images/lineasCSSFirefox.JPG "Lineas CSS Firefox"
[lineasHTMLFirefox]: images/lineasHTMLFirefox.JPG "Lineas HTML Firefox"
