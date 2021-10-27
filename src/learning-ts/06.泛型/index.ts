/**
 * 泛型：使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
 */

// 不使用泛型，对于下面的函数，参数以及返回值类型都是不可以改变的。

function getUserInit(arg: number): number {
  return arg;
}

// 使用泛型，比如使用T来制定一个类型，这个时候参数的类型以及返回值类型都是可以根据不同情况来改变的，非常灵活。
function getUser<T>(arg: T): T {
  return arg;
}

// 对泛型方法，我们可以使函数的返回值以及参数类型可以是string\number\boolean。
getUser<string>("hello world!");
getUser<boolean>(true);

function getUsers<T>(args: T[]): T[] {
  return args;
}

function getUsers2<T>(args: Array<T>): Array<T> {
  return args;
}
