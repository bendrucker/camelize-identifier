'use strict'

var identifier = require('../')
var test = require('tape')

test(function (t) {
  t.equal(identifier('foo-bar'), 'fooBar')
  t.equal(identifier('foo_bar'), 'fooBar')
  t.equal(identifier('foo1'), 'foo1')
  t.equal(identifier('_foo'), '_foo')
  t.equal(identifier('_foo_bar'), '_fooBar')
  t.equal(identifier('$'), '$', 'jquery')
  t.equal(identifier('_'), '_', 'lodash')
  function when (name) {
    return function () {
      identifier(name)
    }
  }
  t.throws(when('try'), /"try" is a reserved word/)
  t.throws(when('0numbers'), /begin with a letter/)
  t.throws(when('foo!'), /illegal character/)
  t.end()
})
