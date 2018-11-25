// import './../sass/styles.scss';

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
    let val2 = isTrue ? 'block' : 'none' ;
    let val3 = isTrue ? '40%' : '80%' ;

    $(target).parents('.product').find('.product-name')
    .css('display', val1);
    $(target).parents('.product').find('.icon').css('display', val1);
    $(target).parents('.product').find('.buy-now').css('display',val1);
    $(target).parents('.product').find(' .product-detail').css('display', val2);
    $(target).parents('.product-menu').css('top', val3);
}

function vanil_buyCancel(target, isTrue) {
    let val1 = isTrue ? 'none' : 'block';
    let val2 = isTrue ? 'block' : 'none' ;
    let val3 = isTrue ? '40%' : '80%' ;

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

$(function() {

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


    
    $(".add-to-cart").each(function(index, element){
        $(element).on('click', function (e) {
            var y = 180;   
            $(e.target).parents('.product-wrapper')
            .css('transform', 'rotateY(' + y + 'deg)');
            $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
        });
    });

});


// 


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

//     var addToCart = document.getElementsByClassName('add-to-cart');

//     for (let i = 0; i < addToCart.length; i++) {

//         addToCart[i].addEventListener('click', function (e) {
//             var y = 180;
//             e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
//             e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

//         });
//     }

}