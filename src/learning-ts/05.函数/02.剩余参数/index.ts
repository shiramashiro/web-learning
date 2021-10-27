/**
 * 剩余参数可以让传入一个或多个参数，参数个数多少由调用者决定。
 */

function func1(arg1: string, ...args: string[]): void {}

func1("a", "a", "b");
func1("a", "a", "b", "c", "d");
