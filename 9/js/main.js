//EJ9

const container = document.querySelector('.js__container');
const btn = document.querySelector('.js__button')


function insertaNumeros(){
	let numeros="";
	for (let index = 1; index < 4; index++) {
		numeros += index + " ";
			
	}

	console.log(numeros);
	container.innerHTML='<p>'+numeros+'</p>';
}


btn.addEventListener('click', insertaNumeros);