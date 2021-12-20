//set local storage item
localStorage.setItem('name', 'John');

//set sesssion storage item
sessionStorage.setItem('name', 'Beth');

//remove item 
// localStorage.removeItem('name');

//get from storage
const myName = localStorage.getItem('name');
console.log(myName);

//clear local storage
localStorage.clear(); 

//saved info from the document on local storage
/*
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
  
    let tasks;
  
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  
  tasks.forEach(function(task){
    console.log(task);
  });
*/

// localStorage.setItem('nombre', 'marina');
/*
let miNombre; 

if(localStorage.getItem('nombre')!== null){
    console.log(`Su nombre:  ${localStorage.getItem('nombre')}`);
} else {
    const a = prompt('No hay nombre, desea ingresar uno?');
    if(a == 1 || a == 'si'){
       const b = prompt('Ingrese nombre');
       miNombre = b;
    }
}
localStorage.setItem('nombre', miNombre);

console.log(`Su nombre: ${localStorage.getItem('nombre')}`);
*/

localStorage.setItem('nombre', 'Pedro');
console.log(`Mi nombre: ${localStorage.getItem('nombre')}`);

const a = prompt('Desea cambiar el nombre?');
if(a==1){
    const nuevoNombre = prompt('Ingrese nuevo nombre');
    localStorage.setItem('nombre',nuevoNombre);
}

