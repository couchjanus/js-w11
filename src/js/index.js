// import './../sass/styles.scss';
// import _ from 'lodash';

// strings
var srt1 = 'this is my string',
    srt2 = 'my second string',
    srt3 = "my name is chris";

// numbers
let num1 = 10,
    num2 = 500,
    num3 = 3.14;

// booleans (truthy / falsy)
let b1 = true;
b12 = false;

// specials
let sp1 = undefined,
    sp2 = null,
    sp3 = NaN;

// ======================
// declaring variables

let myVariable;

myVariable = 'something';
console.log(myVariable);

var thing = 'first';
let newThing = 'third';

// objects
const user = {
    name: 'Chris',
    username: 'chrisoncode'
};

// arrays 
const users = ['chris', 'nick', 'holly'];
const luckyNumbers = [1, 43, 54, 132];
const whatever = ['chris', 1, 'holly'];

const superUsers = [{
        name: 'chris'
    },
    {
        name: 'nick'
    },
    {
        name: 'holly'
    }
];

console.groupCollapsed("superUsers");
console.log(superUsers[2].name);

const otherThing = {
    name: 'chris'
};
console.log(otherThing.name);

otherThing.name = 'holly';

console.log(otherThing.name);
console.groupEnd();


// JavaScript Operators
let a = 10;
let b = 3;
let c = 15;
const d = '5';
let e = 'my name';
const f = 'is chris';

console.group('Addition');
console.log(a + b); // 13
console.log(a + d); // 105
console.log(e + ' ' + f);
console.log(e += ' is the batman');
console.groupEnd();

console.group('Multiplication');
console.log(a * 3); // 30
console.log(a * b); // 30
console.log(b * c); // 45
console.groupEnd();

a++;
b--;
--b;
c += a;
console.group('Incrementing');
console.log(a); // 11    
console.log(b); // 1
console.log(c); // 25
console.groupEnd();

// Оператор группировки ( ) контролирует порядок выполнения в выражениях.

a = 1;
b = 2;
c = 3;
console.log(a + b * c); // 7 обычный порядок
console.log(a + (b * c)); // 7
// теперь поменяем порядок сложение до умножения
console.log((a + b) * c); // 9
// что эквивалентно следующему
console.log(a * c + b * c); // 9

// JavaScript Booleans
const original = 'chris';
const clone = 'CHRIS';

console.groupCollapsed('String');
console.log(original == 'chris'); // true
console.log(original == clone); // false
console.log(original == clone.toLowerCase()); // true
console.groupEnd();

const num11 = 10;
const num22 = '10';

console.groupCollapsed('Numbers');
console.log(num11 == num22); // true 
console.log(num11 === num22); // false
console.log(num11 != num22); // false
console.log(num11 !== num22); // true
console.groupEnd();

let what; // undefined
let things = null;

console.groupCollapsed('Booleans');
console.log(Boolean(what)); // false
console.log(Boolean(things)); // false
console.log(Boolean(num11)); // true
console.log(Boolean(num22)); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.groupEnd();

const firstArr = [1, 2, 3];
const secondArr = [1, 2, 3];
const firstObj = {
    color: 'red'
};
const secondObj = {
    color: 'red'
};

console.groupCollapsed('Objects and Arrays');
console.log(firstArr === secondArr);
console.log(firstObj === secondObj);
console.groupEnd();

console.group('And Or');
console.log(Boolean('blah') && Boolean('thing')); // true
console.log(Boolean('blah') && Boolean('')); // false
console.log(Boolean('blah') || Boolean('')); // true
console.log(Boolean('') || Boolean('')); // false
console.groupEnd();

// JavaScript If-Else
var theNumber;
// var theNumber = prompt("Выбери число ", "");

if (!isNaN(theNumber)) {
    console.log("квадратный корень из " + theNumber * theNumber);
}


// var theNumber = Number(prompt("Выбери число", ""));

// if (!isNaN(theNumber)){
//     alert("квадратный корень из " + theNumber * theNumber);
// }
// else{
//     alert("ты ввёл не число");
// }

// var num = Number(prompt("Выбери число", "0"));

// if (num < 10){
//     alert("No");
// }else if (num < 100){
//     alert("Ok");
// }else{
//     alert("Nop");
// }

/*
const name     = prompt('What is your name?');
const username = 'chrisoncode';
*/

// if
// if (name == 'nick' || name == 'chris') {
//   alert('Hello!');
// } else if (name == 'holly') {
//   console.log('this is holly');
// } else {
//   console.log('not nick');
// }

//   JavaScript while

var result = 1;
var counter = 0;

// while loop

while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result); // → 1024


// do while loop

do {
    var name = prompt("Who are you?");
} while (!name);

console.log(name);

// JavaScript For Loop
// for loop
for (var number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
var result = 1;

for (var counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result); // → 1024

// Выход из цикла

for (var current = 20;; current++) {
    if (current % 7 == 0)
        break;
}
console.log(current); // → 21

for (var number = 0; number <= 12; number += 2) {
    console.log(number);
}
// Для counter += 1 и counter -= 1 есть ещё более короткие записи: 
// counter++ and counter--.

// JavaScript Switch
switch (prompt("Как погодка?")) {
    case "дождь":
        console.log("Не забудь зонт.");
        break;
    case "снег":
        console.log("Блин, мы в России!");
        break;
    case "солнечно":
        console.log("Оденься полегче.");
    case "облачно":
        console.log("Иди гуляй.");
        break;
    default:
        console.log("Непонятная погода!");
        break;
}

//   JavaScript Function

function showMessage() {
    alert('Привет всем присутствующим!');
}

// showMessage();

function showThisMessage(msg) {
    alert(msg);
}
// showThisMessage( 'Привет всем присутствующим!');

function showMessageHi() {
    var message = 'Привет!'; // локальная переменная
    alert(message);
}

// showMessageHi(); // 'Привет!'

var userName = 'Jhon';

function showMessageUser() {
    var message = 'Привет ' + userName;
    alert(message);
}
// showMessageUser(); // Привет Jhon
function showMessageFrom(from, text) {
    if (text === undefined) {
        text = 'текст не передан';
    }
    alert(from + ": " + text);
}

function showTextMessage(from, text) {
    text = text || 'текст не передан';
}
// Директива return

function calcD(a, b, c) {
    return b * b - 4 * a * c;
}

var test = calcD(-4, 2, 1);
// alert(test); // 20


function squared(a) {
    return a * a;
}

const newSquared = squared(3);
console.log(newSquared);


function saySomething(message = 'goodbye', whisper = false) {
    if (whisper) {
        console.log(`%c${message}`, 'font-size:5px');
    } else {
        console.log(message);
    }
}

saySomething('hello', true);
saySomething('my name is chris', true);
saySomething();

// function squared(a) {
//   return a * a;
// }

// const newSquared = squared(3);
// console.log(newSquared);

const squarEd = (a) => {
    return a * a;
}
const otherSquared = squarEd;

punch();

function punch() {
    console.log('punch here!');
}


const squarED = (a) => {
    return a * a;
}

const otherSquarED = squarED;
punch();

// calc
var foo, bar;

b2.onclick = function () {
    if (foo === undefined) {
        res.value = b2.value;
        foo = parseInt(b2.value);
    } else {
        res.value += b2.value;
        bar = parseInt(b2.value);
    }
}

b3.onclick = function () {
    if (foo === undefined) {
        res.value = b3.value;
        foo = parseInt(b3.value);
    } else {
        res.value += b3.value;
        bar = parseInt(b3.value);
    }
}

// b3.onclick = function(){
//     res.value += b3.value;
//     bar = parseInt(b3.value);
// }

plus.onclick = function () {
    res.value += plus.value;

}
equal.onclick = function () {
    res.value = foo + bar;
    foo = undefined;
    bar = undefined;
}

