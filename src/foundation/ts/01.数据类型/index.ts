// 布尔
let flag: boolean = false; // 布尔值

// 字符串
let hello: string = 'hello world!'; // 字符串

// 数字
let num1: number = 10; // 整形
let num2: number = 10.1; // 浮点数

// 数组
let arr1: number[] = [1, 2, 3, 4]; // 整形数组
let arr2: string[] = ['1', 'hello world', '2', 'typescript', 'javascript']; // 字符串数组

// 元组，表示一个已知数量和已知类型的数组
let tuple1: [number, string, number[], string[]] = [1, '2', [1, 2, 3], ['1', '2', '3']];
let tuple2: [number, [string, boolean], string] = [1, ['2', true], '3'];

// 枚举
// 1. 为枚举类重新标记编号
enum COLOR1 {
    RED = 1,
    GREEN = 2,
    BLUE
}
let selectedColor1: string = COLOR1[3];
console.log(selectedColor1);

// 2. 默认情况下的枚举类元素是从0开始的
enum COLOR2 {
    RED,
    GREEN,
    BLUE
}
let selectedColor2: string = COLOR2[0];
console.log(selectedColor2);

// 3. 枚举类的元素是string类型
console.log(typeof selectedColor2);

// 4. 枚举名和属性访问表达式获取的元素，类型为number，或者可以指定类型为枚举名
let selectedColor3: number = COLOR2.RED;
// let selectedColor3: COLOR2 = COLOR2.RED;
console.log(selectedColor3);

// void，无返回值
function getUser(): void {
    let val = 'hello world!';
    console.log(val);
}

// void，指定给变量，只能赋值undefined
let voidVal: void = undefined;

// never 是一个没有终点的类型
function getUser2(): never {
    while (true) {
        console.log('forever!!!');
    }
}

// 或者是一个永远抛出异常的函数
function getUser3() {
    throw new Error('error!!!');
}

// 变量为never时，不可以赋值
let neverVal: never;
