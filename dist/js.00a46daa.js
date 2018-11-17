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
// strings
var srt1 = 'this is my string',
    srt2 = 'my second string',
    srt3 = "my name is chris"; // numbers

var num1 = 10,
    num2 = 500,
    num3 = 3.14; // booleans (truthy / falsy)

var b1 = true;
b12 = false; // specials

var sp1 = undefined,
    sp2 = null,
    sp3 = NaN; // ======================
// declaring variables

var myVariable;
myVariable = 'something';
console.log(myVariable);
var thing = 'first';
var newThing = 'third'; // objects

var user = {
  name: 'Chris',
  username: 'chrisoncode'
}; // arrays 

var users = ['chris', 'nick', 'holly'];
var luckyNumbers = [1, 43, 54, 132];
var whatever = ['chris', 1, 'holly'];
var superUsers = [{
  name: 'chris'
}, {
  name: 'nick'
}, {
  name: 'holly'
}];
console.groupCollapsed("superUsers");
console.log(superUsers[2].name);
var otherThing = {
  name: 'chris'
};
console.log(otherThing.name);
otherThing.name = 'holly';
console.log(otherThing.name);
console.groupEnd(); // JavaScript Operators

var a = 10;
var b = 3;
var c = 15;
var d = '5';
var e = 'my name';
var f = 'is chris';
console.group('Addition');
console.log(a + b); // 13

console.log(a + d); // 105

console.log(e + ' ' + f);
console.log(e += ' is the batman');
console.groupEnd();
console.group('Multiplication');
console.log(a * 3); // 30

console.log(a * b); // 30

console.log(b * c); // 45

console.groupEnd();
a++;
b--;
--b;
c += a;
console.group('Incrementing');
console.log(a); // 11    

console.log(b); // 1

console.log(c); // 25

console.groupEnd(); // Оператор группировки ( ) контролирует порядок выполнения в выражениях.

a = 1;
b = 2;
c = 3;
console.log(a + b * c); // 7 обычный порядок

console.log(a + b * c); // 7
// теперь поменяем порядок сложение до умножения

console.log((a + b) * c); // 9
// что эквивалентно следующему

console.log(a * c + b * c); // 9
// JavaScript Booleans

var original = 'chris';
var clone = 'CHRIS';
console.groupCollapsed('String');
console.log(original == 'chris'); // true

console.log(original == clone); // false

console.log(original == clone.toLowerCase()); // true

console.groupEnd();
var num11 = 10;
var num22 = '10';
console.groupCollapsed('Numbers');
console.log(num11 == num22); // true 

console.log(num11 === num22); // false

console.log(num11 != num22); // false

console.log(num11 !== num22); // true

console.groupEnd();
var what; // undefined

var things = null;
console.groupCollapsed('Booleans');
console.log(Boolean(what)); // false

console.log(Boolean(things)); // false

console.log(Boolean(num11)); // true

console.log(Boolean(num22)); // true

console.log(Boolean({})); // true

console.log(Boolean([])); // true

console.groupEnd();
var firstArr = [1, 2, 3];
var secondArr = [1, 2, 3];
var firstObj = {
  color: 'red'
};
var secondObj = {
  color: 'red'
};
console.groupCollapsed('Objects and Arrays');
console.log(firstArr === secondArr);
console.log(firstObj === secondObj);
console.groupEnd();
console.group('And Or');
console.log(Boolean('blah') && Boolean('thing')); // true

console.log(Boolean('blah') && Boolean('')); // false

console.log(Boolean('blah') || Boolean('')); // true

console.log(Boolean('') || Boolean('')); // false

console.groupEnd(); // JavaScript If-Else

var theNumber; // var theNumber = prompt("Выбери число ", "");

if (!isNaN(theNumber)) {
  console.log("квадратный корень из " + theNumber * theNumber);
} // var theNumber = Number(prompt("Выбери число", ""));
// if (!isNaN(theNumber)){
//     alert("квадратный корень из " + theNumber * theNumber);
// }
// else{
//     alert("ты ввёл не число");
// }
// var num = Number(prompt("Выбери число", "0"));
// if (num < 10){
//     alert("No");
// }else if (num < 100){
//     alert("Ok");
// }else{
//     alert("Nop");
// }

/*
const name     = prompt('What is your name?');
const username = 'chrisoncode';
*/
// if
// if (name == 'nick' || name == 'chris') {
//   alert('Hello!');
// } else if (name == 'holly') {
//   console.log('this is holly');
// } else {
//   console.log('not nick');
// }
//   JavaScript while


var result = 1;
var counter = 0; // while loop

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result); // → 1024
// do while loop

do {
  var name = prompt("Who are you?");
} while (!name);

console.log(name); // JavaScript For Loop
// for loop

for (var number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

var result = 1;

for (var counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}

console.log(result); // → 1024
// Выход из цикла

for (var current = 20;; current++) {
  if (current % 7 == 0) break;
}

console.log(current); // → 21

for (var number = 0; number <= 12; number += 2) {
  console.log(number);
} // Для counter += 1 и counter -= 1 есть ещё более короткие записи: 
// counter++ and counter--.
// JavaScript Switch


switch (prompt("Как погодка?")) {
  case "дождь":
    console.log("Не забудь зонт.");
    break;

  case "снег":
    console.log("Блин, мы в России!");
    break;

  case "солнечно":
    console.log("Оденься полегче.");

  case "облачно":
    console.log("Иди гуляй.");
    break;

  default:
    console.log("Непонятная погода!");
    break;
} //   JavaScript Function


function showMessage() {
  alert('Привет всем присутствующим!');
} // showMessage();


function showThisMessage(msg) {
  alert(msg);
} // showThisMessage( 'Привет всем присутствующим!');


function showMessageHi() {
  var message = 'Привет!'; // локальная переменная

  alert(message);
} // showMessageHi(); // 'Привет!'


var userName = 'Jhon';

function showMessageUser() {
  var message = 'Привет ' + userName;
  alert(message);
} // showMessageUser(); // Привет Jhon


function showMessageFrom(from, text) {
  if (text === undefined) {
    text = 'текст не передан';
  }

  alert(from + ": " + text);
}

function showTextMessage(from, text) {
  text = text || 'текст не передан';
} // Директива return


function calcD(a, b, c) {
  return b * b - 4 * a * c;
}

var test = calcD(-4, 2, 1); // alert(test); // 20

function squared(a) {
  return a * a;
}

var newSquared = squared(3);
console.log(newSquared);

function saySomething() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'goodbye';
  var whisper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (whisper) {
    console.log("%c".concat(message), 'font-size:5px');
  } else {
    console.log(message);
  }
}

saySomething('hello', true);
saySomething('my name is chris', true);
saySomething(); // function squared(a) {
//   return a * a;
// }
// const newSquared = squared(3);
// console.log(newSquared);

var squarEd = function squarEd(a) {
  return a * a;
};

var otherSquared = squarEd;
punch();

function punch() {
  console.log('punch here!');
}

var squarED = function squarED(a) {
  return a * a;
};

var otherSquarED = squarED;
punch(); // calc

var foo, bar;

b2.onclick = function () {
  if (foo === undefined) {
    res.value = b2.value;
    foo = parseInt(b2.value);
  } else {
    res.value += b2.value;
    bar = parseInt(b2.value);
  }
};

b3.onclick = function () {
  if (foo === undefined) {
    res.value = b3.value;
    foo = parseInt(b3.value);
  } else {
    res.value += b3.value;
    bar = parseInt(b3.value);
  }
}; // b3.onclick = function(){
//     res.value += b3.value;
//     bar = parseInt(b3.value);
// }


plus.onclick = function () {
  res.value += plus.value;
};

equal.onclick = function () {
  res.value = foo + bar;
  foo = undefined;
  bar = undefined;
};
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37025" + '/');

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