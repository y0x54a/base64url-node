'use strict';

const {decode} = require('../../src');
const {validInputs, invalidInputs} = require('./resources');

describe('decode', () => {
  test('valid input strings', () => {
    for (const input of validInputs) {
      const result = decode(input[2]);
      expect(result).toBe(input[0]);
    }
  });

  test('invalid input strings', () => {
    for (const base64url of invalidInputs) {
      const test = () => decode(base64url);
      expect(test).toThrow(TypeError);
    }
  });
});