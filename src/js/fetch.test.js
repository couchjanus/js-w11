import '../scss/main.scss';
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

// export for others scripts to use
window.$ = window.jQuery = $;

$(function () {

    $("#reset").click(function () {
        document.location.reload(true);
    });

document.querySelector('.btn02').addEventListener('click', function() {
   
    // Создаём запрос
    var request = createRequest();
    var url = 'http://headers.jsontest.com/';
    
    //Проверяем существование запроса
    
    if (!request)
    {
        console.log("Невозможно создать XMLHttpRequest");
    } else {
        
        console.log("Ура! Мы создали XMLHttpRequest. Что с ним делать?");
    
        request.onreadystatechange = function() {
            switch (request.readyState) {
                case 1: 
                    printConsole('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>', '.console02'); 
                    break;
                case 2: 
                    printConsole('<div class="alert alert-primary" role="alert">2: Отправлен...</div>', '.console02'); 
                    break;
                case 3: 
                    printConsole('<div class="alert alert-warning" role="alert">3: Идет обмен...</div>', '.console02'); 
                    break;
                case 4:
                    if(request.status==200) {
                        printConsole('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>', '.console02');
                        document.querySelector(".result02").innerHTML = "<b>"+request.responseText+"</b>";
                    } else if(request.status==404) {
                            printConsole('<div class="alert alert-danger" role="alert">Ошибка: запрашиваемый скрипт не найден!</div>', '.console02');
                    } else {
                        printConsole('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ request.status +'</div>', '.console02');
                    }
                    break;
            }
        };     
        request.open ('GET', url, true);
        this.style.display = 'none';
        request.send ('');
    }
});


//

$('.btn03').on('click', function(){

    //Создаём запрос
    $.ajax({
      url: 'http://headers.jsontest.com/',
      success: function(){
        $('.console03').html('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
      }
    });

});

//

$('.btn04').on('click', function(){

    //Создаём запрос
    $.ajax({
      url: 'http://headers.jsontest.com/',
      success: function(data){
        $('.console04').html('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
        $(".result04").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
        console.log(data);
      }
    });

});


//

$('.btn05').on('click', function(){

    //Создаём запрос
    $.ajax({
      url: 'http://headers.jsontest.com/',
      beforeSend: function() {
        $('.console05').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
      },
      success: function(data){
        var text = $('.console05').html();
        $('.console05').html(text+'<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
        $(".result05").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
        console.log(data);
      }
    });

});


//

$('.btn06').on('click', function(){

    //Создаём запрос
    $.ajax({
      url: 'http://headers.jsontest.com/',
      beforeSend: function() {
        $('.console06').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
      },
      error: function(xhr){
            $('.console06').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ xhr.statusText +'</div>');
            $(".result06").html("<b>Прибыли данные: "+xhr.responseText+"</b>");
      },
      success: function(data){
        var text = $('.console06').html();
        $('.console06').html(text+'<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
        $(".result06").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
        console.log(data);
      }
    });

});

//

$('.btn07').on('click', function(){

    //Создаём запрос
    $.ajax({
      url: 'http://headers.jsontest.com/',
      beforeSend: function() {
        $('.console07').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
      },
      error: function(xhr){
            $('.console07').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ xhr.statusText +'</div>');
            $(".result07").html("<b>Прибыли данные: "+xhr.responseText+"</b>");
      },
      success: function(data){
        var text = $('.console07').html();
        $('.console07').html(text+'<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
        $(".result07").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
        console.log(data);
      },
      complete: function() {
         var text = $('.console07').html(); 
         $('.console07').html(text + '<div class="alert alert-primary" role="alert">5: AJAX завершен!</div>');
      }
    });

});

//
$('.btn08').on('click', function(){

    $.ajax({
        url: 'http://headers.jsontest.com/',
        dataType: "json",
        method: 'GET',
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Accept","application/json");
            
            $('.console08').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
        },
        error: function(xhr){
            $('.console08').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ xhr.statusText +'</div>');
            $(".result08").html("<b>Ошибка: "+xhr.responseText+"</b>");
        },
        
        dataFilter: function (data, dataType)
         {

          var text = $('.console08').html();
            $('.console08').html(text + '<div class="alert alert-warning" role="alert">3: Идет data Filter...</div>');

          if (dataType == "json") {
                    var filteredData = $.parseJSON(data);
                    return JSON.stringify(filteredData);
                } else {
                   return data;
                }
        },
        success: function(data){
            var text = $('.console08').html();
            $('.console08').html(text + '<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
            $(".result08").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
            console.log(data);
        },
        complete: function() {
           var text = $('.console08').html(); 
           $('.console08').html(text + '<div class="alert alert-primary" role="alert">5: AJAX завершен!</div>');
        }
     });
});

//

$('.btn09').on('click', function(){

    //Создаём запрос
    var url = 'https://api.myjson.com/bins/zrs3y';

    $.ajax({
        url: url,
        method: 'GET'
    }).then(
        function(json_data) {
        console.log(json_data);
        $(".result09").html("<h2>Прибыли данные:</h2>");

        for(var i in json_data){
            $(".result09").html($(".result09").html()+JSON.stringify(json_data[i]));
        }
    });

});


$('.btn10').on('click', function(){

// fetch запрос будет выглядеть так:

fetch('https://api.myjson.com/bins/zrs3y')  
  .then(  
    function(response) {  
        // Первым делом мы проверяем статус ответа и проверяем, успешно ли выполняется запрос (ожидаем 200 статус). 

        if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }
      // Если всё хорошо, то парсим ответ как JSON.
      // Examine the text in the response  
      response.json().then(function(data) {  
        // Ответом fetch() является Stream-объект. Это означает, что в результате вызова метода json() мы получим Promise, т.к. чтение из подобного объекта является асинхронным.
        console.log(data);  

      })
      .then(function() { 
        console.log(response.headers.get('Content-Type'));  
        console.log(response.headers.get('Date'));
        console.log(response.status);  
        console.log(response.statusText);  
        console.log(response.type);  
        console.log(response.url);  
    
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
});


$('.btn11').on('click', function(){

// Один из нюансов в fetch, что мы не получаем сразу в response данные, а Stream-обьект. Это значит, что мы должны наш response парсить, для того, чтобы получить данные.

fetch('http://localhost:3000/catalog')
  .then(function (response) {
    // Если мы хотим отловить обычные ошибки, их нужно обрабатывать в первом блоке .then. И так как мы работаем с промисами, то мы можем их резолвить и реджектить когда хотим

    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('data', data);
    $(".result11").html("<h2>Прибыли данные:</h2>"+data);
  })
  // добавили catch, но с спецификации fetch сказано, что туда попадают только network ошибки. То есть связанные с сетью. Например, когда запрос отваливается по таймауту.
  .catch(function (error) {
    console.log('error', error);
  });

});

$('.btn12').on('click', function(){

var status = function (response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
};

var json = function (response) {
    return response.json();
};
      
fetch('http://localhost:3000/catalog')
    .then(status)
    .then(json)
    .then(function (data) {
        console.log('data', data);
        $(".result12").html("<h2>Прибыли данные:</h2>"+data);
    })
    .catch(function (error) {
        console.log('error', error)
    });
});


});