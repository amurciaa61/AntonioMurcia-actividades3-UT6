// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var func = require('../funciones.js');

// Test
it('comprobar función buscanombre', function() {
	assert.equal(func.buscanombre("hola\nmundo\nantonio","antonio",2), "es correcto");
	assert.equal(func.buscanombre("hola\nmundo\nantonio","pedro",2), "no es correcto");
});
