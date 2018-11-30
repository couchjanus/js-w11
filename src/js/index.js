import $ from "jquery";

// export for others scripts to use

window.$ = window.jQuery = $;

function toggle_panel(panel, background_layer) {

    if (panel.hasClass('show-sidebar')) {
        panel.removeClass('show-sidebar');
        background_layer.removeClass('is-visible');
    } else {
        panel.addClass('show-sidebar');
        background_layer.addClass('is-visible');
    }
}


function buyCancel(target, isTrue) {
    let val1 = isTrue ? 'none' : 'block';
    let val2 = isTrue ? 'block' : 'none';
    let val3 = isTrue ? '40%' : '80%';

    $(target).parents('.product').find('.product-name')
        .css('display', val1);
    $(target).parents('.product').find('.icon').css('display', val1);
    $(target).parents('.product').find('.buy-now').css('display', val1);
    $(target).parents('.product').find(' .product-detail').css('display', val2);
    $(target).parents('.product-menu').css('top', val3);
}

function vanil_buyCancel(target, isTrue) {
    let val1 = isTrue ? 'none' : 'block';
    let val2 = isTrue ? 'block' : 'none';
    let val3 = isTrue ? '40%' : '80%';

    target.parentNode.parentNode.querySelector('.product .product-name').style.display = val1;
    target.parentNode.parentNode.querySelector('.product .icon').style.display = val1;
    target.parentNode.parentNode.querySelector('.product .buy-now').style.display = val1;
    target.parentNode.parentNode.querySelector('.product .product-detail').style.display = val2;
    target.parentNode.parentNode.querySelector('.product-menu').style.top = val3;
}

function vanila_toggle_panel(panel, background_layer) {

    if (panel.classList.contains('show-sidebar')) {
        panel.classList.remove('show-sidebar');
        background_layer.classList.remove('is-visible');
    } else {
        panel.classList.add('show-sidebar');
        background_layer.classList.add('is-visible');
    }
}

$(function () {

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

    // 
    const $template = $($('#cartItem').html());

    $(".add-to-cart").each(function(index, element){
        $(element).on('click', function (e) {
            var y = 180;   
            $(e.target).parents('.product-wrapper')
            .css('transform', 'rotateY(' + y + 'deg)');
            $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
       
            // 
            // var template = $($('#cartItem').html());
            
            //    
            let template = $template.clone();

            template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());

            template.find(".item-quantities").after(' '+$(this).parents(".product").children(".product-name").text()); 

            template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());

            $(".cart-items").append(template);
        });

    });

    // $(".minus").click(function(e) {
    //     var val = parseInt($(e.target).next().attr('value'));
    //     $(this).next().attr('value', val-1);
    // });

    // $(".plus").click(function(e) {
    //         var val = parseInt($(e.target).prev().attr('value'));
    //         $(this).prev().attr('value', val+1);
    // });

    $(".product-detail").each(function(index, element){
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

                x[slideIndex-1].style.display = "block";  
            }

            // showSlide(slideIndex);

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

    // var addToCart = document.getElementsByClassName('add-to-cart');

    // Clone template
    const template = document.getElementById("cartItem").content;

    for (let i = 0; i < addToCart.length; i++) {

        addToCart[i].addEventListener('click', function (e) {
            var y = 180;
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

            // ====================================
            // :scope selector demo 

            console.log(this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity")[0].getAttribute('value'));

            console.log(this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent);

            console.log(this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent);

            // ==============================================
            // Проверяем поддерживает ли браузер тег <template>
            // проверив наличие аттрибута content у элемента template
            if ('content' in document.createElement('template')) {
                let template = document.querySelector('#cartItem').content;

                // let quantity = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity");
                // template.querySelector("span.item-quantities").textContent = quantity[0].getAttribute('value');

                template.querySelector("span.item-quantities").textContent = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity")[0].getAttribute('value');

                template.querySelector("span.item-name").textContent = ' '+this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent; 

                template.querySelector('.item-prices').textContent = this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent;

                document.querySelector('.cart-items').append(template);

                document.querySelector('.cart-items').append(document.importNode(template, true));

                // document.querySelector('.cart-items').append(template.cloneNode(true));

                } else {
                // необходимо найти другой способ добавить element т.к.
                // тег <template> не поддерживатся браузером
                }

        });

    }

    let plus = document.getElementsByClassName('plus');
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function (e) {
            let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
            e.target.previousElementSibling.setAttribute('value', val + 1);
        });
    }

    let minus = document.getElementsByClassName('minus');
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', function (e) {
            let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
            e.target.nextElementSibling.setAttribute('value', val - 1);
        });
    }

}