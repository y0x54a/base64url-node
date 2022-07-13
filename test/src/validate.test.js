'use strict';

const {validate} = require('../../src');
const {validInputs, invalidInputs} = require('./resources');

describe('validate', () => {
  test('valid input strings', () => {
    for (const input of validInputs) {
      const result = validate(input[2]);
      expect(result).toBe(true);
    }
  });

  test('invalid input strings', () => {
    for (const input of invalidInputs) {
      const result = validate(input);
      expect(result).toBe(false);
    }
  });
});