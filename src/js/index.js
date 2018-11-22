// import './../sass/styles.scss';
// import _ from 'lodash';

function Product(name, price, picture) {
    this.name = name;
    this.price = price;
    this.picture = picture;
}

var myEagle = new Product("Eagle", 999, "Eagle.png");
var myNissan = new Product("Nissan", 888, "Nissan");
var myMazda = new Product("Mazda", 777, "Mazda");

// Имена свойств объекта

var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type = "Dot syntax";
myObj["date created"] = "String with space";
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] = "Object";
myObj[""] = "Even an empty string";

// console.log(myObj);

myEagle.name = "Dot syntax";
myEagle["picture"] = "String with space";

// console.log(myEagle);

var myCar = new Object(); // var myCar = {}; // пока пустой
myCar.name = "Ford";
myCar.name = "Mustang";
myCar.price = 999;


function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}
// console.log(showProps(myNissan, "myCar"));

function listAllProperties(o) {
    var objectToInspect;
    var result = [];
    for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }
    return result;
}

// console.log(listAllProperties(myNissan));

// console.log(document.body.innerHTML);

// console.log(document.body.innerHTML);
// console.log(document.body['innerHTML']);

// document.body.innerHTML += '<b>незакрытый тег'; // незакрытый тег
// console.log(document.body.innerHTML ); // <b>тест</b> (исправлено)

// chat.innerHTML += "<div>Hi <img src='images/cat3.jpg'/> !</div>";
// chat.innerHTML += "Как дела?";

// var elem = document.getElementById('my');
// elem.innerHTML = '<h2>Вставленный скрипт не выполнится</h2><script>console.log("Вставленный скрипт не выполнится");</scr' + 'ipt>';

// Пример чтения outerHTML:
// var div = document.getElementById('hello');
// console.log(div.outerHTML); // <div>Привет <b>Мир</b></div>

// заменяем div.outerHTML на <p>...</p>
// div.outerHTML = '<h2>Привет Новый Мир!</h2>';
// ... но содержимое div.outerHTML осталось тем же, несмотря на "перезапись"
// console.log(div.outerHTML); // <div>Привет, Мир!</div>
// var page = document.getElementById('data');
// console.log(page.childNodes.length);
// for (var i = 0; i < page.childNodes.length; i++) {
//     console.log(page.childNodes[i].data);
// }
// var content = document.getElementById('context');

// console.log(content.textContent);

// var text = document.getElementById('intext');

// console.log(text.innerText);
// var hiddDiv = document.getElementById('hiddenDiv');
// hiddDiv.hidden = true;
// console.log(hiddDiv.innerHTML);
var square = function (number) {
    return number * number;
};
var x = square(4); // x получает значение 16
// console.log(x);

// Имя функции может быть присвоено для вызова самой себя внутри самой функции

var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
// console.log(factorial(3));


function Truck(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = function () {
        console.log("I turn the engine, but the engine doesn't turn");
    }
}

// var beatUpTruck = new Truck("Eagle", "Talon TSi", 1993);
// beatUpTruck.engine();
// console.log('Because it is model: ', beatUpTruck.model, beatUpTruck.make);
// Код события onload будет выполнен при полной загрузке страницы.

function messageShow() {
    console.log('Документ и все ресурсы загружены!');
    load1.innerHTML = 'Документ и все ресурсы загружены!';

}

// window.onload = function () {
// messageShow();
// };
// Код события onload будет выполнен при загрузке DOM.

// function ready() {
//     console.log('Документ загружен!');
//     domload1.innerHTML = 'Документ загружен!';

// }
// document.addEventListener("DOMContentLoaded", ready);
// window.onbeforeunload = function () {

//     return "Точно перейти? И куда же ты собрался?";

// };
// Добавляет слушателя событий DOMContentLoaded
// document.addEventListener("DOMContentLoaded", ready);

// function ready() {
//   hello.innerHTML = "Я готова!";
// }

// function ready() {
//     console.log("Document is ready!");
// }
// Добавляет слушателя событий DOMContentLoaded
// document.addEventListener("DOMContentLoaded", ready);

// function ready() {
//     console.log("Document is ready!");
//     console.log(content1); // DOM-элемент
//     console.log(window['content-holder']); // в имени дефис, поэтому через
// }
// var elem = document.getElementById('content2');
// elem.style.color = "blue"; // Напрямую

// var elstyle1 = elem.style;
// elstyle1.color = "red"; // Не напрямую
// var elem3 = document.getElementById('content3');
// console.log(elem3.className); //"booble example"
// elem3.className = "class1 class2 class3";
// console.log(elem3.className); //"class1 class2 class3"
// var elem4 = document.getElementById('content4');
// console.log(elem3.classList.length);

// elem4.classList.add("class1", "class2", "class3");
// console.log(elem4.classList);

// elem4.classList.remove("class1");
// console.log(elem4.classList);

// elem4.classList.item(1);

// elem4.classList.toggle("class1");
// elem4.classList.contains("class1");


// document.addEventListener("DOMContentLoaded", ready);

// function ready() {
//     document.getElementById("cart-trigger").addEventListener('click', function () {

//         document.getElementById("cart-sidebar").classList.add('show-sidebar');
//     });

//     document.querySelector("#cart-sidebar .remove").addEventListener('click', function () {
//         document.getElementById("cart-sidebar").classList.remove('show-sidebar');
//     });

//     var hamburgerToggle = document.querySelector('.fa-bars');

//     hamburgerToggle.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector('.nav-menu').classList.toggle('active');
//     });

    // let buyNow = document.querySelector('.buy-now');

    // buyNow.addEventListener('click', function () {
    //     document.querySelector('.product .product-name').style.display = 'none';
    //     document.querySelector('.product .icon').style.display = 'none';
    //     document.querySelector('.product .buy-now').style.display = 'none';
    //     document.querySelector('.product .product-detail').style.display = 'block';
    //     document.querySelector('.product-menu').style.top = '40%';
    // });

    // var buyNow = document.getElementsByClassName('buy-now');

    // for (let i = 0; i < buyNow.length; i++) {

    //     buyNow[i].addEventListener('click', function (e) {
    //         //  console.log(e.target)
    //         e.target.parentNode.parentNode.querySelector('.product .product-name').style.display = 'none';
    //         e.target.parentNode.parentNode.querySelector('.product .icon').style.display = 'none';
    //         e.target.parentNode.parentNode.querySelector('.product .buy-now').style.display = 'none';
    //         e.target.parentNode.parentNode.querySelector('.product .product-detail').style.display = 'block';
    //         e.target.parentNode.parentNode.querySelector('.product-menu').style.top = '40%';
    //     });
    // }



    // let cancel = document.querySelector('.cancel');
    // cancel.addEventListener('click', function () {
    //     document.querySelector('.product .product-name').style.display = 'block';
    //     document.querySelector('.product .icon').style.display = 'block';
    //     document.querySelector('.product .buy-now').style.display = 'block';
    //     document.querySelector('.product .product-detail').style.display = 'none';
    //     document.querySelector('.product-menu').style.top = '80%';
    // });

    // var cancel = document.getElementsByClassName('cancel');

    // for (let i = 0; i < cancel.length; i++) {

    //     cancel[i].addEventListener('click', function (e) {
    //         e.target.parentNode.parentNode.querySelector('.product .product-name').style.display = 'block';
    //         e.target.parentNode.parentNode.querySelector('.product .icon').style.display = 'block';
    //         e.target.parentNode.parentNode.querySelector('.product .buy-now').style.display = 'block';
    //         e.target.parentNode.parentNode.querySelector('.product .product-detail').style.display = 'none';
    //         e.target.parentNode.parentNode.querySelector('.product-menu').style.top = '80%';
    //     });
    // }




    // let addToCart = document.querySelector('.add-to-cart');

    // addToCart.addEventListener('click', function () {
    //     var y = 180;
    //     document.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //     document.querySelector('.product-back').classList.add('back-is-visible');

    // });

//     var addToCart = document.getElementsByClassName('add-to-cart');

//     for (let i = 0; i < addToCart.length; i++) {

//         addToCart[i].addEventListener('click', function (e) {
//             var y = 180;
//             e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
//             e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

//         });
//     }

// }