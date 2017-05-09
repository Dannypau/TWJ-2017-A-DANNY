/**
 * Created by Daniela Ramos on 06/05/2017.
 */
// variables.js

// En JavaScript se define
// una variable con la
// palabra reservada
// <var>

// ENTEROS
var dos = 2;
var tres = 3;
var quince = 15;
var diezYSiete = 17;

console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);







var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -5432;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;

console.log(cuatroString);

var variable;

console.log(variable);




var adrian = {
    id:1,
    nombre:'Adrian',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado:true,
    prestamos:false,
    hijos:null,
    altura:1.78,
    negativo:-1,
    mascota:{
        nombre:'Cachetes',
        fechaNacimiento:new Date()
    }
};
console.log('OBJETO:',adrian)
console.log('fecha de nacimiento de mi mascota',adrian.mascota.fechaNacimiento)


var arreglo  =[
    1,
    'hola',
    false,
    undefined,
    null,
     {
        a: 'b'
    }
]
console.log('arreglo',arreglo[5].a)

var alimentos = {
    platanos : [1,2,3],
        cebolla :['hola','adios']


}
console.log('objeto alimentos', alimentos.platanos[1])

var matriz =
    [[2,3],
[4,5]
    ]
console.log(matriz[0][1])


var arrregloDeObjetos = [
    {
        id:1,
        nombre:'Adrian'
    },
    {
        id:2,
        nombre:'Felipe'
    }
];

// splice(
// 'Delimita la posisicion en la que vamos a trabajar',
// 'Numero Objetos a eliminarse')

console.log('Antes:',arrregloDeObjetos)
arrregloDeObjetos.splice(0,1)
console.log('Despues:',arrregloDeObjetos)

arrregloDeObjetos.splice(0,0,{id:3,nombre:'Carmen'})
console.log('Despues2:',arrregloDeObjetos)

arrregloDeObjetos.splice(0,0,{id:4,nombre:'lolo'})
console.log('Despues2:',arrregloDeObjetos)


var hola = function () {
    console.log('hola')

}



var resultado = hola();
console.log(resultado);