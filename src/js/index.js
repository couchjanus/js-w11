import $ from "jquery";
// import data from './data';
import {
    toggle_panel,
    buyCancel,
    vanil_buyCancel,
    vanila_toggle_panel,
    makeProductItem,
    make$ProductItem,
    saveCart,
    showCart,
    getCartData
} from './lib';

window.$ = window.jQuery = $;


var data = [];

// var url = 'https://api.myjson.com/bins/zrs3y';

var url = 'http://localhost:3000/catalog';

$(function () {

    $.ajax({
        url: url,
        method: 'GET'
    }).then(
        function (json_data) {
            for (var i in json_data) {
                data.push(json_data[i]);
            } 
    
    // fetch(url).then((response) => response.json())
    //    .then((data) => {
    
            var shoppingCart = [];

            if (localStorage.shoppingCart) {
                shoppingCart = JSON.parse(localStorage.shoppingCart);
            }


            // Контент шаблона

            // const $productTemplate = $($('#productItem').html());

            const $productTemplate = document.getElementById("productItem").content;

            data.forEach(function (item) {
                document.querySelector('.grid-container').append(document.importNode(makeProductItem($productTemplate, item), true));
            });

            $("#cart-trigger").on('click', function () {
                showCart(shoppingCart);
                toggle_panel($('#cart-sidebar'), $('#shadow-layer'));
            });

            $("#cart-sidebar .remove").on('click', function () {
                toggle_panel($('#cart-sidebar'), $('#shadow-layer'));
            });

            $('.fa-bars').on('click', function (e) {
                e.preventDefault();
                $('.nav-menu').toggleClass('active');
            });


            $(".buy-now").each(function (index, element) {
                $(element).on('click', function (e) {
                    buyCancel(e.target, true);
                });
            });

            $(".cancel").each(function (index, element) {
                $(element).on('click', function (e) {
                    buyCancel(e.target, false);
                });
            });

            // 
            const $template = $($('#cartItem').html());

            $(".add-to-cart").each(function (index, element) {
                $(element).on('click', function (e) {
                    // Поиск элемента с заданным номером
                    var imgToDrag = $(e.target).parents('.product').find("img").eq(0);

                    if (imgToDrag) {
                        var imgClone = imgToDrag.clone()
                            .offset({
                                top: imgToDrag.offset().top,
                                left: imgToDrag.offset().left
                            })
                            .css({
                                'opacity': '0.5',
                                'position': 'absolute',
                                'height': '150px',
                                'width': '150px',
                                'z-index': '100'
                            })
                            .appendTo($('body'))
                            .animate({
                                'top': $('#cart-trigger').offset().top + 10,
                                'left': $('#cart-trigger').offset().left + 10,
                                'width': 75,
                                'height': 75
                            }, 1000);

                        imgClone.animate({
                            'width': 0,
                            'height': 0
                        }, function () {
                            $(this).detach()
                        });
                    }

                    var y = 180;
                    $(e.target).parents('.product-wrapper')
                        .css('transform', 'rotateY(' + y + 'deg)');
                    $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');
                    $(e.target).parents('.product-wrapper').delay(3000).queue(function () {
                        $(this).css({
                            'transform': 'rotateY(0deg)'
                        }).dequeue();
                        $(e.target).parents('.product').find('p').slideDown();
                        $(e.target).parents('.product').find('.product-menu').css('top', '80%');
                        $(e.target).parents('.product').find('.product-detail').toggle();
                        $(e.target).parents('.product').find('.buy-now').toggle();
                        $(e.target).parents('.product').find('.icon').toggle();
                    });

                    let id = $(this).parents('.product-menu').attr("productId");

                    let quantity = $(this).parents(".product-menu").find(".quantity").val();

                    for (let i in shoppingCart) {
                        if (shoppingCart[i].Id == id) {
                            shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(quantity);
                            saveCart(shoppingCart);
                            return;
                        }
                    }

                    let price = $(this).parents(".product-menu").find(".product-price").text();
                    let name = $(this).parents(".product").children(".product-name").text();
                    let picture = $(this).parents(".product").find("img").attr('src');


                    let item = {
                        Id: id,
                        Product: name,
                        Price: price,
                        Quantity: quantity,
                        Picture: picture
                    };

                    shoppingCart.push(item);
                    saveCart(shoppingCart);
                });

            });

            $('body').on('click', '.cart .clear-cart', function () {
                localStorage.removeItem('shoppingCart');
                $(".cart-items").empty();
                shoppingCart = [];

            });

            $('body').on('click', '.cart-items .item-remove', function () {
                let index = $(this).parent().attr("id");
                shoppingCart.splice(shoppingCart.indexOf(shoppingCart.find(x => x.Id === index)), 1);
                $(this).parents('li').remove();
                saveCart(shoppingCart);
            });

            $(".minus").click(function (e) {
                var val = parseInt($(e.target).next().attr('value'));
                $(this).next().attr('value', val - 1);
            });

            $(".plus").click(function (e) {
                var val = parseInt($(e.target).prev().attr('value'));
                $(this).prev().attr('value', val + 1);
            });

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

});


// Vanila JS

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    // Контент шаблона
    // const $productTemplate = document.getElementById("productItem").content;

    // data.forEach(function (item) {
    //     document.querySelector('.grid-container').append(document.importNode(makeProductItem($productTemplate, item), true));
    // });

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

    // const buyNow = document.querySelectorAll('.buy-now');
    // for (let element of buyNow) {
    //     element.addEventListener('click', function (e) {
    //         vanil_buyCancel(e.target, true);
    //     });
    // }

    // Array.from(document.querySelectorAll('.buy-now')).forEach((element) => {
    //     element.addEventListener('click', (e) => {
    //         vanil_buyCancel(e.target, true);
    //     });
    // });

    // var cancel = document.getElementsByClassName('cancel');
    // for (let i = 0; i < cancel.length; i++) {
    //     cancel[i].addEventListener('click', function (e) {
    //         vanil_buyCancel(e.target, false);
    //     });
    // }

    // Add product to Cart

    // var addToCart = document.getElementsByClassName('add-to-cart');

    // Clone template
    // const template = document.getElementById("cartItem").content;

    // for (let i = 0; i < addToCart.length; i++) {

    //     addToCart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

    //         template.querySelector("span.item-quantities").textContent = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity")[0].getAttribute('value');

    //         template.querySelector("span.item-name").textContent = ' ' + this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent;

    //         template.querySelector('.item-prices').textContent = this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent;

    //         document.querySelector('.cart-items').append(document.importNode(template, true));
    //     });

    // }

    // const plus = document.querySelectorAll('.plus');

    // for (let element of plus) {
    //     element.addEventListener('click', (e) => {
    //         let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
    //         e.target.previousElementSibling.setAttribute('value', val + 1);
    //     });
    // }

    // const minus = document.querySelectorAll('.minus');

    // for (let element of minus) {
    //     element.addEventListener('click', (e) => {
    //         let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
    //         e.target.nextElementSibling.setAttribute('value', val - 1);
    //     });
    // }
}