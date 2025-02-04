import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Variables para los signos y valores de las cartas
let signos = ["♦", "♥", "♠", "♣"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K"];

let interval;
let timer;
let count = 10;

window.onload = function() {
  generateCard();
  countDown(10);
};

//Valor por defecto cuando empieza
let botonPlay = document.getElementById("play");
botonPlay.disabled = true;

//Al presionar el boton pausa
let botonPause = document.getElementById("pause");
botonPause.addEventListener("click", function(){

  this.disabled = true;
  botonPlay.disabled = false;
  clearInterval(interval);
  
});

//Cuando hace tab en el boton play
botonPlay.addEventListener("click", function(){

  this.disabled = true;
  botonPause.disabled = false;
  countDown(count);
});

//Para actualizar la carta cada vez que se toca el boton
let boton = document.getElementById("button");
boton.addEventListener("click", function(){
  generateCard();
});


//Funcion contador para generar una carta en el tiempo establecido
function countDown(value){
 
  let divTimer = document.getElementsByClassName("timer-div");
  
  if(!timer){
    timer = document.createElement("p");
    timer.className = "timer";
    divTimer[0].appendChild(timer);
  }

  count = value; 

  interval = setInterval(function(){
    timer.innerHTML = count;
    count--;

    //cuando el contador llega a cero
    if(count < 0){
      //Para la ejecucion de la funcion setInterval
      clearInterval(interval);

      //Limpia la carta
      clearCard();

      //Genera una nueva carta
      generateCard();
    
      //llama de nuevo a ;a funcion
      countDown(10);
    }
  }, 1000);
}


function generateCard(){

  clearCard();

  let valor = values[Math.floor(Math.random() * values.length)];	
  let signo = signos[Math.floor(Math.random() * signos.length)];

  //Para crear el signo de la parte de arriba de la carta
  let top = document.getElementsByClassName("top");
  let signoCarta = document.createElement("p");
  signoCarta.innerHTML = signo;
  top[0].appendChild(signoCarta);
  
  if(signo == "♦" || signo == "♥"){
    signoCarta.className = "card-sign-red";
  }
  else{
    signoCarta.className = "card-sign-black";
  }

  //Numero del medio de la carta
  let middle = document.getElementsByClassName("middle");
  let valorCarta = document.createElement("p");
  valorCarta.innerHTML = valor;
  middle[0].appendChild(valorCarta);
  valorCarta.className = "card-number";

  //Para crear el signo de la parte de abajo de la carta
  let bottom = document.getElementsByClassName("bottom-sign");
  let signoCartaBottom = document.createElement("p");
  signoCartaBottom = signoCarta.cloneNode(true);
  bottom[0].appendChild(signoCartaBottom);
}


//Esta funcion se encarga de limpiar la carta cuando se refresca por el boton.
function clearCard(){

  //captura los elementos de la carta
  let top = document.getElementsByClassName("top");
  let middle = document.getElementsByClassName("middle");
  let bottom = document.getElementsByClassName("bottom-sign");

//elimina los hijos de los elementos de la carta
  top[0].replaceChildren();
  middle[0].replaceChildren();
  bottom[0].replaceChildren();
  }
