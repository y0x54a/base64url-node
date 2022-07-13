'use strict';

const {convertBase64ToBase64url} = require('../../src');
const {validInputs} = require('./resources');

describe('convertBase64ToBase64url', () => {
  test('valid input strings', () => {
    for (const input of validInputs) {
      const result = convertBase64ToBase64url(input[1]);
      expect(result).toBe(input[2]);
    }
  });
});