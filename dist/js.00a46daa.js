// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/index.js":[function(require,module,exports) {
// import './../sass/styles.scss';
// import _ from 'lodash';
function Product(name, price, picture) {
  this.name = name;
  this.price = price;
  this.picture = picture;
}

var myEagle = new Product("Eagle", 999, "Eagle.png");
var myNissan = new Product("Nissan", 888, "Nissan");
var myMazda = new Product("Mazda", 777, "Mazda"); // Имена свойств объекта

var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();
myObj.type = "Dot syntax";
myObj["date created"] = "String with space";
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] = "Object";
myObj[""] = "Even an empty string"; // console.log(myObj);

myEagle.name = "Dot syntax";
myEagle["picture"] = "String with space"; // console.log(myEagle);

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
} // console.log(showProps(myNissan, "myCar"));


function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }

  return result;
} // console.log(listAllProperties(myNissan));
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


var square = function square(number) {
  return number * number;
};

var x = square(4); // x получает значение 16
// console.log(x);
// Имя функции может быть присвоено для вызова самой себя внутри самой функции

var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
}; // console.log(factorial(3));


function Truck(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.engine = function () {
    console.log("I turn the engine, but the engine doesn't turn");
  };
} // var beatUpTruck = new Truck("Eagle", "Talon TSi", 1993);
// beatUpTruck.engine();
// console.log('Because it is model: ', beatUpTruck.model, beatUpTruck.make);
// Код события onload будет выполнен при полной загрузке страницы.


function messageShow() {
  console.log('Документ и все ресурсы загружены!');
  load1.innerHTML = 'Документ и все ресурсы загружены!';
} // window.onload = function () {
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
},{}],"../../../.nvm/versions/node/v11.0.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46571" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.nvm/versions/node/v11.0.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map