/*!
 * gana-compile <https://github.com/tunnckoCore/gana-compile>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */
'use strict'

var test = require('mukla')
var ganaCompile = require('./index')

/* eslint-disable no-template-curly-in-string */

test('should throw TypeError if `template` not a string', function (done) {
  function fixture () {
    ganaCompile(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /ganaCompile: expect `template` to be a string/)
  done()
})

test('should throw TypeError if `locals` not an object', function (done) {
  function fixture () {
    ganaCompile('foo ${bar} baz')(5555)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /ganaCompile: expect `locals` to be an object/)
  done()
})

test('should throw TypeError if `locals` is an array', function (done) {
  function fixture () {
    ganaCompile('foo, ${0}, ${1} and qux')([
      'bar',
      'baz'
    ])
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /ganaCompile: expect `locals` to be an object/)
  done()
})

test('should throw ReferenceError if not in `locals`', function (done) {
  function fixture () {
    ganaCompile('foo ${bar} baz')({
      name: 'yeah'
    })
  }
  test.throws(fixture, ReferenceError)
  test.throws(fixture, /bar is not defined/)
  done()
})

test('should ganaCompile(template) return compileFn function', function (done) {
  var fn = ganaCompile('foo ${name} bar')
  test.strictEqual(typeof fn, 'function')
  done()
})

test('should compileFn(object) return rendered string', function (done) {
  var res = ganaCompile('welcome here, ${name}!')({ name: 'charlike' })
  test.strictEqual(typeof res, 'string')
  test.strictEqual(res, 'welcome here, charlike!')
  done()
})

test('should also work if `this` is used in template', function (done) {
  var rendered = ganaCompile('that is ${this.feel} template engine')({
    feel: 'awesome'
  })
  test.strictEqual(rendered, 'that is awesome template engine')
  done()
})

test('should access values from an array', function (done) {
  var tpl = 'Values of foo array are: ${foo[0]}, ${foo[1]} and ${foo[2]}'
  var str = ganaCompile(tpl)({
    foo: [
      'bar',
      'baz',
      'qux'
    ]
  })
  var expected = 'Values of foo array are: bar, baz and qux'
  test.strictEqual(str, expected)
  done()
})

test('should work with nesting (access values of nested object)', function (done) {
  var tpl = 'Hello ${author.first} in ${place}! Your last name is ${author.last}'
  var str = ganaCompile(tpl)({
    author: {
      first: 'Charlike',
      last: 'Reagent'
    },
    place: 'our world'
  })
  var expected = 'Hello Charlike in our world! '
  expected += 'Your last name is Reagent'

  test.strictEqual(str, expected)
  done()
})

test('should have support for helpers', function (done) {
  var tpl = 'Hello ${ucfirst(author.name)}, my ${friend}!'
  var str = ganaCompile(tpl)({
    author: {
      name: 'charlike'
    },
    friend: 'nigga',
    ucfirst: function ucfirst (val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  })

  test.strictEqual(str, 'Hello Charlike, my nigga!')
  done()
})

test('should have support for partials', function (done) {
  var homePage = ganaCompile('<h1>${pageName}</h1>')
  var compile = ganaCompile('<p>layout including home</p><p>${home(this)}</p>')
  var str = compile({
    home: homePage,
    pageName: 'Home Page!'
  })

  test.strictEqual(str, '<p>layout including home</p><p><h1>Home Page!</h1></p>')
  done()
})
