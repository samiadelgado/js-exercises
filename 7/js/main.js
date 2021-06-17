//EJ1
//pintar por etiqueta
const etiqueta = document.querySelector('span').innerHTML;
console.log(etiqueta);

//pintar por clase
const clase = document.querySelector('.whale').innerHTML;
console.log(clase);

//pintar por id
const id = document.querySelector('#whale').innerHTML;
console.log(id);

//atributo role
const select = document.querySelectorAll('span[role]')[0].innerHTML;
console.log(select);

//atributo role=img
const data = document.querySelectorAll('span[role=img]')[0].innerHTML;
console.log(data);

//atributo title
const title = document.querySelectorAll('span[title]')[0].innerHTML;
// const sol = title.includes('ballena');
console.log(title);

//EJ2

// const element = document.querySelector('whale');
// console.log(element);

// const element = document.querySelector('whale');
// element.classList.add('whale--blue');

// whale.classList.add('whale--blue');

// const missingElements = document.querySelectorAll('.missing');
// console.log(missingElements);
// console.log(missingElements.length);

const buttons = document.querySelectorAll('li>button');
buttons.forEach(button => {
	button.addEventListener("click", function(){
		this.parentElement.classList.add('red');
	})
});
