/**
 * Created by Daniela Ramos on 06/05/2017.
 */


function holaMundo() {
console.log('holi');
}
holaMundo();

function hazAlgo(algo){
    algo()
}





var a =(function  a() {
    return 2;

})
console.log(a);


function tranformarNumero(numero) {
    return numero*2;


}

 var b = tranformarNumero(5);
console.log(b)

function division( numero) {
    return tranformarNumero(numero)*numero;

}
var c = division(10);

console.log(c)