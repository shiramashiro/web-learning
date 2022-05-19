/**
 * 抽象类是对普通类的进一步抽象，将普通类之间分离出来的公共属性放置到抽象类中，即可以表达普通类中不可表述的部分。
 *
 * 因为不同领域，汽车有不同的用途，所以我们把汽车分成跑车、家用车、商务车等车种，但是不管怎么发展，它们都离不开汽车这一概念。
 * 普通类基于抽象类，拥有属于自己的属性，抽象类是对普通类的进一步抽象，即把普通类A与普通类B的共同属性抽离到抽象类中。
 */
abstract class Car {
  private engineType: string;
  private company: string;

  constructor(company: string, engineType: string) {
    this.company = company;
    this.engineType = engineType;
  }
}

class SportsCar extends Car {
  static carType: string = "跑车";

  private stabilizersType: string;

  constructor(company: string, engineType: string, stabilizersType: string) {
    super(company, engineType);
    this.stabilizersType = stabilizersType;
  }
}

class FamilyCar extends Car {
  static carType: string = "家用车";

  private model: string; // suv,mpv,两厢轿车,三厢轿车

  constructor(company: string, engineType: string, model: string) {
    super(company, engineType);
    this.model = model;
  }
}

let xierbei = new SportsCar("西尔贝", "西尔贝引擎", "玻璃钢尾翼");
let bujiadi = new SportsCar("布加迪", "布加迪引擎", "铝合金尾翼");
let beijingxiandia = new FamilyCar("北京现代", "家用车引擎", "SUV");
let dazhong = new FamilyCar("大众", "家用车引擎", "MPV");
