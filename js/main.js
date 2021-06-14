//EJ1
//pintar por etiqueta
const etiqueta = document.querySelector('span').innerHTML;
console.log({etiqueta});

//pintar por clase
const clase = document.querySelector('.whale').innerHTML;
console.log('clase', clase);

//pintar por id
const id = document.querySelector('#whale').innerHTML;
console.log({id});

//atributo role
const select = document.querySelector('[role]').innerHTML;
console.log({select});

//atributo role=img
const data = document.querySelector('[role=img]').innerHTML;
console.log({data});

//atributo title
const title = document.querySelector('[title]').innerHTML;
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




//const buttons = document.querySelectorAll('li>button');
//const buttons = document.querySelectorAll('.list .button');

const list = document.querySelectorAll('.list');

const buttons = list.forEach(singleList => {
	const listButtons = singleList.querySelectorAll('.button');
	listButtons.forEach(initButtons);
});

function initButtons(button) {
		button.addEventListener("click", function (event) {
			const btn = event.currentTarget;
			btn.closest('.list__item').classList.add('red');
		});
	
}





function tclick(event) {
	console.log('currentTarget:', event.currentTarget);
	console.log('target', event.target);
}


function initTBtn(btn) {
	btn.addEventListener('click', tclick)
}

const tbtn = document.querySelectorAll('.t-btn');
tbtn.forEach(initTBtn);