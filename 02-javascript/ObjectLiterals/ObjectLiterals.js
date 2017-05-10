/**
 * Created by USRDEL on 10/5/17.
 */
//object literals
function definirObjetoUsuario(nombre){
    return {
        nombre:nombre,
        saludar:function(){
            return "Hola"+this.nombre;
        },
        twitteo:function(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}

//quiero q se cree ek objto con ese parametro como elemento
function definirObjetoUsuarioObjectLiterals(nombre){
    return {
        nombre,
        saludar(){
            return "Hola"+this.nombre;
        },
        twitteo(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}
var nuevaFuncion =(nombre,apellido) =>{
    var usuario = {

        nombre:nombre };
    console.log(usuario.nombre+usuario.apellido);

    var usuario2 = {
        nombre
    };
    console.log (usuario2.nombre);
}

nuevaFuncion('hola','danny')



//for each
// operadores
let arregloNumeros = [1,2,3,4,5,6,7];



let resultado = arregloNumeros.forEach((numero,indice)=>{
        console.log(indice,numero)}
)

console.log('resultado:', resultado)



// map

//transformar el arreglo

let arreglo = [1,2,3,"jjj"];

let resultado = arreglo.map((valor,indice)=>{
        return indice/5;
}
);

console.log(resultado);

let arregloN= [
    {
        nombre:'Daniela',

    },{
        nombre:'Maria',

    }

];


arregloN.map((arregloN)=>{
    return arregloN.nombre ='srA';})

console.log(arregloN);

let nuevoArreglo = arregloN.map ((usuario)=>{
    usuario.nombre = "Sr.Sra"+ usuario.nombre
usuario.fechaCreacion = new Date();
usuario.anio = usuario.fechaCreacion.getFullDay()

})

console.log(nuevoArreglo)




