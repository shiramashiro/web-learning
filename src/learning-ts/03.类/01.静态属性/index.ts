class Cart {
  static company: string = "SR公司";

  private _code: number;
  private _type: string;

  constructor(code: number, type: string) {
    this._code = code;
    this._type = type;
  }

  get code(): number {
    return this._code;
  }

  get type(): string {
    return this._type;
  }

  set code(code: number) {
    this._code = code;
  }

  set type(type: string) {
    this._type = type;
  }
}

let car = new Cart(100000, "小型");
console.log(Cart.company);
