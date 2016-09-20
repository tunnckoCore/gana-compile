(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ganaCompile = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * gana-compile <https://github.com/tunnckoCore/gana-compile>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */
'use strict'

var isObject = require('isobject')

/**
 * > Compiles a `template` to a function, which
 * accepts `locals` object to populate the template.
 *
 * **Example**
 *
 * ```js
 * var ganaCompile = require('gana-compile')
 *
 * var template = 'Welcome here, ${ucfirst(name)}! And have fun!'
 * var locals = {
 *   name: 'charlike',
 *   ucfirst: function ucfirst (val) {
 *     return val.charAt(0).toUpperCase() + val.slice(1)
 *   }
 * }
 *
 * var fn = ganaCompile(template)
 * var str = fn(locals)
 *
 * console.log(str)
 * // => 'Welcome here, Charlike! And have fun!'
 * ```
 *
 * @param  {String} `template` string to compile to a function
 * @return {Function} like `compileFn(locals)`, where `locals` must be `object`
 * @throws {TypeError} if `template` not a string
 * @throws {TypeError} if `locals` not an object
 * @throws {ReferenceError} if key not exists in `locals` object
 * @api public
 */

module.exports = function ganaCompile (template) {
  if (typeof template !== 'string') {
    throw new TypeError('ganaCompile: expect `template` to be a string')
  }

  return function compileFn (locals) {
    if (!isObject(locals)) {
      throw new TypeError('ganaCompile: expect `locals` to be an object')
    }

    var keys = []
    var vals = []

    for (var key in locals) {
      keys.push(key)
      vals.push(locals[key])
    }

    /* eslint-disable no-new-func */
    var fn = new Function(keys, 'return `' + template + '`')
    return fn.apply(locals, vals)
  }
}

},{"isobject":3}],2:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],3:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isArray = require('isarray');

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};

},{"isarray":2}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2lzb2JqZWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxuICogZ2FuYS1jb21waWxlIDxodHRwczovL2dpdGh1Yi5jb20vdHVubmNrb0NvcmUvZ2FuYS1jb21waWxlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNiBDaGFybGlrZSBNaWtlIFJlYWdlbnQgPEB0dW5uY2tvQ29yZT4gKGh0dHA6Ly93d3cudHVubmNrb2NvcmUudGspXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpc29iamVjdCcpXG5cbi8qKlxuICogPiBDb21waWxlcyBhIGB0ZW1wbGF0ZWAgdG8gYSBmdW5jdGlvbiwgd2hpY2hcbiAqIGFjY2VwdHMgYGxvY2Fsc2Agb2JqZWN0IHRvIHBvcHVsYXRlIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiAqKkV4YW1wbGUqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgZ2FuYUNvbXBpbGUgPSByZXF1aXJlKCdnYW5hLWNvbXBpbGUnKVxuICpcbiAqIHZhciB0ZW1wbGF0ZSA9ICdXZWxjb21lIGhlcmUsICR7dWNmaXJzdChuYW1lKX0hIEFuZCBoYXZlIGZ1biEnXG4gKiB2YXIgbG9jYWxzID0ge1xuICogICBuYW1lOiAnY2hhcmxpa2UnLFxuICogICB1Y2ZpcnN0OiBmdW5jdGlvbiB1Y2ZpcnN0ICh2YWwpIHtcbiAqICAgICByZXR1cm4gdmFsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpXG4gKiAgIH1cbiAqIH1cbiAqXG4gKiB2YXIgZm4gPSBnYW5hQ29tcGlsZSh0ZW1wbGF0ZSlcbiAqIHZhciBzdHIgPSBmbihsb2NhbHMpXG4gKlxuICogY29uc29sZS5sb2coc3RyKVxuICogLy8gPT4gJ1dlbGNvbWUgaGVyZSwgQ2hhcmxpa2UhIEFuZCBoYXZlIGZ1biEnXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGB0ZW1wbGF0ZWAgc3RyaW5nIHRvIGNvbXBpbGUgdG8gYSBmdW5jdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259IGxpa2UgYGNvbXBpbGVGbihsb2NhbHMpYCwgd2hlcmUgYGxvY2Fsc2AgbXVzdCBiZSBgb2JqZWN0YFxuICogQHRocm93cyB7VHlwZUVycm9yfSBpZiBgdGVtcGxhdGVgIG5vdCBhIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSBpZiBgbG9jYWxzYCBub3QgYW4gb2JqZWN0XG4gKiBAdGhyb3dzIHtSZWZlcmVuY2VFcnJvcn0gaWYga2V5IG5vdCBleGlzdHMgaW4gYGxvY2Fsc2Agb2JqZWN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2FuYUNvbXBpbGUgKHRlbXBsYXRlKSB7XG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZ2FuYUNvbXBpbGU6IGV4cGVjdCBgdGVtcGxhdGVgIHRvIGJlIGEgc3RyaW5nJylcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21waWxlRm4gKGxvY2Fscykge1xuICAgIGlmICghaXNPYmplY3QobG9jYWxzKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZ2FuYUNvbXBpbGU6IGV4cGVjdCBgbG9jYWxzYCB0byBiZSBhbiBvYmplY3QnKVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gW11cbiAgICB2YXIgdmFscyA9IFtdXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gbG9jYWxzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgdmFscy5wdXNoKGxvY2Fsc1trZXldKVxuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgdmFyIGZuID0gbmV3IEZ1bmN0aW9uKGtleXMsICdyZXR1cm4gYCcgKyB0ZW1wbGF0ZSArICdgJylcbiAgICByZXR1cm4gZm4uYXBwbHkobG9jYWxzLCB2YWxzKVxuICB9XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qIVxuICogaXNvYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgaXNBcnJheSh2YWwpID09PSBmYWxzZTtcbn07XG4iXX0=
