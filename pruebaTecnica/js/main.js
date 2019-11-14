// comentario de linea

/* commentario
    de 
    bloque
*/

/**
 * comentario de bloque para documentar
 */

//alert('Esto funciona');

var a = 2;

console.trace('Esto es una traza de log');
console.info('para informar sobre cosas');
console.debug('la variable a=' + a);
//console.warn('houston tenemos un problema');
//console.error('Error en la conexion al servidor rest');

function buscarVoluntario() {

    console.trace('click buscarVoluntario');
    var elemento = document.getElementById('nombre');

    var alumnos = [{
            "nombre": "Aitor"
        },
        {
            "nombre": "Endika"
        },
        {
            "nombre": "Iñigo"
        },
        {
            "nombre": "Juan Carlos"
        },
        {
            "nombre": "Alejandro"
        },
        {
            "nombre": "Cristian"
        },
        {
            "nombre": "Raul"
        },
        {
            "nombre": "Joseba"
        },
        {
            "nombre": "Iker"
        },
        {
            "nombre": "Kiryl"
        },
        {
            "nombre": "María"
        },
        {
            "nombre": "Ana"
        },
        {
            "nombre": "Erlantz"
        },
        {
            "nombre": "Mikel"
        }
    ];
    var numAleatorio = Math.floor(Math.random() * alumnos.length);

    elemento.style.color = 'teal';
    var voluntario = alumnos[numAleatorio];
    elemento.innerHTML = `<span>
                            ${voluntario.nombre}
                          </span>
                        `;



}

function cambiarColor() {

    console.trace('click cambiarColor');
    var elemento = document.getElementById('colorCambiar');

    var colores = [{
            "nombre": "rojo",
            "valor": "red"
        },
        {
            "nombre": "naranja",
            "valor": "orange"
        },
        {
            "nombre": "morado",
            "valor": "purple"
        }
    ];
    var numAleatorio = Math.floor(Math.random() * colores.length);

    var color = colores[numAleatorio];
    elemento.style.color = color.valor;



}