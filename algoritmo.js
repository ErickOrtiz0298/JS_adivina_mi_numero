//Arreglo de 100 numeros
const arregloNumeros = [];
for(let i=1; i < 101; i++)
{
    arregloNumeros.push(i);
}

//Algoritmo Binario Inicio
let min = 0;
let max = 99;
let guess;
guess = Math.floor((max+min)/ 2);
document.getElementById("numero").value = `${arregloNumeros[guess]}`;

    //Respuesta DOM
function comprobarRespuesta(comprobacion,array = arregloNumeros){
    if(comprobacion == 'igual'){
        return alert(`Tu numero es el ${arregloNumeros[guess]}, excelente decision`);
    }else if(comprobacion == 'mayor'){
        min = guess + 1;
    }else{
        max = guess - 1;
    }   
    
    if(max < min){
        return alert("Tu numero no esta en el rango");
    } else {
        guess = Math.floor((max+min)/ 2);
    }
    document.getElementById("numero").value = `${arregloNumeros[guess]}`;
}
//Algoritmo Binario Fin


//----------------------Reiniciar juego
function recargarPagina(){
    window.location.reload();
}




//----------------Solucion con ventanas emergentes

//Mensaje inicial
function iniciar(){
    const inicio = confirm("Porfavor piense en un numero entre el 1 y el 100");
    return inicio;
}

//Respuesta del usuario consola
function respuestaUsuario(){
    const respuesta = prompt("Escribe si tu numero es igual, mayor o menor");
    return respuesta;
}


//Funcion con ventanas emergentes
let doSearch = function(array) {
	let min = 0;
	let max = array.length - 1;
    let guess;
    let respuesta;

    iniciar();
   
    do{
        guess = Math.floor((max+min)/ 2);
        confirm(`¿Tu numero es? ${array[guess]}`);

        respuesta = respuestaUsuario();

        if(respuesta == "igual"){ 
            return confirm(`Tu numero es el ${array[guess]}, excelente decision` );
        }
        else if(respuesta == "mayor"){
            min = guess + 1;
        }
        else{ 
            max = guess - 1;
        }
        console.log(min,max);
        if(max < min){
            confirm("Tu numero no esta en el rango");
            return respuesta == "igual";
        }
    } while(respuesta != "igual"); 

};

doSearch(arregloNumeros);

