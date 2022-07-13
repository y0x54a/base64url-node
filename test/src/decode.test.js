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

  test('valid input strings with encoding', () => {
    for (const input of validInputs) {
      const hex = Buffer.from(input[0], 'utf8').toString('hex');
      const result = decode(input[2], 'hex');
      expect(result).toBe(hex);
    }
  });

  test('invalid input strings', () => {
    for (const base64url of invalidInputs) {
      const test = () => decode(base64url);
      expect(test).toThrow(TypeError);
    }
  });
});