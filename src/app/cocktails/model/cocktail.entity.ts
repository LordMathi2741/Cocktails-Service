export class Cocktail {
  private _name: any;
  private _instructions: any;
  private _date: any;
  private _glass: any;

  constructor(name: any, instructions: any, date: any, glass: any) {
    this._name = name;
    this._instructions = instructions;
    this._date = date;
    this._glass = glass;
  }

  get name() {
    return this._name;
  }

  get instructions() {
    return this._instructions;
  }

  get date() {
    return this._date;
  }

  get glass() {
    return this._glass;
  }
}
