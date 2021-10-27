/**
 * 接口-函数类型：接口也可以指定函数的参数列表类型和函数返回值类型。
 */
interface getUserFunc {
  (name: string, age: number, sex: string): string;
}

let getUser4: getUserFunc = function (name: string, age: number, sex: string) {
  return `${name}-${age}-${sex}`;
};

console.log(getUser4("xiaohong", 12, "男"));
