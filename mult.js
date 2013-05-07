"use strict"

function multiplyReal(a, b) {
  var n = a.length, m = b.length
  if(n === 0 || m === 0) {
    return []
  }
  var p = m + n - 1
  var c = new Array(p)
  var i, j
  for(i=0; i<p; ++i) {
    c[i] = 0.0
  }
  for(i=0; i<n; ++i) {
    for(j=0; j<m; ++j) {
      c[i + j] += a[i] * b[j]
    }
  }
  return c
}

function multiplyComplex(ar, ai, br, bi) {
  var n = ar.length, m = br.length
  if(n === 0 || m === 0) {
    return [ [], [] ]
  }
  var p = m + n - 1
  var cr = new Array(p)
  var ci = new Array(p)
  var i, j
  for(i=0; i<p; ++i) {
    cr[i] = ci[i] = 0.0
  }
  for(i=0; i<n; ++i) {
    for(j=0; j<m; ++j) {
      cr[i + j] += ar[i] * br[j] - ai[i] * bi[j]
      ci[i + j] += ar[i] * bi[j] + ai[i] * br[j]
    }
  }
  return [ cr, ci ]
}

function multiplyBrutal(a, b) {
  if(a.length === 0 || b.length === 0) {
    return []
  }
  if(a[0].length) {
    return multiplyComplex(a[0], a[1], b[0], b[1])
  }
  return multiplyReal(a, b)
}

module.exports = multiplyBrutal
