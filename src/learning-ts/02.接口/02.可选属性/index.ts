/**
 * 接口-可选属性：可选属性让实现接口的类可以不用实现接口中定义的属性，而是选择性实现。
 */
interface IUser2 {
  name: string;
  age?: number;
}

function getUser2(userObj: IUser2): IUser2 {
  return userObj;
}

console.log(
  getUser2({
    name: "小明",
  })
);
