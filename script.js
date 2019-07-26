var palabra = document.getElementById("No1");
var historial = document.getElementById("historial");
var tipo = document.getElementById("tipo1");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function funcion() {
    console.log('Taking a break...');
    await sleep(1000);
    reconocedor();
    console.log('Two seconds later, showing sleep in a loop...');
} 
function reconocedor(){
    var temporal =  false;
    if(palabra.value>0 || palabra.value<0 || palabra.value==0){
        if (palabra.value % 1 == 0){
            historial.innerHTML = historial.innerHTML + palabra.value + "<br>";
            tipo.innerHTML = tipo.innerHTML + "NUMERO" + "<br>";
        } else {
            historial.innerHTML = historial.innerHTML + palabra.value + "<br>";
            tipo.innerHTML = tipo.innerHTML + "ERROR" + "<br>";
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
                alert("es un error");
                historial.innerHTML = historial.innerHTML + palabra.value + "<br>";
                tipo.innerHTML = tipo.innerHTML + "ERROR" + "<br>";
            }else{
                alert("es un identificador");
                historial.innerHTML = historial.innerHTML + palabra.value + "<br>";
                tipo.innerHTML = tipo.innerHTML + "IDENTIFICADOR" + "<br>";
            }
        } else {
            alert("es un error");
            historial.innerHTML = historial.innerHTML + palabra.value + "<br>";
            tipo.innerHTML = tipo.innerHTML + "ERROR (SIMBOLO)" + "<br>";
        }
    }
}