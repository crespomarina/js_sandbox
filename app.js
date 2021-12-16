/* //Log to console

console.log('Hello, world!');
console.error('fatal error');
console.clear();
console.warn('proceed with caution');

//time nos dice el tiempo que toma algo
//en este caso, loger hello 5 veces
console.time('Hello');
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Bye')
console.timeEnd('Hello');

console.clear(); 

//declaracion de variables
var myName = 'Marina Crespo'
console.log(myName)

var greeting; 
greeting = 'Hello';
console.log(greeting);

//const no se puede cambiar
const otherName = 'Sarah';
otherName = 'John'; //error 

//uso de array y objects 
//Los array y objects que se declaran con const pueden ser modificados en su contenido,
//pero no puedo reasignar otro array u objeto u otra cosa a esa variable, porque es constante 
const person = {
    nombre: 'John',
    age: 30
}

// Esto nos arroja error
person = {
    nombre: 'Pedro',
    age: 27
} 

//this is allowed
person.nombre = 'Sarah';
console.log(person);

//this is allowed 
const myArray = [1,2,3,4,5]
myArray.push(6);
console.log(myArray);

console.clear();

//PRIMITIVE TYPES
//null
const car = null; 
console.log('Car is an ' + typeof car); //return object, but it's not

//string, number, boolean
const myself = 'Marina Crespo';
const myAge = 26;
console.log("I\'m " + myAge + " years old");
const civilStatus = false; 
console.log('Am u married?')
if(civilStatus){
    console.log("I'm married");
} else {
    console.log("I'm single");
}

//undefined 
let test;
console.log(typeof test);

//symbol
const sym = Symbol();
console.log(typeof sym);

//REFERENCE TYPES
//array 
const myHobbies = ['Movies','Tejer'];

//object literal 
const address = {
    city: 'Santa Fe',
    pais: 'Argentina'
}

//date
const today = new Date();
console.log(today); 
 

//TYPE CONVERSION
let val; 
//number to string FUNCTION
val = String(5);
val = String(4+4);
//bool to string 
val = String(true);
//date to string 
val = String(new Date());
//array to string 
val = String([1,2,3,4])

//toString()
//Obtengo los mismos resultados, pero esto es un metodo
val = (5).toString();
val = (true).toString();

//Change something to number
val = Number('5');
val = Number(false); //0
val = Number(true); //1
val = Number(null); //0
val = Number('Hello'); //NaN
val = Number([1,2,3,4]); //NaN

//parse... methods
val = parseInt('101'); //just int
val = parseFloat('3.14');


console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

//como uno es string y el otor number 
//js convierte val2 a un string y concatena
const val1 = String(5);
const val2 = 6;
const sum = val1+val2;
console.log(sum);
console.log(typeof sum);
//lo muestra como numero, pero sigue siendo tipo string
//salvo que cambie sum = Number(val1+val2)
console.log(Number(sum)); 
console.log(typeof sum);



//OPERACIONES MATEMATICAS
//MATH OBJECT 
let val;
val = Math.PI;
val = Math.E;
//redondear
val = Math.round(2.4);
//ceil devuelve el int mas grande siguiente al valor dado
val = Math.ceil(3.4);
//floor es como ceil pero para abajo 
val = Math.floor(3.4);
val = Math.sqrt(16);
val = Math.abs(-2);
val = Math.pow(2,3);
val = Math.min(1,2,3,5);
val = Math.max(1,2,3,5);
//da random decimal 
val = Math.random();
//random decimal entre 0 y 20 
val = Math.random() * 20;
//int 1 a 20 
val = Math.floor(Math.random() * 20 +1);
console.log(val);


//CONCATENAR 
let firstName = 'Marina';
let lastName = 'Crespo';

let val;
//dos formas de hacer lo mismo 
val = firstName + ' ' + lastName;
val = firstName.concat(' ', lastName);

//indexOf
val = firstName.indexOf('a');  //1ra aparicion
val = firstName.lastIndexOf('a'); //ultima aparicion

//charAt()
val = firstName.charAt(2);
//get last character
val = firstName.charAt(firstName.length-1);

//substring
val = firstName.substring(0,4);
//slice
val = firstName.slice(-3); //last 3
val = firstName.slice(3); //last 3
val = firstName.slice(0,4); //igual que substring

//split
//split divide una cadena segun el caracter que le demos 
const str = "Hello I'm Marina";
val = str.split(' ');

const str2 = "Icecream, pan, melon"
val = str2.split(',');

//replace 
val = str.replace('Marina', 'Graciela');

//include() boolean
val = str.includes('Hello')
console.log(val);

//TEMPLATE STRINGS 
const miNombre = 'Marina';
const miEdad = 26;
const miTrabajo = 'Web developer';
const miCiudad = 'Santa Fe';

//without template strings (es5) very horrible
html = '<ul><li>Name: ' + miNombre + '</li><li>Age: ' + miEdad + '</li></ul>'

function greet(){
    return 'hello';
}

//with template strings AKA template literals (es6)
html = `
    <ul>
        <li>Name: ${miNombre}</li>
        <li>Age: ${miEdad}</li>
        <li>Job: ${miTrabajo}</li>
        <li>City: ${miCiudad}</li>
        <li>${2+2}</li>
        <li>${greet()}</li>
        <li>${miEdad > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;


//ARRAYS
const numeros = [1,2,4];
console.log(numeros);
console.log(numeros.length);

//is it an array?
let val = Array.isArray(numeros);
console.log(val);

console.log(numeros[1]);
numeros[2] = 100;
console.log(numeros[2]);

//MUTATE ARRAY
//poner al final 
numeros.push(250);
//poner al ppio.
numeros.unshift(150);
//sacar del final 
numeros.pop();
//sacar del ppio.
numeros.shift();
//sacar en un rango 
numeros.splice(1,1);
//dar vuelta
numeros.reverse();

//concatenate arrays
const numeros2 = [45,23,1,23];
val = numeros.concat(numeros2);
console.log(val);

//ordenar un array de menor a mayor
const num3 = [100,24,45,2,8,129];
//esto solo ordena por el primer numero
val = num3.sort();
console.log(val);

val = num3.sort(function(x,y){
    return x - y;
})

console.log(val);
console.log(num3);

//ordenar de mayor a menor
val = num3.sort(function(x,y){
    return y - x;
})

console.log(val);

//find 
function minor(x){
    return x < 18;
}

//solo busco los que cumplen con la condicion de la funcion
val = num3.find(minor);
console.log(val);



//OBJECT LITERALS
const materia = {
    nombre: 'Matematica basica',
    cuatrimestre: 1,
    alumnos: 200,
    regularidad: 4,
    modulos: ['derivadas','integrales'],
    getNota: function(){
        return 9;
    },
    docentes: {
        titular: 'Fabiana',
        adjunta: 'Melanie'
    }
}

let val; 
//puedo sacar cualquier valor con notacion de puntos
val = materia.docentes.adjunta; 
val = materia.modulos[0];
val = materia.getNota();
console.log(`Estoy cursando ${materia.nombre}`)

console.log(val);


//DATES ON JS
let val; 

//constructor sin argumento es fecha de hoy
const today = new Date();
//year, month, day, hour, minutes, seconds, miliseconds
const xMas = new Date(2021,12,25,15,15,00);
const myBDay = new Date('June 22');
//milisegundos desde 1/1/1970
const seconds = new Date(100000000);
//return valor numerico correspondiente a la hora actual
const sDate = Date.now()
//date.parse() return milisegundos 
const parDate = Date.parse("december 25 2021");

//METODOS DE DATES 
//me dice el tiempo de un evento, en milisegundos 
const inicio = today.getTime();
//dia del mes 
const inDia = today.getUTCDate();
//dia de la semana
const inSem = today.getDay();

console.log(`Today is the ${inDia} of december, 2021`)

if(inSem===4){ 
    console.log('Today is thursday');
} else {
    console.log("Today's not thursday");
}

console.log(`Today's ${today.getUTCDay()} of ${today.getUTCMonth()+1}, ${today.getUTCFullYear()}`)

let gabiBDay = new Date();
gabiBDay.setDate(22);
gabiBDay.setMonth(7);
gabiBDay.setFullYear(1993);
gabiBDay.setHours(10);
gabiBDay.setMinutes(45);
gabiBDay.setSeconds(30);

val = gabiBDay;
console.log(`My friend Gabi was born on ${val}`);
*/ //LOREM 

//IF AND COMPARATIONS
//check if something exits or not 
const id = 100;

//porque si id no esta, es undefined 
if(typeof id !== 'undefined'){
    console.log(`My ID is ${id}`)
} else {
    console.log('No ID');
}

//and or 
const numero = 20;
if(10<numero<100){
    console.log('Esta entre 10 y 100');
}
//es lo mismo que escribir 
if(numero>10 && numero<100){
    console.log('Esta entre 10 y 100');
}

//ternary operator
//es una forma corta de escribir if else 
//if id === 100 console.log correct, else console.log incorrect
console.log(id === 100 ? 'CORRECT' : 'INCORRECT')

