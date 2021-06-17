//EJ8

const container = document.querySelector('.js__container');

let numeros="";

for (let index = 0; index < 25; index++) {
 numeros += "" + index + " ";	
}
console.log(numeros)
container.innerHTML='<p>'+numeros+'</p>';