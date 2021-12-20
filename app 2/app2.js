/*
let val; 

val = document;
val = document.head;
val = document.doctype;
val = document.domain;  
val = document.URL;  
val = document.characterSet;  //UTF-8
val = document.contentType;  

//puedo ver que forms hay, me muestra en consola los id 
//que estan en mi documento html, y puedo acceder
// con index para ver una form en particular
// aunque en este documento solo hay una
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

val = document.links;
val = document.links[5];
val = document.links[5].id;
val = document.links[5].className;
val = document.links[5].classList;
val = document.links[5].classList[2];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
})

console.log(val);


//DOM SELECTORS
console.log(document.getElementById('task-title'));

//get things from the element 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//buenas practicas, para no repetir tanto 
const taskTitle = document.getElementById('task-title');

//change styling 
taskTitle.style.background = '#fff';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//Change content 
taskTitle.textContent = "My task list";
taskTitle.innerText = "My tasks";
//cambiar caracteristicas via html interno 
taskTitle.innerHTML = '<span style="color:red">Text list</span>';


//QUERY SELECTOR
//puedo usar cualquier elemento de css
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

//es un selector unitario, solo selecciona el primero
document.querySelector('li').style.color = "red";
document.querySelector('li:last-child').style.color = "red";
document.querySelector('li:nth-child(3)').style.color = "yellow";
document.querySelector('li:nth-child(4)').textContent = "Hello";
*/

//SELECTORS FOR MULTIPLE ELEMENTS
//document.getElementsByClassName

/*
const items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Bye';

//busco los li dentro del primer ul 
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); 

//document.getElementByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);

console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Bye';

//convert HTML collection to array
lis = Array.from(lis);
lis.reverse();

console.log(lis);

//document.querySelectorAll
//busco dentro de la <ul> con class='collection' aquellos <li> con class='collection-item', y lo guardo en una variable
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item){
    item.textContent = 'Hello';
})

//guardo los elementos pares e impares de los li, nth-child es una herramienta de CSS 
//luego uso esto para modificar dichos elementos
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#ccc';
}

console.log(items);


let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

//get children element nodes
//it returns an html collection
val = list.children;
val = list.children[0];
//children of children 
list.children[1].textContent = 'Hola';
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;
//first and last child
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode; //me da un ul 
val = listItem.parentElement;

//get next and previous sibling
val = listItem.nextElementSibling;
val = listItem.nextSibling;
val = listItem.previousElementSibling;
val = listItem.previousSibling;

console.log(val);


//CREATING ELEMENTS
// console.clear;

const li = document.createElement('li');
li.className = 'collection-item';
// li.id = 'new-item';
li.setAttribute('title', 'new-item');

li.appendChild(document.createTextNode('Elemento agregado'));

const myLink = document.createElement('a');
myLink.className = 'delete-item secondary-content';
myLink.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(myLink);

document.querySelector('ul.collection').appendChild(li);

console.log(li);

//REPLACE ELEMENT
const newHeading = document.createElement('h2');
newHeading.id = 'text-title';
newHeading.appendChild(document.createTextNode('Task list'));

const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

//DELETE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//son dos formas de hacer lo mismo 
//lis selecciona todos los <li> y elimina por index
//list selecciona el primer <ul> y elimina el hijo 
//tambien con index 

//remove list item 
lis[0].remove();

//remove child element 
list.removeChild(lis[2]);

//CLASSES AND ATRIBUTES
const firstLi = document.querySelector('li:first-child');
//es el link que esta dentro del li 
//la crucecita 
const link = firstLi.children[0];

let val;

//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');

console.log(val);


//EVENTS
//MOUSE EVENTS
//usar una funcion dentro de un evento
/* document.querySelector('.clear-tasks').addEventListener('click',
function(e){
    alert("Tasks cleared, redirecting to Google");
    e.preventDefault(); //detiene que vaya a google
}); 

const clearBtn = document.querySelector('.clear-tasks');
//click 
clearBtn.addEventListener('click',onClick);

function onClick(e){
    //porque '.clear-tasks' tiene un link a google
    e.preventDefault(); 
    let val; 
    val = e; 

    val = e.target;
    //event type
    val = e.type;

    console.log(val);
}

const card = document.querySelector('.card');
const heading = document.getElementById('task-title');
card.addEventListener('mousemove',onMove);

//trabajo con las coordenadas donde se encuentra mi mouse
//es bastante comun para programar videojuegos
function onMove(e){ 
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},
        ${e.offsetY}, 40)`;
}


//keyboard and input events 
const myForm = document.querySelector('form');
const taskInput = document.getElementById('task');

taskInput.value = ' ';

myForm.addEventListener('submit', submitForm);

const myLi = document.querySelectorAll('li');

function submitForm(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(taskInput.value);
    myLi[0].innerText = taskInput.value;
    e.preventDefault();
}
*/

//EVENT BUBBLING
document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
})

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card content');
})

document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
})

//EVENT DELEGATION
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    //este seria el <i> tag, porque busco un valor
    //que este presente en su parent Element
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('deleted');
        e.target.parentElement.parentElement.remove();
}}

