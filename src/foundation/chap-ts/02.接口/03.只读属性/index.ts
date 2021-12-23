/**
 * 接口-只读属性：实现了接口中定义的只读属性，一旦赋值就不可以再次更改。
 */
interface IUser3 {
  readonly name: string;
  age: number;
}

let user: IUser3 = {
  name: "小明",
  age: 22,
};

// user.name = "大明"; // 不可以再次更改
