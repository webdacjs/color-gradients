# color-gradients

Handy module to create hex or rgb color gradients for an array of values based on the the color limits values defined in the parameters.

## Install

You can install with [npm]:

```sh
$ npm install --save color-gradients
```
## Usage

The module requires three parameters: An array with the values to get color gradients from, the hex color for the minimum value and the hex color for the maximum value

```js

const {getGradients} = require('color-gradients')
getGradients({values: [0, 50, 100], minColor: '#000', maxColor: '#FFF'})
// Returns
// [ { label: 0, value: 0, color: '#000000' },
//   { label: 1, value: 50, color: '#7f7f7f' },
//   { label: 2, value: 100, color: '#ffffff' } ]
```

The minColor and maxColor are optional parameters. If you don't provide them, the module will use its defaults red to green:

```js

const {getGradients} = require('color-gradients')
getGradients({values: [0, 50, 100]});

// Returns
// [ { label: 0, value: 0, color: '#ed0e49' },
//   { label: 0, value: 50, color: '#89522c' },
//   { label: 0, value: 100, color: '#25960f' } ]

```

It's even possible to pass an Object with values to the color gradients function (with the caveat that it will cbe onverted to an array of objects first, and sorted by label):

```js

const {getGradients} = require('color-gradients')
getGradients({values: {a: 100, b: 200, c: 300, bb: 50}})

// Returns
// [ { label: 'a', value: 100, color: '#ab3a35' },
//   { label: 'b', value: 200, color: '#676922' },
//   { label: 'bb', value: 50, color: '#cb253f' },
//   { label: 'c', value: 300, color: '#25960f' } ]

```

### Running tests

You can run the tests with JEST and check the functionality of this module using:

```sh
$ npm install && npm test
```

### License

Copyright © 2019, [Juan Convers](https://juanconvers.com).
Released under the [MIT License](LICENSE).
