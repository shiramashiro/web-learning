class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say(content: string): void {
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes();
    console.log(`[${time}]: ${content}`);
  }
}

let person = new Person("小明", 12);
person.say("hello world！");
