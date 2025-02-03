import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let signos = ["♦", "♥", "♠", "♣"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};



function generateCard(){

  let valor = values[Math.floor(Math.random() * values.length)];	
  let signo = signos[Math.floor(Math.random() * signos.length)];

  
}


// //genera un numero random entre 2 y 10
// function numeroAleatorio() {
//   return Math.floor(Math.random() * (10 - 2 + 1)) + 2;
// }
