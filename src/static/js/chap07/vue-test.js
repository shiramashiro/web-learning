// 获取 Object 的原型方法，由于 toString 的原型对象是 Function，所以可以使 toRawType 函数继承 toString。
// value 为 JS 中的原始数据类型，把这些原始数据类型（this）传递给 Function.prototype.call(value)，最后利用 Array.prototype.slice(8,-1) 分割不需要的字符。
// 通过toRawType函数可以得到该 value 的原始数据类型。
var _toString = Object.prototype.toString

function toRawType(value) {
    return _toString.call(value)
}

let result = toRawType({})

console.dir(result)
