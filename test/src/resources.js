'use strict';

const validInputs = [
  ['', '', ''],
  ['f', 'Zg==', 'Zg'],
  ['fo', 'Zm8=', 'Zm8'],
  ['foo', 'Zm9v', 'Zm9v'],
  ['foob', 'Zm9vYg==', 'Zm9vYg'],
  ['fooba', 'Zm9vYmE=', 'Zm9vYmE'],
  ['foobar', 'Zm9vYmFy', 'Zm9vYmFy'],
  ["\u0000", 'AA==', 'AA'],
  ["\u000f", 'Dw==', 'Dw'],
  ["\u00ff", 'w78=', 'w78'],
  ["\u0fff", '4L+/', '4L-_'],
  ["\uffff", '77+/', '77-_']
];

const invalidInputs = [
  'f',
  'fooba',
  'Zg===',
  '4L+/',
  '77+/'
];

module.exports = {
  validInputs,
  invalidInputs
}