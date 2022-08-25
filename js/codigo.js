
  function eleccion (jugada){
     let resultado =""
     if ( jugada == 1 ) {
         resultado = "PIEDRA"
     } else if ( jugada == 2){
         resultado= "PAPEL"
     } else if(jugada == 3){
         resultado= "Tijeras"
     } else{
         resultado = "llamen a la Policia!"
     }
     return resultado
 }
// declaremos una funcion
// function Getrandom(min,max){
//    return Math.floor(Math.random()*(max - min + 1 ) + min)
// }
//1 es piedra, 2 es papel, 3 es tijera 
// let jugador = 0
// let PC = Getrandom(1,3)
let triunfos = 0, perdidas = 0
while (triunfos < 3 && perdidas <3){
 let PC = Math.floor(Math.random()*(3 - 1 + 1 ) + 1) 
 let jugador = prompt("elige: 1 para piedra, 2 para papel o 3 para tijera")
     alert(" PC elige: " + eleccion(PC))
     alert(" Jugador elige: " + eleccion(jugador))
 if(jugador == PC) {
         alert("EMPATE!")
     }else if (( jugador == 1 && PC ==3) || (jugador == 3 && PC == 2 ) || (jugador==2 && PC==1)){
         alert("GANASTE!")
        triunfos++
         //  utilizo un || ahorrar una linea de codigo ya que en ambos casos ganas
     } else{
         alert ("PERDISTE! :(")
         perdidas++
     }

}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas +" veces." )

// elimino la funcion getrandom para ahorrar memoria
// quitamos el let jugador = 0

// LETS GET READY TO RUMBLEEEEE!!!
