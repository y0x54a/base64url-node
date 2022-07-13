'use strict';

const UTF8 = 'utf8';
const BASE64 = 'base64';
const testRegexp = /^[A-Za-z0-9\-\_]*\={0,2}$/;

/**
 * https://datatracker.ietf.org/doc/html/rfc7515#appendix-C
 * 
 * @param {(string|Buffer)} value 
 * @param {string} [encoding]
 * @returns {string}
 */
function encode(value, encoding = UTF8){
  const buffer = Buffer.isBuffer(value) ? value : Buffer.from(value, encoding);
  return convertBase64ToBase64url(buffer.toString(BASE64));
}

/**
 * @param {string} base64url 
 * @param {string} [encoding]
 * @returns {string}
 */
function decode(base64url, encoding = UTF8){
  const base64 = convertBase64urlToBase64(base64url);
  return Buffer.from(base64, BASE64).toString(encoding);
}

/**
 * @param {string} base64url 
 * @returns {string}
 */
function validate(base64url){
  return base64url.length % 4 !== 1 && testRegexp.test(base64url);
}

/**
 * @param {string} base64 
 * @returns {string}
 */
function convertBase64ToBase64url(base64){
  return base64.split('=', 1)[0].replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @param {string} base64url
 * @throws {TypeError}
 * @returns {string}
 */
function convertBase64urlToBase64(base64url){
  const padding = base64url.length % 4;
  if (padding === 1 || !testRegexp.test(base64url)) {
    throw new TypeError('Illegal base64url string')
  } else if (padding === 2) {
    base64url += '==';
  } else if (padding === 3) {
    base64url += '=';
  }
  return base64url.replace(/\-/g, '+').replace(/\_/g, '/');
}

module.exports = {
  encode,
  decode,
  validate,
  convertBase64ToBase64url,
  convertBase64urlToBase64
};