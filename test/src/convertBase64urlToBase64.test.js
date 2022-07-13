'use strict';

const {convertBase64urlToBase64} = require('../../src');
const {validInputs, invalidInputs} = require('./resources');

describe('convertBase64urlToBase64', () => {
  test('valid input strings', () => {
    for (const input of validInputs) {
      const result = convertBase64urlToBase64(input[2]);
      expect(result).toBe(input[1]);
    }
  });

  test('invalid input strings', () => {
    for (const input of invalidInputs) {
      const test = () => convertBase64urlToBase64(input);
      expect(test).toThrow(TypeError);
    }
  });
});