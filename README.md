# base64url-node
[![NPM Version](https://img.shields.io/npm/v/@y0x54a/base64url-node)](https://www.npmjs.com/package/@y0x54a/base64url-node)
[![Build Status](https://github.com/y0x54a/base64url-node/workflows/ci/badge.svg?branch=main)](https://github.com/y0x54a/base64url-node/actions)
[![codecov](https://codecov.io/gh/y0x54a/base64url-node/branch/main/graph/badge.svg?token=MRL3DZXJU4)](https://codecov.io/gh/y0x54a/base64url-node)

## Installing
```sh
npm i @y0x54a/base64url-node
```

## Example
```js
const base64url = require('@y0x54a/base64url-node');
```

```js
base64url.encode('foo bar baz');
// Zm9vIGJhciBiYXo
```

```js
base64url.decode('Zm9vIGJhciBiYXo');
// foo bar baz
```

```js
base64url.encode('666f6f206261722062617a', 'hex');
// Zm9vIGJhciBiYXo
```

```js
base64url.decode('Zm9vIGJhciBiYXo', 'hex');
// 666f6f206261722062617a
```

```js
base64url.validate('Zm9vIGJhciBiYXo=');
// true
```

```js
base64url.validate('Zm9vIGJhciBiYXo===');
// false
```

```js
base64url.convertBase64ToBase64url('77+/');
// 77-_
```

```js
base64url.convertBase64urlToBase64('77-_');
// 77+/
```

## API

- `encode(value: string | Buffer, encoding: string = 'utf8'): string`


- `decode(base64url: string, encoding: string = 'utf8'): string`


- `validate(base64url: string): boolean`


- `convertBase64ToBase64url(base64: string): string`


- `convertBase64urlToBase64(base64url: string): string`