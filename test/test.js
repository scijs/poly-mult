var mult = require("../mult.js")

require("tape")("multiply", function(t) {

  var a = [1, 0, 0, 2]
  var b = [1, 3]
  var c = mult(a, b)
  t.equals(c.join(","), [1, 3, 0, 2, 6].join(","))
  
  var ar = [1, 0]
  var ai = [0, 1]
  var br = [2]
  var bi = [3]
  var cc = mult([ar, ai], [br, bi])
  
  t.equals(cc[0].join(","), [2, -3].join(","))
  t.equals(cc[1].join(","), [3, 2].join(","))
  
  t.end()
})
