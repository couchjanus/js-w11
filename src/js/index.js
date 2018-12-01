import $ from "jquery";
import data from './data';
import {
    toggle_panel,
    buyCancel,
    vanil_buyCancel,
    vanila_toggle_panel,
    makeProductItem,
    make$ProductItem
} from './lib';

// export for others scripts to use
window.$ = window.jQuery = $;

// =================================

// Метод Object.keys()

// Массивоподобный объект со случайным порядком ключей

// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };

// console.log(Object.keys(an_obj)); // консоль: ['2', '7', '100']

// Свойство getFoo является неперечисляемым свойством
// var my_obj = Object.create({}, { 
// getFoo: { 
//     value: function() { return this.foo; } 
//     } 
// });
// my_obj.foo = 1;
// console.log(Object.keys(my_obj)); // консоль: ['foo']

var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
console.log(myArray);
// myArray = ["1", "2", "3", "a", "b", "c"]

var newArray = new Array("Wind", "Rain", "Fire");
var list = newArray.join(" - ");
console.log(list);
// list = "Wind - Rain - Fire"

var pushArray = new Array("1", "2");
pushArray.push("3"); 
console.log(pushArray);
// pushArray =["1", "2", "3"]

var popArray = new Array("1", "2", "3");
var last = popArray.pop();
console.log(popArray);
// popArray =["1", "2"], last = "3"

var shitArray = new Array ("1", "2", "3");
var first = shitArray.shift();
console.log(shitArray);
// shitArray = ["2", "3"], first = "1"

var unshitArray = new Array ("1", "2", "3");
unshitArray.unshift("4", "5");
console.log(unshitArray);
// unshitArray becomes ["4", "5", "1", "2", "3"]

var sliceArray = new Array ("a", "b", "c", "d", "e");
sliceArray = sliceArray.slice(1, 4); 
// начиная с индекса 1 извлекаются элементы 
// вплоть до индекса 3
console.log(sliceArray);
// sliceArray = [ "b", "c", "d"]


var spliceArray = new Array ("1", "2", "3", "4", "5");
spliceArray.splice(1, 3, "a", "b", "c", "d");
// spliceArray = ["1", "a", "b", "c", "d", "5"]
// Этот код, начиная с ячейки под индексом 1 (в которой находилось значение "2"),
// удаляет 3 элемента, и вставляет на их место
// элеметны, переданные в качестве последующих параметров.

var reverseArray = new Array ("1", "2", "3");
reverseArray.reverse();
// элементы переставлены reverseArray = [ "3", "2", "1" ]

var sortArray = new Array("Wind", "Rain", "Fire");
sortArray.sort();
// массив отсортирован sortArray = [ "Fire", "Rain", "Wind" ]

var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // выводит 1
// Попробуем еще раз, начиная с индекса последнего совпадения
console.log(a.indexOf('b', 2)); // выводит 3
console.log(a.indexOf('z')); // выводит -1, потому что 'z' не найдено

var al = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(al.lastIndexOf('b')); // выводит 5
// Попробуем еще раз, начиная с индекса, предшествующего индексу последнего совпадения
console.log(al.lastIndexOf('b', 4)); // выводит 1
console.log(al.lastIndexOf('z')); // выводит -1


$("#show1").on('click', function(){
    $('.show1').show();
});


$("#hide1").on('click', function(){
    $('.hide1').hide();
});


$("#fi1").on('click', function(){
    $('.show1').fadeIn();
});


$("#fi2").on('click', function(){
    $('.hide1').fadeOut();
});

$("#fto").on('click', function(){
    $('.hide1').fadeTo(400, 0.5);
});


$("#ftog").on('click', function(){
    $('.hide1').fadeToggle();
});

$("#st").on('click', function(){
    $('.st').slideToggle();
});


// =================================



$(function () {

    const product = {
        id: 0,
        name: "Cool Cat",
        price: 177,
        picture: "/images/cat1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    };
    // получить каждый ключ из итерируемого объекта
    for (let key in product) {
        console.log(key + ': ' + product[key]);
    }

    // Контент шаблона

    // var $productTemplate = $($('#productItem').html());

    // $productTemplate.find('.product-menu').attr('productId', product["id"]);
    // $productTemplate.find('.product-name').text(product.name);
    // $productTemplate.find('img').attr('src', product.picture);
    // $productTemplate.find('.product-price').text(product["price"]);
    // $productTemplate.find('.product-description').text( product["description"]);
    // console.log($productTemplate);
    // $(".grid-container").append($productTemplate);


    // for (var i = 0; i < Object.keys(data).length; i++) {
    //     var $productTemplate = $($('#productItem').html());
    //     $(".grid-container").append(make$ProductItem($productTemplate, data[i]));
    // }

    const cart_trigger = $('#cart-trigger');

    $("#cart-trigger").on('click', function () {
        toggle_panel($('#cart-sidebar'), $('#shadow-layer'));
    });

    $("#cart-sidebar .remove").on('click', function () {
        toggle_panel($('#cart-sidebar'), $('#shadow-layer'));
    });

    var hamburgerToggle = $('.fa-bars');

    hamburgerToggle.on('click', function (e) {
        e.preventDefault();
        $('.nav-menu').toggleClass('active');
    });


    // $(".buy-now").each(function(index, element){
    //     $(element).on('click', function (e) {
    //       buyCancel(e.target, true);
    //     });
    // });

    // $(".cancel").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         buyCancel(e.target, false);
    //     });
    // });


    // $(".buy-now").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').hide();
    //         $(e.target).parents('.product').find('.icon').hide();
    //         $(e.target).parents('.product').find('.buy-now').hide();
    //         $(e.target).parents('.product').find(' .product-detail').show();
    //         $(e.target).parents('.product-menu').css('top', '40%');
    //     });
    // });

    // $(".cancel").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name')
    //         .css('display', 'block');
    //         $(e.target).parents('.product').find('.icon').css('display', 'block');
    //         $(e.target).parents('.product').find('.buy-now').css('display','block');
    //         $(e.target).parents('.product').find(' .product-detail').css('display', 'none');
    //         $(e.target).parents('.product-menu').css('top', '80%');
    //     });
    // });


    // $(".cancel").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').show('slow');
    //         $(e.target).parents('.product').find('.icon').show(1000, 'linear');
    //         $(e.target).parents('.product').find('.buy-now').show('fast');
    //         $(e.target).parents('.product').find(' .product-detail').hide(1000, 'swing');
    //         $(e.target).parents('.product-menu').css('top', '80%');
    //     });
    // });

    // $(".buy-now").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').fadeOut("slow");
    //         $(e.target).parents('.product').find('.icon').fadeOut("slow");
    //         $(e.target).parents('.product').find('.buy-now').fadeOut(1000);
    //         $(e.target).parents('.product').find(' .product-detail').fadeIn("fast");
    //         $(e.target).parents('.product-menu').css('top', '40%');
    //     });
    // });

    // $(".cancel").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').fadeTo("slow", 1);
    //         $(e.target).parents('.product').find('.icon').fadeIn(3000);
    //         $(e.target).parents('.product').find('.buy-now').fadeToggle(3000);
    //         $(e.target).parents('.product').find(' .product-detail').fadeToggle(300);
    //         $(e.target).parents('.product-menu').css('top', '80%');
    //     });
    // });

    // $(".buy-now").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').slideUp();
    //         $(e.target).parents('.product').find('.icon').fadeOut("1000");
    //         $(e.target).parents('.product').find('.buy-now').slideUp();
    //         $(e.target).parents('.product').find(' .product-detail').slideDown("fast");
    //         $(e.target).parents('.product-menu').css('top', '40%');
    //     });
    // });

    // $(".cancel").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').slideToggle();
    //         $(e.target).parents('.product').find('.icon').fadeIn(3000);
    //         $(e.target).parents('.product').find('.buy-now').slideToggle();
    //         $(e.target).parents('.product').find(' .product-detail').slideToggle();
    //         $(e.target).parents('.product-menu').css('top', '80%');
    //     });
    // });
    // $(".buy-now").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').slideUp();
    //         $(e.target).parents('.product').find('.icon').fadeOut("1000");
    //         $(e.target).parents('.product').find('.buy-now').slideUp();
    //         $(e.target).parents('.product').find(' .product-detail').slideDown("fast");
    //         $(e.target).parents('.product-menu').css('top', '40%');
    //     });
    // });

    // $(".cancel").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name').slideToggle();
    //         $(e.target).parents('.product').find('.icon').fadeIn(3000);
    //         $(e.target).parents('.product').find('.buy-now').slideToggle();
    //         $(e.target).parents('.product').find(' .product-detail').slideToggle();
    //         $(e.target).parents('.product-menu').css('top', '80%');
    //     });
    // });

    // 


    const $template = $($('#cartItem').html());

    // $(".add-to-cart").each(function (index, element) {
    //     $(element).on('click', function (e) {
    //         var y = 180;
    //         $(e.target).parents('.product-wrapper')
    //             .css('transform', 'rotateY(' + y + 'deg)');
    //         $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');

    //         //    
    //         let template = $template.clone();

    //         template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());

    //         template.find(".item-quantities").after(' ' + $(this).parents(".product").children(".product-name").text());

    //         template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());

    //         template.find(".item-remove").on('click', function() {
    //             $(this).parent().remove();
    //         });

    //         $(".cart-items").append(template);
    //     });

    // });


    // $(".add-to-cart").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         let template = $template.clone();
    //         template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
    //         template.find("span.item-name").text($(this).parents(".product").children(".product-name").text()); 
    //         template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
    //         template.find(".item-remove").on('click', function() {$(this).parent().remove();});
    //         $(".cart-items").append(template);
    
    //         // Поиск элемента с заданным номером
    
    //         var imgToDrag = $(e.target).parents('.product').find("img").eq(0);
    
    //         if (imgToDrag) {
    //            var imgClone = imgToDrag.clone()
    //                 .offset({
    //                     top: imgToDrag.offset().top,
    //                     left: imgToDrag.offset().left
    //                 })
    //                 .css({
    //                     'opacity': '0.5',
    //                     'position': 'absolute',
    //                     'height': '150px',
    //                     'width': '150px',
    //                     'z-index': '100'
    //                 })
    //                 .appendTo($('body'));
    //             //     .appendTo($('body'))
    //             //         .animate({
    //             //         'top': $('#cart-trigger').offset().top + 10,
    //             //             'left': $('#cart-trigger').offset().left + 10,
    //             //             'width': 75,
    //             //             'height': 75
    //             //     }, 1000);
    //             //     imgClone.animate({
    //             //         'width': 0,
    //             //             'height': 0
    //             //     }, function () {
    //             //         $(this).detach()
    //             //     });  
    
    //             // console.log('imgClone: ', imgClone);
    //         }
    
            
    //         var y = 180;    
    //         $(e.target).parents('.product-wrapper')
    //         .css('transform', 'rotateY(' + y + 'deg)');
    //         $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');
    //         $(e.target).parents('.product-wrapper').delay(3000).queue(function() {
    //             $(this).css({
    //                 'transform': 'rotateY(0deg)'
    //             }).dequeue();
    //             $(e.target).parents('.product').find('p').slideDown();
    //             $(e.target).parents('.product').find('.product-menu').css('top', '80%');
    //             $(e.target).parents('.product').find('.product-detail').toggle();
    //             $(e.target).parents('.product').find('.buy-now').toggle();
    //             $(e.target).parents('.product').find('.icon').toggle();
    //         });
    //     });
    
    // });


    // $(".minus").click(function(e) {
    //     var val = parseInt($(e.target).next().attr('value'));
    //     $(this).next().attr('value', val-1);
    // });

    // $(".plus").click(function(e) {
    //         var val = parseInt($(e.target).prev().attr('value'));
    //         $(this).prev().attr('value', val+1);
    // });

    $(".product-detail").each(function (index, element) {
        $(element).on('click', function () {

            var $ptemplate = $($('#productDetail').html());
            $ptemplate.find('.product-price').text($(this).parents(".product").find(".product-price").text());
            $ptemplate.find('.product-name').text($(this).parents(".product").find(".product-name").text());

            $ptemplate.find('img').eq(0).attr('src', 'images/cat3.jpg');


            $(".grid-container").empty();

            $(".grid-container").append($ptemplate);

            let slideIndex = 1;

            const prev = $(".prev");
            const next = $(".next");

            function showSlide(n) {
                let i;
                let x = $(".slide");
                if (n > x.length) {
                    slideIndex = 1
                }
                if (n < 1) {
                    slideIndex = x.length
                }
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }

                x[slideIndex - 1].style.display = "block";
            }

            function nextPrev(n) {
                showSlide(slideIndex += n);
            }

            next.click(function () {
                nextPrev(1);
            });

            prev.click(function () {
                nextPrev(-1);
            });

        });
    });

});


// Vanila JS

document.addEventListener("DOMContentLoaded", ready);

function ready() {

    // Контент шаблона
    const $productTemplate = document.getElementById("productItem").content;

    document.querySelector('.grid-container').append(makeProductItem($productTemplate, product).cloneNode(true));

    // for (var i = 0; i < data.length; i++) {
    //     document.querySelector('.grid-container').append(makeProductItem($productTemplate, data[i]).cloneNode(true));
    // }

    const keys = Object.keys(data[1]);
    console.log(keys);

    // После того, как желаемый массив был получен, его можно перебрать, например, с помощью метода forEach:

    keys.forEach(function (key) {
        console.log(key + ': ' + data[1][key]);
    });


    // for (var i = 0; i < Object.keys(data).length; i++) {
    //     document.querySelector('.grid-container').append(makeProductItem($productTemplate, data[i]).cloneNode(true));
    // }

    //     document.getElementById("cart-trigger").addEventListener('click', function () {
    //         vanila_toggle_panel(document.getElementById("cart-sidebar"), document.getElementById("shadow-layer"));

    //     });

    //     document.querySelector("#cart-sidebar .remove").addEventListener('click', function () {
    //         // document.getElementById("cart-sidebar").classList.remove('show-sidebar');
    //         vanila_toggle_panel(document.getElementById("cart-sidebar"), document.getElementById("shadow-layer"));

    //     });

    //     var hamburgerToggle = document.querySelector('.fa-bars');

    //     hamburgerToggle.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector('.nav-menu').classList.toggle('active');
    //     });



    var buyNow = document.getElementsByClassName('buy-now');

    for (let i = 0; i < buyNow.length; i++) {
        buyNow[i].addEventListener('click', function (e) {
            vanil_buyCancel(e.target, true);
        });
    }

    var cancel = document.getElementsByClassName('cancel');
    for (let i = 0; i < cancel.length; i++) {
        cancel[i].addEventListener('click', function (e) {
            vanil_buyCancel(e.target, false);
        });
    }

    // Add product to Cart

    var addToCart = document.getElementsByClassName('add-to-cart');

    // Clone template
    const template = document.getElementById("cartItem").content;

    for (let i = 0; i < addToCart.length; i++) {

        addToCart[i].addEventListener('click', function (e) {
            var y = 180;
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');


            template.querySelector("span.item-quantities").textContent = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity")[0].getAttribute('value');

            template.querySelector("span.item-name").textContent = ' ' + this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent;

            template.querySelector('.item-prices').textContent = this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent;

            document.querySelector('.cart-items').append(document.importNode(template, true));

            // document.querySelector('.cart-items').append(template.cloneNode(true));
        });

    }

    let plus = document.getElementsByClassName('plus');
    let minus = document.getElementsByClassName('minus');

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function (e) {
            let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
            e.target.previousElementSibling.setAttribute('value', val + 1);
        });
    }


    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', function (e) {
            let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
            e.target.nextElementSibling.setAttribute('value', val - 1);
        });
    }


    // plus = Array.prototype.slice.call(plus); // теперь plus - массив

    // plus.forEach(function (elem) {
    //     elem.addEventListener('click', function () {
    //         let val = parseInt(this.previousElementSibling.getAttribute('value'));
    //         this.previousElementSibling.setAttribute('value', val + 1);
    //     });
    // });

    // minus = Array.prototype.slice.call(minus); // теперь minus - массив

    // minus.forEach(function (elem) {
    //     elem.addEventListener('click', function () {
    //         let val = parseInt(this.nextElementSibling.getAttribute('value'));
    //         this.nextElementSibling.setAttribute('value', val - 1);
    //     });
    // });

}