require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],2:[function(require,module,exports){
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

},{"isarray":1}],"ganaCompile":[function(require,module,exports){
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

},{"isobject":2}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pc29iamVjdC9pbmRleC5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKiFcbiAqIGlzb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pc29iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIGlzQXJyYXkodmFsKSA9PT0gZmFsc2U7XG59O1xuIiwiLyohXG4gKiBnYW5hLWNvbXBpbGUgPGh0dHBzOi8vZ2l0aHViLmNvbS90dW5uY2tvQ29yZS9nYW5hLWNvbXBpbGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE2IENoYXJsaWtlIE1pa2UgUmVhZ2VudCA8QHR1bm5ja29Db3JlPiAoaHR0cDovL3d3dy50dW5uY2tvY29yZS50aylcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0JylcblxuLyoqXG4gKiA+IENvbXBpbGVzIGEgYHRlbXBsYXRlYCB0byBhIGZ1bmN0aW9uLCB3aGljaFxuICogYWNjZXB0cyBgbG9jYWxzYCBvYmplY3QgdG8gcG9wdWxhdGUgdGhlIHRlbXBsYXRlLlxuICpcbiAqICoqRXhhbXBsZSoqXG4gKlxuICogYGBganNcbiAqIHZhciBnYW5hQ29tcGlsZSA9IHJlcXVpcmUoJ2dhbmEtY29tcGlsZScpXG4gKlxuICogdmFyIHRlbXBsYXRlID0gJ1dlbGNvbWUgaGVyZSwgJHt1Y2ZpcnN0KG5hbWUpfSEgQW5kIGhhdmUgZnVuISdcbiAqIHZhciBsb2NhbHMgPSB7XG4gKiAgIG5hbWU6ICdjaGFybGlrZScsXG4gKiAgIHVjZmlyc3Q6IGZ1bmN0aW9uIHVjZmlyc3QgKHZhbCkge1xuICogICAgIHJldHVybiB2YWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSlcbiAqICAgfVxuICogfVxuICpcbiAqIHZhciBmbiA9IGdhbmFDb21waWxlKHRlbXBsYXRlKVxuICogdmFyIHN0ciA9IGZuKGxvY2FscylcbiAqXG4gKiBjb25zb2xlLmxvZyhzdHIpXG4gKiAvLyA9PiAnV2VsY29tZSBoZXJlLCBDaGFybGlrZSEgQW5kIGhhdmUgZnVuISdcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHRlbXBsYXRlYCBzdHJpbmcgdG8gY29tcGlsZSB0byBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gbGlrZSBgY29tcGlsZUZuKGxvY2FscylgLCB3aGVyZSBgbG9jYWxzYCBtdXN0IGJlIGBvYmplY3RgXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIGB0ZW1wbGF0ZWAgbm90IGEgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIGBsb2NhbHNgIG5vdCBhbiBvYmplY3RcbiAqIEB0aHJvd3Mge1JlZmVyZW5jZUVycm9yfSBpZiBrZXkgbm90IGV4aXN0cyBpbiBgbG9jYWxzYCBvYmplY3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnYW5hQ29tcGlsZSAodGVtcGxhdGUpIHtcbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnYW5hQ29tcGlsZTogZXhwZWN0IGB0ZW1wbGF0ZWAgdG8gYmUgYSBzdHJpbmcnKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBpbGVGbiAobG9jYWxzKSB7XG4gICAgaWYgKCFpc09iamVjdChsb2NhbHMpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnYW5hQ29tcGlsZTogZXhwZWN0IGBsb2NhbHNgIHRvIGJlIGFuIG9iamVjdCcpXG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBbXVxuICAgIHZhciB2YWxzID0gW11cblxuICAgIGZvciAodmFyIGtleSBpbiBsb2NhbHMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICB2YWxzLnB1c2gobG9jYWxzW2tleV0pXG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICB2YXIgZm4gPSBuZXcgRnVuY3Rpb24oa2V5cywgJ3JldHVybiBgJyArIHRlbXBsYXRlICsgJ2AnKVxuICAgIHJldHVybiBmbi5hcHBseShsb2NhbHMsIHZhbHMpXG4gIH1cbn1cbiJdfQ==
