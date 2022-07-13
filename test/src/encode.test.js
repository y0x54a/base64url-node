'use strict';

const {encode} = require('../../src');
const {validInputs} = require('./resources');

describe('encode', () => {
  test('valid input strings', () => {
    for (const input of validInputs) {
      const result = encode(input[0]);
      expect(result).toBe(input[2]);
    }
  });

  test('valid input strings with encoding', () => {
    for (const input of validInputs) {
      const hex = Buffer.from(input[0], 'utf8').toString('hex');
      const result = encode(hex, 'hex');
      expect(result).toBe(input[2]);
    }
  });

  test('valid input buffers', () => {
    for (const input of validInputs) {
      const buffer = Buffer.from(input[0], 'utf8');
      const result = encode(buffer);
      expect(result).toBe(input[2]);
    }
  });
});