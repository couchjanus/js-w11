export function toggle_panel(panel, background_layer) {

    if (panel.hasClass('show-sidebar')) {
        panel.removeClass('show-sidebar');
        background_layer.removeClass('is-visible');
    } else {
        panel.addClass('show-sidebar');
        background_layer.addClass('is-visible');
    }
}

export function buyCancel(target, isTrue) {
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

export function vanil_buyCancel(target, isTrue) {
    let val1 = isTrue ? 'none' : 'block';
    let val2 = isTrue ? 'block' : 'none';
    let val3 = isTrue ? '40%' : '80%';

    target.parentNode.parentNode.querySelector('.product .product-name').style.display = val1;
    target.parentNode.parentNode.querySelector('.product .icon').style.display = val1;
    target.parentNode.parentNode.querySelector('.product .buy-now').style.display = val1;
    target.parentNode.parentNode.querySelector('.product .product-detail').style.display = val2;
    target.parentNode.parentNode.querySelector('.product-menu').style.top = val3;
}

export function vanila_toggle_panel(panel, background_layer) {

    if (panel.classList.contains('show-sidebar')) {
        panel.classList.remove('show-sidebar');
        background_layer.classList.remove('is-visible');
    } else {
        panel.classList.add('show-sidebar');
        background_layer.classList.add('is-visible');
    }
}

// export function makeProductItem($template, product){
//     $template.querySelector('.product-menu').setAttribute('productId', product["id"]);
//     $template.querySelector('.product-name').textContent = product.name;
//     $template.querySelector('img').setAttribute('src', product.picture);
//     $template.querySelector('.product-price').textContent = product["price"];
//     $template.querySelector('.product-description').textContent = product["description"];
//     return $template;
// }

export function makeProductItem($template, product){
    const keys = Object.keys(product);
    // console.log(key + ': ' + product[key]);

    keys.forEach(function(key) {
        let selector = '.product-'+ key;
        switch(key){
            case 'id':
                $template.querySelector(selector).setAttribute('productId', product[key]);
                break;
            case 'picture':
                $template.querySelector(selector).setAttribute('src', product[key]);
                break;
            default:
                $template.querySelector(selector).textContent = product[key];
        }
    });
    return $template;
}

// export function make$ProductItem($template, product){
//     $template.find('.product-menu').attr('productId', product["id"]);
//     $template.find('.product-name').text(product.name);
//     $template.find('img').attr('src', product.picture);
//     $template.find('.product-price').text(product["price"]);
//     $template.find('.product-description').text( product["description"]);
//     return $template;
// }

export function make$ProductItem($template, product){
    const keys = Object.keys(product);
    keys.forEach(function(key) {
        let selector = '.product-'+ key;
        switch(key){
            case 'id':
                $template.find(selector).attr('productId', product[key]);
                break;
            case 'picture':
                $template.find(selector).attr('src', product[key]);
                break;
            default:
                $template.find(selector).text(product[key]);
        }
    });
    return $template;
}


