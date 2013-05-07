poly-mult
=========
Brute force polynomial multiplication.

Example
=======

```javascript
var mult = require("poly-mult")

//Compute:
//
//    (1 + 2*x) * (1 + x^2)
//
console.log(mult([1, 2], [1, 0, 1]))
//Prints:
//
//  [1, 2, 1, 2]
//

//Also supports complex numbers.  For example, compute:
//
//    (i + (1+3i)*x) * (2 + 5i * x^2)
//
console.log(mult( [[0, 1], [1, 3]],
                  [[2, 0, 0], [0, 0, 5]] ))
//Prints:
//
//    [[0, 2, 5, 15],
//     [2, 6, 0, 5]]
//
```

Install
=======

    npm install poly-mult
    
## `require("poly-mult")(a, b)`

Multiplies a pair of polynomials together.  This works basically the same as [poly-mult-fft](https://npmjs.org/package/poly-mult-fft), except it is slower but more accurate.

# Credits
(c) 2013 Mikola Lysenko. MIT License