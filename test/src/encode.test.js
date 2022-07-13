'use strict';

const {encode} = require('../../src');
const {validInputs} = require('./resources');

describe('encode', () => {
  test('valid inputs string', () => {
    for (const input of validInputs) {
      const result = encode(input[0]);
      expect(result).toBe(input[2]);
    }
  });

  test('valid inputs buffers', () => {
    for (const input of validInputs) {
      const buffer = Buffer.from(input[0], 'utf8');
      const result = encode(buffer);
      expect(result).toBe(input[2]);
    }
  });
});