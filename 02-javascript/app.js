/**
 * Created by Daniela Ramos on 06/05/2017.
 */

/*
 comentarios de varias lineas
 */

// Comentarios una sola linea

console.log('Hello Kitty');

var Danny;
Danny = {
    nombre: 'Daniela',
    apellido: 'Ramos',
    fechaNacimiento : new Date(),
    imprimir: function () {
        console.log(this.nombre, this.apellido);// accede a los atribitos del objeto

    },
    obtnerAnio:function () {
        return (this.fechaNacimiento.getFullYear());
    },
    diferenciaEdad:function (edadAComparar) {
        var diferencia = this.fechaNacimiento.getFullYear()-edadAComparar;
        if(diferencia<0){
            return Math.abs(diferencia);
        }else{
            return diferencia;
        }


    }

};
Danny.imprimir();
console.log(Danny.obtnerAnio());
console.log(Danny.diferenciaEdad(23));



//repaso

var Danny = {
    id:1,
    nombre:'Danny',
    apellido:'Ramos',
    fechaNacimiento: new Date(),
    diferenciaEdad : function(edadComparar){
        return (Math.abs(this.fechaNacimiento.getFullYear() - edadComparar))}
}

Danny.diferenciaEdad(2030)
Danny.fechaNacimiento.getFullYear()