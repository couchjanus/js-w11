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

    $('.btnGoSuc').on('click', function () {

        //Создаём запрос
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/',
            success: function () {
                $('#console').html('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');

            }
        });
    });


    $('.btnGoJson').on('click', function(){
        //Создаём запрос
        var url = 'https://api.myjson.com/bins/zrs3y';
    
        $.ajax({
            url: url,
            method: 'GET'
        }).then(
            function(json_data) {
            console.log(json_data);
        });
    
      });

    $('.btnGoDat').on('click', function () {

        //Создаём запрос
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/',

            beforeSend: function () {
                $('#console').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
            },

            error: function(xhr){
                $('#console').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ xhr.statusText +'</div>');
                $("#printResult").html("<b>Прибыли данные: "+xhr.responseText+"</b>");
            },

            dataFilter: function (data, dataType)
         {

          var text = $('#console').html();
            $('#console').html(text + '<div class="alert alert-warning" role="alert">3: Идет data Filter...</div>');

          if (dataType == "json") {
                    var filteredData = $.parseJSON(data);
                    return JSON.stringify(filteredData);
                } else {
                   return data;
                }
        },

            success: function (data) {
                $('#console').html('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
                $("#printResult").html("<b>Прибыли данные: " + data + "</b>");
                console.log(data);
            },
            complete: function() {
                var text = $('#console').html(); 
                $('#console').html(text + '<div class="alert alert-primary" role="alert">5: AJAX завершен!</div>');
             }
        });

    });


    function CreateRequest() {
        var httpRequest = false;

        if (window.XMLHttpRequest) {
            //Gecko-совместимые браузеры, Safari, Konqueror
            httpRequest = new XMLHttpRequest();
            httpRequest.overrideMimeType('text/xml');
        } else if (window.ActiveXObject) {
            //Internet explorer
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (CatchException) {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
        }

        if (!httpRequest) {
            console.log("Невозможно создать XMLHttpRequest");
        }

        return httpRequest;
    }
    // Пользователь нажимает на ссылку 
    // "Запустить скрипт" в браузере; 


    document.querySelector('.btnGo').addEventListener('click', function () {

        //Создаём запрос

        var request = CreateRequest();

        var url = 'http://jsonplaceholder.typicode.com/';

        //Проверяем существование запроса

        if (!request) {
            console.log("Невозможно создать XMLHttpRequest");
        } else {
            console.log("Ура! Мы создали XMLHttpRequest. Что с ним делать?");

            request.onreadystatechange = function () {
                switch (request.readyState) {
                    case 1:
                        print_console('<div class="alert alert-success" role="alert">1: Подготовка к отправке...</div>');
                        break
                    case 2:
                        print_console('<div class="alert alert-primary" role="alert">2: Отправлен...</div>');
                        break
                    case 3:
                        print_console('<div class="alert alert-warning" role="alert">3: Идет обмен...</div>');
                        break
                    case 4:
                        {
                            try {
                                if (request.status == 200) {
                                    print_console('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
                                    document.getElementById("printResult").innerHTML = "<b>" + request.responseText + "</b>";
                                } else if (request.status == 404) {
                                    print_console('<div class="alert alert-danger" role="alert">Ошибка: запрашиваемый скрипт не найден!</div>');
                                } else {
                                    print_console('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: ' + request.status + '</div>');
                                }

                            } catch (e) {
                                print_console('<div class="alert alert-danger" role="alert">Произошло исключение:  ' + e.description + '</div>');
                            }
                            break
                        }
                }
            }
            request.open('GET', url, true);
            this.style.display = 'none';
            request.send('');
        }
    })

    function print_console(text) {
        document.getElementById("console").innerHTML += text;
    }

});