var n = 100

let n1 = 200

var fun1 = function () {
  // 函数内部定义的无法访问
  n = 250
  var n2 = 300
}

var fun2 = function () {
  // 相当于全局定义的变量
  n3 = 300
}
