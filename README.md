poly-mult
=========
Brute force polynomial multiplication.

[![build status](https://secure.travis-ci.org/scijs/poly-mult.png)](http://travis-ci.org/scijs/poly-mult)

# Example
## Real polynomials
Compute `(1 + 2*x) * (1 + x^2)`:
```javascript
var mult = require("poly-mult")
console.log(mult([1, 2], [1, 0, 1]))
```
### Output
```
[1, 2, 1, 2]
```
## Complex polynomials
Compute `(i + (1+3i)*x) * (2 + 5i * x^2)`
```javascript
var mult = require("poly-mult")
console.log(mult( [[0, 1], [1, 3]],
                  [[2, 0, 0], [0, 0, 5]] ))
```
### Output
```
[[0, 2, 5, 15],
 [2, 6, 0, 5]]
```

# Install
Install using [npm](https://www.npmjs.com/):

    npm install poly-mult

# API
#### `require("poly-mult")(a, b)`

Multiplies a pair of polynomials together. This works basically the same as [poly-mult-fft](https://npmjs.org/package/poly-mult-fft), except it is slower but more accurate.

# License
(c) 2013 Mikola Lysenko. MIT License