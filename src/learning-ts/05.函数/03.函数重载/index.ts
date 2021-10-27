/**
 * 函数的重载
 */

function getUser(condition: string): string;
function getUser(condition: number): number;

function getUser(condition: any): any {
  if (typeof condition === "string") {
    return "返回的是参数为string类型的函数";
  } else if (typeof condition === "number") {
    return "返回的是参数为number类型的函数";
  }
}

console.log(getUser("10"));
console.log(getUser(10));
