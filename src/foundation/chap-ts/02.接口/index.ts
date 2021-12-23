/**
 * 接口：用于限定函数的参数列表类型和返回值类型；也用于限定类属性的类型
 */

interface IUser1 {
    name: string;
    age: number;
}

function getUser1(userObj: IUser1): IUser1 {
    return userObj;
}

console.log(
    getUser1({
        name: '小明',
        age: 11
    })
);
