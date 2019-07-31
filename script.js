var palabra = document.getElementById("No1");
var historial = document.getElementById("historial");
var tipo = document.getElementById("tipo1");

var error1 = "ERROR(SIMBOLO)";
var error2 = "ERROR(INICIO NUMERO)";
var numero1 = "ERROR(DECIMAL)";
var numero2 = "NUMERO";
var identificador1 = "IDENTIFICADOR";
var numero3 = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function funcion() {
    cargar1();
    console.log('Taking a break...');
    await sleep(1000);
    reconocedor();
    quitarImagen();
    numero3=0;
} 
function cargar1(){
    document.getElementById("icono").src ="cargando1.gif";
}
function quitarImagen(){
    if (numero3!=1){
        document.getElementById("icono").src ="check1.png";
    } else {
        document.getElementById("icono").src ="no1.png";
    }
    
}
function reconocedor(){
    var temporal =  false;
    if(palabra.value>0 || palabra.value<0 || palabra.value==0){
        if (palabra.value % 1 == 0){
            historial.innerHTML = historial.innerHTML + palabra.value.fontcolor("blue")  + "<br>";
            tipo.innerHTML = tipo.innerHTML + numero2.fontcolor("blue") + "<br>";
        } else {
            historial.innerHTML = historial.innerHTML + palabra.value.fontcolor("red")  + "<br>";
            tipo.innerHTML = tipo.innerHTML + numero1.fontcolor("red")+ "<br>";
        }
    } else {
        var abc = "abcdefghijklmnopqrstuvwxyz1234567890";
        var pb = palabra.value;
        var correcto = 0;
        for (var u = 0; u < pb.length; u++){
            for (var i = 0; i < abc.length; i++){
                if (abc.charAt(i)==pb.charAt(u)){
                    correcto+=1;
                }
            }
        }
        if (correcto!=pb.length){
            temporal = true;
        }
        if (temporal==false){
            if (pb.charAt(0)>=0){
                alert("ERROR POR EMPEZAR CON NUMEROS");
                historial.innerHTML = historial.innerHTML + palabra.value.fontcolor("red") + "<br>";
                tipo.innerHTML = tipo.innerHTML + error2.fontcolor("red") + "<br>";
                numero3=1;
            }else{
                historial.innerHTML = historial.innerHTML + palabra.value.fontcolor("green") + "<br>";
                tipo.innerHTML = tipo.innerHTML + identificador1.fontcolor("green") + "<br>";
            }
        } else {
            historial.innerHTML = historial.innerHTML + palabra.value.fontcolor("red") + "<br>";
            tipo.innerHTML = tipo.innerHTML + error1.fontcolor("red") + "<br>";
            numero3=1;
        }
    }
}