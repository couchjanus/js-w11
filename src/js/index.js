// import './../sass/styles.scss';

import $ from "jquery";

// export for others scripts to use

window.$ = window.jQuery = $;

$(document).ready(function(){
    console.log("Hello jQuery!");
    console.log(jQuery('h1'));

    // JQuery Получить все элементы div
    // console.log($('div'));

    // console.log($(".buy-now"));

    // Получить DOM-элемент с идентификатором cart-sidebar

    // console.log($('#cart-sidebar'));

    // JQuery Получить все элементы span внутри div
    // console.log($($('div span')));
      
    // JQuery Получить все элементы span внутри div
    // console.log($($($('div').find('span'))));
           
    // JQuery Получить все элементы span внутри div
    // console.log($($('div > span')));

    // JQuery Получить все div с классом icon

    // console.log($('div.icon'));

    // console.log($('div, span')); // все div и span

    // console.log($('span + img')); // все img после span


    // console.log($('.github').prev()); // элемент перед .github

    // console.log($('.github').next()); // элемент после .github



//   $(".buy-now").click(function(){
//     $("div").addClass("important");
//     console.log("Class added to div");
//   });

});

function toggle_panel(panel, background_layer) {
         
    if (panel.hasClass('show-sidebar')) {
         panel.removeClass('show-sidebar');
         background_layer.removeClass('is-visible');
     } else {
         panel.addClass('show-sidebar');
         background_layer.addClass('is-visible');
     }
}


$(function() {
    //DOM-дерево готово
    // $("p.load").text(
    // "Структура документа загружена и полностью сформирована!");
    // $('p').css('border', '3px solid blue');

    // Например, определим ширину и высоту элемента p:
    // получим значения сразу нескольких CSS свойств
    // var cssProperties = $('p').css(['width','height']);
    // console.log(cssProperties);

    // Например, установить всем элементам a цвет = red:
    // $("a").css("color", "red");

    // var newCSS = {
    //     'color':'green',
    //     'font-size':'16px'
    // };
    
    // $('p').css(newCSS);
    // Например, увеличить отступ сверху, слева и справа 
    // для элементов p на 10px:
    // $('p').css({"padding-left": "+=10","padding-right":"+=10", "padding-top": "+=10"});

    // установим всем элементам span, у которых цвет шрифта не равен green, CSS свойство color, равное red.

    // $('span').css('color', function(index, value) {
    //     if (value!='rgb(0, 255, 0)') {
    //         return 'red';
    //     }
    // });

    // $('span').css('display', function(index, value) {
    //     if (value!='block') {
    //         return 'block';
    //     }

    // });

    // const cart_trigger = $('#cart-trigger');
    // console.log(cart_trigger, "It's Cart Trogger");
    // Object [ a#cart-trigger ] It's Cart Trogger

    // $('#cart-trigger').click(function(){
    //     console.log("jQuery Click : It's Cart Trigger");
    // });

    // $('#cart-trigger').on('click', function(){
    //     console.log("jQuery Event on: It's Cart Trigger");
    // });

    // $("#cart-trigger").on('click', function () {
    //     $("#cart-sidebar").addClass('show-sidebar');
    // });
   
    // $("#cart-sidebar .remove").on('click', function () {
    //     $("#cart-sidebar").removeClass('show-sidebar');
    // });


    // $("#cart-trigger").on('click', function () {
    //     toggle_panel($('#cart-sidebar'), $('#shadow-layer'));
    // });
   
    // $("#cart-sidebar .remove").on('click', function () {
    //     toggle_panel($('#cart-sidebar'), $('#shadow-layer'));
    // });

    // var hamburgerToggle = $('.fa-bars');

    // hamburgerToggle.on('click', function (e) {
    //     e.preventDefault();

    //     $('.nav-menu').toggleClass('active');
    // });

    // let buyNow = $('.buy-now');

    // buyNow.on('click', function () {
    //     $('.product .product-name').css('display','none');
    //     $('.product .icon').css('display','none');
    //     $('.product .buy-now').css('display','none');
    //     $('.product .product-detail').css('display','block');
    //     $('.product-menu').css('top','40%');
    // });

    // $(".buy-now").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name')
    //         .css('display', 'none');
    //         $(e.target).parents('.product').find('.icon').css('display', 'none');
    //         $(e.target).parents('.product').find('.buy-now').css('display','none');
    //         $(e.target).parents('.product').find(' .product-detail').css('display', 'block');
    //         $(e.target).parents('.product-menu').css('top', '40%');
    //     });
    // });

    // let cancel = $('.cancel');
    // cancel.on('click', function () {
    //     $('.product .product-name').css('display','block');
    //     $('.product .icon').css('display','block');
    //     $('.product .buy-now').css('display','block');
    //     $('.product .product-detail').css('display','none');
    //     $('.product-menu').css('top','80%');
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


    // let addToCart = $('.add-to-cart');
    // addToCart.on('click', function () {
    //     var y = 180;
    //     $('.product-wrapper').css('transform', 'rotateY(' + y + 'deg)');
    //     $('.product-back').addClass('back-is-visible');
    // });

    // $(".add-to-cart").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         var y = 180;   
    //         $(e.target).parents('.product-wrapper')
    //         .css('transform', 'rotateY(' + y + 'deg)');
    //         $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
    //     });
    // });

});


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