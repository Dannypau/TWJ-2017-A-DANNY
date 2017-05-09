/**
 * Created by USRDEL on 9/5/17.
 */
var conHambre = null;

if (conHambre){
    console.log("como");
}else{
    console.log("Trabajar");
}

var fecha =new Date().getDay();

switch (fecha) {
    case 0:
        console.log("Domingo");
    case 1:
        console.log("Lunes");
    case 2:
        console.log("Martes");

}
