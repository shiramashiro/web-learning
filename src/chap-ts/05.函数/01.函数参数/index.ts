/**
 * 函数参数列表可选时加上?，也可以设置默认值。
 */

function func1(firstName: string, lastName?: string): string {
  return firstName + lastName;
}

function func2(firstName: string, lastName: string = "Not lastName"): string {
  return firstName + lastName;
}