
/* Función buscar nombre en la posicion de una cadena (MIS PRUEBAS DE DISEÑO DE LA FUNCION llamada desde html)
function buscanombre (texto, nombre, elemento) {
	let nombres = texto.split(/\n/);
	return (nombres[elemento]==nombre)?"es correcto":"no es correcto";
}; 
console.log(buscanombre("hola\nmundo\nantonio","antonio",2));
*/


/* Función buscar nombre en la posicion de una cadena */
var buscanombre = function buscanombre (texto, nombre, elemento) {
	let nombres = texto.split(/\n/);
	return (nombres[elemento]==nombre)?"es correcto":"no es correcto";
}; 

/* Exportación de funciones */
module.exports = {
	buscanombre
}