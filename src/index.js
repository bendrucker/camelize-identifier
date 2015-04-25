'use strict'

var camel = require('camelcase')
var reserved = require('reserved')
var format = require('util').format

module.exports = function (name) {
  var identifier = camel(name)
  if (/^_/.test(name) & name.length > 1) {
    identifier = '_' + identifier
  }
  if (~reserved.indexOf(identifier)) {
    throw new Error(format('"%s" is a reserved word', identifier))
  }
  if (!/^[a-zA-Z$_]/.test(name)) {
    throw new Error('Name must begin with a letter, $, or _')
  }
  if (/[^\w$]/.test(identifier)) {
    throw new Error(format('"%s" contains an illegal character and cannot be converted to a valid identifier', name))
  }
  return identifier
}
