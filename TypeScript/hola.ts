/**
 * Created by Daniela Ramos on 16/05/2017.
 */

/**console.log('hola');

let holaMundo = `holaaa
mundo cruel`;
console.log(holaMundo);


let soltero : boolean = false;

let decimal : number= 0.2; // decimales,negativos, flottantes

let frase : string = "hol'a";

let otraFrase : string = "Si estoy soltero "+ decimal+1+"digo " +frase;

//array

let notas : number[]=[1,2,3];
let jaladas : Array<number> = [1,2,3];


//variable tipo js

let nombre:any = 'hola';

let nombre = 1;



// definir un tipo de variable
// estas cosas se interpretan en el ide



interface UsuarioLogin {
    nombre: string,
    apellido : string,
    direccion? : string
}


let Usuario :UsuarioLogin ={
    nombre: "jkkhjk",// no esta bien
    apellido:  "kjkljkl"

}
//por defecto variables publicas

 class persona{
    nombre: string;
    private apellido : string = "Ramos";
    fechaNacimiento : Date;


    constructor (nombre:string,apellido:string,fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }


}
**/
// automaticamente

/** class persona1{
    nombre:string;
    apellido : string = "Ramos";
    fechaNacimiento : Date;
    // ? parametro adicional
    constructor(nombre?:string,apellido?:string,fechaNacimiento?:Date){

    }

    imprimirPersona(){
        console.log(this.nombre,this.apellido,this.fechaNacimiento);
    }
}

let Danny : persona1 = new persona1();

//Danny.fechaNacimiento = new Date;
console.log(Danny.imprimirPersona());
**/

function sumar (numero1:number,numero2:number):number{
    return numero1+numero2;
};

let objeto = {
    nombre:"Daniela",
    imprimirNOmbre :function () {
        console.log(this.nombre)
    }
}


objeto.imprimirNOmbre();