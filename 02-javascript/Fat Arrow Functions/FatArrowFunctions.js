/**
 * Created by USRDEL on 9/5/17.
 */
var holaMundo = function (){

    console.log("Hola mundo")
}
holaMundo ()



var holaMundo2 = ()=>{
    return "hola mundo"}
holaMundo2 ()

var holaMundo3 =()=> "Hola mundo 3"
holaMundo3 ()
var holaMundo4 = ()=> holaMundo2()//devuelve

holaMundo4()

var holaMundo5 = (nombre, apellido)=> `hola ${nombre} apellido ${apellido}`// se pone las comas invertidas porq el texxto no es tan grande

holaMundo5('Danny','RAMOS')

var holaMundo6 = apellido=> `hola ${apellido}`// para caundo solo hay una parametro

holaMundo6('Ramos')



//REPASO

//sin function

var holamundo = ()=>{
    return 'holamundo';}

holamundo()

// sin return
var holaMundo2 = ()=> "holaMundo2"

holaMundo2()

// devuelve lo q la funcion asignada
var holaMundo3 = ()=> holamundo();
holaMundo3()


// para parametros

var holaMundo4 = (nombre,apellido )=>`hola ${nombre} y de apellido ${apellido}`;

holaMundo4('danny','ramos');

// para un solo parametro
var holaMundo5 = apellido => `hola ${apellido}`;

holaMundo5('Ramos');